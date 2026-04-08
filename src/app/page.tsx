'use client'

import Hero from '@/components/Hero'
import ContentSlider from '@/components/ContentSlider'

export default function Home() {
  return (
    <div
      id="scroll-root"
      className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[#02040a]"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
    >
      <style>{`::-webkit-scrollbar { display: none; }`}</style>
      <div className="h-screen snap-start snap-always relative overflow-hidden">
        <Hero />
      </div>
      <div className="h-screen snap-start snap-always relative overflow-hidden">
        <ContentSlider />
      </div>
    </div>
  )
}
