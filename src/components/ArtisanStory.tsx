import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Hammer, CheckCircle2, ArrowRight } from 'lucide-react'

export const ArtisanStory: React.FC = () => {

  return (
    <section id="artisan-story" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Story Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B36B4D] font-bold">
              <Sparkles className="w-4 h-4 text-[#B36B4D]" />
              <span>Our Artisanal Philosophy</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-[#271D17] leading-[1.2] tracking-tight">
              From Raw Mud to <br />
              <span className="italic font-normal text-[#B36B4D]">
                A Living Masterpiece
              </span>
            </h2>

            <p className="text-stone-600 text-base leading-relaxed">
              At <strong>Man of Potter</strong>, we believe every vessel holds the heartbeat of its creator.
              In a world hurried by plastic and automated mass production, our pottery is a return to slow,
              tactile, mindful living.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Each mug, dinner plate, aroma lamp, and teapot begins as raw alluvial clay harvested from riverbanks,
              wheel-thrown by master hands, hand-carved, and vitrified at over <strong>1200°C</strong> in high-fire kilns.
              The organic color variations and iron specks are not flaws—they are the signature of fire and earth.
            </p>

            {/* Key Craft Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3 bg-[#FAF7F4] rounded-xl border border-stone-200">
                <CheckCircle2 className="w-5 h-5 text-[#B36B4D] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-stone-800">Lead & Cadmium Free</h4>
                  <p className="text-[11px] text-stone-500">100% Food & Microwave Safe</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FAF7F4] rounded-xl border border-stone-200">
                <Hammer className="w-5 h-5 text-[#B36B4D] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-stone-800">Direct Artisan Royalties</h4>
                  <p className="text-[11px] text-stone-500">Sustaining rural Indian potters</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#2E221B] hover:bg-[#B36B4D] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <span>Read Full Artisan Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 border border-[#B36B4D] text-[#B36B4D] hover:bg-[#B36B4D] hover:text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Explore Pottery</span>
              </Link>
            </div>
          </div>

          {/* Right Image Feature Column with Yellow / Mustard background framing */}
          <div className="lg:col-span-6 relative">
            {/* Artistic backdrop glow & mustard frame matching the screenshot */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#EAB308]/20 p-3 sm:p-4 border-2 border-[#EAB308]/40">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop"
                  alt="Artisanal ceramic carafe and cup on rustic wood"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-8 left-8 bg-[#2A1F18]/90 backdrop-blur-md text-white p-4 rounded-2xl shadow-xl border border-stone-700 max-w-xs hidden sm:block">
                <p className="text-xs font-serif italic text-[#E8C29D]">
                  "Earth, water, air, and fire—shaped with devotion."
                </p>
                <span className="text-[10px] text-stone-400 uppercase tracking-widest mt-1 block">
                  Studio Potter • Rajasthan, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
