import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Sparkles, SlidersHorizontal, Award, ShieldCheck, Flame } from 'lucide-react'
import { PRODUCTS, CATEGORIES } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { useShop } from '../context/ShopContext'

export const BestSellersPage: React.FC = () => {
  const { searchQuery, setSearchQuery } = useShop()
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'rating' | 'price-asc' | 'price-desc' | 'name'>('rating')

  // Base list: ONLY products marked as isBestSeller
  const bestSellerProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.isBestSeller)
  }, [])

  // Categories present within best sellers
  const availableCategories = useMemo(() => {
    const catKeys = new Set(bestSellerProducts.map((p) => p.category))
    return CATEGORIES.filter((c) => catKeys.has(c.id as any))
  }, [bestSellerProducts])

  // Filtered and sorted products
  const displayedProducts = useMemo(() => {
    let list = [...bestSellerProducts]

    // Category filter
    if (selectedSubCategory !== 'all') {
      list = list.filter((p) => p.category === selectedSubCategory)
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.subtitle?.toLowerCase().includes(q)
      )
    }

    // Sorting
    if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name))
    }

    return list
  }, [bestSellerProducts, selectedSubCategory, searchQuery, sortBy])

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 animate-fade-in">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-8 font-medium">
          <Link to="/" className="hover:text-[#B36B4D] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/shop" className="hover:text-[#B36B4D] transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-900 font-bold">Best Sellers</span>
        </nav>

        {/* Hero Banner for Best Sellers */}
        <div className="bg-[#241A15] text-white p-8 sm:p-14 mb-12 relative overflow-hidden rounded-none border border-stone-200/40">
          <div className="absolute -right-16 -bottom-16 w-96 h-96 bg-[#B36B4D]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E6A05E] font-medium inline-flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#E6A05E]" /> Top Rated by 15,000+ Homes
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium mt-3 text-white tracking-tight">
              Best Sellers Collection
            </h1>
            <p className="text-stone-300 text-sm sm:text-base mt-4 leading-relaxed font-light max-w-2xl">
              Our most-loved handcrafted stoneware and ceramic vessels. Each piece is wheel-thrown,
              individually glazed, and fired at 1260°C for exceptional everyday durability.
            </p>
          </div>
        </div>

        {/* Filter and Sorting Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#EDE1D3]">
          {/* Subcategory Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setSelectedSubCategory('all')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer rounded-none border ${
                selectedSubCategory === 'all'
                  ? 'bg-[#2E221B] text-white border-[#2E221B]'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-[#B36B4D]'
              }`}
            >
              All Best Sellers ({bestSellerProducts.length})
            </button>
            {availableCategories.map((cat) => {
              const count = bestSellerProducts.filter((p) => p.category === cat.id).length
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedSubCategory(cat.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer rounded-none border whitespace-nowrap ${
                    selectedSubCategory === cat.id
                      ? 'bg-[#2E221B] text-white border-[#2E221B]'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-[#B36B4D]'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              )
            })}
          </div>

          {/* Right: Item Count & Sort dropdown */}
          <div className="flex items-center justify-between md:justify-end gap-4 text-xs">
            <span className="text-stone-500 font-medium">
              Showing <span className="font-bold text-stone-800">{displayedProducts.length}</span> best seller items
            </span>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-stone-200 rounded-none px-3 py-2 text-stone-800 font-medium text-xs outline-none focus:border-[#B36B4D] cursor-pointer"
              >
                <option value="rating">Top Customer Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-stone-50 rounded-none border border-stone-200">
            <Sparkles className="w-10 h-10 text-[#B36B4D] mx-auto mb-3 opacity-60" />
            <h3 className="text-xl font-medium text-stone-900">No best seller items matched</h3>
            <p className="text-stone-500 text-sm mt-1 max-w-sm mx-auto">
              Try switching your category filter or clearing your search term.
            </p>
            <button
              onClick={() => {
                setSelectedSubCategory('all')
                setSearchQuery('')
              }}
              className="mt-5 px-6 py-2.5 bg-[#2E221B] hover:bg-[#B36B4D] text-white text-xs font-bold uppercase tracking-wider rounded-none transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pottery Craftsmanship Highlights Banner */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[#EDE1D3] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#F7F3EE] rounded-none text-[#B36B4D]">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wide">High-Fire Stoneware</h4>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Vitrified at 1260°C for exceptional strength, scratch resistance, and zero porosity.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#F7F3EE] rounded-none text-[#B36B4D]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wide">100% Food & Kitchen Safe</h4>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Lead-free and cadmium-free glazes. 100% safe for daily use in microwave, oven, and dishwasher.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#F7F3EE] rounded-none text-[#B36B4D]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wide">Handcrafted Uniqueness</h4>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Each piece carries subtle organic variations of hand throwing and artisan kiln glaze alchemy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
