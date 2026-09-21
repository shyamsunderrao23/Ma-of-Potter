import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight, ShieldCheck, Flame, Star } from 'lucide-react'

export const HeroBanner: React.FC = () => {

  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] w-full flex items-center justify-center overflow-hidden bg-[#1D1612]">
      {/* Background Hero Image with atmospheric lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=2000&auto=format&fit=crop"
          alt="Handcrafted Clay and Ceramic Potteries"
          className="w-full h-full object-cover object-center opacity-45 scale-105 animate-fade-in"
        />
        {/* Subtle radial and gradient overlays to ensure luxury legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D1612] via-[#1D1612]/60 to-[#1D1612]/30" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#1D1612]/40 to-[#1D1612]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Small Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#382B24]/80 backdrop-blur-md border border-[#E6A05E]/30 text-[#E6A05E] text-xs uppercase tracking-widest font-semibold mb-6 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#E6A05E]" />
          <span>Artisanal Studio Potteries • Made with Earth & Fire</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#FDFBF7] leading-[1.15] max-w-4xl drop-shadow-md">
          Soulful Home Decor with <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#E8C29D]">
            Handcrafted Clay & Ceramic Potteries
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-[#D8C7B8] max-w-2xl font-light leading-relaxed">
          Transform your living spaces with tactile, wheel-thrown stoneware, rustic coffee mugs,
          aroma lamps, and artisanal dinnerware crafted by Indian master potters.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            to="/shop"
            className="group flex items-center gap-2.5 bg-[#B36B4D] hover:bg-[#C97B5C] text-white px-8 py-4 rounded-full font-medium text-sm sm:text-base tracking-wider uppercase transition-all shadow-xl shadow-[#B36B4D]/30 hover:scale-[1.02]"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/shop"
            className="flex items-center gap-2 bg-[#2D221C]/80 hover:bg-[#3D2F27] text-white border border-[#D9C4B0]/40 backdrop-blur-md px-8 py-4 rounded-full font-medium text-sm sm:text-base tracking-wider uppercase transition-all hover:scale-[1.02]"
          >
            <span>Shop Best Sellers</span>
          </Link>
        </div>

        {/* Trust Highlight Stats */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 grid grid-cols-3 gap-6 sm:gap-12 text-[#E7DACD] max-w-2xl w-full">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[#E6A05E] font-bold text-lg sm:text-2xl">
              <span>4.9</span>
              <Star className="w-4 h-4 fill-[#E6A05E]" />
            </div>
            <span className="text-[11px] sm:text-xs text-stone-400 mt-0.5 uppercase tracking-wider">
              1,500+ Reviews
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-stone-800">
            <div className="flex items-center gap-1 text-[#E8C29D] font-bold text-lg sm:text-2xl">
              <Flame className="w-5 h-5 text-[#B36B4D]" />
              <span>1200°C</span>
            </div>
            <span className="text-[11px] sm:text-xs text-stone-400 mt-0.5 uppercase tracking-wider">
              Kiln Fired Stoneware
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[#E8C29D] font-bold text-lg sm:text-2xl">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>100%</span>
            </div>
            <span className="text-[11px] sm:text-xs text-stone-400 mt-0.5 uppercase tracking-wider">
              Safe & Non-Toxic
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
