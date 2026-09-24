import Reveal from '../components/ui/Reveal'

export default function About() {
  return (
    <section className="sec about" id="tentang">
      <div className="wrap about-grid">
        <Reveal className="about-copy">
          <p className="kick"><span>(01)</span> — Tentang Kami</p>
          <h2 className="h2">Dua sahabat, satu fokus: <br />sistem booking yang benar-benar dipakai.</h2>
          <p className="about-text">
            RR Devs lahir dari dua sahabat — <b>Rafael</b> & <b>Rendy</b> — yang percaya barbershop dan UMKM Indonesia
            layak punya sistem milik sendiri, <mark>bukan numpang aplikasi orang</mark>. Fokus kami: sistem booking
            yang membuat pelanggan pilih jam sendiri, slot terkunci otomatis, dan owner pegang kendali penuh atas datanya.
          </p>
          <p className="about-text">
            Selain itu kami tetap mengerjakan landing page, company profile, dan website custom — tapi kalimat pertama
            kami selalu sama: <b>bukti, bukan janji</b>. Sejak awal 2026 kami merilis satu sistem booking production
            (BarberPro), satu klien nyata yang masih live, dan menyusun 20+ audit digital barbershop Jabodetabek.
          </p>
          <p className="about-code">// dua kepala, satu commit: kepuasan klien.</p>
        </Reveal>
        <div className="about-duo">
          <Reveal delay={120} className="founder f-a">
            <img src="images/rafael.jpg" alt="Rafael, co-founder RR Devs" loading="lazy" />
            <div className="founder-cap"><b>Rafael</b><small>Full-Stack Developer · Pembangun BarberPro System</small></div>
          </Reveal>
          <Reveal delay={260} className="founder f-b">
            <img src="images/rendy.jpg" alt="Rendy, co-founder RR Devs" loading="lazy" width="640" height="800" />
            <div className="founder-cap"><b>Rendy</b><small>Full-Stack Developer · Sistem & Infrastruktur</small></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
