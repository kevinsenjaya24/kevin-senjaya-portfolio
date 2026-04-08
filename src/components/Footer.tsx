'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/resume'
import { Mail, Phone, Heart, Code2, ArrowUp } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 bg-[#040710]">
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-600 to-violet-800 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg">
                Kevin<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Backend Engineer & System Architect building scalable digital products from Jakarta, Indonesia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Quick Links</p>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <button
                    onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-500 text-sm hover:text-sky-400 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Get In Touch</p>
            <div className="space-y-3">
              <a
                href={personalInfo.contact.emailHref}
                className="flex items-center gap-2.5 text-slate-500 text-sm hover:text-sky-400 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:text-sky-400 transition-colors" />
                {personalInfo.contact.email}
              </a>
              <a
                href={personalInfo.contact.phoneHref}
                className="flex items-center gap-2.5 text-slate-500 text-sm hover:text-sky-400 transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:text-sky-400 transition-colors" />
                {personalInfo.contact.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by Kevin Senjaya &copy; {new Date().getFullYear()}
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-slate-600 text-sm hover:text-sky-400 transition-colors group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:text-sky-400 transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
