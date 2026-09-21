import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, ArrowRight, Tag } from 'lucide-react'
import { useShop } from '../context/ShopContext'
import { PRODUCTS } from '../data/products'

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    formatPrice,
    setSearchQuery: setGlobalSearch
  } = useShop()

  const navigate = useNavigate()
  const [localQuery, setLocalQuery] = useState('')

  const results = useMemo(() => {
    if (!localQuery.trim()) return []
    const q = localQuery.toLowerCase()
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subtitle?.toLowerCase().includes(q)
    ).slice(0, 6)
  }, [localQuery])

  if (!isSearchOpen) return null

  const quickTags = ['Mugs', 'Dinnerware', 'Aroma Diffuser', 'Teapot', 'Terracotta', 'Planter']

  const handleSelectProduct = (p: any) => {
    setIsSearchOpen(false)
    navigate(`/product/${p.id}`)
  }

  const handleSearchAll = () => {
    setGlobalSearch(localQuery)
    setIsSearchOpen(false)
    navigate('/shop')
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0"
      />

      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 z-10">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 bg-white border-b border-[#E8DCCF] flex items-center gap-3">
          <Search className="w-6 h-6 text-[#B36B4D]" />
          <input
            type="text"
            autoFocus
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearchAll()}
            placeholder="Search stoneware mugs, teapots, diffusers..."
            className="flex-1 text-base sm:text-lg bg-transparent border-none outline-none text-[#2A1E18] placeholder-stone-400"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-2 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-6 py-3 bg-stone-50 border-b border-stone-200 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Tag className="w-3.5 h-3.5 text-[#B36B4D]" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600">Popular:</span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setLocalQuery(tag)}
              className="text-xs px-2.5 py-1 bg-white hover:bg-[#B36B4D] hover:text-white rounded-lg border border-stone-200 text-stone-700 font-medium transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {localQuery.trim() === '' ? (
            <div className="text-center py-8 text-stone-500 text-xs">
              Type to search any handcrafted ceramic item, collection or material.
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#B36B4D]">
                Found {results.length} results
              </span>
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product)}
                  className="flex items-center gap-4 p-3 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200 transition-all cursor-pointer group"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-14 h-14 rounded-xl object-cover bg-stone-50"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-stone-900 group-hover:text-[#B36B4D] transition-colors">
                      {product.name}
                    </h4>
                    <span className="text-xs text-stone-500 capitalize">{product.category}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-sm text-[#2A1E18]">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                </div>
              ))}
              <button
                onClick={handleSearchAll}
                className="w-full mt-4 py-2.5 text-xs font-bold uppercase text-[#B36B4D] bg-stone-100 hover:bg-stone-200 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>View All Filtered Results in Store</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="text-center py-8 text-stone-500 text-sm font-medium">
              No ceramic items matching "{localQuery}"
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
