import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Star, Heart, Eye, ShoppingBag, Check } from 'lucide-react'
import type { Product } from '../types'
import { useShop } from '../context/ShopContext'

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    addToCart,
    wishlist,
    toggleWishlist,
    formatPrice,
    setQuickViewProduct
  } = useShop()

  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const isWishlisted = wishlist.includes(product.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addToCart(product, 1)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation()
    setQuickViewProduct(product)
  }

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/product/${product.id}`)}
      className="group relative bg-white border border-stone-200/90 rounded-none overflow-hidden hover:border-[#B36B4D]/50 transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Product Image Container */}
      <div className="relative w-full aspect-square bg-[#F7F5F2] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
            isHovered ? 'scale-108' : 'scale-100'
          }`}
          loading="lazy"
        />

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            toggleWishlist(product.id)
          }}
          aria-label="Wishlist"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-none bg-white/90 hover:bg-white text-stone-700 flex items-center justify-center border border-stone-200 transition-transform active:scale-90 hover:text-[#B36B4D]"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? 'fill-[#B36B4D] text-[#B36B4D]' : 'text-stone-600'
            }`}
          />
        </button>

        {/* Quick View Button overlay on hover */}
        <div className="absolute inset-x-3 bottom-3 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={handleQuickView}
            className="flex-1 bg-white/95 hover:bg-white text-[#2C211B] text-xs font-semibold py-2.5 px-3 rounded-none flex items-center justify-center gap-1.5 transition-all active:scale-98"
          >
            <Eye className="w-3.5 h-3.5 text-[#B36B4D]" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-1.5">
            <div className="flex text-[#E6A05E]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-[#E6A05E]'
                      : 'text-stone-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-stone-700 ml-1">
              {product.rating}
            </span>
            <span className="text-[11px] text-stone-400">
              ({product.reviewsCount})
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-medium text-[#2A1E18] group-hover:text-[#B36B4D] transition-colors line-clamp-1">
            <Link to={`/product/${product.id}`} onClick={(e) => e.stopPropagation()}>
              {product.name}
            </Link>
          </h3>

          {/* Subtitle / Details */}
          {product.subtitle && (
            <p className="text-xs text-[#7A695B] mt-1 line-clamp-1 font-light">
              {product.subtitle}
            </p>
          )}
        </div>

        {/* Price & Action Row */}
        <div className="mt-4 pt-3 border-t border-[#F0E5D7] flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-extrabold text-[#241A15]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            {discountPercent > 0 && (
              <span className="text-[10px] font-bold text-[#E75B42]">
                Save {discountPercent}%
              </span>
            )}
          </div>

          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            className={`p-2.5 rounded-none transition-all active:scale-95 flex items-center justify-center cursor-pointer ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-[#2E221B] hover:bg-[#B36B4D] text-white'
            }`}
            title="Add to Bag"
          >
            {isAdded ? (
              <Check className="w-4 h-4" />
            ) : (
              <ShoppingBag className="w-4 h-4 text-[#E6A05E]" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
