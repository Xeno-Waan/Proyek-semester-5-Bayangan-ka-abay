/**
 * SCENTIQ — Navigation Route Types
 * Phase A: Definisi rute navigasi aplikasi
 */

export interface NavRoute {
  path: string
  label: string
  iconName: string
  section?: string
}

export const APP_ROUTES = {
  DASHBOARD: '/',
  PERFUMES: '/parfum',
  CRITERIA: '/kriteria',
  WEIGHTS: '/bobot',
  PREFERENCES: '/preferensi',
  RECOMMENDATIONS: '/rekomendasi',
  HISTORY: '/riwayat',
} as const

export type AppRoute = (typeof APP_ROUTES)[keyof typeof APP_ROUTES]
