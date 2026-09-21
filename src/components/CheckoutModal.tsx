import React, { useState } from 'react'
import {
  X,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  Truck
} from 'lucide-react'
import { useShop } from '../context/ShopContext'

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    cartTotal,
    discountAmount,
    appliedCoupon,
    clearCart,
    formatPrice,
    freeShippingThreshold
  } = useShop()

  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping')
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

  if (!isCheckoutOpen) return null

  const shippingCost = cartSubtotal >= freeShippingThreshold ? 0 : 99
  const finalAmount = cartTotal + shippingCost
  const orderId = 'MOP-' + Math.floor(100000 + Math.random() * 900000)

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('success')
  }

  const handleFinish = () => {
    clearCart()
    setIsCheckoutOpen(false)
    setStep('shipping')
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        onClick={() => step !== 'success' && setIsCheckoutOpen(false)}
        className="fixed inset-0"
      />

      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 z-10 my-8">
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#E8DCCF] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Man of Potter Logo"
              className="w-8 h-8 rounded-full object-cover shadow-sm border border-stone-200"
            />
            <h2 className="text-xl sm:text-2xl font-medium text-[#2A1E18]">
              {step === 'success' ? 'Order Confirmed!' : 'Express Checkout'}
            </h2>
          </div>
          {step !== 'success' && (
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="p-2 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {step === 'success' ? (
          /* Order Confirmation Screen */
          <div className="p-8 text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-600 shadow-lg">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div>
              <h3 className="text-2xl font-medium text-stone-900">
                Thank you, {formData.name}!
              </h3>
              <p className="text-stone-600 text-sm mt-1">
                Your order <strong className="font-mono text-stone-800">#{orderId}</strong> has been received by our studio master potters.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E8DCCF] text-left space-y-3 text-xs text-stone-700">
              <div className="flex justify-between border-b pb-2">
                <span className="text-stone-400">Delivery Address:</span>
                <span className="font-semibold text-right max-w-[260px]">{formData.address}, {formData.city}, {formData.state} - {formData.pincode}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-stone-400">Payment Method:</span>
                <span className="font-semibold uppercase">{formData.paymentMethod} (Verified)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-stone-400">Amount Paid:</span>
                <span className="font-bold text-sm text-[#B36B4D]">{formatPrice(finalAmount)}</span>
              </div>
              <div className="flex justify-between pt-1 text-emerald-700 font-medium">
                <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5" /> Honeycomb Safe Packaging:</span>
                <span>Dispatches in 24 hrs</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full bg-[#B36B4D] hover:bg-[#94553D] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handlePlaceOrder} className="p-6 sm:p-8 space-y-6">
            {/* Delivery Details */}
            <div className="space-y-4">
              <h4 className="text-base font-medium text-stone-800 flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#B36B4D]" />
                1. Delivery Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-stone-600 mb-1 font-medium">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 bg-white border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D]"
                  />
                </div>
                <div>
                  <label className="block text-stone-600 mb-1 font-medium">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 bg-white border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-stone-600 mb-1 font-medium">Delivery Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="House / Flat No., Street, Landmark"
                    className="w-full p-2.5 bg-white border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D]"
                  />
                </div>
                <div>
                  <label className="block text-stone-600 mb-1 font-medium">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-2.5 bg-white border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D]"
                  />
                </div>
                <div>
                  <label className="block text-stone-600 mb-1 font-medium">Pincode</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full p-2.5 bg-white border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3 pt-2">
              <h4 className="text-base font-medium text-stone-800 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#B36B4D]" />
                2. Select Payment Method
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'upi', label: 'UPI (GPay/PhonePe)', badge: 'Instant 0% Fee' },
                  { id: 'card', label: 'Credit/Debit Card', badge: 'Secure' },
                  { id: 'cod', label: 'Cash on Delivery', badge: 'Pan-India' }
                ].map((pm) => (
                  <button
                    key={pm.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: pm.id })}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                      formData.paymentMethod === pm.id
                        ? 'border-[#B36B4D] bg-[#F7EFE6] ring-2 ring-[#B36B4D]'
                        : 'border-stone-300 bg-white hover:border-stone-400'
                    }`}
                  >
                    <span className="text-xs font-bold text-stone-900">{pm.label}</span>
                    <span className="text-[10px] text-stone-500 mt-1 font-medium">{pm.badge}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Order Summary Breakdown */}
            <div className="bg-white p-4 rounded-2xl border border-[#EDE0D1] space-y-2 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Items ({cart.reduce((t, i) => t + i.quantity, 0)} items)</span>
                <span>{formatPrice(cartSubtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Coupon ({appliedCoupon})</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-stone-600">
                <span>Delivery Charge</span>
                <span>{shippingCost === 0 ? <strong className="text-emerald-600 uppercase">FREE</strong> : formatPrice(shippingCost)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-200 text-sm font-extrabold text-stone-900">
                <span>Total Payable:</span>
                <span className="text-[#B36B4D]">{formatPrice(finalAmount)}</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#B36B4D] hover:bg-[#94553D] text-white py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <ShieldCheck className="w-5 h-5 text-[#E6A05E]" />
              <span>Complete Order • {formatPrice(finalAmount)}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
