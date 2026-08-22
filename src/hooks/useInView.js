import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.18) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          ob.disconnect()
        }
      },
      { threshold },
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [threshold])

  return [ref, inView]
}