'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '@/data/resume'
import { Mail, Phone, MapPin, Copy, Check, MessageCircle } from 'lucide-react'

function CopyBtn({ text }: { text: string }) {
  const [done, setDone] = useState(false)
  return (
    <button onClick={() => { navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 2000) }}
      className="p-1 rounded text-slate-700 hover:text-sky-600 transition-colors">
      {done ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
    </button>
  )
}

export default function ContactPanel() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 lg:p-12 text-center">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0 }}
        className="text-[11px] font-mono text-sky-800 tracking-widest uppercase mb-5">05 / Contact</motion.p>

      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
        className="text-3xl sm:text-4xl font-black text-white mb-2 leading-tight">
        Let&apos;s <span className="gradient-text">Work Together</span>
      </motion.h2>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="text-slate-600 text-sm max-w-sm mb-10">
        Open to full-time roles, freelance projects, or just a great technical conversation.
      </motion.p>

      {/* Contact cards */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="grid grid-cols-3 gap-4 mb-10 w-full max-w-lg">
        {[
          { icon: <Mail className="w-5 h-5" />, label: 'Email', value: personalInfo.contact.email, href: personalInfo.contact.emailHref, copy: personalInfo.contact.email },
          { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: personalInfo.contact.phone, href: personalInfo.contact.phoneHref, copy: personalInfo.contact.phone },
          { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: personalInfo.contact.location, href: null, copy: null },
        ].map(({ icon, label, value, href, copy }) => (
          <motion.div key={label} whileHover={{ y: -4, borderColor: 'rgba(30,58,138,0.35)' }}
            className="bg-[#060c1a] border border-slate-800/30 rounded-2xl p-4 text-center transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-sky-950/40 border border-sky-900/20 flex items-center justify-center text-sky-700 mx-auto mb-3 group-hover:bg-sky-950/60 transition-colors">
              {icon}
            </div>
            <p className="text-slate-700 text-[10px] font-medium mb-1 uppercase tracking-wider">{label}</p>
            <div className="flex items-center justify-center gap-1">
              {href ? (
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="text-slate-400 text-[11px] hover:text-sky-500 transition-colors break-all leading-relaxed">
                  {value}
                </a>
              ) : (
                <span className="text-slate-500 text-[11px] leading-relaxed">{value}</span>
              )}
              {copy && <CopyBtn text={copy} />}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row justify-center gap-3">
        <motion.a href={personalInfo.contact.emailHref}
          whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(30,58,138,0.25)' }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#080f24] border border-indigo-900/50 text-slate-300 font-semibold text-sm hover:border-indigo-800/70 hover:text-slate-200 transition-all">
          <Mail className="w-4 h-4" /> Send an Email
        </motion.a>
        <motion.a
          href={`https://wa.me/62${personalInfo.contact.phone.replace(/^0/, '')}?text=Hi Kevin, I found your portfolio!`}
          target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-transparent border border-slate-800/50 text-slate-600 font-semibold text-sm hover:text-slate-400 hover:border-slate-700/60 transition-all">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </motion.a>
      </motion.div>
    </div>
  )
}
