/**
 * SCENTIQ — Placeholder Page Helper Component
 * Phase A: Komponen reusable untuk halaman placeholder
 * Digunakan oleh halaman yang belum diimplementasikan (Phase B+)
 */

import { Construction } from 'lucide-react'
import { PageHeader } from './PageHeader'

interface PlaceholderPageProps {
  title: string
  description: string
  phase: string
  features?: string[]
}

export function PlaceholderPage({
  title,
  description,
  phase,
  features = [],
}: PlaceholderPageProps) {
  return (
    <div className="animate-fade-in">
      <PageHeader title={title} description={description} />
      <div className="page-body">
        <div className="card">
          <div className="placeholder-page">
            <div aria-hidden="true" style={{ opacity: 0.3 }}>
              <Construction size={52} color="var(--color-golden-yellow)" />
            </div>
            <span className="placeholder-badge">{phase}</span>
            <h2 className="placeholder-title">{title}</h2>
            <p className="placeholder-desc">
              Halaman ini akan diimplementasikan pada <strong>{phase}</strong>.
              Fondasi navigasi dan tema sudah siap.
            </p>
            {features.length > 0 && (
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '8px 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  textAlign: 'left',
                  maxWidth: '360px',
                }}
              >
                {features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--color-text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: 'var(--color-golden-yellow)',
                        flexShrink: 0,
                        opacity: 0.6,
                      }}
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
