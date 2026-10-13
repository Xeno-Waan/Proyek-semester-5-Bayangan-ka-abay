/**
 * SCENTIQ — Recommendations Page (Placeholder)
 * Phase A: Placeholder — implementasi di Phase D (UI) & Phase C (SAW engine)
 */

import { PlaceholderPage } from '../../components/PlaceholderPage'

export function RecommendationsPage() {
  return (
    <PlaceholderPage
      title="Rekomendasi Parfum"
      description="Ranking parfum berdasarkan skor SAW dan kontribusi tiap kriteria."
      phase="Phase C & D — SAW Engine & UI"
      features={[
        'Jalankan perhitungan SAW setelah preferensi diisi',
        'Tampilkan ranking deterministik berdasarkan skor',
        'Rincian kontribusi tiap kriteria per parfum',
        'Penjelasan parfum yang dikecualikan dari ranking',
        'Simpan hasil ke riwayat rekomendasi',
      ]}
    />
  )
}
