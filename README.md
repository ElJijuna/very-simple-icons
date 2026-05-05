# very-simple-icons

[![npm version](https://img.shields.io/npm/v/very-simple-icons?style=flat-square)](https://www.npmjs.com/package/very-simple-icons)
[![npm downloads](https://img.shields.io/npm/dm/very-simple-icons?style=flat-square)](https://www.npmjs.com/package/very-simple-icons)
[![npm license](https://img.shields.io/npm/l/very-simple-icons?style=flat-square)](./LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/very-simple-icons?style=flat-square)](https://bundlephobia.com/package/very-simple-icons)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![GitHub stars](https://img.shields.io/github/stars/ElJijuna/very-simple-icons?style=flat-square)](https://github.com/ElJijuna/very-simple-icons/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/ElJijuna/very-simple-icons?style=flat-square)](https://github.com/ElJijuna/very-simple-icons/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/ElJijuna/very-simple-icons?style=flat-square)](https://github.com/ElJijuna/very-simple-icons/commits/main)
[![Docs](https://img.shields.io/badge/docs-online-60a5fa?style=flat-square)](https://eljijuna.github.io/very-simple-icons/)

Map npm package names to [simple-icons](https://simpleicons.org/) icons. Handles scoped packages, hyphenated names, and version suffixes automatically.

## Install

```bash
npm install very-simple-icons simple-icons
```

> `simple-icons` is a peer dependency — install it separately to always get the latest icons.

## Usage

```ts
import { getIcon } from 'very-simple-icons'

getIcon('react')                  // → React icon
getIcon('react-dom')              // → React icon
getIcon('@tanstack/react-query')  // → TanStack icon
getIcon('@angular/core')          // → Angular icon
getIcon('typescript')             // → TypeScript icon
getIcon('node')                   // → Node.js icon
getIcon('react@18')               // → React icon (version stripped)

getIcon('unknown-pkg')            // → undefined
```

The returned object is the native `SimpleIcon` from `simple-icons`:

```ts
{
  title: 'React',
  slug: 'react',
  hex: '61DAFB',       // brand color, no #
  svg: '<svg .../>',   // full SVG markup
  path: 'M...',        // SVG path data
  source: 'https://react.dev',
  guidelines?: string,
  license?: { type: string, url: string }
}
```

## Normalization rules

| Input | Slug tried | Result |
|---|---|---|
| `react` | `react` | React |
| `react-dom` | override → `react` | React |
| `@tanstack/react-query` | `tanstack`, `react-query`, `reactquery` | TanStack |
| `@angular/core` | `angular`, `core` | Angular |
| `node` | override → `nodedotjs` | Node.js |
| `react@18` | `react` | React |

For scoped packages (`@scope/pkg`), the scope is tried first. This means `@tanstack/*` always resolves to the TanStack icon regardless of the sub-package.

## API

### `getIcon(packageName: string): SimpleIcon | undefined`

Returns the matching `SimpleIcon` or `undefined` if no icon is found.

### `normalizePackageName(packageName: string): string[]`

Returns the ordered list of slug candidates that `getIcon` tries internally. Useful for debugging or building custom lookup logic.

```ts
import { normalizePackageName } from 'very-simple-icons'

normalizePackageName('@tanstack/react-query')
// → ['tanstack', 'react-query', 'reactquery']
```

## Why peerDependency?

`simple-icons` ships over 3,400 icons and releases frequently. Declaring it as a peer dependency means you can run `npm install simple-icons@latest` at any time to get new icons without waiting for a new release of this library.

## License

MIT © [ElJijuna](https://github.com/ElJijuna)
