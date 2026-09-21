import { useEffect, useState } from 'react'
import { prefersReduced } from '../../utils/motion'

const GLYPHS = '█▓▒░#%&@*+=?/'

export default function Scramble({ text, delay = 0 }) {
  const [val, setVal] = useState(() => (prefersReduced() ? text : '\u00A0'))

  useEffect(() => {
    if (prefersReduced()) { setVal(text); return }
    let raf, start = null
    const dur = 950
    const tick = (t) => {
      if (start === null) start = t
      const p = Math.min(1, (t - start - delay) / dur)
      if (p < 0) { raf = requestAnimationFrame(tick); return }
      const reveal = Math.floor(p * text.length)
      let s = text.slice(0, reveal)
      for (let i = reveal; i < text.length; i++) {
        s += text[i] === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      }
      setVal(s)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [text, delay])

  return <span className="scramble">{val}</span>
}