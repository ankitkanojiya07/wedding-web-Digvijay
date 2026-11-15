import { motion } from 'framer-motion'
export function FadeUp({ children, delay = 0, y = 32, className = '', as = 'div' }) {
  const M = motion[as]
  return <M className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</M>
}
// Curtain-style image reveal
export function ImageReveal({ children, className = '' }) {
  return (
    <motion.div className={`reveal ${className}`} initial={{ clipPath: 'inset(0 0 100% 0)' }} whileInView={{ clipPath: 'inset(0 0 0% 0)' }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 1.3, ease: [0.77, 0, 0.175, 1] }}>
      {children}
    </motion.div>
  )
}
export function Heading({ eyebrow, title, align = 'left', light = false, children }) {
  return (
    <div className={`heading ${align} ${light ? 'light' : ''}`}>
      {eyebrow && <FadeUp><span className="eyebrow">{eyebrow}</span></FadeUp>}
      <FadeUp delay={0.1} as="h2"><span className="h2">{title}</span></FadeUp>
      {children && <FadeUp delay={0.2}><p className="lead">{children}</p></FadeUp>}
    </div>
  )
}
