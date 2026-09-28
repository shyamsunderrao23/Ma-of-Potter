import React, { useState, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
  Package
} from 'lucide-react'
import { useShop } from '../context/ShopContext'

export const Header: React.FC = () => {
  const {
    cartCount,
    setIsCartOpen,
    wishlist,
    setIsWishlistOpen,
    setIsSearchOpen,
    setSelectedCategory,
    setSearchQuery
  } = useShop()

  const navigate = useNavigate()
  const [shopMenuOpen, setShopMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileShopExpanded, setMobileShopExpanded] = useState(false)
  const [trackOrderOpen, setTrackOrderOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [orderTrackingId, setOrderTrackingId] = useState('')
  const [trackResult, setTrackResult] = useState<string | null>(null)

  const megaMenuTimeoutRef = useRef<any>(null)

  const handleMouseEnterShop = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current)
    setShopMenuOpen(true)
  }

  const handleMouseLeaveShop = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setShopMenuOpen(false)
    }, 200)
  }

  const megaMenuColumns = [
    {
      title: 'Dinnerware',
      categorySlug: 'dinnerware',
      items: [
        'Portion Bowls',
        'Dinner Plates',
        'Breakfast Plates',
        'Starter Plates',
        'Dip Bowls',
        'Meal & Salad Bowls',
        'Pasta Plates & Bowls',
        'Soup Bowls'
      ]
    },
    {
      title: 'Drinkware',
      categorySlug: 'mugs',
      items: [
        'Cups & Mugs',
        'Tumblers',
        'Filter Coffee Sets',
        'Jugs and Bottles',
        'Kettles and Kettle Sets',
        'Infusion Mug Sets',
        'Pourers',
        'Terracotta',
        'Barware'
      ]
    },
    {
      title: 'Home Decor',
      categorySlug: 'vases',
      items: [
        'Planters',
        'Vases',
        'Urulis',
        'Jars',
        'Holders',
        'Lamps',
        'Trinket Dishes',
        'Christmas Edit'
      ]
    },
    {
      title: 'Serveware',
      categorySlug: 'bowls',
      items: [
        'Serving Platters',
        'Serving Bowls',
        'Serving Pots with Lid',
        'Chip & Dip Range'
      ]
    },
    {
      title: 'Spa Range',
      categorySlug: 'diffusers',
      items: [
        'Candle Diffusers',
        'Electric Diffusers',
        'Dhoop Dishes',
        'Incense Stick Holders',
        'Oil Pourers',
        'Candle Holders'
      ]
    }
  ]

  const handleSubCategoryClick = (categorySlug: string, subItemName: string) => {
    setShopMenuOpen(false)
    setMobileMenuOpen(false)
    setSelectedCategory(categorySlug)
    setSearchQuery(subItemName)
    navigate(`/shop/${categorySlug}`)
  }

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!orderTrackingId.trim()) return
    setTrackResult(`Order #${orderTrackingId.toUpperCase()}: Hand-glazed & dispatched via Express Cargo. Estimated delivery in 2 days.`)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-[#EDE1D3] transition-all">
      {/* Top Header Row (Left: Menu/Social | Center: Absolute Centered Brand Logo | Right: Actions) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="h-20 sm:h-24 flex items-center justify-between relative">
          
          {/* Left: Mobile Menu Trigger / Desktop Social Icons */}
          <div className="flex items-center justify-start z-10">
            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-1.5 -ml-1 text-stone-700 hover:text-[#B36B4D] transition-colors cursor-pointer shrink-0"
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Desktop Social Icons */}
            <div className="hidden md:flex items-center gap-4 text-stone-500">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="hover:text-[#B36B4D] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#pinterest"
                aria-label="Pinterest"
                className="hover:text-[#B36B4D] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.056.208-.182.253-.419.153-1.564-.728-2.543-3.011-2.543-4.848 0-3.947 2.867-7.571 8.271-7.571 4.341 0 7.714 3.094 7.714 7.228 0 4.313-2.719 7.784-6.491 7.784-1.268 0-2.461-.659-2.868-1.439l-.78 2.973c-.282 1.087-1.045 2.45-1.556 3.284 1.144.354 2.355.545 3.61.545 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-[#25D366] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="hover:text-[#B36B4D] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Center Column: Absolute True Geometric Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center pointer-events-auto">
            <Link
              to="/"
              className="flex items-center gap-1.5 xs:gap-2 sm:gap-3.5 group"
            >
              <img
                src="/logo.png"
                alt="Man of Potter Logo"
                className="w-8 h-8 xs:w-9 xs:h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0"
              />
              <span className="font-serif text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-bold tracking-tight text-[#241A15] group-hover:text-[#B36B4D] transition-colors whitespace-nowrap">
                Man of Potter
              </span>
            </Link>
          </div>

          {/* Right Column: Action Icons */}
          <div className="flex items-center justify-end gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 z-10">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1 xs:p-1.5 sm:p-2 text-stone-700 hover:text-[#B36B4D] transition-colors cursor-pointer"
              aria-label="Search"
              title="Search pottery"
            >
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* User Profile / Account Icon */}
            <button
              onClick={() => setAccountOpen(true)}
              className="p-1.5 sm:p-2 text-stone-700 hover:text-[#B36B4D] transition-colors cursor-pointer hidden md:block"
              aria-label="My Account"
              title="My Account"
            >
              <User className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Wishlist Icon with round badge count */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="p-1 xs:p-1.5 sm:p-2 text-stone-700 hover:text-[#B36B4D] transition-colors relative cursor-pointer"
              aria-label="Wishlist"
              title="Saved Favorites"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-4 h-4 bg-[#B36B4D] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            </button>

            {/* Shopping Bag / Cart with round badge count */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-1 xs:p-1.5 sm:p-2 text-stone-700 hover:text-[#B36B4D] transition-colors relative cursor-pointer"
              aria-label="Cart"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-4 h-4 bg-[#B36B4D] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Menu Bar (Home, Shop ˅, B2B, Workshop, Blogs, About Us, Contact Us, Track Order) */}
      <nav className="border-t border-[#F0E5D7] bg-white hidden md:block relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-12 flex items-center justify-center gap-8 text-sm font-medium text-stone-700">
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-[#B36B4D] transition-colors ${isActive ? 'text-[#B36B4D] font-bold' : ''}`
              }
            >
              Home
            </NavLink>

            {/* Shop (Hoverable Mega Menu) */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterShop}
              onMouseLeave={handleMouseLeaveShop}
            >
              <button
                onClick={() => navigate('/shop')}
                className={`flex items-center gap-1 hover:text-[#B36B4D] transition-colors py-3 cursor-pointer ${
                  shopMenuOpen ? 'text-[#B36B4D] font-bold' : ''
                }`}
              >
                <span>Shop</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${shopMenuOpen ? 'rotate-180 text-[#B36B4D]' : ''}`} />
              </button>
            </div>



            {/* About Us */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-[#B36B4D] transition-colors ${isActive ? 'text-[#B36B4D] font-bold' : ''}`
              }
            >
              About Us
            </NavLink>

            {/* Contact Us */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-[#B36B4D] transition-colors ${isActive ? 'text-[#B36B4D] font-bold' : ''}`
              }
            >
              Contact Us
            </NavLink>

          </div>
        </div>

        {/* Full-Width Mega Menu Dropdown matching screenshot */}
        {shopMenuOpen && (
          <div
            onMouseEnter={handleMouseEnterShop}
            onMouseLeave={handleMouseLeaveShop}
            className="absolute top-full left-0 w-full bg-white border-b border-t border-[#E8DCCF] shadow-2xl z-50 animate-fade-in"
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
              <div className="grid grid-cols-5 gap-8">
                {megaMenuColumns.map((col, idx) => (
                  <div key={idx} className="space-y-4">
                    {/* Column Heading with underline bar */}
                    <div className="border-b border-stone-200 pb-2">
                      <Link
                        to={`/shop/${col.categorySlug}`}
                        onClick={() => setShopMenuOpen(false)}
                        className="font-serif text-lg font-bold text-stone-900 hover:text-[#B36B4D] transition-colors"
                      >
                        {col.title}
                      </Link>
                    </div>

                    {/* Subcategories list */}
                    <ul className="space-y-2.5">
                      {col.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <button
                            onClick={() => handleSubCategoryClick(col.categorySlug, item)}
                            className="text-xs text-stone-500 hover:text-[#B36B4D] transition-colors text-left w-full cursor-pointer font-light hover:translate-x-1 duration-150 inline-block"
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-fade-in">
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <div className="absolute inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/logo.png"
                    alt="Man of Potter Logo"
                    className="w-9 h-9 rounded-full object-cover shadow-sm"
                  />
                  <span className="font-serif font-bold text-lg text-[#241A15]">Man of Potter</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-stone-500">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 text-sm font-medium text-stone-800">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#B36B4D]">
                  Home
                </Link>

                {/* Mobile Shop Accordion */}
                <div>
                  <button
                    onClick={() => setMobileShopExpanded(!mobileShopExpanded)}
                    className="flex items-center justify-between w-full py-1 text-left hover:text-[#B36B4D]"
                  >
                    <span>Shop All Categories</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileShopExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileShopExpanded && (
                    <div className="pl-3 mt-2 space-y-4 border-l-2 border-[#EDE0D1] py-2 animate-fade-in">
                      {megaMenuColumns.map((col, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <Link
                            to={`/shop/${col.categorySlug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-serif font-bold text-xs text-stone-900 block"
                          >
                            {col.title}
                          </Link>
                          <div className="grid grid-cols-2 gap-1 text-[11px] text-stone-500">
                            {col.items.slice(0, 4).map((it, i) => (
                              <button
                                key={i}
                                onClick={() => handleSubCategoryClick(col.categorySlug, it)}
                                className="text-left py-0.5 hover:text-[#B36B4D]"
                              >
                                {it}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#B36B4D]">
                  About Us
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#B36B4D]">
                  Contact Us
                </Link>

                {/* Account / Profile Item in Sidebar */}
                <div className="pt-3 border-t border-stone-100">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setAccountOpen(true)
                    }}
                    className="flex items-center gap-3 w-full py-2.5 px-3 rounded-xl bg-[#FAF6F0] text-[#B36B4D] font-bold text-xs tracking-wide hover:bg-[#F3ECE2] transition-colors cursor-pointer"
                  >
                    <User className="w-4 h-4 text-[#B36B4D]" />
                    <span>My Account & Orders</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setIsWishlistOpen(true)
                }}
                className="w-full flex items-center justify-center gap-2 border border-stone-300 text-stone-700 py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-stone-50"
              >
                <Heart className="w-3.5 h-3.5 text-[#B36B4D]" />
                <span>Wishlist ({wishlist.length})</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  navigate('/cart')
                }}
                className="w-full bg-[#B36B4D] hover:bg-[#94553D] text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs shadow flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>View Cart ({cartCount})</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Track Order Modal */}
      {trackOrderOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#EDE0D1]">
            <div className="flex items-center justify-between pb-4 border-b">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-[#B36B4D]" />
                <h3 className="font-serif text-xl font-bold text-stone-900">Track Your Pottery Order</h3>
              </div>
              <button onClick={() => setTrackOrderOpen(false)} className="p-1 text-stone-400 hover:text-stone-900">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleTrackSubmit} className="mt-6 space-y-4 text-xs">
              <div>
                <label className="block text-stone-600 mb-1 font-medium">Order Number / ID</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. MOP-482910"
                  value={orderTrackingId}
                  onChange={(e) => setOrderTrackingId(e.target.value)}
                  className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl outline-none font-mono uppercase focus:border-[#B36B4D]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#B36B4D] hover:bg-[#94553D] text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs shadow-md"
              >
                Track Shipment Status
              </button>
            </form>

            {trackResult && (
              <div className="mt-5 p-4 bg-[#F2F8F4] border border-emerald-300 rounded-2xl text-xs text-emerald-800 leading-relaxed animate-fade-in">
                {trackResult}
              </div>
            )}
          </div>
        </div>
      )}

      {/* User Account Modal */}
      {accountOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-white rounded-3xl max-w-sm w-full p-6 sm:p-8 shadow-2xl border border-[#EDE0D1] text-center">
            <button onClick={() => setAccountOpen(false)} className="absolute top-4 right-4 p-1 text-stone-400 hover:text-stone-900">
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 rounded-full bg-stone-100 text-[#B36B4D] flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-medium text-stone-900">Artisan Studio Member</h3>
            <p className="text-xs text-stone-500 mt-1">Manage your pottery orders, saved addresses, and workshop bookings.</p>
            <div className="mt-6 space-y-2">
              <button
                onClick={() => {
                  setAccountOpen(false)
                  navigate('/cart')
                }}
                className="w-full bg-[#B36B4D] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                View Active Bag ({cartCount})
              </button>
              <button
                onClick={() => {
                  setAccountOpen(false)
                  setIsWishlistOpen(true)
                }}
                className="w-full border border-stone-300 text-stone-700 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-stone-50"
              >
                View Wishlist ({wishlist.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
