'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '@/data/resume'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="relative py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-sky-900/20 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
            04. Skills
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            My Tech{' '}
            <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg">
            Technologies and tools I use to craft performant, scalable backend systems and full-stack solutions.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 hover:border-sky-800/25 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-bold text-lg">{cat.category}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {cat.items.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: ci * 0.1 + si * 0.06 }}
                    whileHover={{ x: 4 }}
                    className="group cursor-default"
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-slate-400 text-sm font-medium group-hover:text-slate-200 transition-colors">{skill.name}</span>
                      <span className="text-slate-600 text-xs font-mono group-hover:text-sky-500 transition-colors">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-white/4 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: ci * 0.1 + si * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{
                          background:
                            skill.level >= 85
                              ? 'linear-gradient(90deg, #0369a1, #0ea5e9)'
                              : skill.level >= 70
                              ? 'linear-gradient(90deg, #5b21b6, #7c3aed)'
                              : 'linear-gradient(90deg, #334155, #475569)',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10"
        >
          <p className="text-slate-500 text-sm font-medium text-center mb-5">& more technologies I've worked with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Microservices', 'REST API', 'Docker', 'Git', 'CI/CD',
              'SQL Server', 'Redis', 'Batch Processing', 'System Design',
              'Agile', 'SOLID Principles', 'OOP', 'MVC Pattern',
            ].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
                className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 bg-white/4 border border-white/8 hover:border-sky-700/30 hover:text-sky-400 transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
