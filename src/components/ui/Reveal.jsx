import { useInView } from '../../hooks/useInView'

export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, on] = useInView()
  return (
    <div ref={ref} className={`rv ${on ? 'on' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}