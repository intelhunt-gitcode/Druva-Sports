import { useState, type FormEvent } from 'react'
import { CheckCircle2, Phone, MessageCircle, Mail, Send } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { CONTACT } from '@/config/site'
import { SCHEDULES } from '@/config/pricing'
import { submitLead, type Lead } from '@/lib/leads'
import { WHATSAPP_LINKS, telUrl } from '@/lib/whatsapp'
import { track } from '@/lib/analytics'

const PLAYER_TYPES = ['Kid', 'Adult', 'Beginner', 'Intermediate', 'Advanced']
const LOCATIONS = ['Madhura Nagar', 'Shuttle Park', 'Not Sure']
const BATCHES = [...SCHEDULES.shuttlePark.batches.map((b) => `${b.name} · ${b.time}`), 'Flexible / Not sure']

const EMPTY: Lead = { name: '', phone: '', playerAge: '', playerType: '', location: '', batch: '', message: '' }

export function ContactForm() {
  const [form, setForm] = useState<Lead>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')
  const [touched, setTouched] = useState(false)

  const update = (k: keyof Lead) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (!touched) {
      setTouched(true)
      track('trial_form_start')
    }
    setForm((f) => ({ ...f, [k]: e.target.value }))
  }

  const valid = form.name.trim() && /\d{7,}/.test(form.phone.replace(/\D/g, ''))

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!valid) return
    setStatus('sending')
    const res = await submitLead(form)
    track('trial_form_submit', { via: res.via, location: form.location, player_type: form.playerType })
    setStatus('done')
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <Reveal className="contact__aside">
          <span className="eyebrow">Get in Touch</span>
          <h2 className="section-title">Ready to Start Your Badminton Journey?</h2>
          <p className="contact__lead">
            Tell us a little about the player and your preferred location — we'll help you pick the right
            batch and arrange a free trial.
          </p>

          <ul className="contact__methods">
            <li>
              <a href={telUrl(CONTACT.office.phone)} onClick={() => track('phone_click', { source: 'contact' })}>
                <span className="contact__method-ic"><Phone aria-hidden="true" /></span>
                <span><small>Office</small>{CONTACT.office.display}</span>
              </a>
            </li>
            <li>
              <a href={telUrl(CONTACT.coach.phone)} onClick={() => track('phone_click', { source: 'contact_coach' })}>
                <span className="contact__method-ic"><Phone aria-hidden="true" /></span>
                <span><small>Coach</small>{CONTACT.coach.display}</span>
              </a>
            </li>
            <li>
              <a href={WHATSAPP_LINKS.general()} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click', { source: 'contact' })}>
                <span className="contact__method-ic contact__method-ic--wa"><MessageCircle aria-hidden="true" /></span>
                <span><small>WhatsApp</small>Chat with us</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`}>
                <span className="contact__method-ic"><Mail aria-hidden="true" /></span>
                <span><small>Email</small>{CONTACT.email}</span>
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal className="contact__form-wrap" delay={120}>
          {status === 'done' ? (
            <div className="contact__success" role="status">
              <CheckCircle2 aria-hidden="true" />
              <h3>Thank you! 🎉</h3>
              <p>
                Your enquiry has been started. Our team will reach out shortly to confirm your free trial and
                batch. For a faster response, message us on WhatsApp.
              </p>
              <a href={WHATSAPP_LINKS.trial()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                <MessageCircle aria-hidden="true" /> Continue on WhatsApp
              </a>
            </div>
          ) : (
            <form className="contact__form" onSubmit={onSubmit} noValidate>
              <h3 className="contact__form-title">Meet Your Coach🏸</h3>

              <div className="field">
                <label htmlFor="cf-name">Name<span aria-hidden="true">*</span></label>
                <input id="cf-name" type="text" required autoComplete="name" value={form.name} onChange={update('name')} placeholder="Player / parent name" />
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="cf-phone">Phone Number<span aria-hidden="true">*</span></label>
                  <input id="cf-phone" type="tel" required inputMode="tel" autoComplete="tel" value={form.phone} onChange={update('phone')} placeholder="10-digit mobile number" />
                </div>
                <div className="field">
                  <label htmlFor="cf-age">Player Age</label>
                  <input id="cf-age" type="text" inputMode="numeric" value={form.playerAge} onChange={update('playerAge')} placeholder="e.g. 9" />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="cf-type">Player Type</label>
                  <select id="cf-type" value={form.playerType} onChange={update('playerType')}>
                    <option value="">Select…</option>
                    {PLAYER_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="cf-loc">Preferred Location</label>
                  <select id="cf-loc" value={form.location} onChange={update('location')}>
                    <option value="">Select…</option>
                    {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="cf-batch">Preferred Batch</label>
                <select id="cf-batch" value={form.batch} onChange={update('batch')}>
                  <option value="">Select…</option>
                  {BATCHES.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div className="field">
                <label htmlFor="cf-msg">Message</label>
                <textarea id="cf-msg" rows={3} value={form.message} onChange={update('message')} placeholder="Anything you'd like us to know?" />
              </div>

              <button type="submit" className="btn btn--primary btn--block" disabled={status === 'sending' || !valid}>
                {status === 'sending' ? 'Sending…' : <><Send aria-hidden="true" /> Meet Your Coach🏸</>}
              </button>
              <p className="contact__form-hint">We'll never share your details. By submitting you agree to be contacted about coaching.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
