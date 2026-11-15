import { Hero, Intro, RajasthanSection, Experiences, Destinations, Venues, Stories, Approach, Gallery, Testimonials, FinalCTA } from '../components/Sections.jsx'
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => { document.title = 'Maharaj & Co. — Luxury Destination Weddings in Rajasthan & Beyond' }, [])
  return (<><Hero /><Intro /><RajasthanSection /><Experiences /><Destinations /><Venues /><Stories limit={2} /><Approach /><Gallery /><Testimonials /><FinalCTA /></>)
}
