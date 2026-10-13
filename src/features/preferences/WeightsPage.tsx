/**
 * SCENTIQ — Weights Page (Placeholder)
 * Phase A: Placeholder — implementasi di Phase D
 */

import { PlaceholderPage } from '../../components/PlaceholderPage'

export function WeightsPage() {
  return (
    <PlaceholderPage
      title="Bobot & Preferensi"
      description="Atur bobot tiap kriteria dan pastikan total bobot valid."
      phase="Phase D — Implementasi Fitur"
      features={[
        'Input bobot per kriteria (nonnegatif)',
        'Validasi total bobot aktif harus sama dengan 1',
        'Normalisasi otomatis sebelum perhitungan SAW',
        'Tampilkan bobot dalam persentase',
        'Simpan dan muat bobot dari localStorage',
      ]}
    />
  )
}
