import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  Truck,
  ArrowLeft,
  Lock
} from 'lucide-react'
import { useShop } from '../context/ShopContext'

export const CheckoutPage: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    cartTotal,
    discountAmount,
    appliedCoupon,
    clearCart,
    formatPrice,
    freeShippingThreshold
  } = useShop()

  const navigate = useNavigate()
  const [step, setStep] = useState<'checkout' | 'success'>('checkout')
  const [formData, setFormData] = useState({
    name: 'Shyam Sundar',
    email: 'shyam@example.com',
    phone: '+91 9876543210',
    address: '42 Lotus Garden, Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560038',
    paymentMethod: 'upi'
  })

  const shippingCost = cartSubtotal >= freeShippingThreshold ? 0 : 99
  const finalAmount = cartTotal + shippingCost
  const orderId = 'MOP-' + Math.floor(100000 + Math.random() * 900000)

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('success')
  }

  const handleFinish = () => {
    clearCart()
    navigate('/')
  }

  if (cart.length === 0 && step !== 'success') {
    return (
      <div className="min-h-screen bg-white py-20 text-center animate-fade-in">
        <h2 className="text-3xl font-medium text-stone-900">Your bag is empty</h2>
        <p className="text-stone-600 text-sm mt-2">Please add items to your cart before proceeding to checkout.</p>
        <Link
          to="/shop"
          className="mt-6 inline-block bg-[#B36B4D] text-white px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider"
        >
          Explore Ceramics
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-10 sm:py-16 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {step === 'success' ? (
          /* Order Confirmation Screen */
          <div className="bg-white rounded-3xl p-8 sm:p-14 text-center max-w-2xl mx-auto border border-[#EDE0D1] shadow-xl space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-600 shadow-md">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#B36B4D] font-medium">Order Confirmed</span>
              <h1 className="text-3xl sm:text-4xl font-medium text-stone-900 mt-1">
                Thank You, {formData.name}!
              </h1>
              <p className="text-stone-600 text-sm mt-2 font-light">
                Your order <strong className="font-mono text-stone-900 font-bold">#{orderId}</strong> is confirmed and being hand-packaged with eco-safe honeycomb wraps at our Jaipur studio.
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 text-left space-y-3 text-xs text-stone-700">
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-stone-400 font-medium">Shipping Address:</span>
                <span className="font-semibold text-right max-w-xs">{formData.address}, {formData.city}, {formData.state} - {formData.pincode}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-stone-400 font-medium">Payment Mode:</span>
                <span className="font-bold uppercase text-stone-900">{formData.paymentMethod} (Verified)</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-stone-400 font-medium">Total Amount:</span>
                <span className="font-bold text-sm text-[#B36B4D]">{formatPrice(finalAmount)}</span>
              </div>
              <div className="flex justify-between pt-1 text-emerald-700 font-semibold">
                <span className="flex items-center gap-1.5"><Truck className="w-4 h-4" /> Estimated Dispatch:</span>
                <span>Within 24 Hours</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full bg-[#B36B4D] hover:bg-[#94553D] text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              Continue Exploring Potteries
            </button>
          </div>
        ) : (
          /* Checkout Layout */
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B36B4D] font-medium flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" /> 256-Bit Encrypted
                </span>
                <h1 className="text-3xl sm:text-4xl font-medium text-[#271E18] mt-1">
                  Express Checkout
                </h1>
              </div>
              <Link to="/cart" className="text-xs font-bold uppercase text-[#B36B4D] flex items-center gap-1 hover:underline">
                <ArrowLeft className="w-4 h-4" /> Back to Bag
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Form Details */}
              <div className="lg:col-span-7">
                <form onSubmit={handlePlaceOrder} className="bg-white p-8 rounded-3xl border border-[#EDE0D1] shadow-sm space-y-8">
                  {/* Step 1: Delivery Address */}
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-4 flex items-center gap-2">
                      <Truck className="w-5 h-5 text-[#B36B4D]" /> 1. Shipping Address
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="block text-stone-600 mb-1 font-medium">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D]"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-600 mb-1 font-medium">Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D]"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-stone-600 mb-1 font-medium">Email Address (For Order Tracking) *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D]"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-stone-600 mb-1 font-medium">Delivery Address *</label>
                        <input
                          type="text"
                          required
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D]"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-600 mb-1 font-medium">City *</label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D]"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-600 mb-1 font-medium">Pincode *</label>
                        <input
                          type="text"
                          required
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                          className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Payment Mode */}
                  <div className="pt-6 border-t border-stone-100">
                    <h3 className="text-lg font-medium text-stone-900 mb-4 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-[#B36B4D]" /> 2. Choose Payment Method
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'upi', label: 'UPI (GPay/PhonePe)', badge: 'Fastest 0% Fee' },
                        { id: 'card', label: 'Debit / Credit Card', badge: '100% Encrypted' },
                        { id: 'cod', label: 'Cash on Delivery', badge: 'Pan-India COD' }
                      ].map((pm) => (
                        <button
                          key={pm.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, paymentMethod: pm.id })}
                          className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                            formData.paymentMethod === pm.id
                              ? 'border-[#B36B4D] bg-[#FAF3EC] ring-2 ring-[#B36B4D]'
                              : 'border-stone-200 bg-white hover:border-stone-300'
                          }`}
                        >
                          <span className="text-xs font-bold text-stone-900">{pm.label}</span>
                          <span className="text-[10px] text-stone-500 mt-1 font-medium">{pm.badge}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#B36B4D] hover:bg-[#94553D] text-white py-4 rounded-2xl font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
                  >
                    <ShieldCheck className="w-5 h-5 text-[#E6A05E]" />
                    <span>Pay {formatPrice(finalAmount)} & Confirm Order</span>
                  </button>
                </form>
              </div>

              {/* Order Summary Column */}
              <div className="lg:col-span-5">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EDE0D1] shadow-sm space-y-6 sticky top-28">
                  <h3 className="font-serif text-xl font-bold text-stone-900 border-b pb-4">
                    Items in Your Order ({cart.reduce((t, i) => t + i.quantity, 0)})
                  </h3>

                  <div className="max-h-64 overflow-y-auto space-y-3 divide-y divide-stone-100 pr-1">
                    {cart.map((item) => (
                      <div key={item.product.id} className="pt-3 first:pt-0 flex items-center gap-3.5">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-14 h-14 rounded-xl object-cover bg-[#F3ECE2] border border-stone-200"
                        />
                        <div className="flex-1">
                          <h4 className="font-serif font-bold text-xs text-stone-900 line-clamp-1">{item.product.name}</h4>
                          <span className="text-[11px] text-stone-500">Qty: {item.quantity}</span>
                        </div>
                        <span className="font-bold text-xs text-[#2A1E18]">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-4 border-t border-stone-200 text-xs text-stone-600">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-bold text-stone-900">{formatPrice(cartSubtotal)}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-700 font-semibold">
                        <span>Promo Code ({appliedCoupon})</span>
                        <span>-{formatPrice(discountAmount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Shipping Charge</span>
                      <span>{shippingCost === 0 ? <strong className="text-emerald-600 uppercase">FREE</strong> : formatPrice(shippingCost)}</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-stone-200 text-base font-extrabold text-stone-900">
                      <span>Total:</span>
                      <span className="text-[#B36B4D]">{formatPrice(finalAmount)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
