import React, { createContext, useContext, useState, useEffect } from 'react'
import type { Product, CartItem, Currency } from '../types'
import { PRODUCTS } from '../data/products'

interface ToastItem {
  id: string
  message: string
  type: 'success' | 'info' | 'cart'
}

interface ShopContextType {
  cart: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  cartCount: number
  cartSubtotal: number
  cartTotal: number
  freeShippingThreshold: number
  appliedCoupon: string | null
  discountAmount: number
  applyCoupon: (code: string) => { success: boolean; message: string }
  removeCoupon: () => void
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void

  wishlist: string[]
  toggleWishlist: (productId: string) => void
  isWishlistOpen: boolean
  setIsWishlistOpen: (open: boolean) => void

  currency: Currency
  setCurrency: (cur: Currency) => void
  formatPrice: (priceINR: number) => string

  quickViewProduct: Product | null
  setQuickViewProduct: (product: Product | null) => void

  isSearchOpen: boolean
  setIsSearchOpen: (open: boolean) => void
  searchQuery: string
  setSearchQuery: (query: string) => void

  isCheckoutOpen: boolean
  setIsCheckoutOpen: (open: boolean) => void

  selectedCategory: string
  setSelectedCategory: (cat: string) => void

  toasts: ToastItem[]
  showToast: (message: string, type?: 'success' | 'info' | 'cart') => void
  removeToast: (id: string) => void
  scrollToSection: (sectionId: string) => void
}

const ShopContext = createContext<ShopContextType | undefined>(undefined)

const CURRENCY_RATES: Record<Currency, { rate: number; symbol: string }> = {
  INR: { rate: 1, symbol: '₹' },
  USD: { rate: 0.012, symbol: '$' },
  EUR: { rate: 0.011, symbol: '€' }
}

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Cart state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('mop_cart')
      return saved ? JSON.parse(saved) : [
        { product: PRODUCTS[0], quantity: 1 },
        { product: PRODUCTS[2], quantity: 1 }
      ]
    } catch {
      return [{ product: PRODUCTS[0], quantity: 1 }]
    }
  })

  // Wishlist state
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mop_wishlist')
      return saved ? JSON.parse(saved) : ['mop-mug-01', 'mop-diff-01']
    } catch {
      return ['mop-mug-01']
    }
  })

  const [currency, setCurrency] = useState<Currency>('INR')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>('POTTER10')
  const [toasts, setToasts] = useState<ToastItem[]>([])

  useEffect(() => {
    try {
      localStorage.setItem('mop_cart', JSON.stringify(cart))
    } catch (e) {
      console.error(e)
    }
  }, [cart])

  useEffect(() => {
    try {
      localStorage.setItem('mop_wishlist', JSON.stringify(wishlist))
    } catch (e) {
      console.error(e)
    }
  }, [wishlist])

  const showToast = (message: string, type: 'success' | 'info' | 'cart' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5)
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      removeToast(id)
    }, 3200)
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { product, quantity }]
    })
    showToast(`Added "${product.name}" to cart!`, 'cart')
    setIsCartOpen(true)
  }

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId))
    showToast('Item removed from cart', 'info')
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const toggleWishlist = (productId: string) => {
    const prod = PRODUCTS.find(p => p.id === productId)
    if (wishlist.includes(productId)) {
      setWishlist(prev => prev.filter(id => id !== productId))
      showToast(`Removed from wishlist`, 'info')
    } else {
      setWishlist(prev => [...prev, productId])
      showToast(`Saved "${prod?.name || 'Item'}" to wishlist`, 'success')
    }
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartSubtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
  const freeShippingThreshold = 1499

  let discountAmount = 0
  if (appliedCoupon === 'POTTER10') {
    discountAmount = Math.round(cartSubtotal * 0.1)
  } else if (appliedCoupon === 'EARTH20') {
    discountAmount = Math.round(cartSubtotal * 0.2)
  }

  const cartTotal = Math.max(0, cartSubtotal - discountAmount)

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase()
    if (clean === 'POTTER10') {
      setAppliedCoupon('POTTER10')
      showToast('Promo code POTTER10 applied: 10% OFF!', 'success')
      return { success: true, message: '10% discount applied successfully!' }
    }
    if (clean === 'EARTH20') {
      setAppliedCoupon('EARTH20')
      showToast('Promo code EARTH20 applied: 20% OFF!', 'success')
      return { success: true, message: '20% special discount applied!' }
    }
    showToast('Invalid promo code. Try POTTER10 or EARTH20', 'info')
    return { success: false, message: 'Invalid coupon code. Try POTTER10' }
  }

  const removeCoupon = () => {
    setAppliedCoupon(null)
    showToast('Promo code removed', 'info')
  }

  const formatPrice = (priceINR: number) => {
    const info = CURRENCY_RATES[currency]
    const converted = priceINR * info.rate
    if (currency === 'INR') {
      return `₹${priceINR.toLocaleString('en-IN')}`
    }
    return `${info.symbol}${converted.toFixed(2)}`
  }

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        cartTotal,
        freeShippingThreshold,
        appliedCoupon,
        discountAmount,
        applyCoupon,
        removeCoupon,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        currency,
        setCurrency,
        formatPrice,
        quickViewProduct,
        setQuickViewProduct,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        isCheckoutOpen,
        setIsCheckoutOpen,
        selectedCategory,
        setSelectedCategory,
        toasts,
        showToast,
        removeToast,
        scrollToSection
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export const useShop = () => {
  const ctx = useContext(ShopContext)
  if (!ctx) {
    throw new Error('useShop must be used within a ShopProvider')
  }
  return ctx
}
