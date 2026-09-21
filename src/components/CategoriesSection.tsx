import React from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES } from '../data/products'

export const CategoriesSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B36B4D] font-medium">
            Curated Collections
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#271E19] mt-2">
            Shop by Category
          </h2>
          <div className="w-16 h-0.5 bg-[#B36B4D] mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-8 xl:gap-10 justify-items-center">
          {CATEGORIES.map((cat) => {
            const targetUrl = cat.id === 'all' ? '/shop' : `/shop/${cat.id}`
            return (
              <Link
                key={cat.id}
                to={targetUrl}
                className="flex flex-col items-center text-center cursor-pointer w-full max-w-[220px]"
              >
                {/* Big Circle Image (No outline, clean circular image) */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-48 lg:h-48 xl:w-52 xl:h-52 rounded-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-sm sm:text-base font-medium tracking-normal text-[#2C221D] mt-3.5 sm:mt-4">
                  {cat.name}
                </h3>

                {/* Count */}
                <span className="text-xs text-[#8C7667] mt-1 font-normal">
                  {cat.count} handcrafted items
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
