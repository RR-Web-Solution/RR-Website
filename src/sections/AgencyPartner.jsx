import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import { PARTNER_PREVIEW } from '../data/content'

export default function AgencyPartner() {
  return (
    <section className="partner-sec">
      <div className="wrap partner-grid">
        <Reveal className="partner-copy">
          <p className="kick"><span>(08)</span> — Agency Partner</p>
          <h2 className="h2">Agency &amp; marketer — butuh partner produksi web?</h2>
          <p className="partner-desc">
            Anda fokus cari klien dan jaga hubungan baik. Kami kerjakan project-nya{' '}
            <b>white-label di belakang layar</b> — nama agency Anda yang tampil, kami yang bangun.
            Margin hingga <b>2x lipat</b> di setiap project.
          </p>
          <ul className="partner-points">
            <li>✓ 100% white-label, terlindungi NDA</li>
            <li>✓ Kami tidak pernah menghubungi klien Anda</li>
            <li>✓ Pembayaran bertahap 50 / 40 / 10</li>
            <li>✓ Garansi bug-fix 30 hari + 2 ronde revisi</li>
          </ul>
          <Link to="/partner" className="btn btn-acc">Lihat Skema Partner <span className="btn-arrow">→</span></Link>
        </Reveal>
         {/*
        <Reveal delay={160}>
          <div className="partner-ticket">
            <div className="pt-head"><b>RATE CARD PARTNER</b><span>2025</span></div>
            {PARTNER_PREVIEW.map((r) => (
              <div className="pt-row" key={r.p}>
                <div className="pt-name">{r.p}</div>
                <div className="pt-prices">
                  <span className="pt-buy">Rp{r.buy}</span>
                  <i>→</i>
                  <span className="pt-sell">Rp{r.sell}</span>
                  <em>~2x</em>
                </div>
              </div>
            ))}
            <div className="pt-foot">// harga partner netto — selisihnya milik Anda</div>
          </div>
        </Reveal>
        */}
      </div>
    </section>
  )
}