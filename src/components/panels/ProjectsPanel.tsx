'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/resume'
import { ExternalLink, Smartphone, Globe, Building2, X, Star } from 'lucide-react'

export default function ProjectsPanel() {
  const [active, setActive] = useState<number | null>(null)
  const proj = active !== null ? projects[active] : null

  return (
    <div className="h-full flex flex-col p-6 lg:p-8">
      <p className="text-[11px] font-mono text-sky-800 tracking-widest uppercase mb-5">03 / Projects</p>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 flex-1 overflow-y-auto">
        {projects.map((p, i) => (
          <motion.button key={p.name} onClick={() => setActive(i)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4, borderColor: 'rgba(30,58,138,0.35)' }}
            className="relative bg-[#060c1a] border border-slate-800/30 rounded-2xl p-4 text-left transition-all duration-200 group cursor-pointer">
            {/* Badge */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-950/50 border border-sky-900/30 text-sky-700 flex items-center gap-1">
                {p.category === 'Mobile App' ? <Smartphone className="w-2.5 h-2.5" /> : <Globe className="w-2.5 h-2.5" />}
                {p.category}
              </span>
              {p.highlight && <Star className="w-3 h-3 text-amber-700 fill-amber-700/50 flex-shrink-0" />}
            </div>
            <h3 className="text-slate-200 font-bold text-sm mb-1.5 group-hover:text-white transition-colors">{p.name}</h3>
            <p className="text-slate-600 text-[11px] leading-relaxed line-clamp-2">{p.description}</p>
            <div className="flex flex-wrap gap-1 mt-3">
              {p.tech.slice(0, 3).map(t => (
                <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-slate-900/60 border border-slate-800/30 text-slate-600 font-mono">{t}</span>
              ))}
            </div>
            {/* Hover indicator */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="w-3 h-3 text-sky-700" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {active !== null && proj && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center p-8 bg-[#02040a]/90 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              className="bg-[#06091a] border border-slate-800/50 rounded-2xl p-7 max-w-lg w-full relative"
            >
              <button onClick={() => setActive(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-600 hover:text-slate-300 hover:bg-slate-800/40 transition-colors">
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-sky-950/50 border border-sky-900/30 text-sky-700">
                  {proj.category}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/50 border border-emerald-900/30 text-emerald-700">{proj.badge}</span>
              </div>
              <h3 className="text-white font-black text-xl mb-3">{proj.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.tech.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800/40 text-slate-500 font-mono">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                {proj.links.playstore && (
                  <a href={proj.links.playstore} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#060e20] border border-sky-900/40 text-sky-600 text-xs font-semibold hover:border-sky-800/60 hover:text-sky-500 transition-all">
                    <Smartphone className="w-3.5 h-3.5" /> Play Store <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                )}
                {proj.links.web && (
                  <a href={proj.links.web} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#060e20] border border-sky-900/40 text-sky-600 text-xs font-semibold hover:border-sky-800/60 hover:text-sky-500 transition-all">
                    <Globe className="w-3.5 h-3.5" /> Visit Site <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                )}
                {!proj.links.playstore && !proj.links.web && (
                  <span className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                    <Building2 className="w-3.5 h-3.5" /> Enterprise / Private
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
