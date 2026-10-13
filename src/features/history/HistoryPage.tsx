/**
 * SCENTIQ — History Page (Placeholder)
 * Phase A: Placeholder — implementasi di Phase D
 */

import { PlaceholderPage } from '../../components/PlaceholderPage'

export function HistoryPage() {
  return (
    <PlaceholderPage
      title="Riwayat Rekomendasi"
      description="Lihat dan buka kembali hasil rekomendasi yang tersimpan sebelumnya."
      phase="Phase D — Implementasi Fitur"
      features={[
        'Daftar riwayat dengan tanggal/waktu lokal',
        'Ringkasan preferensi saat rekomendasi dibuat',
        'Buka dan tampilkan ulang hasil tersimpan',
        'Persistensi di localStorage browser',
      ]}
    />
  )
}
