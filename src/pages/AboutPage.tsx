import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight } from 'lucide-react'

export const AboutPage: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Riverbank Clay Sourcing',
      desc: 'We sustainably harvest mineral-rich alluvial terracotta and stoneware clay from riverbanks in Rajasthan and Gujarat.'
    },
    {
      num: '02',
      title: 'Hand-Throwing & Trimming',
      desc: 'Master potters shape each piece individually on spinning kick wheels, ensuring unique tactile curves and balance.'
    },
    {
      num: '03',
      title: 'Sun-Drying & Bisque Firing',
      desc: 'Clay dries under natural shade for 3 days before undergoing a first bisque firing at 800°C for structural strength.'
    },
    {
      num: '04',
      title: 'Natural Mineral Glazing',
      desc: 'Hand-dipped in lead-free glazes formulated from crushed quartz, feldspar, and natural wood ash.'
    },
    {
      num: '05',
      title: '1200°C High-Heat Vitrification',
      desc: 'Fired in high-temperature kilns to vitrify the clay into durable, microwave, oven, and dishwasher safe stoneware.'
    }
  ]

  const artisans = [
    {
      name: 'Master Potter Ramu Ji',
      role: 'Master Wheel Thrower (35 Years Experience)',
      quote: 'Clay is a living element. When you sit at the wheel with devotion, the clay listens to your fingers.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'Kavita Sharma',
      role: 'Glaze Alchemist & Studio Designer',
      quote: 'We spent two years perfecting our matte ash and reactive glazes so that each coffee mug tells its own volcanic story.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'Devanshu Verma',
      role: 'Founder & Ceramic Craftsman',
      quote: 'Man of Potter was founded to bridge ancient Indian pottery traditions with minimalist, contemporary everyday homes.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen bg-white py-10 sm:py-16 animate-fade-in">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden bg-[#1E1713] text-white p-8 sm:p-16 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1600&auto=format&fit=crop"
              alt="Potter working at wheel"
              className="w-full h-full object-cover object-center opacity-30 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E1713] via-[#1E1713]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3D2C22] border border-[#E6A05E]/30 text-[#E6A05E] text-xs uppercase tracking-widest font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Heritage of Jaipur Clay</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
              Reviving The Soul of <br />
              <span className="italic font-normal text-[#E8C29D]">Handmade Pottery</span>
            </h1>
            <p className="mt-6 text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              Man of Potter is an artisanal ceramic atelier founded in Jaipur, Rajasthan. We empower hereditary Indian potters,
              preserve ancient wheel-throwing techniques, and create timeless tableware for slow, mindful living.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-3xl border border-[#EDE0D1] shadow-sm text-center">
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#B36B4D]">35+</span>
            <span className="text-xs text-stone-500 uppercase tracking-wider block mt-1">Artisan Families Sustained</span>
          </div>
          <div className="border-l border-stone-100">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#B36B4D]">15k+</span>
            <span className="text-xs text-stone-500 uppercase tracking-wider block mt-1">Happy Homes Across India</span>
          </div>
          <div className="border-l border-stone-100">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#B36B4D]">1200°C</span>
            <span className="text-xs text-stone-500 uppercase tracking-wider block mt-1">Kiln Fired Stoneware</span>
          </div>
          <div className="border-l border-stone-100">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#B36B4D]">0%</span>
            <span className="text-xs text-stone-500 uppercase tracking-wider block mt-1">Plastic in Packaging</span>
          </div>
        </div>
      </div>

      {/* The 5-Step Craft Journey */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B36B4D] font-medium">Behind The Kiln</span>
          <h2 className="text-2xl sm:text-4xl font-medium text-[#271E18] mt-1">
            Our 5-Step Alchemy of Fire
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            How raw mud from the earth becomes enduring, lead-free tableware for your kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[#EDE0D1] shadow-sm relative group hover:shadow-md transition-shadow">
              <span className="font-serif text-3xl font-black text-[#E8DCCF] group-hover:text-[#B36B4D] transition-colors">
                {s.num}
              </span>
              <h3 className="font-serif text-base font-bold text-stone-900 mt-2 mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed font-light">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet The Artisans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B36B4D] font-medium">The Hands Behind The Clay</span>
          <h2 className="text-2xl sm:text-4xl font-medium text-[#271E18] mt-1">
            Meet Our Master Artisans
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artisans.map((a, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-[#EDE0D1] shadow-sm flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-[#F3ECE2]">
                <img src={a.image} alt={a.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">{a.name}</h3>
                  <span className="text-xs text-[#B36B4D] font-medium block mt-0.5">{a.role}</span>
                  <p className="text-xs text-stone-600 italic mt-4 leading-relaxed">
                    "{a.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#2C211B] text-white p-8 sm:p-12 rounded-3xl shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-medium">Experience Handcrafted Pottery</h2>
          <p className="text-stone-300 text-sm max-w-lg mx-auto mt-3 font-light">
            Bring home a piece of authentic Indian studio ceramics or join one of our weekend studio workshops in Jaipur.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/shop"
              className="bg-[#B36B4D] hover:bg-[#C97B5C] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center gap-2"
            >
              <span>Explore Ceramics</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/workshops"
              className="bg-white/10 hover:bg-white/20 text-white border border-stone-600 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
            >
              Book Studio Workshop
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
