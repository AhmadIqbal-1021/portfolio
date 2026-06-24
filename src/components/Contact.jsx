import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { personal } from '../data/portfolio'

// ─── YOUR CONTACT LINKS ───────────────────────────────────────────────────────
// Each item has an href — if href is set, the whole row becomes a clickable link
// that opens in a new tab. If href is null it's just a display row.
const contactItems = [
  {
    icon: '✉️',
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Lahore, Pakistan (Remote Available)',
    href: null,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: personal.github?.replace('https://', '') ?? personal.github,
    href: personal.github,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: personal.linkedin?.replace('https://', '') ?? personal.linkedin,
    href: personal.linkedin,
  },
  {
    icon: '🟢',
    label: 'Fiverr',
    value: personal.fiverr?.replace('https://', '') ?? personal.fiverr,
    href: personal.fiverr,
  },
  {
    icon: '🌐',
    label: 'Upwork',
    value: personal.upwork?.replace('https://', '') ?? personal.upwork,
    href: personal.upwork,
  },
]

// ─── EMAILJS SETUP ────────────────────────────────────────────────────────────
// 1. Go to https://emailjs.com and create a FREE account
// 2. Add an Email Service (Gmail recommended) → copy the Service ID
// 3. Create an Email Template → copy the Template ID
//    In the template body use these variables:
//      From: {{from_name}} ({{from_email}})
//      Message: {{message}}
//      Subject: {{subject}}
// 4. Go to Account → API Keys → copy your Public Key
// 5. Paste all three values below:
const EMAILJS_SERVICE_ID  = 'service_12dvqn9'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_ujvel1u'  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'oNxDGJdSatmbNISfD'   // e.g. 'aBcDeFgHiJkLmNoP'

export default function Contact() {
  // ── Form field state ─────────────────────────────────────────────────────
  const [fields, setFields] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  })

  // ── Submission state: idle | sending | success | error ───────────────────
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  // ── Update a single field ─────────────────────────────────────────────────
  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // ── Submit: send via EmailJS, then clear fields ───────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    // Basic validation — don't send empty form
    if (!fields.from_name || !fields.from_email || !fields.message) {
      setStatus('error')
      setErrorMsg('Please fill in Name, Email, and Message.')
      return
    }

    try {
      // EmailJS sends the email directly from the browser — no backend needed.
      // It loads their SDK from CDN on first use here.
      const emailjs = await loadEmailJS()

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  fields.from_name,
          from_email: fields.from_email,
          subject:    fields.subject || 'Portfolio Contact',
          message:    fields.message,
          to_email:   personal.email,   // where YOU receive it
        },
        EMAILJS_PUBLIC_KEY
      )

      // ✅ Success — clear all fields
      setFields({ from_name: '', from_email: '', subject: '', message: '' })
      setStatus('success')

      // Reset back to idle after 4 seconds
      setTimeout(() => setStatus('idle'), 4000)

    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setErrorMsg('Something went wrong. Please email me directly.')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="relative z-[1] py-24 px-[8%] bg-bg-2">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Let's Talk" title="Start a Project" accent="Project" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: contact info links ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-base text-text-2 leading-relaxed mb-8">
              Whether you need a Chrome extension, a web scraper, or a full-stack
              application — I'm open to new projects and collaborations. Let's
              build something that matters.
            </p>

            <div className="flex flex-col gap-4">
              {contactItems.map((item, i) => (
                <ContactRow key={item.label} item={item} index={i} />
              ))}
            </div>
          </motion.div>

          {/* ── Right: contact form ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  label="Your Name"
                  name="from_name"
                  type="text"
                  placeholder="John Smith"
                  value={fields.from_name}
                  onChange={handleChange}
                />
                <FormField
                  label="Email"
                  name="from_email"
                  type="email"
                  placeholder="john@company.com"
                  value={fields.from_email}
                  onChange={handleChange}
                />
              </div>

              <FormField
                label="Subject"
                name="subject"
                type="text"
                placeholder="Chrome Extension / Scraper / Full-Stack App"
                value={fields.subject}
                onChange={handleChange}
              />

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-widest text-text-3 uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project — what do you need built?"
                  value={fields.message}
                  onChange={handleChange}
                  className="bg-surface border border-border text-text px-4 py-3 font-sans text-sm rounded focus:border-accent outline-none resize-none transition-colors duration-200 placeholder:text-text-3"
                />
              </div>

              {/* Error message */}
              {status === 'error' && (
                <p className="font-mono text-xs text-accent-3">{errorMsg}</p>
              )}

              {/* Submit button — changes appearance based on status */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`px-8 py-3.5 font-mono text-xs tracking-widest uppercase font-bold rounded-sm border transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${
                  status === 'success'
                    ? 'bg-transparent text-accent border-accent'
                    : status === 'error'
                    ? 'bg-transparent text-accent-3 border-accent-3'
                    : 'bg-accent text-bg border-accent hover:bg-transparent hover:text-accent'
                }`}
              >
                {status === 'sending' && '⏳ Sending...'}
                {status === 'success' && '✓ Message Sent!'}
                {status === 'error'   && '✗ Try Again'}
                {status === 'idle'    && 'Send Message →'}
              </button>

              <p className="font-mono text-[10px] text-text-3">
                Powered by EmailJS — your email goes straight to my inbox.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ROW ──────────────────────────────────────────────────────────────
// If item.href exists → render as <a> (clickable, opens new tab)
// If item.href is null → render as <div> (just display)
function ContactRow({ item, index }) {
  const baseClasses =
    'contact-item flex items-center gap-4 px-5 py-4 bg-surface border border-border rounded transition-all duration-300 hover:bg-surface-2'

  const inner = (
    <>
      <div className="w-10 h-10 rounded bg-accent/[0.08] flex items-center justify-center text-lg flex-shrink-0">
        {item.icon}
      </div>
      <div>
        <div className="font-mono text-[10px] text-text-3 tracking-wide uppercase mb-0.5">
          {item.label}
        </div>
        <div className={`text-sm ${item.href ? 'text-accent' : 'text-text'}`}>
          {item.value}
        </div>
      </div>
      {/* Arrow indicator if clickable */}
      {item.href && (
        <div className="ml-auto text-text-3 text-xs">↗</div>
      )}
    </>
  )

  if (item.href) {
    return (
      <motion.a
        href={item.href}
        target={item.href.startsWith('mailto') ? '_self' : '_blank'}
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={{ x: 4, borderColor: '#00E5FF' }}
        className={`${baseClasses} cursor-pointer hover:border-accent`}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={baseClasses}
    >
      {inner}
    </motion.div>
  )
}

// ─── FORM FIELD ───────────────────────────────────────────────────────────────
// Controlled input — value comes from parent state, onChange updates parent state
function FormField({ label, name, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[10px] tracking-widest text-text-3 uppercase">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}           // controlled: always shows state value
        onChange={onChange}     // updates state on every keystroke
        className="bg-surface border border-border text-text px-4 py-3 font-sans text-sm rounded focus:border-accent outline-none transition-colors duration-200 placeholder:text-text-3"
      />
    </div>
  )
}

// ─── EMAILJS LAZY LOADER ──────────────────────────────────────────────────────
// Loads the EmailJS SDK from CDN only when the form is submitted.
// This avoids adding it as a dependency — works via script tag injection.
function loadEmailJS() {
  return new Promise((resolve, reject) => {
    // If already loaded, return immediately
    if (window.emailjs) {
      resolve(window.emailjs)
      return
    }
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    script.onload = () => resolve(window.emailjs)
    script.onerror = () => reject(new Error('EmailJS failed to load'))
    document.head.appendChild(script)
  })
}
