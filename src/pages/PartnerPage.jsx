import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import SectionHead from '../components/ui/SectionHead'
import Footer from '../components/layout/Footer'
import { RATE_ROWS, RULES, FLOW, waLink } from '../data/content'

export default function PartnerPage() {
  return (
    <>
      <main className="ppage">
        <section className="pp-hero">
          <div className="wrap">
            <Reveal>
              <Link to="/" className="pp-back">← Kembali ke Beranda</Link>
              <p className="kick"><span>Rate Card</span> — Program Agency Partner</p>
              <h1 className="pp-title">Kami yang kerjakan.<br />Nama <em>agency Anda</em> yang tampil.</h1>
              <p className="pp-sub">
                RR Web Solution menjadi tim produksi white-label untuk agency &amp; digital marketer.
                Anda pegang klien dan branding, kami eksekusi di belakang layar — dengan margin hingga 2x lipat.
              </p>
              <div className="pp-ctas">
                <a className="btn btn-acc" href={waLink('Halo RR! Saya agency/marketer, tertarik dengan program partner white-label. Boleh diskusi?')} target="_blank" rel="noreferrer">
                  Ajukan Kemitraan via WhatsApp <span className="btn-arrow">→</span>
                </a>
                <a className="btn btn-ghost" href="/rate-card-partner.pdf" download>⬇ Unduh Rate Card (PDF)</a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <SectionHead no="01" kicker="Rate Card" title="Harga partner & potensi margin Anda" desc="Ini harga bersih untuk Anda. Jual dengan harga Anda sendiri — selisihnya 100% milik Anda." />
            <Reveal>
              <div className="rc-table">
                <div className="rc-head">
                  <span>Produk</span><span>Harga Partner</span><span>Jual ke Klien</span><span>Margin</span>
                </div>
                {RATE_ROWS.map((r) => (
                  <div className="rc-row" key={r.p}>
                    <div className="rc-prod"><b>{r.p}</b><small>{r.d}</small></div>
                    <span className="rc-partner" data-label="Harga Partner">{r.partner}</span>
                    <span className="rc-sell" data-label="Jual ke Klien">{r.sell}</span>
                    <span className="rc-margin" data-label="Margin">{r.margin}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="rc-note">* Harga Website Custom adalah baseline — harga final mengikuti scope fitur setelah analisis kebutuhan klien.</p>
            </Reveal>
          </div>
        </section>

        <section className="sec pp-rules">
          <div className="wrap">
            <SectionHead no="02" kicker="Aturan Main" title="Main bersih, dua-duanya menang" />
            <div className="rules-grid">
              {RULES.map((r, i) => (
                <Reveal key={r.n} delay={i * 90}>
                  <div className="rule-card">
                    <span className="rule-n">{r.n}</span>
                    <h3>{r.t}</h3>
                    <p>{r.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <div className="flow-strip">
                {FLOW.map((f, i) => (
                  <div className="flow-step" key={f.pct}>
                    <b>{f.pct}</b>
                    <div><h4>{f.t}</h4><p>{f.d}</p></div>
                    {i < FLOW.length - 1 && <span className="flow-arrow">→</span>}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pp-final">
          <div className="wrap">
            <Reveal>
              <h2 className="final-title">Siap jadi partner<br />produksi kami?</h2>
              <p className="pp-final-sub">Slot partner kami batasi supaya kualitas tetap terjaga. Amankan posisi Anda sekarang.</p>
              <a className="btn btn-ink" href={waLink('Halo RR! Saya siap jadi partner white-label. Apa langkah selanjutnya?')} target="_blank" rel="noreferrer">
                Mulai Kemitraan Sekarang <span className="btn-arrow">→</span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}