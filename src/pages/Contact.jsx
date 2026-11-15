import { useState } from 'react'
import { PageHero } from '../components/Sections.jsx'
import { FadeUp } from '../components/Reveal.jsx'
import { IMG } from '../data/content.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.target))
    // Replace with your CRM / form endpoint (Formspree, HubSpot, API route, etc.).
    const body = Object.entries(f).map(([k, v]) => `${k}: ${v}`).join('\n')
    window.location.href = `mailto:hello@maharajandco.com?subject=Wedding Enquiry — ${encodeURIComponent(f.name || '')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Begin the <em>conversation</em></>} img={IMG.couple} label="Contact" />
      <section className="section container contact">
        <FadeUp><p className="lead">Share a few details and a member of our senior team will respond personally within 48 hours.</p></FadeUp>
        {sent ? <p className="thanks">Thank you. We look forward to speaking with you.</p> : (
          <form onSubmit={submit} className="form">
            <label>Full name<input name="name" required /></label>
            <label>Email<input name="email" type="email" required /></label>
            <label>Phone<input name="phone" type="tel" /></label>
            <label>Preferred destination
              <select name="destination" defaultValue="Rajasthan"><option>Rajasthan</option><option>Elsewhere in India</option><option>International</option><option>Undecided</option></select>
            </label>
            <label>Approximate guests<select name="guests" defaultValue="200–400"><option>Under 150</option><option>150–200</option><option>200–400</option><option>400–800</option><option>800+</option></select></label>
            <label>Tentative dates<input name="dates" placeholder="e.g. Feb 2027" /></label>
            <label className="full">Tell us about your vision<textarea name="vision" rows="5" /></label>
            <button className="btn btn-dark full" type="submit">Send Enquiry</button>
          </form>
        )}
      </section>
    </>
  )
}
