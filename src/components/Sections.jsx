import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Img from './Img.jsx'
import { FadeUp, ImageReveal, Heading } from './Reveal.jsx'
import { IMG, RAJASTHAN, SERVICES, INDIA, INTERNATIONAL, VENUES, STORIES, APPROACH, GALLERY, TESTIMONIALS } from '../data/content.js'

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const op = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-media" style={{ y }}>
        <motion.div initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }} style={{ height: '100%' }}>
          <Img src={IMG.hero} alt="A royal lake palace in Udaipur at dusk" eager label="Udaipur" />
        </motion.div>
        <div className="hero-shade" />
      </motion.div>
      <motion.div className="hero-content" style={{ opacity: op }}>
        <motion.span className="eyebrow light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>Luxury Destination Weddings · Rajasthan & Beyond</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}>
          Where palaces become <em>poetry</em>
        </motion.h1>
        <motion.div className="hero-cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}>
          <Link to="/contact" className="btn btn-light">Plan Your Wedding</Link>
          <Link to="/destinations" className="btn btn-ghost">Explore Destinations</Link>
        </motion.div>
      </motion.div>
      <div className="scroll-cue"><span /></div>
    </section>
  )
}

export function Intro() {
  return (
    <section className="section intro container">
      <FadeUp><span className="eyebrow">The House</span></FadeUp>
      <FadeUp delay={0.1} as="p"><span className="statement">Celebrations shaped around <em>place, culture</em> and the people you love.</span></FadeUp>
      <FadeUp delay={0.2}><p className="lead center">We are a bespoke wedding house for families who expect the extraordinary — composing multi-day celebrations within India’s most storied palaces, and the world’s most exceptional settings.</p></FadeUp>
    </section>
  )
}

export function RajasthanSection({ full = false }) {
  const [active, setActive] = useState(0)
  return (
    <section className="section raj">
      <div className="container">
        <Heading eyebrow="The Signature Destination" title={<>Rajasthan, <em>the land of kings</em></>}>
          Lake palaces, sandstone forts and golden dunes — a living stage for celebrations of royal scale.
        </Heading>
      </div>
      <div className="raj-panels">
        {RAJASTHAN.map((r, i) => (
          <motion.article key={r.name} className={`raj-panel ${active === i ? 'active' : ''}`} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)} tabIndex={0} onFocus={() => setActive(i)}>
            <Img src={r.img} alt={`${r.name} wedding destination`} label={r.name} sizes="(max-width:900px) 100vw, 40vw" />
            <div className="panel-shade" />
            <div className="panel-body">
              <span className="eyebrow light">{r.tag}</span>
              <h3>{r.name}</h3>
              <p>{r.text}</p>
              <Link to="/destinations" className="link-light">Discover <ArrowRight size={14} /></Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export function Experiences({ compact = true }) {
  const [hover, setHover] = useState(null)
  const list = compact ? SERVICES : SERVICES
  return (
    <section className="section container exp">
      <div className="exp-grid">
        <div className="exp-side">
          <Heading eyebrow="Our Wedding Experiences" title={<>Every detail, <em>quietly perfected</em></>}>A single house for every element of your celebration.</Heading>
          <div className="exp-preview"><ImageReveal><Img src={[IMG.mandap, IMG.table, IMG.floral, IMG.couple][(hover ?? 0) % 4]} alt="Wedding experience" label="Experience" /></ImageReveal></div>
        </div>
        <ul className="exp-list">
          {list.map(([t, d], i) => (
            <motion.li key={t} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.8, delay: (i % 4) * 0.05 }}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <div><h4>{t}</h4><p>{d}</p></div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function DestCard({ d, i }) {
  return (
    <motion.article className="dest-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 1, delay: (i % 3) * 0.1 }}>
      <div className="dest-img"><Img src={d.img} alt={`${d.name} wedding destination`} label={d.name} sizes="(max-width:700px) 100vw, 33vw" /></div>
      <div className="dest-meta"><div><h4>{d.name}</h4><span>{d.tag}</span></div><ArrowUpRight size={18} /></div>
    </motion.article>
  )
}

export function Destinations({ showTabs = false }) {
  const [tab, setTab] = useState('india')
  const data = tab === 'india' ? INDIA : INTERNATIONAL
  return (
    <section className="section sand">
      <div className="container">
        <Heading eyebrow="Signature Destinations" title={<>Beyond Rajasthan, <em>a considered world</em></>}>Where India’s most extraordinary destinations — and a select few abroad — become the setting for unforgettable celebrations.</Heading>
        <div className="tabs" role="tablist">
          {[['india', 'Across India'], ['intl', 'International']].map(([k, l]) => (
            <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>{l}</button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={tab} className="dest-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            {data.map((d, i) => <DestCard key={d.name} d={d} i={i} />)}
          </motion.div>
        </AnimatePresence>
        {!showTabs && <div className="center mt"><Link to="/destinations" className="btn btn-dark">All Destinations</Link></div>}
      </div>
    </section>
  )
}

export function Venues() {
  return (
    <section className="section container">
      <Heading eyebrow="Luxury Venues" title={<>Palaces, forts <em>& private estates</em></>}>Access to venues that are rarely, if ever, opened for celebrations.</Heading>
      <div className="venue-grid">
        {VENUES.map((v, i) => (
          <motion.article key={v.name} className="venue" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 1, delay: (i % 2) * 0.12 }}>
            <div className="venue-img"><Img src={v.img} alt={v.name} label={v.name} sizes="(max-width:800px) 100vw, 50vw" /></div>
            <div className="venue-meta"><span className="eyebrow">{v.type} · {v.place}</span><h3>{v.name}</h3><span className="muted">{v.guests} guests</span></div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export function Stories({ limit }) {
  const items = limit ? STORIES.slice(0, limit) : STORIES
  return (
    <section className="section stories">
      <div className="container"><Heading eyebrow="Real Weddings" title={<>Stories, <em>told with restraint</em></>} /></div>
      {items.map((s, i) => (
        <div key={s.couple} className={`story container ${i % 2 ? 'flip' : ''}`}>
          <ImageReveal className="story-main"><Img src={s.img} alt={`${s.couple} wedding in ${s.place}`} label={s.couple} sizes="(max-width:900px) 100vw, 55vw" /></ImageReveal>
          <div className="story-text">
            <FadeUp><span className="eyebrow">{s.place}</span></FadeUp>
            <FadeUp delay={0.1} as="h3"><span className="h3">{s.couple}</span></FadeUp>
            <FadeUp delay={0.2}><dl><dt>Venue</dt><dd>{s.venue}</dd><dt>Concept</dt><dd>{s.concept}</dd></dl></FadeUp>
            <FadeUp delay={0.3}><div className="thumbs">{s.gallery.map((g, k) => <Img key={k} src={g} alt="" label="" sizes="15vw" />)}</div></FadeUp>
          </div>
        </div>
      ))}
    </section>
  )
}

export function Approach() {
  return (
    <section className="section dark">
      <div className="container">
        <Heading eyebrow="The Experience" title={<>Personal, <em>by design</em></>}>No two celebrations are alike. Ours begin with listening.</Heading>
        <div className="steps">
          {APPROACH.map(([t, d], i) => (
            <FadeUp key={t} delay={i * 0.12}><div className="step"><span className="num">0{i + 1}</span><h4>{t}</h4><p>{d}</p></div></FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Gallery() {
  return (
    <section className="section container">
      <Heading eyebrow="Gallery" title={<>Moments, <em>composed</em></>} />
      <div className="masonry">
        {GALLERY.map((g, i) => (
          <motion.figure key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.9, delay: (i % 3) * 0.08 }}>
            <Img src={g} alt="Luxury wedding moment" label="" sizes="(max-width:700px) 50vw, 33vw" style={{ aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '1/1' : '4/5' }} />
          </motion.figure>
        ))}
      </div>
    </section>
  )
}

export function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 7000); return () => clearInterval(t) }, [])
  const t = TESTIMONIALS[i]
  return (
    <section className="section testi">
      <div className="container center">
        <span className="eyebrow">Kind Words</span>
        <div className="quote-box">
          <AnimatePresence mode="wait">
            <motion.blockquote key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.7 }}>
              <p>“{t.quote}”</p>
              <footer>{t.by} <span>· {t.place}</span></footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="dots">{TESTIMONIALS.map((_, k) => <button key={k} aria-label={`Testimonial ${k + 1}`} className={k === i ? 'on' : ''} onClick={() => setI(k)} />)}</div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  return (
    <section className="cta" ref={ref}>
      <motion.div className="cta-bg" style={{ y }}><Img src={IMG.jaipur} alt="" label="" /><div className="hero-shade" /></motion.div>
      <div className="cta-content">
        <FadeUp as="h2"><span className="cta-title">Your celebration should be <em>unforgettable.</em></span></FadeUp>
        <FadeUp delay={0.15}><p>Begin planning your wedding.</p></FadeUp>
        <FadeUp delay={0.3}><Link to="/contact" className="btn btn-light">Begin the Conversation</Link></FadeUp>
      </div>
    </section>
  )
}

export function PageHero({ eyebrow, title, img, label }) {
  return (
    <section className="page-hero">
      <Img src={img} alt="" eager label={label} />
      <div className="hero-shade" />
      <div className="page-hero-text">
        <motion.span className="eyebrow light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>{eyebrow}</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>{title}</motion.h1>
      </div>
    </section>
  )
}
