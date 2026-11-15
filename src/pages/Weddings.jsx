import { PageHero, Stories, Gallery, Testimonials, FinalCTA } from '../components/Sections.jsx'
import { IMG } from '../data/content.js'
export default function Weddings() {
  return (<><PageHero eyebrow="Weddings" title={<>Celebrations we are <em>proud</em> of</>} img={IMG.mandap} label="Weddings" /><Stories /><Gallery /><Testimonials /><FinalCTA /></>)
}
