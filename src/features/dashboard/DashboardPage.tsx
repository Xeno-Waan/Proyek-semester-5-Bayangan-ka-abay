/**
 * SCENTIQ — Dashboard Page (Placeholder)
 * Phase A: Visual placeholder — belum ada logika bisnis
 */

import {
  Sparkles,
  ListChecks,
  SlidersHorizontal,
  Star,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { APP_ROUTES } from '../../types/routes'

interface StatCardProps {
  label: string
  value: string
  icon: React.ReactNode
  accent?: boolean
}

function StatCard({ label, value, icon, accent = false }: StatCardProps) {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        flex: '1 1 180px',
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: 'var(--radius-md)',
          background: accent
            ? 'color-mix(in srgb, var(--color-golden-yellow) 18%, transparent)'
            : 'var(--color-elevated)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: accent ? 'var(--color-golden-yellow)' : 'var(--color-text-secondary)',
        }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <div
          className="tabular-nums"
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            lineHeight: 1.1,
          }}
        >
          {value}
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
          {label}
        </div>
      </div>
    </div>
  )
}

export function DashboardPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Dashboard"
        description="Ringkasan data parfum, kriteria, dan rekomendasi terakhir."
      />

      <div className="page-body">
        {/* Stat cards */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '24px',
          }}
          role="region"
          aria-label="Statistik data"
        >
          <StatCard
            label="Total Parfum"
            value="—"
            icon={<Sparkles size={20} />}
          />
          <StatCard
            label="Kriteria Aktif"
            value="—"
            icon={<ListChecks size={20} />}
          />
          <StatCard
            label="Total Bobot"
            value="—"
            icon={<SlidersHorizontal size={20} />}
          />
          <StatCard
            label="Rekomendasi"
            value="—"
            icon={<Star size={20} />}
            accent
          />
        </div>

        {/* Empty state — rekomendasi terakhir */}
        <div className="card" style={{ marginBottom: '24px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
              }}
            >
              Rekomendasi Terakhir
            </h2>
            <Link
              to={APP_ROUTES.RECOMMENDATIONS}
              className="btn btn-secondary"
              style={{ fontSize: '0.8rem', padding: '6px 12px' }}
            >
              Lihat semua
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="empty-state">
            <Star
              size={40}
              className="empty-state-icon"
              aria-hidden="true"
            />
            <p className="empty-state-title">Belum ada rekomendasi</p>
            <p className="empty-state-desc">
              Tambahkan data parfum dan kriteria, lalu jalankan rekomendasi untuk
              melihat hasilnya di sini.
            </p>
          </div>
        </div>

        {/* Quick actions */}
        <div className="card">
          <h2
            style={{
              margin: '0 0 16px',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
            }}
          >
            Pintasan
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Link to={APP_ROUTES.PERFUMES} className="btn btn-secondary">
              <Sparkles size={15} />
              Kelola Parfum
            </Link>
            <Link to={APP_ROUTES.CRITERIA} className="btn btn-secondary">
              <ListChecks size={15} />
              Kelola Kriteria
            </Link>
            <Link to={APP_ROUTES.WEIGHTS} className="btn btn-secondary">
              <SlidersHorizontal size={15} />
              Atur Bobot
            </Link>
            <Link to={APP_ROUTES.RECOMMENDATIONS} className="btn btn-primary">
              <Star size={15} />
              Buat Rekomendasi
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
