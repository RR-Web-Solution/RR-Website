import Reveal from '../components/ui/Reveal'
import { STATS } from '../data/content'

export default function About() {
  return (
    <section className="sec about" id="tentang">
      <div className="wrap about-grid">
        <Reveal className="about-copy">
          <p className="kick"><span>(01)</span> — Tentang Kami</p>
          <h2 className="h2">Dua sahabat, satu misi: <br />UMKM Indonesia naik kelas.</h2>
          <p className="about-text">
            RR Devs lahir dari dua sahabat — <b>Rafael</b> &amp; <b>Rendy</b> — yang percaya usaha kecil Indonesia{' '}
            <mark>layak tampil sekelas brand besar</mark> di internet. Kami merancang dan membangun website untuk UMKM:
            mulai dari landing page jualan, company profile, sampai website full custom 100%.
          </p>
          <p className="about-text">
              Sejak berdiri awal 2026, <b>0{STATS[0].value}+ website</b> telah kami rilis untuk jasa service AC,
              barbershop, kedai kopi, batik, percetakan, hingga firma arsitektur — semuanya live dan bisa kamu
              coba sendiri sekarang. Kami studio muda: setiap proyek dikerjakan langsung oleh founder,
              bukan dilempar ke tim lain.
          </p>
          <p className="about-code">// dua kepala, satu commit: kepuasan klien.</p>
        </Reveal>
        <div className="about-duo">
          <Reveal delay={120} className="founder f-a">
            <img src="images/rafael.jpg" alt="Rafael" loading="lazy" />
            <div className="founder-cap"><b>Rafael</b><small>Desain &amp; Front-End</small></div>
          </Reveal>
          <Reveal delay={260} className="founder f-b">
            <img src="images/raka-aditya.jpg" alt="Rendy, co-founder RR Devs" loading="lazy" width="640" height="800" />
            <div className="founder-cap"><b>Rendy</b><small>Back-End &amp; Strategi</small></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}