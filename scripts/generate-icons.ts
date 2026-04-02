import { readdir, readFile, writeFile, rm, mkdir } from 'fs/promises';
import { XMLParser } from 'fast-xml-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SVG_SOURCE = path.resolve(__dirname, '../svg');
const ICONS_DIR = path.resolve(__dirname, '../src/icons');
const ICON_MAP_PATH = path.resolve(__dirname, '../src/iconMap.ts');

// Attributes to always strip (Adobe Illustrator metadata)
const STRIP_ATTRS = new Set([
  'enable-background',
  'xml:space',
  'xmlns',
  'xmlns:xlink',
  'version',
  'id',
]);

// Attributes to strip only from the root <svg> element
const SVG_ROOT_ATTRS = new Set(['x', 'y', 'width', 'height']);

interface ParsedNode {
  ':@'?: Record<string, string>;

  [tag: string]: unknown;
}

type IconNode = [string, Record<string, string>, IconNode[]?];

function toPascalCase(kebab: string): string {
  return kebab
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

function cleanAttributes(
  attrs: Record<string, string>,
  stripRootAttrs = false,
): Record<string, string> {
  const cleaned: Record<string, string> = {};
  for (const [key, value] of Object.entries(attrs)) {
    if (STRIP_ATTRS.has(key)) continue;
    if (stripRootAttrs && SVG_ROOT_ATTRS.has(key)) continue;
    cleaned[key] = value.replace(/\s+/g, ' ').trim();
  }
  return cleaned;
}

function convertNode(node: ParsedNode): IconNode | null {
  const tagName = Object.keys(node).find((k) => k !== ':@');
  if (!tagName || tagName === '#text') return null;

  const attrs = node[':@'] ? cleanAttributes(node[':@']) : {};
  const childrenRaw = node[tagName] as ParsedNode[] | undefined;
  const children = childrenRaw?.flatMap((child) => {
    const converted = convertNode(child);
    return converted ? [converted] : [];
  });

  return children?.length ? [tagName, attrs, children] : [tagName, attrs];
}

function serializeIconNode(node: IconNode, indent: number): string {
  const [tag, attrs, children] = node;
  const pad = '  '.repeat(indent);
  const attrsStr = JSON.stringify(attrs);

  if (!children?.length) {
    return `${pad}['${tag}', ${attrsStr}]`;
  }

  const childrenStr = children
    .map((c) => serializeIconNode(c, indent + 1))
    .join(',\n');
  return `${pad}['${tag}', ${attrsStr}, [\n${childrenStr},\n${pad}]]`;
}

function parseSvg(
  parser: XMLParser,
  file: string,
  content: string,
): { kebabName: string; pascalName: string; nodes: IconNode[] } | null {
  const parsed = parser.parse(content) as ParsedNode[];
  const svgNode = parsed.find((n) => 'svg' in n);
  if (!svgNode) {
    console.warn(`Skipping ${file}: no <svg> element found`);
    return null;
  }

  const nodes = (svgNode['svg'] as ParsedNode[]).flatMap((child) => {
    const converted = convertNode(child);
    return converted ? [converted] : [];
  });

  if (!nodes.length) {
    console.warn(`Skipping ${file}: no renderable content`);
    return null;
  }

  const kebabName = file.replace('.svg', '');
  return { kebabName, pascalName: toPascalCase(kebabName), nodes };
}

function generateIconFile(pascalName: string, nodes: IconNode[]): string {
  const nodesStr = nodes.map((n) => serializeIconNode(n, 1)).join(',\n');

  const lines = [
    "import { createWashIcon } from '../createWashIcon';",
    "import type { IconNode } from '../types';",
    '',
    'const iconNodes: IconNode[] = [',
    nodesStr + ',',
    '];',
    '',
    `export const ${pascalName} = createWashIcon('${pascalName}', iconNodes);`,
  ];

  return lines.join('\n') + '\n';
}

function generateBarrel(
  icons: { kebabName: string; pascalName: string }[],
): string {
  const lines = icons.map(
    ({ pascalName, kebabName }) =>
      `export { ${pascalName} } from './${kebabName}';`,
  );

  return lines.join('\n') + '\n';
}

function generateIconMap(
  icons: { kebabName: string; pascalName: string }[],
): string {
  const imports = icons.map(
    ({ pascalName, kebabName }) =>
      `import { ${pascalName} } from './icons/${kebabName}';`,
  );
  const entries = icons.map(
    ({ kebabName, pascalName }) => `  '${kebabName}': ${pascalName},`,
  );

  const lines = [
    "import type { ComponentType } from 'react';",
    "import type { WashIconProps } from './types';",
    ...imports,
    '',
    'export const iconMap: Record<string, ComponentType<WashIconProps>> = {',
    ...entries,
    '};',
  ];

  return lines.join('\n') + '\n';
}

async function main() {
  await rm(ICONS_DIR, { recursive: true, force: true });
  await mkdir(ICONS_DIR, { recursive: true });

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    preserveOrder: true,
    trimValues: true,
  });

  const files = (await readdir(SVG_SOURCE))
    .filter((f) => f.endsWith('.svg'))
    .sort();

  const contents = await Promise.all(
    files.map((f) => readFile(path.join(SVG_SOURCE, f), 'utf-8')),
  );

  const icons = files
    .map((file, i) => parseSvg(parser, file, contents[i]))
    .filter((icon): icon is NonNullable<typeof icon> => icon !== null);

  await Promise.all([
    ...icons.map(({ kebabName, pascalName, nodes }) =>
      writeFile(
        path.join(ICONS_DIR, `${kebabName}.ts`),
        generateIconFile(pascalName, nodes),
      ),
    ),
    writeFile(path.join(ICONS_DIR, 'index.ts'), generateBarrel(icons)),
    writeFile(ICON_MAP_PATH, generateIconMap(icons)),
  ]);

  console.log(`Generated ${icons.length} icon components`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
