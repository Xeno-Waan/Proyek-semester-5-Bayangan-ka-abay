/**
 * SCENTIQ — Phase A Smoke Test
 * Memverifikasi bahwa router dan APP_ROUTES terdefinisi dengan benar.
 * Tidak menguji logika bisnis (belum ada di Phase A).
 */

import { describe, it, expect } from 'vitest'
import { APP_ROUTES } from '../types/routes'

describe('APP_ROUTES', () => {
  it('mendefinisikan semua rute navigasi utama', () => {
    expect(APP_ROUTES.DASHBOARD).toBe('/')
    expect(APP_ROUTES.PERFUMES).toBe('/parfum')
    expect(APP_ROUTES.CRITERIA).toBe('/kriteria')
    expect(APP_ROUTES.WEIGHTS).toBe('/bobot')
    expect(APP_ROUTES.PREFERENCES).toBe('/preferensi')
    expect(APP_ROUTES.RECOMMENDATIONS).toBe('/rekomendasi')
    expect(APP_ROUTES.HISTORY).toBe('/riwayat')
  })

  it('semua nilai rute adalah string non-kosong', () => {
    for (const route of Object.values(APP_ROUTES)) {
      expect(typeof route).toBe('string')
      expect(route.length).toBeGreaterThan(0)
    }
  })

  it('rute DASHBOARD dimulai dari root /', () => {
    expect(APP_ROUTES.DASHBOARD).toBe('/')
  })

  it('rute lain dimulai dengan /', () => {
    const nonRoot = Object.entries(APP_ROUTES).filter(([k]) => k !== 'DASHBOARD')
    for (const [, path] of nonRoot) {
      expect(path.startsWith('/')).toBe(true)
    }
  })
})
