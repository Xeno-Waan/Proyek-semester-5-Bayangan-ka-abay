/**
 * SCENTIQ — Application Router
 * Phase A: Definisi rute utama aplikasi menggunakan React Router v7
 */

import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { DashboardPage } from './features/dashboard/DashboardPage'
import { PerfumesPage } from './features/perfumes/PerfumesPage'
import { CriteriaPage } from './features/criteria/CriteriaPage'
import { WeightsPage } from './features/preferences/WeightsPage'
import { PreferencesPage } from './features/preferences/PreferencesPage'
import { RecommendationsPage } from './features/recommendations/RecommendationsPage'
import { HistoryPage } from './features/history/HistoryPage'
import { NotFoundPage } from './components/NotFoundPage'
import { APP_ROUTES } from './types/routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: APP_ROUTES.PERFUMES,
        element: <PerfumesPage />,
      },
      {
        path: APP_ROUTES.CRITERIA,
        element: <CriteriaPage />,
      },
      {
        path: APP_ROUTES.WEIGHTS,
        element: <WeightsPage />,
      },
      {
        path: APP_ROUTES.PREFERENCES,
        element: <PreferencesPage />,
      },
      {
        path: APP_ROUTES.RECOMMENDATIONS,
        element: <RecommendationsPage />,
      },
      {
        path: APP_ROUTES.HISTORY,
        element: <HistoryPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
