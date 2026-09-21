import Reveal from '../components/ui/Reveal'
import SectionHead from '../components/ui/SectionHead'
import { TESTIMONIALS } from '../data/content'

export default function Testimonials() {
  return (
    <section className="sec testi">
      <div className="wrap">
        <SectionHead no="07" kicker="Testimoni" title="Kata mereka yang sudah go digital" />
        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className={`testi-card t${i}`}>
                <span className="stars">★★★★★</span>
                <blockquote>“{t.text}”</blockquote>
                <figcaption>
                  <span className="ava">
                     <img src={t.imageUrl} alt={`Foto ${t.name}`} loading="lazy" width="96" height="96" />
                  </span>
                  <div><b>{t.name}</b><small>{t.biz}</small></div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}