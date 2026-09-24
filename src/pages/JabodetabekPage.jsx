import Reveal from '../components/ui/Reveal'
import Footer from '../components/layout/Footer'
import { CASE_STUDIES, waLink } from '../data/content'
import './JabodetabekPage.css'

const AREAS = ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi']

const PAINS = [
  'Booking lewat chat, sering kelewat kalau lagi tidur atau ramai',
  'Dua pelanggan ngaku slot jam yang sama — ributnya ke kamu',
  'Daftar harga dikirim manual satu-satu, jawaban repetitif',
  'Detail order tersebar di ratusan chat, susah direkap',
  'Nggak ada catatan rapi: siapa sudah bayar, siapa belum',
]

const GAINS = [
  'Booking masuk 24/7, slot terkunci otomatis begitu diambil',
  'Double booking mustahil — dikunci di level database',
  'Harga transparan di web, pelanggan cek sendiri tanpa tanya',
  'Order terformat rapi, otomatis masuk ke WhatsApp kamu',
  'Dashboard sederhana: pendapatan & data pelanggan terpantau',
]

const WA_MSG = 'Halo RR Devs! Saya bisnis di Jabodetabek, mau konsultasi sistem booking/order yang nyambung ke WhatsApp.'

export default function JabodetabekPage() {
  const scrollToCases = () =>
    document.getElementById('studi-kasus')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <main className="jkt-page">
        {/* ===== HERO / POSITIONING ===== */}
        <section className="jkt-hero">
          <div className="wrap jkt-hero-grid">
            <Reveal className="jkt-copy">
              <p className="kick"><span>(01)</span> — Solusi Digital Jabodetabek</p>
              <h1 className="jkt-title">
                Bisnis Jabodetabek nggak butuh aplikasi ribet. Butuh sistem yang <em>nyambung ke WhatsApp</em>.
              </h1>
              <p className="jkt-lead">
                <b>RR Devs</b> bantu bisnis retail &amp; jasa di Jabodetabek pindah dari WA manual yang gampang keteteran
                ke sistem yang tetap terasa personal — booking, order, dan katalog yang{' '}
                <mark>nyambung langsung ke WhatsApp</mark>. Bukan aplikasi ribet yang bikin pelanggan kabur.
              </p>
              <div className="jkt-ctas">
                <a className="btn btn-wa" href={waLink(WA_MSG)} target="_blank" rel="noreferrer">
                  Chat WhatsApp — Konsultasi Gratis <span className="btn-arrow">→</span>
                </a>
                <button className="btn btn-ghost" onClick={scrollToCases}>Lihat 5 Bukti Kerja ↓</button>
              </div>
              <div className="jkt-areas">
                {AREAS.map((a) => <span key={a}>📍 {a}</span>)}
              </div>
            </Reveal>

            {/* ===== MOCKUP CHAT WA ===== */}
            <Reveal delay={150} className="jkt-vis">
              <div className="wa-card">
                <div className="wa-head">
                  <span className="wa-ava">☕</span>
                  <div className="wa-id">
                    <b>Kopi Senja • Sistem Reservasi</b>
                    <small>online · membalas otomatis</small>
                  </div>
                  <span className="wa-live">● LIVE</span>
                </div>
                <div className="wa-body">
                  <div className="wa-msg in">
                    <p>Halo, mau booking Sabtu 19 Okt jam 14:00 untuk 4 orang ya ☕</p>
                    <span className="wa-meta">14:02</span>
                  </div>
                  <div className="wa-msg out">
                    <p>✅ Slot terkunci otomatis! Reservasi sudah masuk ke WhatsApp admin:</p>
                    <div className="wa-order">
                      📋 RESERVASI BARU<br />
                      Nama: Budi S.<br />
                      Hari: Sab, 19 Okt · 14:00<br />
                      Pax: 4 orang<br />
                      Sumber: Website
                    </div>
                    <span className="wa-meta">14:02 ✓✓</span>
                  </div>
                  <div className="wa-msg in">
                    <p>Wah rapi banget, langsung konfirmasi deh 👌</p>
                    <span className="wa-meta">14:03</span>
                  </div>
                </div>
                <div className="wa-foot">⚡ Tanpa aplikasi tambahan — pelanggan cukup klik dari website</div>
              </div>
              <div className="wa-chip wa-chip-a">🔒 Slot terkunci di database</div>
              <div className="wa-chip wa-chip-b">📩 Order auto-format ke WA</div>
            </Reveal>
          </div>
        </section>

        {/* ===== CARA LAMA vs WA-FIRST ===== */}
        <section className="sec jkt-compare-sec">
          <div className="wrap">
            <Reveal>
              <p className="kick"><span>(02)</span> — Kenapa WA-first</p>
              <h2 className="h2">Operasimu sudah hidup di WhatsApp. Sistemnya yang harus menyusul.</h2>
            </Reveal>
            <div className="jkt-compare">
              <Reveal delay={80}>
                <div className="cmp-card old">
                  <h3>✗ Cara lama: WA manual</h3>
                  <ul>{PAINS.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="cmp-card new">
                  <h3>✓ Cara RR Devs: sistem WA-first</h3>
                  <ul>{GAINS.map((g) => <li key={g}>{g}</li>)}</ul>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="jkt-tablet">
                <p className="jt-kick">// BUKAN SOAL ALAT</p>
                <p className="jt-text">
                  Sistem booking paling kompleks di halaman ini dibangun{' '}
                  <b>100% oleh Rafael menggunakan tablet Android via Termux — tanpa laptop</b>.
                  Ini bukan cerita penderitaan. Ini bukti bahwa kami di RR Devs tidak pernah menunggu kondisi ideal untuk mulai mengeksekusi. Kebanyakan bisnis stuck bukan karena kurang modal atau alat, tapi karena menunda eksekusi. Bisnis Kamu pun bisa mulai melangkah minggu ini, dengan apa yang Kamu punya sekarang.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== 5 STUDI KASUS ===== */}
        <section className="sec jkt-cases" id="studi-kasus">
          <div className="wrap">
            <Reveal>
              <p className="kick"><span>(03)</span> — Bukti Kerja</p>
              <h2 className="h2">{CASE_STUDIES.length} project, cerita jujur apa adanya</h2>
              <p className="jkt-cases-note">
                Kami tidak menyebut demo sebagai klien. Yang demo kami labeli demo, yang klien nyata kami
                labeli klien — silakan cek sendiri.
              </p>
            </Reveal>
            <div className="cs-list">
              {CASE_STUDIES.map((cs, i) => (
                <Reveal key={cs.id} delay={i * 60}>
                  <article className={`cs-card ${cs.kind}`} style={{ '--cs': cs.accent }}>
                    <span className="cs-num">{String(i + 1).padStart(2, '0')}</span>
                    <div className="cs-grid">
                      <div className="cs-main">
                        <div className="cs-head">
                          <span className="cs-emoji">{cs.emoji}</span>
                          <div className="cs-titles">
                            <h3>{cs.title}</h3>
                            <small>{cs.tagline}</small>
                          </div>
                        </div>
                        <span className="cs-kind">{cs.kindLabel}</span>
                        <p className="cs-story">{cs.story}</p>
                        <ul className="cs-hl">
                          {cs.highlights.map((h) => <li key={h}><span>✓</span>{h}</li>)}
                        </ul>
                        <div className="cs-stack">
                          {cs.stack.map((s) => <span key={s}>{s}</span>)}
                          {cs.live && <a className="cs-live" href={cs.live} target="_blank" rel="noreferrer">Coba live ↗</a>}
                        </div>
                        {cs.footnote && <p className="cs-foot">// {cs.footnote}</p>}
                      </div>
                      <div className="cs-visual">
                        <div className="cs-frame">
                          <div className="cs-frame-bar">
                            <i /><i /><i /><span>{cs.id}.rrdevs.my.id</span>
                          </div>
                          <div className="cs-shot">
                            <img className="bg" src={cs.shot} alt="" aria-hidden="true" loading="lazy" />
                            <img className="fg" src={cs.shot} alt={`Screenshot ${cs.title}`} loading="lazy" />
                          </div>
                        </div>
                        <p className="cs-cap">{cs.shotNote}</p>
                      </div>
                    </div>
                    {cs.quote && (
                      <blockquote className="cs-quote">
                        “{cs.quote.text}”
                        <cite>— {cs.quote.name} · {cs.quote.biz}</cite>
                      </blockquote>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA PENUTUP ===== */}
        <section className="jkt-final">
          <div className="wrap">
            <Reveal>
              <h2 className="jkt-final-title">Siap pindah dari WA manual<br />ke sistem yang bener?</h2>
              <p className="jkt-final-sub">
                Ceritakan bisnismu 15 menit — kami sketsakan sistem yang paling cocok: booking, order, atau
                katalog. Gratis, tanpa komitmen. Meeting online atau kami datang ke lokasi (Jabodetabek).
              </p>
              <a className="btn btn-wa btn-big" href={waLink(WA_MSG)} target="_blank" rel="noreferrer">
                Ceritakan bisnis Kamu — GRATIS <span className="btn-arrow">→</span>
              </a>
              <p className="jkt-final-note">// balas cepat · Senin–Sabtu 09.00–18.00 WIB</p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}