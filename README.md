# react-wash-icons

A tree-shakeable React icon library with 84 laundry and textile care symbols as SVG components.

## Installation

Install from a [GitHub release](https://github.com/evia-group/react-wash-icons/releases):

```bash
npm install https://github.com/evia-group/react-wash-icons/releases/download/vX.Y.Z/react-wash-icons-X.Y.Z.tgz
```

Replace `X.Y.Z` with the desired version (e.g., `v1.0.0` / `react-wash-icons-1.0.0.tgz`).

## Usage

### Static imports

Import icons directly by name. Unused icons are tree-shaken by your bundler.

```tsx
import { Washing30deg, IroningLow, BleachingNotAllowed } from 'react-wash-icons';

function CareLabel() {
  return (
    <div>
      <Washing30deg size={32} color="black" />
      <IroningLow size={32} />
      <BleachingNotAllowed size={32} className="text-red-500" />
    </div>
  );
}
```

### Dynamic lookup

Use `getIcon()` to render icons by name at runtime — useful when icon names come from an API.

```tsx
import { getIcon } from 'react-wash-icons';

function CareLabels({ iconNames }: { iconNames: string[] }) {
  return (
    <div>
      {iconNames.map((name) => {
        const Icon = getIcon(name);
        return Icon ? <Icon key={name} size={24} /> : null;
      })}
    </div>
  );
}

// Usage
<CareLabels iconNames={['washing-30deg', 'ironing-low', 'bleaching']} />
```

## Props

All icon components accept the following props, plus any standard SVG attribute.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Width and height of the icon |
| `color` | `string` | `currentColor` | Fill color (inherits from parent text color) |
| `className` | `string` | — | CSS class name |

All components forward refs to the underlying `<svg>` element.

## Available Icons

### Washing

`washing` · `washing-30deg` · `washing-30deg-alt` · `washing-30deg-extra-care` · `washing-30deg-extra-care-alt` · `washing-30deg-perm-press` · `washing-30deg-perm-press-alt` · `washing-40deg` · `washing-40deg-alt` · `washing-40deg-extra-care` · `washing-40deg-extra-care-alt` · `washing-40deg-perm-press` · `washing-40deg-perm-press-alt` · `washing-50deg` · `washing-50deg-alt` · `washing-50deg-perm-press` · `washing-50deg-perm-press-alt` · `washing-60deg` · `washing-60deg-alt` · `washing-60deg-perm-press` · `washing-60deg-perm-press-alt` · `washing-70deg` · `washing-70deg-alt` · `washing-90deg` · `washing-95deg-alt` · `washing-95deg-perm-press` · `washing-95deg-perm-press-alt` · `washing-hand` · `washing-hand-30deg` · `washing-hand-40deg` · `washing-not-allowed`

### Drying

`drying` · `drying-drip-dry` · `drying-drip-dry-shade` · `drying-dry-shade` · `drying-flat-dry` · `drying-flat-dry-shade` · `drying-line-dry` · `drying-line-dry-shade` · `drying-not-allowed` · `drying-tumble` · `drying-tumble-high-heat` · `drying-tumble-low-heat` · `drying-tumble-low-heat-extra-care` · `drying-tumble-low-heat-perm-press` · `drying-tumble-medium-heat` · `drying-tumble-medium-heat-perm-press` · `drying-tumble-no-heat` · `drying-tumble-not-allowed`

### Ironing

`ironing` · `ironing-high` · `ironing-low` · `ironing-medium` · `ironing-not-allowed` · `ironing-steam-not-allowed`

### Bleaching

`bleaching` · `bleaching-non-chlorine` · `bleaching-not-allowed`

### Dry Cleaning

`drycleaning` · `drycleaning-a` · `drycleaning-f` · `drycleaning-f-2` · `drycleaning-low-heat` · `drycleaning-no-steam` · `drycleaning-not-allowed` · `drycleaning-p` · `drycleaning-p-2` · `drycleaning-reduced-moisture` · `drycleaning-short-cycle` · `drycleaning-w` · `drycleaning-w-2` · `drycleaning-w-3` · `drycleaning-wetclean-not-allowed`

### Other

`custom-detergent` · `custom-drop` · `custom-drying-machine-2` · `custom-iron` · `custom-laundry-basket` · `custom-laundry-basket-full` · `custom-pants` · `custom-t-shirt` · `custom-washing-machine` · `custom-washing-machine-2` · `wringing-not-allowed`

## Development

After cloning the repo, generate the icon components from the SVG source files:

```bash
npm install
npm run generate   # generates src/icons/ and src/iconMap.ts from svg/
npm run build      # generate + bundle + type declarations
npm run format     # format with Prettier
```

The `src/icons/` directory and `src/iconMap.ts` are generated files and not checked into git. They are created automatically from the SVG files in `svg/`.

To add a new icon, drop an SVG file into `svg/` and run `npm run build`. The icon will be automatically available as a React component and in the `getIcon()` lookup.

## Releasing

```bash
npm run release:patch   # bug fixes, new icons (1.0.0 → 1.0.1)
npm run release:minor   # new features (1.0.0 → 1.1.0)
npm run release:major   # breaking changes (1.0.0 → 2.0.0)
```

This bumps the version, commits, tags, and pushes. A GitHub Action then automatically builds and creates a release with the installable tarball.

## License

MIT
