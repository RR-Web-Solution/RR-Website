import { waLink } from '../data/content'

const WA_MSG = 'Halo RR Devs, saya punya barbershop dan mau lihat sistem bookingnya 💈'
const track = (name, extra = {}) => { try { window.gtag?.('event', name, extra) } catch (e) {} }

const SLOTS = [
  { jam: '10.00', capster: 'Dimas', status: 'isi' },
  { jam: '11.00', capster: 'Dimas', status: 'kosong' },
  { jam: '13.00', capster: 'Rizky', status: 'isi' },
  { jam: '14.00', capster: 'Rizky', status: 'kosong' },
  { jam: '16.00', capster: 'Andi', status: 'kunci' },
]

export default function BarberPro() {
  return (
    <section className="sec bp" id="barbershop">
      <div className="wrap">
        <div className="bp-head">
          <p className="kick"><span>★</span> — Lihat sebelum percaya</p>
          <h2 className="h2">Pelanggan Pilih Jadwal, Sistem yang Mencatat.</h2>
          <p className="bp-lead">
            Biarkan pelanggan Kamu mengunci jadwal kapster favorit mereka secara mandiri dalam
             <br />
             <em>1 menit</em>. 
             <br />
             Begitu slot terisi, sistem otomatis mengirimkan ringkasan rapi ke WhatsApp Kamu sekalian mencatat omzet ke dasbor. 
             Kamu tinggal terima beres.
          </p>
        </div>

        <div className="bp-grid">
          {/* ---- KIRI: pelanggan pilih slot → WA toko berbunyi ---- */}
          <div className="bp-card">
            <span className="bp-tag">Sisi pelanggan</span>
            <h3>Pilih jam — 100% anti-bentrok</h3>
            <ul className="bp-slots">
              {SLOTS.map((s) => (
                <li key={s.jam + s.capster} className={s.status}>
                  <b>{s.jam}</b>
                  <span>{s.capster}</span>
                  <em>{s.status === 'isi' ? 'terisi' : s.status === 'kunci' ? 'baru dikunci' : 'tersedia'}</em>
                </li>
              ))}
            </ul>
            <p className="bp-cap">Satu detik setelah slot dikunci, WhatsApp toko berbunyi — screenshot asli:</p>
            <div className="bp-shot">
              <img src="images/wa-booking-real.png" alt="Notifikasi WhatsApp booking baru BarberPro" loading="lazy" />
            </div>
          </div>

          {/* ---- KANAN: owner — dashboard + login ---- */}
          <div className="bp-card">
            <span className="bp-tag dark">Sisi owner</span>
            <h3>Pagi buka HP: isi kursi &amp; omzet sudah tercatat</h3>
            <div className="bp-shot">
              <img
                src="images/barberpro-dashboard.png"
                alt="Dashboard admin BarberPro: booking hari ini, estimasi pendapatan, menunggu konfirmasi, barber tersibuk"
                loading="lazy"
              />
            </div>
            <div className="bp-cred">
              <span>Masuk sebagai owner di demo:</span>
              <code>demo@gmail.com</code>
              <code>barberpro</code>
            </div>
            <div className="bp-btns">
              <a
                className="btn btn-acc"
                href="https://barberpro.rrdevs.my.id/admin/login"
                target="_blank" rel="noreferrer"
                onClick={() => track('click_demo_admin', { from: 'barberpro_section' })}
              >
                Login dashboard owner <span className="btn-arrow">→</span>
              </a>
              <a
                className="btn btn-ghost"
                href="https://barberpro.rrdevs.my.id"
                target="_blank" rel="noreferrer"
                onClick={() => track('click_demo', { from: 'barberpro_section' })}
              >
                Coba sebagai pelanggan →
              </a>
            </div>
          </div>
        </div>

        <p className="bp-punch">// tanpa balas chat · tanpa buku tulis · tanpa "maaf kak, jamnya sudah terisi"</p>

        <div className="bp-ctas">
          <a
            className="btn btn-acc"
            href="https://barberpro.rrdevs.my.id"
            target="_blank" rel="noreferrer"
            onClick={() => track('click_demo', { from: 'barberpro_cta' })}
          >
            Coba demo live <span className="btn-arrow">→</span>
          </a>
          <a
            className="btn btn-ghost"
            href={waLink(WA_MSG)}
            target="_blank" rel="noreferrer"
            onClick={() => track('click_wa', { from: 'barberpro_cta' })}
          >
            Tanya lewat WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}