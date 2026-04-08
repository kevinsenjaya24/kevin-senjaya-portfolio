'use client'
import { motion } from 'framer-motion'
import { personalInfo } from '@/data/resume'
import { Code2, Layers, Users, Zap } from 'lucide-react'

const highlights = [
  { icon: <Code2 className="w-4 h-4" />, title: 'Backend Architecture', desc: 'Scalable systems handling millions of transactions.' },
  { icon: <Layers className="w-4 h-4" />, title: 'System Design', desc: 'End-to-end technical direction & architecture.' },
  { icon: <Users className="w-4 h-4" />, title: 'Tech Leadership', desc: 'Leading teams and aligning technical goals.' },
  { icon: <Zap className="w-4 h-4" />, title: 'High Traffic', desc: 'Promotional & ecommerce platforms at scale.' },
]

const stats = [
  { v: '6+', l: 'Years Exp' },
  { v: '20+', l: 'Projects' },
  { v: '4+', l: 'Companies' },
  { v: '2', l: 'Play Store Apps' },
]

const c = (d: number) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: d } })

export default function AboutPanel() {
  return (
    <div className="h-full grid lg:grid-cols-2 gap-8 p-6 lg:p-8">
      {/* Left */}
      <div className="flex flex-col justify-center space-y-5">
        <motion.div {...c(0)}>
          <p className="text-[11px] font-mono text-sky-800 tracking-widest uppercase mb-2">01 / About</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            The Engineer<br /><span className="gradient-text">Behind the Code</span>
          </h2>
        </motion.div>

        <motion.p {...c(0.1)} className="text-slate-500 text-sm leading-relaxed">
          I am a <span className="text-slate-300 font-medium">Backend Engineer & System Architect</span> with
          6+ years building scalable, reliable systems. Currently serving as{' '}
          <span className="text-slate-300 font-medium">Junior Manager Software Developer</span> at Indomaret Group
          and <span className="text-slate-300 font-medium">Head of IT</span> at Arrangely.io.
        </motion.p>

        <motion.p {...c(0.15)} className="text-slate-600 text-sm leading-relaxed">
          Specialized in high-traffic promotional platforms, ecommerce backends, and distributed system
          architecture — from digital coupons to Parcel Campaign systems at Indomaret.
        </motion.p>

        <motion.div {...c(0.2)} className="flex flex-wrap gap-2">
          {['@ Indomaret Group', '@ Arrangely.io', '@ Rolling Glory'].map((r, i) => (
            <span key={r} className={`px-3 py-1 rounded-full text-xs font-medium border ${
              i === 0 ? 'bg-sky-950/50 border-sky-900/40 text-sky-600' :
              i === 1 ? 'bg-violet-950/50 border-violet-900/40 text-violet-600' :
              'bg-slate-900/50 border-slate-800/40 text-slate-500'
            }`}>{r}</span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div {...c(0.25)} className="grid grid-cols-4 gap-2">
          {stats.map(({ v, l }) => (
            <motion.div key={l} whileHover={{ borderColor: 'rgba(30,58,138,0.4)', y: -2 }}
              className="p-3 rounded-xl bg-[#060c1a] border border-slate-800/30 text-center transition-all">
              <div className="text-lg font-black gradient-text">{v}</div>
              <div className="text-[9px] text-slate-700 uppercase tracking-wider mt-0.5">{l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Right */}
      <div className="grid grid-cols-2 gap-3 content-center">
        {highlights.map(({ icon, title, desc }, i) => (
          <motion.div key={title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            whileHover={{ y: -4, borderColor: 'rgba(30,58,138,0.3)' }}
            className="bg-[#060c1a] border border-slate-800/30 rounded-2xl p-4 transition-all duration-300 cursor-default">
            <div className="w-8 h-8 rounded-lg bg-sky-950/60 border border-sky-900/30 flex items-center justify-center text-sky-700 mb-3">
              {icon}
            </div>
            <h3 className="text-white text-xs font-semibold mb-1.5">{title}</h3>
            <p className="text-slate-600 text-[11px] leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
