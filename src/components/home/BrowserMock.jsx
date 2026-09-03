import { useState } from 'react'
import { DEMOS } from '../../data/content'

export default function BrowserMock() {
  const [i, setI] = useState(0)
  const d = DEMOS[i]

  return (
    <div className="browser">
      <div className="b-bar">
        <span className="b-dots"><i /><i /><i /></span>
        <div className="b-tabs">
          {DEMOS.map((x, idx) => (
            <button key={x.id} className={idx === i ? 'on' : ''} onClick={() => setI(idx)}>
              {x.short}
            </button>
          ))}
        </div>
      </div>
       {/* <div className="b-url">
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="5" width="8" height="6" rx="1" stroke="currentColor" /><path d="M3 5V3.5a2 2 0 0 1 4 0V5" stroke="currentColor" /></svg>
        rrdevs.my.id/{d.id}
      </div> */}
      <div className="b-site" key={d.id} style={{ '--acc': d.accent, '--soft': d.soft }}>
        <div className="mn-nav">
          <b>{d.brand}</b>
          <div className="mn-links">
            {d.nav.map((x) => <span key={x}>{x}</span>)}
            <span className="mn-cta">{d.cta}</span>
          </div>
        </div>
        <div className="mn-hero">
          <div className="mn-copy">
            <h5>{d.headline}</h5>
            <p>{d.sub}</p>
            <span className="mn-btn">{d.cta} →</span>
          </div>
          <img src={d.urlImages} loading="eager" fetchPriority="high" alt={`Contoh website ${d.brand}`} width="420" height="300" />
        </div>
        <div className="mn-feats">
          {d.feats.map((f) => <span key={f}>✦ {f}</span>)}
        </div>
      </div>
      <div className="chip-f chip-a">⚡ Jadi dalam 7 hari</div>
      <div className="chip-f chip-b">✓ Gratis domain + hosting</div>
      <svg className="spin-badge" viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <path id="circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text><textPath href="#circ">UMKM GO DIGITAL ✦ RR DEVS ✦ </textPath></text>
        <text x="60" y="68" className="spin-core">↗</text>
      </svg>
    </div>
  )
}