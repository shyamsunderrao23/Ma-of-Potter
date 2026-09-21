import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Tag,
  ShieldCheck
} from 'lucide-react'
import { useShop } from '../context/ShopContext'

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    cartTotal,
    freeShippingThreshold,
    appliedCoupon,
    discountAmount,
    applyCoupon,
    removeCoupon,
    formatPrice,
    setIsCheckoutOpen
  } = useShop()

  const navigate = useNavigate()
  const [couponCode, setCouponCode] = useState('')
  const [couponMsg, setCouponMsg] = useState<{ text: string; error?: boolean } | null>(null)

  // Smooth open and close animation states
  const [isRendered, setIsRendered] = useState(isCartOpen)
  const [isAnimatedOpen, setIsAnimatedOpen] = useState(false)

  useEffect(() => {
    let animFrame: number
    let closeTimer: ReturnType<typeof setTimeout>

    if (isCartOpen) {
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
  }, [isCartOpen])

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isCartOpen, setIsCartOpen])

  if (!isRendered) return null

  const progressPercent = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100))
  const remainingForFree = Math.max(0, freeShippingThreshold - cartSubtotal)

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault()
    if (!couponCode.trim()) return
    const res = applyCoupon(couponCode)
    if (res.success) {
      setCouponMsg({ text: res.message })
      setCouponCode('')
    } else {
      setCouponMsg({ text: res.message, error: true })
    }
  }

  const handleProceedToCheckout = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop with smooth opacity transition */}
      <div
        onClick={() => setIsCartOpen(false)}
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
              <ShoppingBag className="w-5 h-5 text-[#B36B4D]" />
              <h2 className="text-xl font-medium text-[#2A1E18]">
                Your Shopping Bag ({cart.length})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-stone-500 hover:text-stone-900 rounded-none hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Close Shopping Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Tracker */}
          <div className="px-6 py-3.5 bg-stone-50 border-b border-[#E8DCCF]">
            {remainingForFree > 0 ? (
              <p className="text-xs text-stone-700 font-medium">
                Add <strong className="text-[#B36B4D]">{formatPrice(remainingForFree)}</strong> more to get <span className="font-bold text-emerald-700">FREE Pan-India Delivery!</span>
              </p>
            ) : (
              <p className="text-xs text-emerald-700 font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Congratulations! You unlocked FREE Delivery.
              </p>
            )}
            <div className="w-full bg-[#E0D0BF] h-1.5 rounded-none mt-2 overflow-hidden">
              <div
                className="bg-[#B36B4D] h-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-none bg-[#F0E6D8] flex items-center justify-center mx-auto mb-4 text-[#B36B4D]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="text-lg font-medium text-stone-800">Your bag is empty</h3>
                <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                  Explore our handcrafted studio pottery and find something special for your home.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false)
                    navigate('/shop')
                  }}
                  className="mt-6 px-6 py-2.5 bg-[#2E221B] hover:bg-[#B36B4D] text-white text-xs font-bold uppercase tracking-wider rounded-none transition-all cursor-pointer"
                >
                  Explore Potteries
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-white rounded-none border border-[#E8DCCF] relative group"
                >
                  {/* Item Image */}
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-none object-cover bg-[#F3ECE2] flex-shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-medium text-stone-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-stone-400 hover:text-red-600 transition-colors p-1"
                          title="Remove Item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-xs text-stone-500 capitalize mt-0.5">
                        {item.product.category}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-stone-200 rounded-none bg-stone-50">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <div className="text-right">
                        <span className="text-sm font-bold text-[#2A1E18]">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-[#E8DCCF] bg-white space-y-4">
              {/* Coupon Code Input */}
              <div>
                {!appliedCoupon ? (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-stone-400" />
                      <input
                        type="text"
                        placeholder="Discount code (e.g., POTTERY10)"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs uppercase border border-stone-200 rounded-none bg-stone-50 focus:bg-white focus:outline-none focus:border-[#B36B4D]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#2E221B] hover:bg-[#B36B4D] text-white text-xs font-semibold uppercase tracking-wider rounded-none transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-none text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                      <Tag className="w-3.5 h-3.5" />
                      <span>Coupon {appliedCoupon} applied (-{formatPrice(discountAmount)})</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-stone-500 hover:text-stone-800 underline text-[11px]"
                    >
                      Remove
                    </button>
                  </div>
                )}
                {couponMsg && (
                  <p
                    className={`text-[11px] mt-1 ${
                      couponMsg.error ? 'text-red-500 font-medium' : 'text-emerald-600 font-medium'
                    }`}
                  >
                    {couponMsg.text}
                  </p>
                )}
              </div>

              {/* Cost Calculations */}
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="font-semibold text-stone-900">{formatPrice(cartSubtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Special Discount</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Delivery</span>
                  <span>
                    {remainingForFree === 0 ? (
                      <strong className="text-emerald-600 uppercase text-[11px]">Free</strong>
                    ) : (
                      formatPrice(99)
                    )}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-stone-200 text-base font-extrabold text-stone-900">
                  <span>Grand Total</span>
                  <span className="text-[#B36B4D]">{formatPrice(cartTotal + (remainingForFree === 0 ? 0 : 99))}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full bg-[#2E221B] hover:bg-[#B36B4D] text-white py-3.5 rounded-none font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Secure Checkout & Breakage Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
