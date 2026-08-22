import { TICKER } from '../data/content'

export default function Ticker() {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((t, i) => <span key={i}>{t} <i>✦</i></span>)}
      </div>
    </div>
  )
}