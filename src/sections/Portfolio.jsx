import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import SectionHead from '../components/ui/SectionHead'
import { PORTFOLIO, waLink, WA_MSG_BARBER, track } from '../data/content'

export default function Portfolio() {
  return (
    <section className="sec portfolio" id="portofolio">
      <div className="wrap">
        <SectionHead no="06" kicker="Portofolio" title="Karya yang sudah kami rilis" desc="Setiap proyek dilabeli jujur: sistem siap pakai, proyek live klien, atau demo desain. Scroll pelan-pelan." />
        <div className="pf-list">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.title}>
              <div className={`pf-row ${i % 2 ? 'rev' : ''}`}>
                <div className="pf-img">
                  <img src={p.imageUrl} loading="lazy" aria-hidden="true" alt="" className="pf-bg" />
                  <img src={p.imageUrl} alt={`Website ${p.title}`} loading="lazy" className="pf-fg" />
                  <span className="pf-tag">{p.type}</span>
                </div>
                <div className="pf-info">
                  <p className="pf-meta">{String(i + 1).padStart(2, '0')} · {p.year}</p>
                  {p.kindLabel && <span className={`pf-kind pf-kind-${p.kind}`}>{p.kindLabel}</span>}
                  {p.moving ? <h3>{p.title}</h3> : (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer"><h3>{p.title}</h3></a>
                  )}
                  <p>{p.desc}</p>
                  {p.demoCred && <p className="pf-cred">{p.demoCred}</p>}
                  <div className="pf-tags">{p.tags.map((t) => (<span key={t}>{t}</span>))}</div>
                  <div className="pf-metric">
                    <b>{p.metric}</b>
                    <small>{p.metricLabel}</small>
                  </div>
                  {p.moving ? (
                    <Link className="pf-disabled" to="/portofolio/digital-printing">Sedang dipindah hosting — lihat status →</Link>
                  ) : (
                    <a
                      href={p.kind === 'product' ? waLink(WA_MSG_BARBER) : waLink(`Halo, saya mau website seperti ${p.title}. Bisa dibantu?`)}
                      target="_blank" rel="noreferrer"
                      onClick={() => track('click_portfolio_cta', { project: p.title })}
                    >
                      {p.kind === 'product' ? 'Mau sistem ini untuk toko kamu? →' : 'Mau seperti ini? Ceritakan bisnismu →'}
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
