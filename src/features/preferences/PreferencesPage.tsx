/**
 * SCENTIQ — Preferences Page (Placeholder)
 * Phase A: Placeholder — implementasi di Phase D
 */

import { PlaceholderPage } from '../../components/PlaceholderPage'

export function PreferencesPage() {
  return (
    <PlaceholderPage
      title="Input Preferensi"
      description="Masukkan preferensi nilai untuk setiap kriteria aktif."
      phase="Phase D — Implementasi Fitur"
      features={[
        'Form preferensi berurutan per kriteria aktif',
        'Validasi nilai sesuai skala kriteria',
        'Tampilkan petunjuk dan skala nilai',
        'Simpan preferensi untuk digunakan dalam perhitungan SAW',
      ]}
    />
  )
}
