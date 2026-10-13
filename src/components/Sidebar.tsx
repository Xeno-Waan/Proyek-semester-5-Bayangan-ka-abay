/**
 * SCENTIQ — Sidebar Navigation Component
 * Phase A: Navigasi responsif sesuai UI-GUIDELINE.md §4
 */

import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Sparkles,
  ListChecks,
  SlidersHorizontal,
  Settings2,
  Star,
  History,
  Beaker,
  X,
} from 'lucide-react'
import { APP_ROUTES } from '../types/routes'

interface NavItem {
  path: string
  label: string
  icon: React.ReactNode
  section?: string
}

const NAV_ITEMS: NavItem[] = [
  {
    path: APP_ROUTES.DASHBOARD,
    label: 'Dashboard',
    icon: <LayoutDashboard size={18} />,
  },
  {
    path: APP_ROUTES.PERFUMES,
    label: 'Data Parfum',
    icon: <Sparkles size={18} />,
    section: 'Data',
  },
  {
    path: APP_ROUTES.CRITERIA,
    label: 'Kriteria',
    icon: <ListChecks size={18} />,
  },
  {
    path: APP_ROUTES.WEIGHTS,
    label: 'Bobot & Preferensi',
    icon: <SlidersHorizontal size={18} />,
  },
  {
    path: APP_ROUTES.PREFERENCES,
    label: 'Input Preferensi',
    icon: <Settings2 size={18} />,
    section: 'Rekomendasi',
  },
  {
    path: APP_ROUTES.RECOMMENDATIONS,
    label: 'Rekomendasi',
    icon: <Star size={18} />,
  },
  {
    path: APP_ROUTES.HISTORY,
    label: 'Riwayat',
    icon: <History size={18} />,
  },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation()
  let currentSection: string | undefined = undefined

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="sidebar-backdrop"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`sidebar${isOpen ? ' open' : ''}`}
        aria-label="Navigasi utama"
      >
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon" aria-hidden="true">
            <Beaker size={18} color="#F2C94C" />
          </div>
          <div>
            <div className="sidebar-logo-text">SCENTIQ</div>
            <div className="sidebar-logo-subtitle">Sistem Rekomendasi Parfum</div>
          </div>
          {/* Close button — mobile only */}
          <button
            className="hamburger-btn"
            onClick={onClose}
            aria-label="Tutup menu"
            style={{ marginLeft: 'auto', display: 'none' }}
            id="sidebar-close-btn"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav" aria-label="Menu navigasi">
          {NAV_ITEMS.map((item) => {
            const showSection = item.section && item.section !== currentSection
            if (showSection) currentSection = item.section

            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path)

            return (
              <div key={item.path}>
                {showSection && (
                  <div className="nav-section-label" aria-hidden="true">
                    {item.section}
                  </div>
                )}
                <NavLink
                  to={item.path}
                  className={`nav-item${isActive ? ' active' : ''}`}
                  onClick={onClose}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="nav-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </NavLink>
              </div>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <div
            style={{
              fontSize: '0.7rem',
              color: 'var(--color-text-secondary)',
              padding: '4px 8px',
              opacity: 0.6,
            }}
          >
            SCENTIQ v0.1.0 — Lokal
          </div>
        </div>
      </aside>
    </>
  )
}
