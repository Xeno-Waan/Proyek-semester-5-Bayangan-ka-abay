/**
 * SCENTIQ — 404 Not Found Page
 * Phase A: Halaman fallback untuk rute yang tidak dikenali
 */

import { Link } from 'react-router-dom'
import { TriangleAlert, Home } from 'lucide-react'
import { APP_ROUTES } from '../types/routes'

export function NotFoundPage() {
  return (
    <div
      className="animate-fade-in"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: '16px',
        padding: '40px 24px',
        textAlign: 'center',
      }}
    >
      <TriangleAlert
        size={52}
        aria-hidden="true"
        style={{ color: 'var(--color-warning)', opacity: 0.7 }}
      />
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 800,
          color: 'var(--color-text-primary)',
          margin: 0,
        }}
      >
        404
      </h1>
      <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: '0.95rem' }}>
        Halaman yang Anda cari tidak ditemukan.
      </p>
      <Link to={APP_ROUTES.DASHBOARD} className="btn btn-primary">
        <Home size={15} />
        Kembali ke Dashboard
      </Link>
    </div>
  )
}
