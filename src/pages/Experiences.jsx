import { PageHero, Experiences as E, Approach, FinalCTA } from '../components/Sections.jsx'
import { IMG } from '../data/content.js'
export default function Experiences() {
  return (<><PageHero eyebrow="Experiences" title={<>Hospitality, <em>choreographed</em></>} img={IMG.table} label="Experiences" /><E compact={false} /><Approach /><FinalCTA /></>)
}
