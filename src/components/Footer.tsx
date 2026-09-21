import React from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  MessageCircle
} from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1410] text-[#D8C7B8] border-t border-stone-800">
      {/* Upper Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Info & Artisan Seal */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Man of Potter Logo"
                className="w-10 h-10 rounded-full object-cover shadow-sm border border-stone-700"
              />
              <span className="font-serif text-2xl font-bold tracking-widest text-[#FDFBF7]">
                MAN OF POTTER
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed pr-4">
              A studio devoted to the timeless craft of clay. We hand-throw, carve, and kiln-fire
              sustainable, non-toxic stoneware that transforms daily rituals into soulful moments.
            </p>

            {/* Made In India Artisan Craft Seal */}
            <div className="pt-2 flex items-center gap-4">
              <div className="flex items-center gap-2 bg-[#2B2019] px-3 py-1.5 rounded-lg border border-stone-700">
                <span className="text-base">🇮🇳</span>
                <span className="text-[11px] font-bold tracking-wider text-[#E8C29D] uppercase">
                  100% Handcrafted in India
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Plastic Ship</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3 text-stone-400">
              <a href="#instagram" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#271E18] border border-stone-700 flex items-center justify-center hover:text-[#E8C29D] hover:border-[#E8C29D] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#facebook" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#271E18] border border-stone-700 flex items-center justify-center hover:text-[#E8C29D] hover:border-[#E8C29D] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#youtube" aria-label="YouTube" className="w-9 h-9 rounded-full bg-[#271E18] border border-stone-700 flex items-center justify-center hover:text-[#E8C29D] hover:border-[#E8C29D] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Shop Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#FDFBF7]">
              Studio Shop
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link to="/shop/mugs" className="hover:text-[#E8C29D] transition-colors">
                  Mugs & Coffee Cups
                </Link>
              </li>
              <li>
                <Link to="/shop/dinnerware" className="hover:text-[#E8C29D] transition-colors">
                  Plates & Dinnerware
                </Link>
              </li>
              <li>
                <Link to="/shop/diffusers" className="hover:text-[#E8C29D] transition-colors">
                  Aroma Diffusers
                </Link>
              </li>
              <li>
                <Link to="/shop/teaware" className="hover:text-[#E8C29D] transition-colors">
                  Hand-Carved Teapots
                </Link>
              </li>
              <li>
                <Link to="/shop/bowls" className="hover:text-[#E8C29D] transition-colors">
                  Serving Platters & Bowls
                </Link>
              </li>
              <li>
                <Link to="/shop/vases" className="hover:text-[#E8C29D] transition-colors">
                  Vases & Planters
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#FDFBF7]">
              Customer Care & Studio
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link to="/about" className="hover:text-[#E8C29D] transition-colors">
                  Artisan Heritage Story
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="hover:text-[#E8C29D] transition-colors">
                  Pottery Wheel Workshops
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-[#E8C29D] transition-colors">
                  Ceramics Care & Washing Guide
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E8C29D] transition-colors">
                  Custom & Corporate Gifting
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E8C29D] transition-colors">
                  Breakage Replacement Guarantee
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E8C29D] transition-colors">
                  Visit Jaipur Atelier
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#FDFBF7]">
              Studio & Kiln
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B36B4D] mt-0.5 flex-shrink-0" />
                <span>Plot 42, Potter’s Guild Lane, Sanganer Artisan Village, Jaipur, Rajasthan 302029</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B36B4D] flex-shrink-0" />
                <span>+91 98765 43210 (Mon-Sat, 10am - 7pm)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B36B4D] flex-shrink-0" />
                <span>care@manofpotter.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods & Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Man of Potter Clay Studios Pvt. Ltd. All rights reserved.</p>

          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Secure Payments:</span>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-stone-300">
              <span className="px-2 py-0.5 bg-[#2B2019] rounded border border-stone-700">UPI</span>
              <span className="px-2 py-0.5 bg-[#2B2019] rounded border border-stone-700">VISA</span>
              <span className="px-2 py-0.5 bg-[#2B2019] rounded border border-stone-700">Mastercard</span>
              <span className="px-2 py-0.5 bg-[#2B2019] rounded border border-stone-700">RuPay</span>
              <span className="px-2 py-0.5 bg-[#2B2019] rounded border border-stone-700">COD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Support Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%20Man%20of%20Potter%2C%20I%20have%20a%20question%20about%20your%20handcrafted%20ceramics"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group cursor-pointer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
          Chat with Potter
        </span>
      </a>
    </footer>
  )
}
