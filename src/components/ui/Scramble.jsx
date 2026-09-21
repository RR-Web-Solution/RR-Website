import { useEffect, useState } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#'

export default function Scramble({ text = '', delay = 0, className = '' }) {
  const [out, setOut] = useState(text)

  useEffect(() => {
    let interval = null
    let frame = 0
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        frame += 1
        const progress = Math.floor(frame / 2)
        setOut(
          text
            .split('')
            .map((c, i) => {
              if (i < progress) return c
              if (c === ' ') return ' '
              return CHARS[Math.floor(Math.random() * CHARS.length)]
            })
            .join('')
        )
        if (progress >= text.length) {
          clearInterval(interval)
          setOut(text)
        }
      }, 40)
    }, delay)
    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [text, delay])

  return (
    <span className={`scramble ${className}`.trim()}>
      {/* GHOST: teks final tak terlihat yang menahan lebar & tinggi tetap */}
      <span className="scramble-ghost" aria-hidden="true">{text}</span>
      {/* LIVE: teks glitch yang menimpa ghost tanpa mempengaruhi layout */}
      <span className="scramble-live">{out}</span>
    </span>
  )
}