import { PageHero, Intro, Approach, Testimonials, FinalCTA } from '../components/Sections.jsx'
import { FadeUp } from '../components/Reveal.jsx'
import { IMG } from '../data/content.js'
export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title={<>A house built on <em>heritage</em></>} img={IMG.udaipur} label="About" />
      <Intro />
      <section className="section container narrow">
        <FadeUp><p className="lead">Founded in Rajasthan, Maharaj & Co. grew from a simple belief: the place of a wedding shapes its soul. Over the years, our teams have built enduring relationships with palace families, artisans and hoteliers — giving our clients access, discretion and a depth of local knowledge that cannot be replicated.</p></FadeUp>
        <FadeUp delay={0.1}><p className="lead">Today we plan a small number of celebrations each year, so every one receives the attention of our senior team.</p></FadeUp>
      </section>
      <Approach /><Testimonials /><FinalCTA />
    </>
  )
}
