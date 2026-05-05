import { describe, it, expect } from 'vitest'
import { getIcon } from '../src/index'

describe('getIcon', () => {
  it('resolves plain package: react', () => {
    const icon = getIcon('react')
    expect(icon).toBeDefined()
    expect(icon?.slug).toBe('react')
  })

  it('resolves scoped package: @tanstack/react-query → tanstack', () => {
    const icon = getIcon('@tanstack/react-query')
    expect(icon).toBeDefined()
    expect(icon?.slug).toBe('tanstack')
  })

  it('resolves override: react-dom → react', () => {
    const icon = getIcon('react-dom')
    expect(icon).toBeDefined()
    expect(icon?.slug).toBe('react')
  })

  it('resolves override: node → nodedotjs', () => {
    const icon = getIcon('node')
    expect(icon).toBeDefined()
    expect(icon?.slug).toBe('nodedotjs')
  })

  it('resolves typescript', () => {
    const icon = getIcon('typescript')
    expect(icon).toBeDefined()
    expect(icon?.slug).toBe('typescript')
  })

  it('resolves @angular/core → angular', () => {
    const icon = getIcon('@angular/core')
    expect(icon).toBeDefined()
    expect(icon?.slug).toBe('angular')
  })

  it('resolves with version suffix: react@18', () => {
    const icon = getIcon('react@18')
    expect(icon).toBeDefined()
    expect(icon?.slug).toBe('react')
  })

  it('returns undefined for unknown package', () => {
    expect(getIcon('some-totally-unknown-package-xyz')).toBeUndefined()
  })

  it('returned icon has expected shape', () => {
    const icon = getIcon('react')!
    expect(typeof icon.title).toBe('string')
    expect(typeof icon.slug).toBe('string')
    expect(typeof icon.hex).toBe('string')
    expect(typeof icon.svg).toBe('string')
    expect(typeof icon.path).toBe('string')
  })
})
