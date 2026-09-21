import React, { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Star,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  Plus,
  Minus,
  Sparkles,
  ChevronRight,
  Check,
  Award,
  Flame
} from 'lucide-react'
import { PRODUCTS } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { useShop } from '../context/ShopContext'

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { addToCart, wishlist, toggleWishlist, formatPrice, setIsCheckoutOpen } = useShop()

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0]

  const [selectedImgIdx, setSelectedImgIdx] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<'overview' | 'craft' | 'care' | 'shipping'>('overview')
  const [isAdded, setIsAdded] = useState(false)
  const [pincode, setPincode] = useState('')
  const [pincodeChecked, setPincodeChecked] = useState(false)

  // Related products from same category or bestsellers
  const relatedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.id !== product.id && (p.category === product.category || p.isBestSeller)).slice(0, 4)
  }, [product])

  const isWishlisted = wishlist.includes(product.id)

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const handleBuyNow = () => {
    addToCart(product, quantity)
    setIsCheckoutOpen(true)
  }

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-8 font-medium overflow-x-auto no-scrollbar">
          <Link to="/" className="hover:text-[#B36B4D] transition-colors whitespace-nowrap">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
          <Link to="/shop" className="hover:text-[#B36B4D] transition-colors whitespace-nowrap">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
          <Link to={`/shop/${product.category}`} className="hover:text-[#B36B4D] transition-colors capitalize whitespace-nowrap">
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
          <span className="text-stone-900 font-bold truncate">{product.name}</span>
        </nav>

        {/* Main Product Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white p-6 sm:p-10 rounded-3xl border border-[#EDE0D1] shadow-sm mb-16">
          {/* Left Column: Multi-Angle Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Stage Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#F3ECE2] border border-[#E8DCCF] relative shadow-inner group">
              <img
                src={product.images[selectedImgIdx] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#B36B4D] text-white text-xs font-bold uppercase rounded-md shadow">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImgIdx(idx)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${
                      selectedImgIdx === idx
                        ? 'border-[#B36B4D] shadow-md scale-102'
                        : 'border-[#EDE0D1] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Details & Purchase Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              {/* Rating & Reviews */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-[#E6A05E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E6A05E]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-stone-800">
                  {product.rating} Rating
                </span>
                <span className="text-stone-400 text-xs">•</span>
                <span className="text-xs text-stone-500 underline cursor-pointer">
                  {product.reviewsCount} verified studio reviews
                </span>
              </div>

              {/* Title & Subtitle */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#271E18] leading-tight tracking-tight">
                {product.name}
              </h1>

              {product.subtitle && (
                <p className="text-sm text-[#8C7667] mt-1 font-medium">
                  {product.subtitle}
                </p>
              )}

              {/* Price & Discount */}
              <div className="mt-5 flex items-baseline gap-4 pb-4 border-b border-stone-100">
                <span className="text-3xl sm:text-4xl font-black text-[#241A15]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-stone-400 line-through font-semibold">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="px-3 py-1 rounded-full bg-[#E75B42]/10 text-[#E75B42] text-xs font-bold">
                    Save {discountPercent}% OFF
                  </span>
                )}
              </div>

              <span className="text-[11px] text-stone-400 mt-1 block">
                Inclusive of all taxes • Free Pan-India Delivery on orders above ₹1,499
              </span>

              {/* Description */}
              <p className="mt-5 text-sm text-stone-600 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Specifications Pills */}
              <div className="mt-6 grid grid-cols-2 gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs">
                <div>
                  <span className="text-stone-400 block text-[11px]">Material</span>
                  <span className="font-bold text-stone-800">{product.details.material}</span>
                </div>
                {product.details.capacity && (
                  <div>
                    <span className="text-stone-400 block text-[11px]">Capacity</span>
                    <span className="font-bold text-stone-800">{product.details.capacity}</span>
                  </div>
                )}
                <div>
                  <span className="text-stone-400 block text-[11px]">Dimensions</span>
                  <span className="font-bold text-stone-800">{product.details.dimensions}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px]">Food & Heat Safe</span>
                  <span className="font-bold text-emerald-700">100% Lead-Free Glaze</span>
                </div>
              </div>

              {/* Pincode check simulator */}
              <div className="mt-6 pt-4 border-t border-stone-100">
                <span className="text-xs font-bold text-stone-800 mb-2 block flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#B36B4D]" /> Check Estimated Delivery Date
                </span>
                <div className="flex gap-2 max-w-sm">
                  <input
                    type="text"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter 6-digit Pincode"
                    className="flex-1 px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D] font-mono"
                  />
                  <button
                    onClick={() => setPincodeChecked(true)}
                    className="px-4 py-2 bg-[#2C211B] text-white text-xs font-bold uppercase rounded-xl hover:bg-[#B36B4D] transition-colors cursor-pointer"
                  >
                    Check
                  </button>
                </div>
                {pincodeChecked && (
                  <p className="text-xs text-emerald-700 font-medium mt-2 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Express 2-3 Day Safe Transit Available for {pincode || 'your location'}!
                  </p>
                )}
              </div>
            </div>

            {/* Action Bar */}
            <div className="space-y-4 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-4">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-stone-300 rounded-2xl bg-stone-50 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4 text-stone-700" />
                  </button>
                  <span className="px-5 font-bold text-sm text-stone-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4 text-stone-700" />
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#B36B4D] hover:bg-[#94553D] text-white py-4 px-6 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  {isAdded ? (
                    <>
                      <Check className="w-5 h-5 text-white" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5 text-[#E6A05E]" />
                      <span>Add to Bag ({formatPrice(product.price * quantity)})</span>
                    </>
                  )}
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="p-4 rounded-2xl border border-stone-300 bg-stone-50 hover:bg-stone-100 transition-colors text-stone-700 cursor-pointer"
                  title="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#B36B4D] text-[#B36B4D]' : ''}`} />
                </button>
              </div>

              {/* Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="w-full bg-[#2C211B] hover:bg-black text-white py-4 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#E6A05E]" />
                <span>Instant Buy Now • {formatPrice(product.price * quantity)}</span>
              </button>

              {/* Value Guarantees */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-stone-500 pt-3 border-t border-stone-100">
                <span className="flex items-center justify-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#B36B4D]" /> 100% Handcrafted
                </span>
                <span className="flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Non-Toxic Glaze
                </span>
                <span className="flex items-center justify-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#B36B4D]" /> Breakage Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Product In-Depth Detail Tabs */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EDE0D1] shadow-sm mb-16">
          <div className="flex border-b border-stone-200 gap-4 sm:gap-8 overflow-x-auto no-scrollbar">
            {[
              { id: 'overview', label: 'Story & Specifications' },
              { id: 'craft', label: 'The 1200°C Kiln Process' },
              { id: 'care', label: 'Care & Washing Guide' },
              { id: 'shipping', label: 'Transit & Breakage Guarantee' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer border-b-2 ${
                  activeTab === tab.id
                    ? 'border-[#B36B4D] text-[#B36B4D]'
                    : 'border-transparent text-stone-500 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="pt-8 text-stone-600 text-sm leading-relaxed max-w-4xl">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-stone-900">Crafted by Hand, Not Molds</h3>
                <p>
                  Every <strong>{product.name}</strong> is thrown by our master potters on a spinning kick wheel.
                  The piece is slowly dried under shade for 72 hours, trimmed with bamboo tools, bisque fired, hand-dipped in
                  mineral glazes made with crushed quartz and natural ash, and kiln-fired to peak heat.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <span className="font-bold text-stone-900 text-xs block mb-1">Dimensions & Weight</span>
                    <span className="text-xs text-stone-600">{product.details.dimensions} • Weight ~380g</span>
                  </div>
                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <span className="font-bold text-stone-900 text-xs block mb-1">Raw Clay Composition</span>
                    <span className="text-xs text-stone-600">Pure high-density stoneware with fine chamotte grog</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'craft' && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#B36B4D]" /> High-Heat Vitrification
                </h3>
                <p>
                  Our pottery is fired to <strong>1200°C - 1280°C</strong> in energy-efficient gas & wood kilns.
                  At this temperature, the clay particles fuse together completely (vitrification), rendering the ceramic
                  impervious to water, odor retention, and bacterial growth even without glaze.
                </p>
                <p>
                  Because we use natural reactive mineral glazes, heat currents inside the kiln cause spontaneous iron blooms and
                  color gradients—giving each vessel its own soulful fingerprint.
                </p>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-stone-900">How to Care For Your Stoneware</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm list-disc pl-5 text-stone-700">
                  <li><strong>Microwave Safe:</strong> Safe for heating coffee, tea, and food. Handle with care when hot.</li>
                  <li><strong>Dishwasher Safe:</strong> You can place it on the top rack of standard dishwashers.</li>
                  <li><strong>Stain Resistance:</strong> Glazed stoneware does not absorb tea or coffee tannins. For unglazed portions, rinse with mild soapy water.</li>
                  <li><strong>Avoid Thermal Shock:</strong> Do not transfer directly from freezer to preheated oven.</li>
                </ul>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" /> 100% Breakage-Free Guarantee
                </h3>
                <p>
                  Pottery is fragile, but our shipping is fortress-level. We wrap every piece in multi-layered honeycomb kraft paper,
                  cornstarch foam pads, and reinforced double-wall corrugated boxes without any single-use plastic.
                </p>
                <p>
                  <strong>In the rare event of transit damage:</strong> Simply take a quick photo of the broken piece upon opening
                  and WhatsApp us at +91 98765 43210. We will dispatch an immediate free replacement within 24 hours, no questions asked!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Carousel */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B36B4D] font-medium">Recommended</span>
                <h2 className="text-2xl sm:text-3xl font-medium text-[#2A1E18] mt-1">
                  You May Also Love
                </h2>
              </div>
              <Link to="/shop" className="text-xs font-bold uppercase text-[#B36B4D] hover:underline">
                View Catalog
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
