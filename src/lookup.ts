import * as si from 'simple-icons'
import { slugToVariableName } from 'simple-icons/sdk'
import type { SimpleIcon } from 'simple-icons'
import { OVERRIDES } from './overrides.js'

/**
 * Looks up a simple-icons icon by slug, applying manual overrides first.
 * Returns undefined when no icon matches the slug.
 */
export function lookupBySlug(slug: string): SimpleIcon | undefined {
  const resolved = OVERRIDES[slug] ?? slug
  const varName = slugToVariableName(resolved)
  return (si as unknown as Record<string, SimpleIcon>)[varName]
}
