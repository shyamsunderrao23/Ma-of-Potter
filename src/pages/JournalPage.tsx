import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Clock, ArrowRight } from 'lucide-react'
import { BLOGS } from '../data/blogs'

export const JournalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-10 sm:py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2E5D5] text-[#B36B4D] text-xs uppercase tracking-widest font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Ceramic Chronicle</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-medium text-[#271E18]">
            Stories, Craft & Slow Living
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Explore pottery care guides, mindful morning rituals, glaze alchemy, and behind-the-scenes stories from our Jaipur studio kilns.
          </p>
        </div>

        {/* Featured Blog Hero */}
        <div className="bg-white rounded-3xl overflow-hidden border border-[#EDE0D1] shadow-md mb-16 grid grid-cols-1 lg:grid-cols-12 group">
          <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-[#F3ECE2]">
            <img
              src={BLOGS[0].image}
              alt={BLOGS[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs text-stone-400 mb-3">
                <span className="text-[#B36B4D] font-bold uppercase tracking-wider">{BLOGS[0].category}</span>
                <span>•</span>
                <span>{BLOGS[0].date}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {BLOGS[0].readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium text-stone-900 leading-snug group-hover:text-[#B36B4D] transition-colors">
                <Link to={`/journal/${BLOGS[0].id}`}>{BLOGS[0].title}</Link>
              </h2>
              <p className="text-stone-600 text-sm mt-4 font-light leading-relaxed">
                {BLOGS[0].excerpt}
              </p>
            </div>
            <div className="pt-6 border-t border-stone-100 flex items-center justify-between mt-6">
              <span className="text-xs text-stone-500 font-medium">By {BLOGS[0].author}</span>
              <Link
                to={`/journal/${BLOGS[0].id}`}
                className="text-xs font-bold uppercase tracking-wider text-[#B36B4D] flex items-center gap-1.5 hover:underline"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EDE0D1] shadow-sm hover:shadow-lg transition-all flex flex-col group cursor-pointer"
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
                      <Clock className="w-3 h-3" /> {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-medium text-[#2A1E18] group-hover:text-[#B36B4D] transition-colors line-clamp-2 leading-snug">
                    <Link to={`/journal/${blog.id}`}>{blog.title}</Link>
                  </h3>

                  <p className="text-stone-600 text-xs mt-2 line-clamp-2 font-light leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-medium">By {blog.author}</span>
                  <Link
                    to={`/journal/${blog.id}`}
                    className="text-xs font-bold text-[#B36B4D] flex items-center gap-1 hover:underline"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
