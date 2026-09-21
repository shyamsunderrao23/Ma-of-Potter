import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Product } from '../types'
import { ProductCard } from './ProductCard'

interface ProductCarouselSectionProps {
  id: string
  subtitle?: string
  title: string
  products: Product[]
  categoryKey?: string
  viewAllLink?: boolean
  viewAllUrl?: string
}

export const ProductCarouselSection: React.FC<ProductCarouselSectionProps> = ({
  id,
  subtitle,
  title,
  products,
  categoryKey,
  viewAllLink = true,
  viewAllUrl
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  if (products.length === 0) return null

  return (
    <section id={id} className="py-10 sm:py-14 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#EDE1D3]">
          <div>
            {subtitle && (
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#B36B4D] font-medium">
                {subtitle}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#2A1E18] mt-1">
              {title}
            </h2>
          </div>

          <div className="mt-4 sm:mt-0 flex items-center">
            {viewAllLink && (
              <Link
                to={viewAllUrl || (categoryKey && categoryKey !== 'all' ? `/shop/${categoryKey}` : '/shop')}
                className="text-xs font-bold uppercase tracking-wider text-[#94553D] hover:text-[#B36B4D] flex items-center gap-1.5 transition-colors"
              >
                <span>View All ({products.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

        {/* Horizontal Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-1 snap-x snap-mandatory"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[280px] sm:w-[330px] md:w-[360px] lg:w-[380px] flex-shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
