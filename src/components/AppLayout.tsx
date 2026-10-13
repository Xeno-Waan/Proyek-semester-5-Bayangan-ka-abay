/**
 * SCENTIQ — App Layout Component
 * Phase A: Shell layout dengan sidebar responsif dan mobile top bar
 */

import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Menu, Beaker } from 'lucide-react'
import { Sidebar } from './Sidebar'

export function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app-shell">
      {/* Sidebar — fixed on desktop, off-canvas on mobile */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main area */}
      <div className="main-content">
        {/* Mobile top bar */}
        <header className="top-bar" aria-label="Header aplikasi mobile">
          <button
            className="hamburger-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Buka menu navigasi"
            aria-expanded={sidebarOpen}
            aria-controls="sidebar-nav"
            id="hamburger-btn"
          >
            <Menu size={20} />
          </button>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--color-text-primary)',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.06em',
            }}
            aria-hidden="true"
          >
            <Beaker size={16} color="var(--color-golden-yellow)" />
            SCENTIQ
          </div>
        </header>

        {/* Page content rendered by router */}
        <main id="main-content" tabIndex={-1}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
