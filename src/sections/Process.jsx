import Reveal from '../components/ui/Reveal'
import SectionHead from '../components/ui/SectionHead'
import { PROCESS } from '../data/content'

export default function Process() {
  return (
    <section className="sec process">
      <div className="wrap">
        <SectionHead no="04" kicker="Cara Kerja" title="Dari chat sampai launch dalam 4 langkah" />
        <div className="proc-grid">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 100}>
              <div className="proc">
                <span className="proc-n">{p.n}</span>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}