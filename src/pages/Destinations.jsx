import { PageHero, RajasthanSection, Destinations as D, Venues, FinalCTA } from '../components/Sections.jsx'
import { IMG } from '../data/content.js'
export default function Destinations() {
  return (<><PageHero eyebrow="Destinations" title={<>A world of <em>exceptional</em> settings</>} img={IMG.jodhpur} label="Destinations" /><RajasthanSection /><D showTabs /><Venues /><FinalCTA /></>)
}
