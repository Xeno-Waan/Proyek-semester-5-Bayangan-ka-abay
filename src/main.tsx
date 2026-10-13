/**
 * SCENTIQ — Application Entry Point
 * Phase A: Bootstrap React + Router
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './index.css'

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('[SCENTIQ] Root element #root tidak ditemukan di DOM.')
}

createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
