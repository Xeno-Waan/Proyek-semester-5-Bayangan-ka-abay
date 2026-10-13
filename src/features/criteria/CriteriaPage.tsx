/**
 * SCENTIQ — Criteria Page (Placeholder)
 * Phase A: Placeholder — implementasi di Phase D
 */

import { PlaceholderPage } from '../../components/PlaceholderPage'

export function CriteriaPage() {
  return (
    <PlaceholderPage
      title="Kriteria Penilaian"
      description="Kelola kriteria dengan tipe benefit/cost dan skala nilai."
      phase="Phase D — Implementasi Fitur"
      features={[
        'Tambah kriteria dengan nama, tipe benefit/cost',
        'Aktifkan atau nonaktifkan kriteria',
        'Badge visual benefit/cost yang jelas',
        'Validasi nama unik dan tipe valid',
        'Persistensi di localStorage',
      ]}
    />
  )
}
