'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experiences } from '@/data/resume'
import { Calendar } from 'lucide-react'

export default function ExperiencePanel() {
  const [selected, setSelected] = useState(0)
  const exp = experiences[selected]
  const role = exp.roles[0]

  return (
    <div className="h-full grid lg:grid-cols-[220px_1fr] gap-0 overflow-hidden">
      {/* Left: Company selector */}
      <div className="flex flex-col border-r border-slate-800/30 overflow-y-auto py-6 px-4 gap-1">
        <p className="text-[11px] font-mono text-sky-800 tracking-widest uppercase mb-4 px-2">02 / Experience</p>
        {experiences.map((e, i) => (
          <motion.button key={e.company} onClick={() => setSelected(i)}
            whileHover={{ x: 3 }}
            className={`relative w-full text-left px-3 py-3 rounded-xl transition-all text-sm group ${
              selected === i
                ? 'bg-[#060f20] border border-sky-900/40 text-slate-200'
                : 'text-slate-600 hover:text-slate-400 hover:bg-slate-900/30'
            }`}>
            {selected === i && (
              <motion.div layoutId="exp-indicator"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-sky-700 rounded-full" />
            )}
            <div className="font-semibold text-sm pl-2">{e.company}</div>
            <div className="text-[11px] text-slate-700 pl-2 mt-0.5">{e.roles[0].period.split('–')[0].trim()}</div>
          </motion.button>
        ))}
      </div>

      {/* Right: Role detail */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div key={selected}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-full overflow-y-auto p-6 lg:p-8 flex flex-col gap-4"
          >
            {/* Company header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#060c1a] border border-slate-800/40 flex items-center justify-center text-xl flex-shrink-0">
                {exp.logo}
              </div>
              <div>
                <h3 className="text-white font-bold text-base">{exp.company}</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-slate-600 text-xs">{exp.location}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-950/50 border border-sky-900/30 text-sky-700">{exp.type}</span>
                </div>
              </div>
            </div>

            {/* All roles */}
            <div className="space-y-4">
              {exp.roles.map((r, ri) => (
                <div key={ri} className={`rounded-xl p-4 border ${ri === 0 ? 'bg-[#060c1a] border-sky-900/20' : 'bg-transparent border-slate-800/20'}`}>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-white font-semibold text-sm">{r.title}</span>
                    {ri === 0 && <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-950/50 border border-violet-900/30 text-violet-600">Current</span>}
                    {r.type && <span className="text-[10px] text-slate-600 bg-slate-900/40 px-2 py-0.5 rounded-full">{r.type}</span>}
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-600 mb-3">
                    <Calendar className="w-3 h-3" />{r.period} · {r.duration}
                    {r.division && <><span>·</span><span className="text-slate-700">{r.division}</span></>}
                  </div>
                  {r.description && (
                    <ul className="space-y-1.5">
                      {r.description.slice(0, 4).map((item, di) => (
                        <li key={di} className="text-slate-500 text-xs leading-relaxed flex gap-2">
                          <span className="text-sky-900 mt-0.5 flex-shrink-0">▸</span>{item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {r.skills && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {r.skills.map(s => (
                        <span key={s} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900/50 border border-slate-800/40 text-slate-500 font-mono">{s}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
