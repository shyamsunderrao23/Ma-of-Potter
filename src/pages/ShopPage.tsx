import React, { useState, useMemo, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Filter, SlidersHorizontal, ChevronRight, Sparkles, RefreshCw } from 'lucide-react'
import { PRODUCTS, CATEGORIES } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { useShop } from '../context/ShopContext'

export const ShopPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>()
  const { searchQuery, setSearchQuery, formatPrice } = useShop()

  const [activeCategory, setActiveCategory] = useState<string>(category || 'all')
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured')
  const [maxPrice, setMaxPrice] = useState<number>(3000)
  const [inStockOnly, setInStockOnly] = useState(false)

  useEffect(() => {
    if (category) {
      setActiveCategory(category)
    }
  }, [category])

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS]

    if (activeCategory && activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.subtitle?.toLowerCase().includes(q)
      )
    }

    list = list.filter((p) => p.price <= maxPrice)

    if (inStockOnly) {
      list = list.filter((p) => p.inStock)
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating)
    }

    return list
  }, [activeCategory, searchQuery, maxPrice, inStockOnly, sortBy])

  const currentCategoryObj = CATEGORIES.find((c) => c.id === activeCategory)

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6 font-medium">
          <Link to="/" className="hover:text-[#B36B4D] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/shop" className="hover:text-[#B36B4D] transition-colors">Studio Catalog</Link>
          {activeCategory !== 'all' && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              <span className="text-stone-900 font-bold capitalize">{currentCategoryObj?.name || activeCategory}</span>
            </>
          )}
        </nav>

        {/* Page Header */}
        <div className="bg-[#241A15] text-white rounded-3xl p-8 sm:p-12 mb-10 relative overflow-hidden shadow-xl">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-[#B36B4D]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E6A05E] font-medium inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Handcrafted Studio Pottery
            </span>
            <h1 className="text-3xl sm:text-5xl font-medium mt-2 text-white">
              {currentCategoryObj ? currentCategoryObj.name : 'The Complete Ceramic Collection'}
            </h1>
            <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed font-light">
              Wheel-thrown stoneware and non-toxic ceramic vessels made with love and fire. Safe for daily use in microwave, oven, and dishwasher.
            </p>
          </div>
        </div>

        {/* Category Filter Horizontal Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#B36B4D] text-white shadow-md'
                  : 'bg-white border border-[#E8DCCF] text-[#4A3B31] hover:bg-[#F2E5D5]'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Filters and Sorting Toolbar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#EDE0D1] shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            {/* Price Filter Slider */}
            <div className="flex items-center gap-3 bg-stone-50 px-4 py-2 rounded-xl border border-stone-200 text-xs">
              <span className="font-medium text-stone-600">Max Price:</span>
              <input
                type="range"
                min="500"
                max="3000"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-24 sm:w-32 accent-[#B36B4D] cursor-pointer"
              />
              <span className="font-bold text-[#B36B4D]">{formatPrice(maxPrice)}</span>
            </div>

            {/* In-Stock Toggle */}
            <button
              onClick={() => setInStockOnly(!inStockOnly)}
              className={`text-xs px-3.5 py-2 rounded-xl border transition-all cursor-pointer font-medium ${
                inStockOnly
                  ? 'bg-[#B36B4D] text-white border-[#B36B4D]'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
              }`}
            >
              In Stock Only
            </button>

            {/* Reset Filter button */}
            {(activeCategory !== 'all' || maxPrice < 3000 || inStockOnly || searchQuery) && (
              <button
                onClick={() => {
                  setActiveCategory('all')
                  setMaxPrice(3000)
                  setInStockOnly(false)
                  setSearchQuery('')
                }}
                className="text-xs text-[#E75B42] font-semibold flex items-center gap-1 hover:underline cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>

          {/* Right Sorting & Count */}
          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
            <span className="text-xs text-stone-500 font-medium">
              Showing <strong>{filteredProducts.length}</strong> items
            </span>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-stone-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs bg-white border border-stone-200 rounded-xl px-3 py-2 text-stone-800 font-medium outline-none focus:ring-2 focus:ring-[#B36B4D] cursor-pointer"
              >
                <option value="featured">Featured / Curated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Customer Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-3xl border border-[#EDE0D1]">
            <Filter className="w-12 h-12 text-[#B36B4D] mx-auto mb-3 opacity-60" />
            <h3 className="text-2xl font-medium text-stone-900">No ceramics matched your filters</h3>
            <p className="text-stone-500 text-sm mt-1 max-w-sm mx-auto">
              Try adjusting your price range or clearing category filters to view more handcrafted pottery.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all')
                setMaxPrice(3000)
                setInStockOnly(false)
                setSearchQuery('')
              }}
              className="mt-5 px-6 py-2.5 bg-[#B36B4D] hover:bg-[#94553D] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
