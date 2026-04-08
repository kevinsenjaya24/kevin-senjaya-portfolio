'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '@/data/resume'
import { Code2, Layers, Users, Zap } from 'lucide-react'

const highlights = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: 'Backend Architecture',
    desc: 'Designing scalable, high-performance backend systems that handle millions of transactions.',
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: 'System Design',
    desc: 'End-to-end technical architecture with focus on reliability, maintainability, and scale.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Tech Leadership',
    desc: 'Leading and growing engineering teams while aligning technical direction with business goals.',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'High Traffic Systems',
    desc: 'Building promotional and ecommerce platforms optimized for peak load handling.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-violet-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
            01. About Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            The Engineer Behind{' '}
            <span className="gradient-text">the Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I am a <span className="text-sky-400 font-semibold">Backend Engineer & Software Developer</span> with
              6+ years of experience building scalable and reliable systems. Currently serving
              as <span className="text-white font-semibold">Junior Manager Software Developer</span> at Indomaret Group
              and <span className="text-white font-semibold">Head of IT</span> at Arrangely.io.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              My expertise covers large-scale e-commerce promotion system architecture, backend APIs
              with Spring Boot &amp; .NET Core, and leading engineering teams. I have hands-on experience
              building systems that handle millions of transactions — from digital coupons and Mudik campaigns
              to Parcel Campaign systems at Indomaret.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Outside my main roles, I actively contribute to freelance projects and startups,
              translating product vision into solid, sustainable technical solutions.
            </p>

            {/* Current roles */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: '@ Indomaret Group', color: 'cyan' },
                { label: '@ Arrangely.io', color: 'violet' },
                { label: '@ Rolling Glory', color: 'slate' },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    color === 'cyan'
                      ? 'bg-sky-900/40 border-sky-700/30 text-sky-400'
                      : color === 'violet'
                      ? 'bg-violet-500/10 border-violet-500/30 text-violet-400'
                      : 'bg-white/5 border-white/10 text-slate-400'
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right – highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4, borderColor: 'rgba(34,211,238,0.3)' }}
                className="glass-card rounded-2xl p-5 group cursor-default transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-800/40 to-violet-800/20 flex items-center justify-center text-sky-400 mb-4 group-hover:from-sky-800/50 group-hover:to-violet-800/30 transition-all">
                  {icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
