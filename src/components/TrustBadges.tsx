import React from 'react'
import { Sparkles, Shield, PackageCheck, HeartHandshake, Truck } from 'lucide-react'

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#B36B4D]" />,
      title: '100% Handcrafted',
      desc: 'Wheel-thrown with pure clay'
    },
    {
      icon: <Shield className="w-5 h-5 text-[#B36B4D]" />,
      title: 'Food Safe & Non-Toxic',
      desc: 'Lead-free natural mineral glazes'
    },
    {
      icon: <PackageCheck className="w-5 h-5 text-[#B36B4D]" />,
      title: 'Breakage Guarantee',
      desc: 'Safe plastic-free honeycomb packaging'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#B36B4D]" />,
      title: 'Artisan Community',
      desc: 'Empowering master rural potters'
    },
    {
      icon: <Truck className="w-5 h-5 text-[#B36B4D]" />,
      title: 'Free Fast Delivery',
      desc: 'On all orders above ₹1,499'
    }
  ]

  return (
    <section className="bg-white border-y border-stone-200/80 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-full bg-[#FAF7F4] border border-stone-200 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-[#B36B4D] group-hover:border-[#B36B4D] transition-colors">
                <div className="group-hover:text-white transition-colors">
                  {badge.icon}
                </div>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#2A1F19] tracking-wide">
                  {badge.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#7A6657] mt-0.5 font-normal">
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
