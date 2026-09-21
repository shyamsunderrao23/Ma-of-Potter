import React, { useState } from 'react'
import {
  X,
  Star,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  Plus,
  Minus,
  Sparkles,
  Check
} from 'lucide-react'
import { useShop } from '../context/ShopContext'

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    wishlist,
    toggleWishlist,
    formatPrice
  } = useShop()

  const [quantity, setQuantity] = useState(1)
  const [selectedImgIdx, setSelectedImgIdx] = useState(0)
  const [added, setAdded] = useState(false)

  if (!quickViewProduct) return null

  const isWishlisted = wishlist.includes(quickViewProduct.id)

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity)
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
      setQuickViewProduct(null)
    }, 1000)
  }

  const discountPercent = quickViewProduct.originalPrice
    ? Math.round(((quickViewProduct.originalPrice - quickViewProduct.price) / quickViewProduct.originalPrice) * 100)
    : 0

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        onClick={() => setQuickViewProduct(null)}
        className="fixed inset-0"
      />

      <div className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-200 z-10 my-8">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-black flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Image Gallery */}
          <div className="p-6 bg-stone-50 flex flex-col justify-between">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-inner relative">
              <img
                src={quickViewProduct.images[selectedImgIdx] || quickViewProduct.images[0]}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              {quickViewProduct.badge && (
                <span className="absolute top-3 left-3 px-3 py-1 bg-[#B36B4D] text-white text-xs font-bold uppercase rounded-md shadow">
                  {quickViewProduct.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {quickViewProduct.images.length > 1 && (
              <div className="flex gap-3 mt-4">
                {quickViewProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImgIdx(idx)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedImgIdx === idx ? 'border-[#B36B4D] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Rating */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-[#E6A05E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E6A05E]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-stone-700">
                  {quickViewProduct.rating} ({quickViewProduct.reviewsCount} verified reviews)
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-medium text-[#2A1E18]">
                {quickViewProduct.name}
              </h2>

              {quickViewProduct.subtitle && (
                <p className="text-xs sm:text-sm text-[#8C7667] mt-1 font-medium">
                  {quickViewProduct.subtitle}
                </p>
              )}

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-black text-[#241A15]">
                  {formatPrice(quickViewProduct.price)}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-sm text-stone-400 line-through font-semibold">
                    {formatPrice(quickViewProduct.originalPrice)}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E75B42]/10 text-[#E75B42] text-xs font-bold">
                    Save {discountPercent}% OFF
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                {quickViewProduct.description}
              </p>

              {/* Specifications Box */}
              <div className="mt-5 p-3.5 bg-white rounded-xl border border-[#EDE1D3] space-y-2 text-xs text-stone-700">
                <div className="flex justify-between">
                  <span className="text-stone-400">Material:</span>
                  <span className="font-medium text-stone-900">{quickViewProduct.details.material}</span>
                </div>
                {quickViewProduct.details.capacity && (
                  <div className="flex justify-between">
                    <span className="text-stone-400">Capacity:</span>
                    <span className="font-medium text-stone-900">{quickViewProduct.details.capacity}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-stone-400">Dimensions:</span>
                  <span className="font-medium text-stone-900">{quickViewProduct.details.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Care:</span>
                  <span className="font-medium text-stone-900">{quickViewProduct.details.care}</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-stone-300 rounded-xl bg-white p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4 text-stone-700" />
                  </button>
                  <span className="px-4 font-bold text-sm text-stone-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4 text-stone-700" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#B36B4D] hover:bg-[#94553D] text-white py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5 text-white" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5 text-[#E6A05E]" />
                      <span>Add to Bag ({formatPrice(quickViewProduct.price * quantity)})</span>
                    </>
                  )}
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className="p-3.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 transition-colors text-stone-700 cursor-pointer"
                  title="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#B36B4D] text-[#B36B4D]' : ''}`} />
                </button>
              </div>

              {/* Badges footer */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-stone-500 pt-2 border-t border-[#EDE1D3]">
                <span className="flex items-center justify-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#B36B4D]" /> 100% Hand-Thrown
                </span>
                <span className="flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" /> Non-Toxic Lead Free
                </span>
                <span className="flex items-center justify-center gap-1">
                  <Truck className="w-3 h-3 text-[#B36B4D]" /> Breakage Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
