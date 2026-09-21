import React, { useState, useMemo } from 'react'
import { Filter, SlidersHorizontal } from 'lucide-react'
import { PRODUCTS, CATEGORIES } from '../data/products'
import { ProductCard } from './ProductCard'
import { useShop } from '../context/ShopContext'

export const AllProductsGrid: React.FC = () => {
  const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useShop()
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured')
  const [inStockOnly, setInStockOnly] = useState(false)

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS]

    if (selectedCategory && selectedCategory !== 'all') {
      list = list.filter(p => p.category === selectedCategory)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.subtitle?.toLowerCase().includes(q)
      )
    }

    if (inStockOnly) {
      list = list.filter(p => p.inStock)
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating)
    }

    return list
  }, [selectedCategory, searchQuery, inStockOnly, sortBy])

  return (
    <section id="all-products" className="py-14 sm:py-20 bg-white border-t border-stone-200/80">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B36B4D] font-medium">
            Studio Catalog
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2A1E18] mt-2">
            Explore Handcrafted Ceramics
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Every piece is wheel-thrown, trimmed, glazed, and kiln-fired with organic variations making each vessel uniquely yours.
          </p>
        </div>

        {/* Category Filter Pills & Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#FAF7F4] p-4 rounded-2xl border border-stone-200 shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#B36B4D] text-white shadow-md'
                    : 'bg-white text-[#4A3B31] border border-stone-200 hover:bg-[#F2EAE0]'
                }`}
              >
                {cat.name} {cat.id !== 'all' && `(${cat.count})`}
              </button>
            ))}
          </div>

          {/* Right Filters (Sort, In-stock toggle, Reset search) */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            {searchQuery && (
              <div className="flex items-center gap-2 text-xs bg-[#F2E5D5] text-[#8C4E33] px-3 py-1.5 rounded-lg">
                <span>Search: "{searchQuery}"</span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="font-bold hover:text-black cursor-pointer"
                >
                  ✕
                </button>
              </div>
            )}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setInStockOnly(!inStockOnly)}
                className={`text-xs px-3 py-2 rounded-xl border transition-all cursor-pointer font-medium ${
                  inStockOnly
                    ? 'bg-[#B36B4D] text-white border-[#B36B4D]'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-[#F2E5D5]'
                }`}
              >
                In Stock Only
              </button>

              <SlidersHorizontal className="w-4 h-4 text-stone-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs bg-white border border-stone-200 rounded-xl px-3 py-2 text-[#2C211B] font-medium outline-none focus:ring-2 focus:ring-[#B36B4D] cursor-pointer"
              >
                <option value="featured">Featured / Curated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Customer Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-white/70 rounded-2xl border border-[#E8DCCF]">
            <Filter className="w-10 h-10 text-[#B36B4D] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-xl font-bold text-stone-800">No ceramics found</h3>
            <p className="text-stone-500 text-sm mt-1">Try selecting another category or clearing your search keywords.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery('') }}
              className="mt-4 px-5 py-2 bg-[#B36B4D] text-white text-xs font-bold uppercase rounded-xl shadow cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
