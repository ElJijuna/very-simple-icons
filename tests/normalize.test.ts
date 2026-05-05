import { describe, it, expect } from 'vitest'
import { normalizePackageName } from '../src/normalize'

describe('normalizePackageName', () => {
  it('handles plain package name', () => {
    expect(normalizePackageName('react')).toContain('react')
  })

  it('handles scoped package → uses scope first', () => {
    const candidates = normalizePackageName('@tanstack/react-query')
    expect(candidates[0]).toBe('tanstack')
    expect(candidates).toContain('react-query')
    expect(candidates).toContain('reactquery')
  })

  it('handles @angular/core → angular first', () => {
    expect(normalizePackageName('@angular/core')[0]).toBe('angular')
  })

  it('strips version suffix', () => {
    expect(normalizePackageName('react@18.0.0')).toContain('react')
  })

  it('handles hyphenated packages', () => {
    const candidates = normalizePackageName('react-dom')
    expect(candidates).toContain('react-dom')
    expect(candidates).toContain('reactdom')
  })

  it('deduplicates candidates', () => {
    const candidates = normalizePackageName('react')
    expect(candidates.length).toBe(candidates.filter((v, i, a) => a.indexOf(v) === i).length)
  })

  it('lowercases input', () => {
    expect(normalizePackageName('React')).toContain('react')
  })
})
