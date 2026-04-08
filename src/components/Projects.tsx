'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '@/data/resume'
import { ExternalLink, Smartphone, Globe, Building2, Star } from 'lucide-react'

const categoryIcon: Record<string, React.ReactNode> = {
  'Mobile App': <Smartphone className="w-4 h-4" />,
  'Web Platform': <Globe className="w-4 h-4" />,
  'Company Platform': <Building2 className="w-4 h-4" />,
  'Ecommerce Platform': <Building2 className="w-4 h-4" />,
  'Freelance': <Globe className="w-4 h-4" />,
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="relative py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
            03. Projects
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Things I&apos;ve{' '}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg text-base">
            From high-traffic promotional backends to mobile apps on the Play Store — here's a
            selection of projects I've delivered.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`glass-card rounded-2xl p-5 sm:p-6 flex flex-col group transition-all duration-300 hover:border-sky-700/30 hover:shadow-xl hover:shadow-cyan-500/5 ${
                proj.highlight ? 'border-sky-800/20' : ''
              }`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-sky-900/40 border border-sky-800/25 text-sky-400 flex items-center gap-1.5">
                    {categoryIcon[proj.category] ?? <Globe className="w-3 h-3" />}
                    {proj.category}
                  </span>
                  {proj.highlight && (
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 flex-shrink-0" />
                  )}
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium">
                  {proj.badge}
                </span>
              </div>

              {/* Project name */}
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2 group-hover:text-sky-400 transition-colors">
                {proj.name}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                {proj.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                {proj.links.playstore && (
                  <motion.a
                    href={proj.links.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#060e20] border border-sky-900/40 text-sky-600 text-xs font-semibold hover:border-sky-800/60 hover:text-sky-500 transition-all"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    Play Store
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </motion.a>
                )}
                {proj.links.web && (
                  <motion.a
                    href={proj.links.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-sky-700/30 text-sky-400 text-xs font-semibold hover:bg-sky-900/40 transition-all"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    Visit Site
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </motion.a>
                )}
                {!proj.links.playstore && !proj.links.web && (
                  <span className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                    <Building2 className="w-3.5 h-3.5" />
                    Enterprise / Private
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
