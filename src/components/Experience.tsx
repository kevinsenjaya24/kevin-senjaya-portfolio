'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { experiences, type Role } from '@/data/resume'
import { ChevronDown, ChevronUp, Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [expanded, setExpanded] = useState<string | null>('Indomaret Group-0')

  const toggle = (key: string) => setExpanded(expanded === key ? null : key)

  return (
    <section id="experience" ref={ref} className="relative py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-sky-950/30 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
            02. Experience
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Where I&apos;ve{' '}
            <span className="gradient-text">Worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, ei) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: ei * 0.12 }}
                className="relative sm:pl-20 md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-sky-600 to-violet-800 border-2 border-[#02040a] z-10 hidden sm:block shadow-lg shadow-sky-900/40" />

                <div className="glass-card rounded-2xl overflow-hidden hover:border-sky-800/30 transition-all duration-300">
                  {/* Company header */}
                  <div className="p-5 sm:p-6 border-b border-white/5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-sky-800/40 to-violet-800/20 flex items-center justify-center text-xl flex-shrink-0">
                          {exp.logo}
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-base sm:text-lg leading-tight">{exp.company}</h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <span className="text-slate-500 text-xs">{exp.location}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />
                            <span className="text-xs px-2 py-0.5 rounded-full bg-sky-900/40 border border-sky-800/25 text-sky-400 font-medium">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Roles */}
                  <div className="divide-y divide-white/5">
                    {exp.roles.map((role, ri) => {
                      const key = `${exp.company}-${ri}`
                      const isOpen = expanded === key
                      const hasDetails = Array.isArray(role.description) && role.description.length > 0

                      return (
                        <div key={ri}>
                          <button
                            onClick={() => hasDetails && toggle(key)}
                            className={`w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 group transition-colors ${hasDetails ? 'hover:bg-white/2 cursor-pointer' : 'cursor-default'}`}
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="text-white font-semibold text-sm sm:text-base">{role.title}</span>
                                {role.type && (
                                  <span className="text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded-full">
                                    {role.type}
                                  </span>
                                )}
                                {ri === 0 && exp.roles.length > 1 && (
                                  <span className="text-xs text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full">
                                    Latest
                                  </span>
                                )}
                              </div>
                              <div className="flex flex-wrap items-center gap-3 text-slate-500 text-xs">
                                <span className="flex items-center gap-1.5">
                                  <Calendar className="w-3 h-3" />
                                  {role.period}
                                </span>
                                <span className="text-slate-600">·</span>
                                <span>{role.duration}</span>
                                {role.division && (
                                  <>
                                    <span className="text-slate-600">·</span>
                                    <span className="text-slate-500">{role.division}</span>
                                  </>
                                )}
                              </div>
                              {/* Skills */}
                              {role.skills && (
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                  {role.skills.map((s) => (
                                    <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-sky-900/30 border border-sky-800/20 text-sky-500/80">
                                      {s}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            {hasDetails && (
                              <div className={`flex-shrink-0 mt-1 text-slate-600 group-hover:text-sky-400 transition-colors`}>
                                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                              </div>
                            )}
                          </button>

                          {/* Expanded details */}
                          <AnimatePresence initial={false}>
                            {isOpen && hasDetails && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                                  <ul className="space-y-2.5 border-l-2 border-sky-800/25 pl-4">
                                    {role.description!.map((item, di) => (
                                      <motion.li
                                        key={di}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: di * 0.05 }}
                                        className="text-slate-400 text-sm leading-relaxed list-none"
                                      >
                                        <span className="text-sky-600/60 mr-2">▸</span>
                                        {item}
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
