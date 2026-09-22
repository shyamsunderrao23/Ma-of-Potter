import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Compass } from 'lucide-react'

export const ClayWorldSection: React.FC = () => {
  return (
    <section id="clay-is-our-world" className="py-16 sm:py-24 bg-white border-t border-stone-100">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B36B4D] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#B36B4D]" />
              <span>CLAY IS OUR WORLD.</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#241A15] tracking-tight leading-[1.2]">
              More than a material. <br />
              <span className="font-serif italic font-normal text-[#B36B4D]">
                It is our craft, our culture, and our story.
              </span>
            </h2>

            {/* Body Copy */}
            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              <p>
                From the hands of traditional artisans to modern homes, <strong>Man_of_Potter</strong> brings
                the beauty of clay closer to the world.
              </p>
              <p>
                We create, discover, and celebrate the endless possibilities of clay while keeping
                the spirit of traditional craftsmanship alive.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="border border-stone-200 p-4 rounded-none bg-stone-50/50">
                <span className="text-[11px] uppercase tracking-wider text-[#B36B4D] font-semibold block">Craft Heritage</span>
                <span className="text-xs text-stone-700 font-medium mt-1 block">Wheel-thrown with ancestral knowledge</span>
              </div>
              <div className="border border-stone-200 p-4 rounded-none bg-stone-50/50">
                <span className="text-[11px] uppercase tracking-wider text-[#B36B4D] font-semibold block">Modern Living</span>
                <span className="text-xs text-stone-700 font-medium mt-1 block">Food-safe, microwave & oven durable</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-[#2E221B] hover:bg-[#B36B4D] text-white px-7 py-3.5 rounded-none text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Explore Our Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-stone-300 hover:border-[#B36B4D] text-[#2E221B] hover:text-[#B36B4D] px-7 py-3.5 rounded-none text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer bg-white"
              >
                <Compass className="w-4 h-4 text-[#B36B4D]" />
                <span>Discover Our Story</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Artisan Imagery with Logo Emblem Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-stone-200 overflow-hidden bg-stone-100 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1400&auto=format&fit=crop"
                alt="Artisan hands shaping raw clay vessel on pottery wheel"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Floating Badge with Official Logo Emblem */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-[#241A15]/95 backdrop-blur-md text-white p-4 border border-stone-700/80 rounded-none flex items-center gap-3.5">
                <img
                  src="/logo.png"
                  alt="Man of Potter Logo"
                  className="w-12 h-12 rounded-full object-cover border border-stone-500/50 flex-shrink-0"
                />
                <div>
                  <p className="text-xs font-serif font-bold text-[#FDFBF7] tracking-wide">
                    Man of Potter Studio
                  </p>
                  <p className="text-[10px] text-[#D8C7B8] font-light mt-0.5 leading-snug">
                    Since 2022 • Clay is our world
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
