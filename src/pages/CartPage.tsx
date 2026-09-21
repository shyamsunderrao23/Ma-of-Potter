import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Sparkles,
  Tag,
  ShieldCheck,
  ArrowLeft
} from 'lucide-react'
import { useShop } from '../context/ShopContext'

export const CartPage: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    cartTotal,
    freeShippingThreshold,
    appliedCoupon,
    discountAmount,
    applyCoupon,
    removeCoupon,
    formatPrice
  } = useShop()

  const navigate = useNavigate()
  const [couponCode, setCouponCode] = useState('')
  const [couponMsg, setCouponMsg] = useState<{ text: string; error?: boolean } | null>(null)

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

  return (
    <div className="min-h-screen bg-white py-10 sm:py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B36B4D] font-medium">Shopping Bag</span>
            <h1 className="text-2xl sm:text-4xl font-medium text-[#271E18] mt-1">
              Your Studio Cart ({cart.reduce((t, i) => t + i.quantity, 0)} Items)
            </h1>
          </div>
          <Link
            to="/shop"
            className="text-xs font-bold uppercase tracking-wider text-[#B36B4D] hover:underline flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-[#EDE0D1] shadow-sm max-w-xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#F3ECE2] text-[#B36B4D] flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-10 h-10 opacity-70" />
            </div>
            <h2 className="text-2xl font-medium text-stone-900">Your bag is currently empty</h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-2 max-w-sm mx-auto font-light">
              Explore our handcrafted collection of ceramic mugs, stoneware plates, teapots, and aroma diffusers.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 bg-[#B36B4D] hover:bg-[#94553D] text-white px-8 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <span>Explore Ceramics Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-8 space-y-6">
              {/* Free Shipping Tracker */}
              <div className="bg-white p-5 rounded-2xl border border-[#EDE0D1] shadow-sm">
                {remainingForFree > 0 ? (
                  <p className="text-xs text-stone-700 font-medium">
                    Add <strong className="text-[#B36B4D]">{formatPrice(remainingForFree)}</strong> more to unlock <span className="font-bold text-emerald-700">FREE Pan-India Delivery!</span>
                  </p>
                ) : (
                  <p className="text-xs text-emerald-700 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    You’ve unlocked FREE Pan-India Delivery!
                  </p>
                )}
                <div className="w-full bg-[#EDE0D1] h-2.5 rounded-full mt-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#B36B4D] to-emerald-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Items Card List */}
              <div className="bg-white rounded-3xl border border-[#EDE0D1] shadow-sm divide-y divide-stone-100 overflow-hidden">
                {cart.map((item) => (
                  <div key={item.product.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-24 h-24 rounded-2xl object-cover bg-[#F3ECE2] border border-stone-200"
                      />
                      <div>
                        <span className="text-[11px] uppercase font-bold text-[#B36B4D] tracking-wider">
                          {item.product.category}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-stone-900 mt-0.5">
                          <Link to={`/product/${item.product.id}`} className="hover:text-[#B36B4D] transition-colors">
                            {item.product.name}
                          </Link>
                        </h3>
                        <span className="text-xs text-stone-500 block mt-1">
                          {item.product.details.material}
                        </span>
                        <span className="font-extrabold text-sm text-[#2A1E18] block mt-2 sm:hidden">
                          {formatPrice(item.product.price)} each
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full sm:w-auto gap-6 pt-3 sm:pt-0 border-t sm:border-0 border-stone-100">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-stone-300 rounded-xl bg-stone-50 p-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5 text-stone-700" />
                        </button>
                        <span className="px-4 font-bold text-xs text-stone-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5 text-stone-700" />
                        </button>
                      </div>

                      {/* Total for this item */}
                      <div className="text-right min-w-24">
                        <span className="text-lg font-medium text-[#2A1E18] block">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-stone-400 hover:text-[#E75B42] p-2 transition-colors cursor-pointer"
                        title="Remove from bag"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Order Summary & Checkout */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EDE0D1] shadow-sm space-y-6">
                <h3 className="text-xl font-medium text-stone-900 border-b pb-4">
                  Order Summary
                </h3>

                {/* Promo Code Form */}
                <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200">
                  {appliedCoupon ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-emerald-600" />
                        <div>
                          <span className="text-xs font-bold text-emerald-700">Code "{appliedCoupon}" Applied</span>
                          <span className="text-[10px] text-stone-500 block">Saving {formatPrice(discountAmount)}</span>
                        </div>
                      </div>
                      <button onClick={removeCoupon} className="text-xs text-[#E75B42] font-semibold hover:underline">
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Coupon (POTTER10)"
                        className="flex-1 px-3 py-2 text-xs bg-white border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D] uppercase font-mono"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#2C211B] text-white text-xs font-bold rounded-xl hover:bg-[#B36B4D] transition-colors cursor-pointer"
                      >
                        Apply
                      </button>
                    </form>
                  )}
                  {couponMsg && (
                    <p className={`text-[11px] mt-1.5 ${couponMsg.error ? 'text-red-500' : 'text-emerald-600'}`}>
                      {couponMsg.text}
                    </p>
                  )}
                </div>

                {/* Calculation Breakdown */}
                <div className="space-y-3 text-xs sm:text-sm text-stone-600">
                  <div className="flex justify-between">
                    <span>Bag Subtotal</span>
                    <span className="font-bold text-stone-900">{formatPrice(cartSubtotal)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Artisan Discount</span>
                      <span>-{formatPrice(discountAmount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Estimated Shipping</span>
                    <span>{remainingForFree === 0 ? <strong className="text-emerald-600 uppercase text-xs">FREE</strong> : formatPrice(99)}</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-stone-200 text-lg font-black text-stone-900">
                    <span>Grand Total:</span>
                    <span className="text-[#B36B4D]">{formatPrice(cartTotal + (remainingForFree === 0 ? 0 : 99))}</span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-[#B36B4D] hover:bg-[#94553D] text-white py-4 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Proceed to Express Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 pt-2 border-t border-stone-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Secure Checkout & Breakage Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
