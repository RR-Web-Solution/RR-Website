import { useState } from 'react'
import Reveal from '../components/ui/Reveal'
import SectionHead from '../components/ui/SectionHead'
import { PLANS, CARE_PRICE, CARE_FEATS, fmt, waLink } from '../data/content'

export default function Pricing() {
  const [care, setCare] = useState(false)

  return (
    <section className="sec pricing" id="harga">
      <div className="wrap">
        <SectionHead no="05" kicker="Paket Harga" title="Harga jelas, tanpa kejutan." desc="Semua paket sudah termasuk domain & hosting tahun pertama. Pilih yang paling pas dengan tahap bisnismu." />
        <Reveal>
          <div className="price-toggle" role="tablist" aria-label="Opsi pembayaran">
            <button className={!care ? 'on' : ''} onClick={() => setCare(false)}>Sekali Bayar</button>
            <button className={care ? 'on' : ''} onClick={() => setCare(true)}>+ Perawatan Bulanan</button>
          </div>
        </Reveal>
        <div className="plans">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <div className={`plan ${p.hot ? 'hot' : ''}`}>
                {p.hot && <span className="plan-flag">★ Paling Laris</span>}
                <div className="plan-top">
                  <h3>{p.name}</h3>
                  <span>{p.sub}</span>
                </div>
                <div className="plan-price" key={care ? 'c' : 's'}>
                  <div className="pp-row"><small>Rp</small><b>{fmt(p.price)}</b></div>
                  <em>{care ? `+ Rp${fmt(CARE_PRICE)}/bln perawatan` : 'sekali bayar · sudah semua'}</em>
                </div>
                <ul className="plan-feats">
                  {p.feats.map((f) => <li key={f}><span>✓</span>{f}</li>)}
                  {care && CARE_FEATS.map((f) => <li key={f} className="extra"><span>＋</span>{f}</li>)}
                </ul>
                <a
                  className={`btn ${p.hot ? 'btn-acc' : 'btn-line'}`}
                  href={waLink(`Halo RR, saya tertarik paket ${p.name} — ${p.sub}${care ? ' + perawatan bulanan' : ''}. Boleh minta detailnya?`)}
                  target="_blank" rel="noreferrer"
                >
                  Pilih {p.name}
                </a>
                 { p.name === 'Custom' &&
                    <div className="notes">
                       * Harga dapat bervariasi berdasarkan Jumlah dan Kerumitan fitur yang diinginkan
                    </div>
                 }
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <div className="pay-note">
            <b>Skema pembayaran:</b> DP 50% di awal, pelunasan setelah website jadi &amp; kamu setujui.
            Bisa dicicil 2× termin untuk paket Custom. <a href={waLink('Halo, saya mau tanya skema pembayaran / cicilan.')} target="_blank" rel="noreferrer">Tanya dulu? Gratis kok →</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}