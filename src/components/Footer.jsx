import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo big">MAHARAJ <em>&</em> CO.</div>
          <p className="muted">Luxury destination weddings, shaped around place, culture and the people you love.</p>
        </div>
        <div><h4>Destinations</h4><Link to="/destinations">Rajasthan</Link><Link to="/destinations">India</Link><Link to="/destinations">International</Link></div>
        <div><h4>Studio</h4><Link to="/experiences">Experiences</Link><Link to="/weddings">Weddings</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link></div>
        <div>
          <h4>Enquiries</h4>
          <a href="mailto:hello@maharajandco.com">hello@maharajandco.com</a>
          <a href="tel:+911100000000">+91 11 0000 0000</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="ig"><Instagram size={16} /> Instagram</a>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Maharaj & Co. All rights reserved.</span><span>Udaipur · Jaipur · Delhi</span></div>
    </footer>
  )
}
