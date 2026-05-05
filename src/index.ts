import { normalizePackageName } from './normalize.js'
import { lookupBySlug } from './lookup.js'
import type { SimpleIcon } from 'simple-icons'

export type { SimpleIcon }
export { normalizePackageName }

/**
 * Returns the simple-icons icon for a given npm package name.
 * Handles scoped packages (@tanstack/react-query → tanstack),
 * hyphenated packages (react-dom → react), and version suffixes (react@18).
 * Returns undefined when no matching icon exists.
 */
export function getIcon(packageName: string): SimpleIcon | undefined {
  const candidates = normalizePackageName(packageName)
  for (const candidate of candidates) {
    const icon = lookupBySlug(candidate)
    if (icon) return icon
  }
  return undefined
}
