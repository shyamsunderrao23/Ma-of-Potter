import React from 'react'
import { Star, CheckCircle, Quote } from 'lucide-react'
import { REVIEWS } from '../data/reviews'

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google reviews badge */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B36B4D] font-bold">
              Community Love
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#2A1E18] mt-1">
              Loved by 15,000+ Homes
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Real reviews from verified ceramics enthusiasts across India & worldwide.
            </p>
          </div>

          {/* Google rating trust card */}
          <div className="flex items-center gap-4 bg-[#FAF7F4] px-5 py-3.5 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center font-bold text-lg text-[#4285F4]">
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold text-stone-900">4.9 / 5.0</span>
                <div className="flex text-[#F4B400]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F4B400]" />
                  ))}
                </div>
              </div>
              <span className="text-[11px] text-stone-500">
                Google Verified Studio Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FAF7F4] p-6 rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-4 right-4 w-7 h-7 text-[#EADCCF]/70" />

              <div>
                {/* Stars & Source */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#E6A05E]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E6A05E]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-stone-400 font-medium">{review.date}</span>
                </div>

                <h4 className="font-serif font-bold text-sm sm:text-base text-stone-900 mb-2">
                  "{review.title}"
                </h4>

                <p className="text-xs text-stone-600 leading-relaxed italic">
                  {review.comment}
                </p>
              </div>

              {/* Author & Product */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-9 h-9 rounded-full object-cover border border-stone-200"
                />
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-stone-800 truncate">
                      {review.name}
                    </span>
                    <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                  </div>
                  <span className="text-[10px] text-stone-400 block truncate">
                    {review.productPurchased}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
