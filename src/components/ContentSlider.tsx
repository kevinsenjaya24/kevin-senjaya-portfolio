'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, type PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight, Code2 } from 'lucide-react'
import AboutPanel from './panels/AboutPanel'
import ExperiencePanel from './panels/ExperiencePanel'
import ProjectsPanel from './panels/ProjectsPanel'
import SkillsPanel from './panels/SkillsPanel'
import ContactPanel from './panels/ContactPanel'

const PANELS = [
  { id: 'about',      label: 'About',      shortLabel: '01', component: <AboutPanel /> },
  { id: 'experience', label: 'Experience', shortLabel: '02', component: <ExperiencePanel /> },
  { id: 'projects',   label: 'Projects',   shortLabel: '03', component: <ProjectsPanel /> },
  { id: 'skills',     label: 'Skills',     shortLabel: '04', component: <SkillsPanel /> },
  { id: 'contact',    label: 'Contact',    shortLabel: '05', component: <ContactPanel /> },
]

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
    filter: 'blur(6px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 60 : -60,
    opacity: 0,
    filter: 'blur(6px)',
    transition: { duration: 0.25, ease: [0.7, 0, 0.84, 0] },
  }),
}

export default function ContentSlider() {
  const [[current, dir], setSlide] = useState([0, 0])

  const goTo = useCallback((index: number) => {
    if (index === current) return
    setSlide([index, index > current ? 1 : -1])
  }, [current])

  const prev = useCallback(() => goTo(Math.max(0, current - 1)), [current, goTo])
  const next = useCallback(() => goTo(Math.min(PANELS.length - 1, current + 1)), [current, goTo])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  // Swipe handler
  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50 || info.velocity.x < -400) next()
    else if (info.offset.x > 50 || info.velocity.x > 400) prev()
  }

  return (
    <div className="h-full flex flex-col bg-[#02040a] relative overflow-hidden">
      {/* Background grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.015]">
        <defs>
          <pattern id="cg" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cg)" />
      </svg>

      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-sky-950/15 blur-[120px] pointer-events-none" />

      {/* ── Top bar ── */}
      <div className="flex-shrink-0 h-14 flex items-center justify-between px-6 border-b border-slate-800/30 relative z-10">
        {/* Logo */}
        <motion.button
          onClick={() => {
            const el = document.documentElement
            el.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2"
        >
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-700 to-indigo-900 flex items-center justify-center">
            <Code2 className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-black text-white text-sm tracking-tight">
            Kevin<span className="gradient-text">.</span>
          </span>
        </motion.button>

        {/* Section tabs */}
        <nav className="hidden sm:flex items-center gap-1">
          {PANELS.map(({ id, label }, i) => (
            <button key={id} onClick={() => goTo(i)}
              className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                current === i ? 'text-slate-200' : 'text-slate-600 hover:text-slate-400'
              }`}>
              {current === i && (
                <motion.div layoutId="tab-bg"
                  className="absolute inset-0 bg-[#060f20] border border-sky-900/30 rounded-lg"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          ))}
        </nav>

        {/* Contact CTA */}
        <motion.a href="mailto:kevinsenjaya72@gmail.com"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="text-[11px] font-semibold px-3.5 py-1.5 rounded-lg bg-[#080f24] border border-indigo-900/50 text-slate-400 hover:text-slate-200 hover:border-indigo-800/60 transition-all">
          Hire Me
        </motion.a>
      </div>

      {/* ── Panel area ── */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={current}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={onDragEnd}
            className="absolute inset-0 overflow-hidden"
          >
            {PANELS[current].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom nav ── */}
      <div className="flex-shrink-0 h-14 flex items-center justify-between px-6 border-t border-slate-800/30 relative z-10">
        {/* Prev */}
        <motion.button onClick={prev} disabled={current === 0}
          whileHover={current > 0 ? { scale: 1.05, x: -2 } : {}}
          whileTap={current > 0 ? { scale: 0.95 } : {}}
          className={`flex items-center gap-1.5 text-xs font-medium transition-all ${
            current === 0 ? 'text-slate-800 cursor-not-allowed' : 'text-slate-500 hover:text-slate-300'
          }`}>
          <ChevronLeft className="w-4 h-4" />
          {current > 0 ? PANELS[current - 1].label : 'Start'}
        </motion.button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {/* Mobile: section label */}
          <span className="sm:hidden text-[11px] font-mono text-slate-600 mr-2">
            {PANELS[current].shortLabel} / {PANELS.length.toString().padStart(2, '0')}
          </span>
          {PANELS.map((_, i) => (
            <motion.button key={i} onClick={() => goTo(i)}
              whileHover={{ scale: 1.4 }}
              className="transition-all duration-200"
            >
              <motion.div
                animate={{
                  width: i === current ? 20 : 6,
                  backgroundColor: i === current ? '#0369a1' : '#1e293b',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className="h-1.5 rounded-full"
              />
            </motion.button>
          ))}
        </div>

        {/* Next */}
        <motion.button onClick={next} disabled={current === PANELS.length - 1}
          whileHover={current < PANELS.length - 1 ? { scale: 1.05, x: 2 } : {}}
          whileTap={current < PANELS.length - 1 ? { scale: 0.95 } : {}}
          className={`flex items-center gap-1.5 text-xs font-medium transition-all ${
            current === PANELS.length - 1 ? 'text-slate-800 cursor-not-allowed' : 'text-slate-500 hover:text-slate-300'
          }`}>
          {current < PANELS.length - 1 ? PANELS[current + 1].label : 'End'}
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Keyboard hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-16 right-6 hidden lg:flex items-center gap-1.5 text-[10px] text-slate-800 font-mono pointer-events-none"
      >
        <kbd className="px-1.5 py-0.5 rounded border border-slate-800/60 bg-slate-900/30">←</kbd>
        <kbd className="px-1.5 py-0.5 rounded border border-slate-800/60 bg-slate-900/30">→</kbd>
        <span className="ml-1">navigate</span>
      </motion.div>
    </div>
  )
}
