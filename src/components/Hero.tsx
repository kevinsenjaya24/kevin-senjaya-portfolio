'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ChevronDown, Mail, Phone, MapPin, Terminal } from 'lucide-react'
import { personalInfo } from '@/data/resume'

const roles = personalInfo.roles

const PARTICLES = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  r: Math.random() * 1.2 + 0.4,
  dur: Math.random() * 8 + 5,
  delay: Math.random() * 5,
  op: Math.random() * 0.2 + 0.04,
}))

function OrbitalRings() {
  return (
    <div className="relative w-36 h-36 mx-auto mb-8 flex items-center justify-center select-none">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-sky-800 to-indigo-900 shadow-[0_0_16px_rgba(14,165,233,0.25)]"
      />
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
        className="absolute w-20 h-20 rounded-full border border-sky-900/40">
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-sky-600/80 shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
      </motion.div>
      <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 11, ease: 'linear' }}
        className="absolute w-32 h-32 rounded-full border border-dashed border-indigo-900/30">
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-indigo-800/70 shadow-[0_0_10px_rgba(99,102,241,0.4)]" />
      </motion.div>
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="absolute w-36 h-36 rounded-full border border-slate-800/20">
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sky-900/60" />
      </motion.div>
      <Terminal className="relative z-10 w-3.5 h-3.5 text-sky-700/80" />
    </div>
  )
}

const TERM_LINES = [
  { text: '> Initializing portfolio...', col: 'text-slate-700', delay: 0 },
  { text: '> Loading Kevin Senjaya', col: 'text-sky-800', delay: 0.5 },
  { text: '> Status: Available ✓', col: 'text-emerald-900', delay: 1 },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const sX = useSpring(mouseX, { stiffness: 40, damping: 18 })
  const sY = useSpring(mouseY, { stiffness: 40, damping: 18 })
  const b1x = useTransform(sX, [-1, 1], [-50, 50])
  const b1y = useTransform(sY, [-1, 1], [-50, 50])
  const b2x = useTransform(sX, [-1, 1], [35, -35])
  const b2y = useTransform(sY, [-1, 1], [25, -25])

  useEffect(() => {
    const current = roles[roleIndex]
    if (!isDeleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200)
      return
    }
    if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
      return
    }
    timeoutRef.current = setTimeout(() => {
      setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1))
    }, isDeleting ? 38 : 78)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [displayed, isDeleting, roleIndex])

  const handleScroll = () => {
    const container = document.getElementById('scroll-root')
    if (container) container.scrollTo({ top: container.clientHeight, behavior: 'smooth' })
  }

  return (
    <section
      className="relative h-full flex items-center justify-center overflow-hidden bg-[#02040a]"
      onMouseMove={(e) => {
        mouseX.set((e.clientX / window.innerWidth - 0.5) * 2)
        mouseY.set((e.clientY / window.innerHeight - 0.5) * 2)
      }}
    >
      {/* SVG grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025]">
        <defs>
          <pattern id="g" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)" />
      </svg>

      {/* Radial vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 75% 65% at 50% 50%, transparent 0%, #02040a 100%)' }} />

      {/* Blobs */}
      <motion.div style={{ x: b1x, y: b1y }} className="absolute -top-80 -left-80 w-[700px] h-[700px] pointer-events-none">
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
          className="w-full h-full rounded-full bg-sky-950/25 blur-[160px]" />
      </motion.div>
      <motion.div style={{ x: b2x, y: b2y }} className="absolute -bottom-60 -right-60 w-[600px] h-[600px] pointer-events-none">
        <motion.div animate={{ scale: [1, 1.07, 1] }} transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut', delay: 4 }}
          className="w-full h-full rounded-full bg-violet-950/20 blur-[140px]" />
      </motion.div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map(({ id, x, y, r, dur, delay, op }) => (
          <motion.div key={id} className="absolute rounded-full bg-sky-500"
            style={{ left: `${x}%`, top: `${y}%`, width: r * 2, height: r * 2, opacity: op }}
            animate={{ y: [0, -18, 6, 0], opacity: [op, op * 3.5, op, op * 0.4] }}
            transition={{ repeat: Infinity, duration: dur, delay, ease: 'easeInOut' }} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <OrbitalRings />
        </motion.div>

        {/* Terminal lines */}
        <div className="mb-8 font-mono text-[11px] space-y-1 text-left max-w-[220px] mx-auto">
          {TERM_LINES.map(({ text, col, delay }) => (
            <motion.div key={text} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay, duration: 0.4 }} className={`${col} tracking-wider`}>
              {text}
            </motion.div>
          ))}
        </div>

        {/* Status badge */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#060d1a] border border-slate-800/50 text-slate-500 text-[11px] font-medium">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative rounded-full h-1.5 w-1.5 bg-emerald-700" />
          </span>
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none text-white mb-4">
          Kevin <span className="gradient-text">Senjaya</span>
        </motion.h1>

        {/* Typing */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}
          className="h-8 flex items-center justify-center mb-5">
          <span className="text-base sm:text-lg font-mono text-slate-600 tracking-wide">
            <span className="text-slate-700 mr-1.5">&gt;</span>{displayed}
            <span className="text-sky-800" style={{ animation: 'blink 0.8s step-end infinite' }}>▌</span>
          </span>
        </motion.div>

        {/* Contact pills */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { icon: <Mail className="w-3 h-3" />, label: personalInfo.contact.email, href: personalInfo.contact.emailHref },
            { icon: <Phone className="w-3 h-3" />, label: personalInfo.contact.phone, href: personalInfo.contact.phoneHref },
            { icon: <MapPin className="w-3 h-3" />, label: personalInfo.contact.location, href: null },
          ].map(({ icon, label, href }) =>
            href ? (
              <motion.a key={label} href={href} whileHover={{ scale: 1.04 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#060d1a] border border-slate-800/50 text-slate-600 text-[11px] hover:text-slate-400 hover:border-slate-700/50 transition-colors">
                {icon}{label}
              </motion.a>
            ) : (
              <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#060d1a] border border-slate-800/30 text-slate-700 text-[11px]">
                {icon}{label}
              </span>
            )
          )}
        </motion.div>

        {/* Scroll hint */}
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
          onClick={handleScroll}
          className="flex flex-col items-center gap-2 text-slate-800 hover:text-slate-600 transition-colors group">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase">explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
