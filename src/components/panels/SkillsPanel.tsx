'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '@/data/resume'

const extras = ['Microservices', 'REST API', 'Docker', 'CI/CD', 'Git', 'Batch Processing', 'System Design', 'Agile', 'SOLID', 'OOP', 'MVC']

export default function SkillsPanel() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="h-full flex flex-col p-6 lg:p-8 overflow-y-auto">
      <p className="text-[11px] font-mono text-sky-800 tracking-widest uppercase mb-5">04 / Skills</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
        {skills.map((cat, ci) => (
          <motion.div key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.07 }}
            className="flex flex-col gap-3">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800/40">
              <span className="text-base">{cat.icon}</span>
              <span className="text-slate-400 font-semibold text-xs">{cat.category}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {cat.items.map((skill, si) => (
                <motion.div key={skill.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: ci * 0.07 + si * 0.04 }}
                  onHoverStart={() => setHovered(skill.name)}
                  onHoverEnd={() => setHovered(null)}
                  whileHover={{ x: 3 }}
                  className="group cursor-default">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-medium transition-colors ${hovered === skill.name ? 'text-slate-200' : 'text-slate-500'}`}>
                      {skill.name}
                    </span>
                    <span className={`text-[9px] font-mono transition-colors ${hovered === skill.name ? 'text-sky-600' : 'text-slate-700'}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-0.5 bg-slate-800/60 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.1, delay: ci * 0.07 + si * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full"
                      style={{
                        background: skill.level >= 85
                          ? 'linear-gradient(90deg, #0c4a6e, #0ea5e9)'
                          : skill.level >= 70
                          ? 'linear-gradient(90deg, #3b0764, #7c3aed)'
                          : 'linear-gradient(90deg, #1e293b, #334155)',
                      }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Extra tags */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-5 pt-4 border-t border-slate-800/30">
        <p className="text-[10px] text-slate-700 font-mono uppercase tracking-widest mb-2.5">& more</p>
        <div className="flex flex-wrap gap-1.5">
          {extras.map((tag, i) => (
            <motion.span key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 + i * 0.03 }}
              whileHover={{ borderColor: 'rgba(30,58,138,0.5)', color: '#94a3b8' }}
              className="text-[10px] px-2.5 py-1 rounded-lg font-mono text-slate-700 bg-slate-900/40 border border-slate-800/30 cursor-default transition-all">
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
