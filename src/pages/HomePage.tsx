import { useMemo } from 'react'
import { HeroBanner } from '../components/HeroBanner'
import { TrustBadges } from '../components/TrustBadges'
import { CategoriesSection } from '../components/CategoriesSection'
import { ProductCarouselSection } from '../components/ProductCarouselSection'
import { ClayWorldSection } from '../components/ClayWorldSection'
import { CustomerReviews } from '../components/CustomerReviews'
import { Newsletter } from '../components/Newsletter'
import { PRODUCTS } from '../data/products'

export const HomePage = () => {
  const bestSellers = useMemo(() => PRODUCTS.filter((p) => p.isBestSeller), [])
  const newArrivals = useMemo(() => PRODUCTS.filter((p) => p.isNewArrival), [])
  const dinnerware = useMemo(() => PRODUCTS.filter((p) => p.category === 'dinnerware'), [])
  const diffusers = useMemo(() => PRODUCTS.filter((p) => p.category === 'diffusers'), [])
  const mugs = useMemo(() => PRODUCTS.filter((p) => p.category === 'mugs'), [])
  const bowls = useMemo(() => PRODUCTS.filter((p) => p.category === 'bowls'), [])

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <HeroBanner />

      {/* Value Proposition Badges */}
      <TrustBadges />

      {/* Shop By Category Section */}
      <CategoriesSection />

      {/* Carousel 1: Best Sellers */}
      <ProductCarouselSection
        id="bestsellers-section"
        subtitle="Top Rated by 15,000+ Homes"
        title="Best Sellers"
        products={bestSellers}
        categoryKey="all"
        viewAllUrl="/bestsellers"
      />

      {/* Carousel 2: New Arrivals */}
      <ProductCarouselSection
        id="new-arrivals-section"
        subtitle="Fresh From The Studio Kiln"
        title="New Arrivals"
        products={newArrivals}
        categoryKey="all"
      />

      {/* Carousel 3: Dinnerware Collection */}
      <ProductCarouselSection
        id="dinnerware-section"
        subtitle="Elevate Your Tabletop Dining"
        title="Dinnerware Collection"
        products={dinnerware}
        categoryKey="dinnerware"
      />

      {/* Carousel 4: Aroma & Diffusers */}
      <ProductCarouselSection
        id="diffusers-section"
        subtitle="Aromatic Sanctuaries"
        title="Aroma & Diffuser Lamps"
        products={diffusers}
        categoryKey="diffusers"
      />

      {/* Carousel 5: Tea & Coffee Mugs */}
      <ProductCarouselSection
        id="mugs-section"
        subtitle="Slow Morning Rituals"
        title="Mugs & Studio Cups"
        products={mugs}
        categoryKey="mugs"
      />

      {/* Carousel 6: Serving Bowls & Platters */}
      <ProductCarouselSection
        id="bowls-section"
        subtitle="Artisan Serveware"
        title="Serving Bowls & Platters"
        products={bowls}
        categoryKey="bowls"
      />

      {/* Customer Reviews & Google Badge */}
      <CustomerReviews />

      {/* Clay Is Our World - Brand Story & Manifesto */}
      <ClayWorldSection />

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}
