import { useState } from 'react'
import Reveal from '../components/ui/Reveal'
import SectionHead from '../components/ui/SectionHead'
import { PLANS, CARE_PRICE, CARE_FEATS, fmt, waLink, track } from '../data/content'

export default function Pricing() {
  const [care, setCare] = useState(false)
  return (
    <section className="sec pricing" id="harga">
      <div className="wrap">
        <SectionHead no="05" kicker="Paket Harga" title="Harga jelas, tanpa kejutan." desc="Semua paket sudah termasuk domain & hosting tahun pertama. Pilih yang paling pas dengan tahap bisnismu." />
        <Reveal>
          <div className="price-toggle" role="tablist" aria-label="Opsi pembayaran">
            <button type="button" className={!care ? 'on' : ''} onClick={() => setCare(false)} role="tab" aria-selected={!care} aria-controls="pricing-section">Sekali Bayar</button>
            <button type="button" className={care ? 'on' : ''} onClick={() => setCare(true)} role="tab" aria-selected={care} aria-controls="pricing-section">+ Perawatan Bulanan</button>
          </div>
        </Reveal>
        <div className="plans" id="pricing-section">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <div className={`plan ${p.hot ? 'hot' : ''}`}>
                {p.hot && <span className="plan-flag">{p.flag || '★ SISTEM BOOKING'}</span>}
                <div className="plan-top">
                  <h3>{p.name}</h3>
                  <span>{p.sub}</span>
                </div>
                <div className="plan-price" key={care ? 'c' : 's'}>
                  <div className="pp-row"><small>Rp</small><b>{fmt(p.price)}</b></div>
                  <em>{care ? `+ Rp${fmt(CARE_PRICE)}/bln perawatan` : 'sekali bayar · sudah semua'}</em>
                </div>
                <ul className="plan-feats">
                  {p.feats.map((f) => (<li key={f}><span>✓</span>{f}</li>))}
                  {care && CARE_FEATS.map((f) => (<li key={f} className="extra"><span>＋</span>{f}</li>))}
                </ul>
                <a
                  className={`btn ${p.hot ? 'btn-acc' : 'btn-line'}`}
                  href={waLink(`Halo RR, saya tertarik paket ${p.name} — ${p.sub}${care ? ' + perawatan bulanan' : ''}. Boleh minta detailnya?`)}
                  target="_blank" rel="noreferrer"
                  onClick={() => track('click_wa', { from: 'pricing', plan: p.name })}
                >
                  Pilih {p.name}
                </a>
                {p.name === 'Custom' && (
                  <div className="notes">* Fitur di atas ukuran itu: penyesuaian harga disampaikan transparan sebelum DP — kamu mendengar angkanya sebelum membayar apa pun.</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <div className="pay-note">
            <p>
               <b>Skema pembayaran:</b> 
               <br />
               DP 50% di awal, pelunasan setelah website jadi & kamu setujui.  Bug-fix gratis 30 hari setelah live.{' '}
            </p>
             
            <p>
               <b>Tidak cocok di 3 hari pertama?</b> 
               <br />
               Hubungi kami, DP kembali 100% tanpa ribet.{' '}
            </p>
             
            <p>
               <b>Mulai Hari 4:</b> 
               <br />
               Pengerjaan terus dilanjutkan, DP menutup pekerjaan yang berjalan.{' '}
            </p>
             
          </div>

          <div className="pricing-cta-container">
             <a href={waLink('Halo, saya mau tanya skema pembayaran / garansi.')} 
                target="_blank" rel="noreferrer" className="pricing-cta">Tanya dulu? Gratis kok →</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
