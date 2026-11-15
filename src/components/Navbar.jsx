import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV } from '../data/content.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  const solid = scrolled || open
  return (
    <header className={`nav ${solid ? 'solid' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="logo" aria-label="Maharaj & Co. home">MAHARAJ <em>&</em> CO.</Link>
        <nav className="nav-links" aria-label="Primary">
          {NAV.map((n) => <NavLink key={n.to} to={n.to} end className="nav-link">{n.label}</NavLink>)}
        </nav>
        <Link to="/contact" className="nav-cta">Plan Your Wedding</Link>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {NAV.map((n, i) => (
              <motion.div key={n.to} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * i + 0.1 }}>
                <Link to={n.to}>{n.label}</Link>
              </motion.div>
            ))}
            <Link to="/contact" className="btn btn-gold">Plan Your Wedding</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
