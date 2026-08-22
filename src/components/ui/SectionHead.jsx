import Reveal from './Reveal'

export default function SectionHead({ no, kicker, title, desc }) {
  return (
    <div className="sechead">
      <Reveal>
        <p className="kick"><span>({no})</span> — {kicker}</p>
      </Reveal>
      <div className="sechead-row">
        <Reveal delay={80}><h2 className="h2">{title}</h2></Reveal>
        {desc && <Reveal delay={160}><p className="sechead-desc">{desc}</p></Reveal>}
      </div>
    </div>
  )
}