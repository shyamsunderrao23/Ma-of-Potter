import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react'
import { useShop } from '../context/ShopContext'
import { PRODUCTS } from '../data/products'

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    formatPrice
  } = useShop()

  const navigate = useNavigate()

  // Smooth open and close animation states
  const [isRendered, setIsRendered] = useState(isWishlistOpen)
  const [isAnimatedOpen, setIsAnimatedOpen] = useState(false)

  useEffect(() => {
    let animFrame: number
    let closeTimer: ReturnType<typeof setTimeout>

    if (isWishlistOpen) {
      setIsRendered(true)
      animFrame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimatedOpen(true)
        })
      })
      document.body.style.overflow = 'hidden'
    } else {
      setIsAnimatedOpen(false)
      closeTimer = setTimeout(() => {
        setIsRendered(false)
      }, 350)
      document.body.style.overflow = ''
    }

    return () => {
      cancelAnimationFrame(animFrame)
      clearTimeout(closeTimer)
      document.body.style.overflow = ''
    }
  }, [isWishlistOpen])

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isWishlistOpen) {
        setIsWishlistOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isWishlistOpen, setIsWishlistOpen])

  if (!isRendered) return null

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id))

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop with smooth opacity transition */}
      <div
        onClick={() => setIsWishlistOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          isAnimatedOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Drawer Panel Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10 pointer-events-none">
        <div
          className={`w-screen max-w-md bg-white text-[#2C221D] shadow-2xl flex flex-col justify-between border-l border-[#E2D2C0] pointer-events-auto transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isAnimatedOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#E8DCCF] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#B36B4D] fill-[#B36B4D]" />
              <h2 className="text-xl font-medium text-[#2A1E18]">
                Saved Favorites ({wishlist.length})
              </h2>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 text-stone-500 hover:text-stone-900 rounded-none hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Close Favorites"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Wishlist Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {wishlistedProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-none bg-[#F0E6D8] flex items-center justify-center mx-auto mb-4 text-[#B36B4D]">
                  <Heart className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="text-lg font-medium text-stone-800">No favorites saved yet</h3>
                <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                  Click the heart icon on any ceramic pottery to save it here for later.
                </p>
                <button
                  onClick={() => {
                    setIsWishlistOpen(false)
                    navigate('/shop')
                  }}
                  className="mt-6 px-6 py-2.5 bg-[#2E221B] hover:bg-[#B36B4D] text-white text-xs font-bold uppercase tracking-wider rounded-none transition-all cursor-pointer"
                >
                  Browse Pottery
                </button>
              </div>
            ) : (
              wishlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 bg-white rounded-none border border-[#E8DCCF] relative group"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-20 h-20 rounded-none object-cover bg-[#F3ECE2] flex-shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-medium text-stone-900 line-clamp-1">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-stone-400 hover:text-[#E75B42] transition-colors p-1"
                          title="Remove from favorites"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-sm font-extrabold text-[#2A1E18]">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          addToCart(product, 1)
                          toggleWishlist(product.id)
                        }}
                        className="w-full bg-[#2E221B] hover:bg-[#B36B4D] text-white py-2 px-3 rounded-none text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#E6A05E]" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
