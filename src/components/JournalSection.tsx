import React from 'react'
import { ArrowRight, Clock } from 'lucide-react'
import { BLOGS } from '../data/blogs'

export const JournalSection: React.FC = () => {
  return (
    <section id="journal-section" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B36B4D] font-medium">
            The Ceramic Life
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#2A1E18] mt-1">
            From Our Journal
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Stories on slow living, studio ceramics care, tea rituals, and Indian pottery craft heritage.
          </p>
          <div className="w-16 h-0.5 bg-[#B36B4D] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <article
              key={blog.id}
              className="bg-[#FAF7F4] rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F3ECE2]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#241A15]/80 backdrop-blur-md text-[#E8C29D] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {blog.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-stone-400 text-xs mb-2.5">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-medium text-[#2A1E18] group-hover:text-[#B36B4D] transition-colors line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm mt-2 line-clamp-2 font-light leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-medium">
                    By {blog.author}
                  </span>
                  <span className="text-xs font-bold text-[#B36B4D] group-hover:text-[#8C4E33] flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
