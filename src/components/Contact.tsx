'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { personalInfo } from '@/data/resume'
import { Mail, Phone, MapPin, Copy, Check, MessageSquare } from 'lucide-react'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={copy}
      className="p-1.5 rounded-md text-slate-600 hover:text-sky-400 hover:bg-sky-900/40 transition-all"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  )
}

const contactItems = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: personalInfo.contact.email,
    href: personalInfo.contact.emailHref,
    copyValue: personalInfo.contact.email,
    desc: 'Best way to reach me',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'WhatsApp / Phone',
    value: personalInfo.contact.phone,
    href: `https://wa.me/62${personalInfo.contact.phone.replace(/^0/, '')}`,
    copyValue: personalInfo.contact.phone,
    desc: 'Available on WhatsApp',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    value: personalInfo.contact.location,
    href: null,
    copyValue: null,
    desc: 'Open to remote & relocation',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="relative py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-sky-950/30 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-violet-500/6 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
            05. Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Let&apos;s{' '}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base">
            Have a project in mind or want to discuss backend architecture? I&apos;m always open to
            interesting conversations and collaboration.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {contactItems.map(({ icon, label, value, href, copyValue, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-5 text-center group hover:border-sky-700/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-800/40 to-violet-800/20 flex items-center justify-center text-sky-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {icon}
                </div>
                <p className="text-slate-500 text-xs font-medium mb-1">{label}</p>
                <div className="flex items-center justify-center gap-1.5">
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-white font-semibold text-sm hover:text-sky-400 transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-white font-semibold text-sm">{value}</span>
                  )}
                  {copyValue && <CopyButton text={copyValue} />}
                </div>
                <p className="text-slate-600 text-xs mt-2">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-8 sm:p-10 text-center border-sky-800/20 hover:border-sky-700/30 transition-all"
          >
            <MessageSquare className="w-10 h-10 text-sky-400 mx-auto mb-5" />
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">
              Ready to start a conversation?
            </h3>
            <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
              Whether it&apos;s a full-time role, freelance project, or just a technical discussion —
              feel free to reach out directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href={personalInfo.contact.emailHref}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#080f24] border border-indigo-900/50 text-slate-300 font-semibold text-sm hover:border-indigo-800/70 transition-all"
              >
                <Mail className="w-4 h-4" />
                Send an Email
              </motion.a>
              <motion.a
                href={`https://wa.me/62${personalInfo.contact.phone.replace(/^0/, '')}?text=Hi Kevin, I found your portfolio and would like to connect!`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-green-500/30 text-green-400 font-semibold text-sm hover:bg-green-500/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
