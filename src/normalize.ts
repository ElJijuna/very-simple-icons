/**
 * Converts an npm package name into an ordered list of simple-icons slug candidates.
 *
 * Strategy:
 *  - Scoped packages (@scope/pkg): try scope, then pkg, then pkg without hyphens
 *  - Unscoped packages: try full name, then name without hyphens
 */
export function normalizePackageName(input: string): string[] {
  const candidates: string[] = []
  let name = input.trim().toLowerCase()

  // Strip optional version suffix: "react@18.0.0" → "react"
  name = name.replace(/@\d.*$/, '')

  const scopedMatch = name.match(/^@([^/]+)\/(.+)$/)
  if (scopedMatch) {
    const [, scope, pkg] = scopedMatch
    candidates.push(scope)
    candidates.push(pkg)
    candidates.push(pkg.replace(/-/g, ''))
  } else {
    candidates.push(name)
    candidates.push(name.replace(/-/g, ''))
  }

  return [...new Set(candidates)]
}
