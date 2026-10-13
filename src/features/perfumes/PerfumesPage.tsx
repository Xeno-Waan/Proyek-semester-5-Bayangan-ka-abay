/**
 * SCENTIQ — Perfumes Page (Placeholder)
 * Phase A: Placeholder — implementasi CRUD di Phase D
 */

import { PlaceholderPage } from '../../components/PlaceholderPage'

export function PerfumesPage() {
  return (
    <PlaceholderPage
      title="Data Parfum"
      description="Kelola daftar alternatif parfum yang akan dievaluasi."
      phase="Phase D — Implementasi Fitur"
      features={[
        'Tambah parfum baru dengan nama, deskripsi, dan nilai kriteria',
        'Ubah dan hapus data parfum dengan konfirmasi',
        'Validasi nilai kriteria sebelum menyimpan',
        'Pencarian dan penyaringan sederhana',
        'Persistensi data di localStorage',
      ]}
    />
  )
}
