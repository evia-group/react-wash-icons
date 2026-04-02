import { readdir, readFile, writeFile, rm, mkdir } from 'fs/promises';
import { XMLParser } from 'fast-xml-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SVG_SOURCE = path.resolve(__dirname, '../svg');
const ICONS_DIR = path.resolve(__dirname, '../src/icons');
const ICON_MAP_PATH = path.resolve(__dirname, '../src/iconMap.ts');

// Attributes to strip from SVG elements (Adobe Illustrator metadata)
const STRIP_ATTRS = new Set([
  'enable-background',
  'xml:space',
  'xmlns',
  'xmlns:xlink',
  'version',
  'id',
  'x',
  'y',
  'width',
  'height',
]);

// Attributes to keep on inner elements (these are valid for geometry)
const KEEP_ON_ROOT_G = new Set(['transform']);

interface ParsedNode {
  ':@'?: Record<string, string>;
  [tag: string]: unknown;
}

function toPascalCase(kebab: string): string {
  return kebab
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

function cleanAttributes(attrs: Record<string, string>): Record<string, string> {
  const cleaned: Record<string, string> = {};
  for (const [key, value] of Object.entries(attrs)) {
    if (!STRIP_ATTRS.has(key)) {
      // Collapse whitespace in attribute values (Adobe Illustrator adds newlines/tabs in path data)
      cleaned[key] = value.replace(/\s+/g, ' ').trim();
    }
  }
  return cleaned;
}

type IconNode = [string, Record<string, string>, IconNode[]?];

function convertNode(node: ParsedNode): IconNode | null {
  // fast-xml-parser with preserveOrder returns objects like { tagName: [...children], ':@': { attrs } }
  const attrs = node[':@'] ? cleanAttributes(node[':@']) : {};
  const tagName = Object.keys(node).find((k) => k !== ':@');
  if (!tagName) return null;

  // Skip text nodes
  if (tagName === '#text') return null;

  const childrenRaw = node[tagName] as ParsedNode[] | undefined;
  const children: IconNode[] = [];
  if (Array.isArray(childrenRaw)) {
    for (const child of childrenRaw) {
      const converted = convertNode(child);
      if (converted) children.push(converted);
    }
  }

  return children.length > 0 ? [tagName, attrs, children] : [tagName, attrs];
}

function serializeIconNode(node: IconNode, indent: number): string {
  const [tag, attrs, children] = node;
  const pad = '  '.repeat(indent);
  const attrsStr = JSON.stringify(attrs);

  if (!children || children.length === 0) {
    return `${pad}['${tag}', ${attrsStr}]`;
  }

  const childrenStr = children.map((c) => serializeIconNode(c, indent + 1)).join(',\n');
  return `${pad}['${tag}', ${attrsStr}, [\n${childrenStr},\n${pad}]]`;
}

async function main() {
  // Clean and recreate icons directory
  await rm(ICONS_DIR, { recursive: true, force: true });
  await mkdir(ICONS_DIR, { recursive: true });

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    preserveOrder: true,
    trimValues: true,
  });

  const files = (await readdir(SVG_SOURCE)).filter((f) => f.endsWith('.svg')).sort();
  const icons: Array<{ kebabName: string; pascalName: string; filename: string }> = [];

  for (const file of files) {
    const svgContent = await readFile(path.join(SVG_SOURCE, file), 'utf-8');
    const parsed = parser.parse(svgContent) as ParsedNode[];

    // Find the <svg> element (skip xml declaration, doctype, comments)
    const svgNode = parsed.find((n) => 'svg' in n);
    if (!svgNode) {
      console.warn(`Skipping ${file}: no <svg> element found`);
      continue;
    }

    const svgChildren = svgNode['svg'] as ParsedNode[];
    const iconNodes: IconNode[] = [];

    for (const child of svgChildren) {
      const converted = convertNode(child);
      if (converted) iconNodes.push(converted);
    }

    if (iconNodes.length === 0) {
      console.warn(`Skipping ${file}: no renderable content`);
      continue;
    }

    const baseName = file.replace('.svg', '');
    const kebabName = baseName;
    const pascalName = toPascalCase(kebabName);

    const nodesStr = iconNodes.map((n) => serializeIconNode(n, 1)).join(',\n');

    const iconFileContent = `import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
${nodesStr},
];

export const ${pascalName} = createWashIcon('${pascalName}', iconNodes);
`;

    await writeFile(path.join(ICONS_DIR, `${kebabName}.ts`), iconFileContent);
    icons.push({ kebabName, pascalName, filename: kebabName });
  }

  // Generate icons/index.ts barrel
  const barrelLines = icons.map(
    ({ pascalName, filename }) => `export { ${pascalName} } from './${filename}';`,
  );
  await writeFile(path.join(ICONS_DIR, 'index.ts'), barrelLines.join('\n') + '\n');

  // Generate iconMap.ts
  const imports = icons.map(
    ({ pascalName, filename }) => `import { ${pascalName} } from './icons/${filename}';`,
  );
  const mapEntries = icons.map(
    ({ kebabName, pascalName }) => `  '${kebabName}': ${pascalName},`,
  );
  const iconMapContent = `import type { ComponentType } from 'react';
import type { WashIconProps } from './types';
${imports.join('\n')}

export const iconMap: Record<string, ComponentType<WashIconProps>> = {
${mapEntries.join('\n')}
};
`;
  await writeFile(ICON_MAP_PATH, iconMapContent);

  console.log(`Generated ${icons.length} icon components`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
