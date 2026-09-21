import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronRight, Clock, Sparkles, ArrowLeft, Share2 } from 'lucide-react'
import { BLOGS } from '../data/blogs'
import { useShop } from '../context/ShopContext'

export const JournalDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { showToast } = useShop()

  const blog = BLOGS.find((b) => b.id === id) || BLOGS[0]

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: blog.title, url: window.location.href })
    } else {
      navigator.clipboard.writeText(window.location.href)
      showToast('Article link copied to clipboard!', 'info')
    }
  }

  return (
    <div className="min-h-screen bg-white py-10 sm:py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-8 font-medium">
          <Link to="/" className="hover:text-[#B36B4D] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/journal" className="hover:text-[#B36B4D] transition-colors">Journal</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-900 font-bold truncate">{blog.title}</span>
        </nav>

        {/* Article Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2E5D5] text-[#B36B4D] text-xs uppercase tracking-widest font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{blog.category}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-medium text-[#271E18] leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center justify-between text-xs text-stone-500 mt-6 pt-4 border-t border-stone-200">
            <div className="flex items-center gap-4">
              <span className="font-medium text-stone-800">By {blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {blog.readTime}</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 text-stone-600 hover:text-[#B36B4D] font-medium cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-[#F3ECE2] shadow-lg mb-10">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Body Content */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EDE0D1] shadow-sm space-y-6 text-stone-700 leading-relaxed text-base font-light">
          <p className="text-lg font-serif italic text-stone-900 leading-relaxed border-l-4 border-[#B36B4D] pl-4 py-1">
            "{blog.excerpt}"
          </p>

          <h2 className="text-2xl font-medium text-stone-900 pt-4">The Beauty of Everyday Clay</h2>
          <p>
            When you drink from a wheel-thrown ceramic mug, your hands interact with the organic texture of the earth.
            The slight weight, the comforting heat retention of dense stoneware, and the smooth glazed lip create a sensory ritual
            that completely transforms an ordinary cup of tea or pour-over coffee into a pause for mindfulness.
          </p>

          <h2 className="text-2xl font-medium text-stone-900 pt-4">Preserving Thermal Balance</h2>
          <p>
            Unlike mass-produced porcelain or thin glass, high-fire refractory stoneware possesses micro-porous insulating density.
            It absorbs heat gradually and holds it longer, keeping your herbal infusions piping hot while the outer handle remains pleasant to touch.
          </p>

          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 my-8">
            <h3 className="text-lg font-medium text-stone-900 mb-2">Master Potter’s Daily Tip:</h3>
            <p className="text-sm text-stone-600 font-light">
              Always pre-warm your stoneware teapot or ceramic mug with a swirl of hot water for 30 seconds before pouring your brew.
              This prevents thermal shock and keeps your first sip at peak extraction temperature.
            </p>
          </div>

          <h2 className="text-2xl font-medium text-stone-900 pt-4">Honoring The Imperfect</h2>
          <p>
            In Japanese aesthetics, this is known as <em>Wabi-Sabi</em>—finding deep beauty in natural imperfections, mineral flecks,
            and gentle asymmetries. Every piece emerging from our wood-fired kiln is a unique dialogue between human hands and the unpredictable magic of fire.
          </p>
        </div>

        {/* Navigation back */}
        <div className="mt-10 flex items-center justify-between">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B36B4D] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all stories</span>
          </Link>
          <Link
            to="/shop"
            className="bg-[#2C211B] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#B36B4D] transition-colors"
          >
            Explore Ceramics
          </Link>
        </div>
      </div>
    </div>
  )
}
