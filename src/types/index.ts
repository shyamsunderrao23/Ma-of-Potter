export interface Product {
  id: string
  name: string
  subtitle?: string
  category: 'mugs' | 'dinnerware' | 'vases' | 'diffusers' | 'bowls' | 'teaware'
  price: number // Base price in INR
  originalPrice?: number
  rating: number
  reviewsCount: number
  images: string[]
  badge?: 'SALE' | 'NEW' | 'BESTSELLER' | 'HANDMADE'
  description: string
  details: {
    material: string
    capacity?: string
    dimensions: string
    care: string
    dishwasherSafe: boolean
    microwaveSafe: boolean
    foodSafe: boolean
  }
  inStock: boolean
  featured?: boolean
  isBestSeller?: boolean
  isNewArrival?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
  selectedColor?: string
}

export interface CustomerReview {
  id: string
  name: string
  avatar?: string
  location: string
  rating: number
  date: string
  title: string
  comment: string
  productPurchased: string
  verified: boolean
  source: 'Google' | 'Verified Buyer'
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  author: string
}

export type Currency = 'INR' | 'USD' | 'EUR'
