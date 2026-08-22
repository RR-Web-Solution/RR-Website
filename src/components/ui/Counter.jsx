import { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView'
import { prefersReduced } from '../../utils/motion'

export default function Counter({ to, suffix = '', duration = 1400 }) {
  const [ref, inView] = useInView(0.5)
  const [n, setN] = useState(() => (prefersReduced() ? to : 0))

  useEffect(() => {
    if (!inView) return
    if (prefersReduced()) { setN(to); return }
    let raf, start = null
    const tick = (t) => {
      if (start === null) start = t
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return <span ref={ref}>{n}{suffix}</span>
}