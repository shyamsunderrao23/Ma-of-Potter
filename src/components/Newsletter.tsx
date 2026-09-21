import React, { useState } from 'react'
import { Sparkles, Mail, CheckCircle2, ArrowRight } from 'lucide-react'
import { useShop } from '../context/ShopContext'

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const { showToast } = useShop()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !email.includes('@')) {
      showToast('Please enter a valid email address', 'info')
      return
    }
    setSubscribed(true)
    showToast('Welcome to Potter’s Circle! Use code POTTER10 for 10% OFF', 'success')
  }

  return (
    <section className="relative py-16 sm:py-24 bg-[#1C1511] overflow-hidden text-white">
      {/* Background Studio Photography with ceramic bowl backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=2000&auto=format&fit=crop"
          alt="Ceramic studio bowls backdrop"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1511] via-[#1C1511]/80 to-[#1C1511]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B2C24] border border-[#E6A05E]/30 text-[#E6A05E] text-xs uppercase tracking-widest font-bold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Exclusive Studio Member Circle</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDFBF7] tracking-tight">
          Join The Potter’s Circle
        </h2>

        <p className="mt-4 text-stone-300 text-sm sm:text-base max-w-xl font-light leading-relaxed">
          Be the first to know about limited batch kiln openings, artisan studio drops, workshops,
          and receive <strong>10% off</strong> your first handcrafted order.
        </p>

        {subscribed ? (
          <div className="mt-8 p-6 bg-[#2B2019]/90 border border-[#E6A05E]/40 rounded-2xl max-w-md w-full animate-fade-in text-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
            <h3 className="font-serif text-xl font-bold text-white">You're on the list!</h3>
            <p className="text-xs text-stone-300 mt-1">
              Use code <strong className="text-[#E6A05E] font-mono text-sm">POTTER10</strong> at checkout for 10% instant discount.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 w-full max-w-lg flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-stone-600 text-white placeholder-stone-400 focus:outline-none focus:border-[#E6A05E] focus:bg-white/15 backdrop-blur-md text-sm transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#B36B4D] hover:bg-[#C97B5C] text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-[11px] text-stone-400 mt-4">
          No spam, ever. Only soulful stories & handcrafted kiln releases. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
