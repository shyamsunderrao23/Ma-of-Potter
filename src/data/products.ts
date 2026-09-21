import type { Product } from '../types'

export const PRODUCTS: Product[] = [
  // --- BEST SELLERS & MUGS ---
  {
    id: 'mop-mug-01',
    name: 'Rustic Earth Dual-Tone Studio Mug',
    subtitle: 'Wheel-thrown ceramic with unglazed terracotta base',
    category: 'mugs',
    price: 699,
    originalPrice: 899,
    rating: 4.9,
    reviewsCount: 142,
    images: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'BESTSELLER',
    description: 'Each mug is hand-thrown on the potter’s wheel using locally sourced stoneware clay. The upper body features an ash-white reactive glaze while the lower portion reveals natural toasted clay texture.',
    details: {
      material: 'Stoneware Clay & Natural Mineral Glaze',
      capacity: '320 ml',
      dimensions: '8.5 cm x 9.5 cm',
      care: 'Dishwasher and microwave safe. Hand wash with mild soap recommended for longevity.',
      dishwasherSafe: true,
      microwaveSafe: true,
      foodSafe: true
    },
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'mop-mug-02',
    name: 'Amber Clay Speckled Artisan Mug',
    subtitle: 'Warm ochre glaze with organic iron specks',
    category: 'mugs',
    price: 749,
    originalPrice: 999,
    rating: 4.8,
    reviewsCount: 88,
    images: [
      'https://images.unsplash.com/photo-1572119865084-43c285814d63?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'SALE',
    description: 'Comfortably contoured handle and a tactile matte finish that keeps your favorite brew warm and cozy in your hands.',
    details: {
      material: 'High-fire Stoneware',
      capacity: '350 ml',
      dimensions: '9 cm x 10 cm',
      care: 'Microwave and dishwasher safe.',
      dishwasherSafe: true,
      microwaveSafe: true,
      foodSafe: true
    },
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'mop-mug-03',
    name: 'Wabi-Sabi Charcoal Coffee Dripper Cup',
    subtitle: 'Textured matte charcoal finish with pour spout',
    category: 'mugs',
    price: 849,
    originalPrice: 1099,
    rating: 5.0,
    reviewsCount: 64,
    images: [
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'NEW',
    description: 'Designed for slow coffee rituals. Handcrafted with subtle finger grooves celebrating organic imperfections.',
    details: {
      material: 'Dark Basalt Clay',
      capacity: '280 ml',
      dimensions: '8 cm x 9 cm',
      care: 'Food safe, lead free, microwave safe.',
      dishwasherSafe: true,
      microwaveSafe: true,
      foodSafe: true
    },
    inStock: true,
    isBestSeller: true,
    isNewArrival: true
  },
  {
    id: 'mop-mug-04',
    name: 'Ceramic Milk & Honey Jug with Cup',
    subtitle: 'Cream glaze with handcrafted loop handle',
    category: 'mugs',
    price: 1199,
    originalPrice: 1499,
    rating: 4.9,
    reviewsCount: 95,
    images: [
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'SALE',
    description: 'A charming handcrafted set perfect for morning breakfast tables, artisanal tea service, or bedside water carafe.',
    details: {
      material: 'Porcelain blend stoneware',
      capacity: 'Jug 500 ml, Cup 200 ml',
      dimensions: 'Jug 14 cm H, Cup 7 cm H',
      care: 'Handmade glaze, easy to rinse and dishwasher friendly.',
      dishwasherSafe: true,
      microwaveSafe: true,
      foodSafe: true
    },
    inStock: true,
    isBestSeller: true
  },

  // --- NEW ARRIVALS & TEAPOTS ---
  {
    id: 'mop-tea-01',
    name: 'Kyoto Hand-Carved Ceramic Teapot',
    subtitle: 'Indigo blue reactive glaze with built-in clay strainer',
    category: 'teaware',
    price: 1899,
    originalPrice: 2499,
    rating: 4.9,
    reviewsCount: 52,
    images: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'NEW',
    description: 'Imbued with Japanese-inspired minimalist proportions. Hand-thrown body, smooth precision pour spout, and ergonomic side grip.',
    details: {
      material: 'Fine Stoneware with Natural Mineral Glaze',
      capacity: '600 ml (3-4 cups)',
      dimensions: '16 cm x 12 cm',
      care: 'Rinse with warm water, air dry. Do not place directly on open flame.',
      dishwasherSafe: false,
      microwaveSafe: false,
      foodSafe: true
    },
    inStock: true,
    isNewArrival: true
  },
  {
    id: 'mop-tea-02',
    name: 'Zen Sandstone Tower Incense Burner',
    subtitle: 'Carved ventilation chimney with ash receiver bowl',
    category: 'diffusers',
    price: 899,
    originalPrice: 1199,
    rating: 4.7,
    reviewsCount: 38,
    images: [
      'https://images.unsplash.com/photo-1603555501671-8f96b3fce8b4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'NEW',
    description: 'Create a sanctuary at home. Hand-carved lattice allows delicate smoke ribbons to swirl and scent your meditation space.',
    details: {
      material: 'Terracotta & Sand Clay',
      dimensions: '18 cm x 7 cm',
      care: 'Wipe clean with a soft dry cloth.',
      dishwasherSafe: false,
      microwaveSafe: false,
      foodSafe: false
    },
    inStock: true,
    isNewArrival: true
  },
  {
    id: 'mop-tea-03',
    name: 'Cobalt Twin Ceramic Oil & Vinegar Set',
    subtitle: 'Twin decanters with brass-tone wire handle',
    category: 'teaware',
    price: 1399,
    originalPrice: 1799,
    rating: 4.8,
    reviewsCount: 44,
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'SALE',
    description: 'Elevate your culinary dining setup with these two matching handmade decanters finished in midnight cobalt glaze.',
    details: {
      material: 'Stoneware & food-grade cork stoppers',
      capacity: '250 ml each',
      dimensions: '15 cm x 8 cm',
      care: 'Hand wash bottles, wipe handles with damp cloth.',
      dishwasherSafe: true,
      microwaveSafe: false,
      foodSafe: true
    },
    inStock: true,
    isNewArrival: true
  },
  {
    id: 'mop-tea-04',
    name: 'Artisan Pillar Ceramic Vessel',
    subtitle: 'Hand-sculpted sculptural stoneware flask',
    category: 'vases',
    price: 1249,
    originalPrice: 1599,
    rating: 4.9,
    reviewsCount: 31,
    images: [
      'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603555501671-8f96b3fce8b4?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'HANDMADE',
    description: 'Minimalist pillar silhouette adorned with tactile ribbing from the potter’s trimming tools.',
    details: {
      material: 'Raw Chamotte Clay',
      dimensions: '22 cm x 8 cm',
      care: 'Water tight. Clean with warm soapy water.',
      dishwasherSafe: false,
      microwaveSafe: false,
      foodSafe: false
    },
    inStock: true,
    isNewArrival: true
  },

  // --- AROMA & DIFFUSERS ---
  {
    id: 'mop-diff-01',
    name: 'Petal Perforated Ceramic Aroma Lamp',
    subtitle: 'Cutwork clay oil burner for tea light candles',
    category: 'diffusers',
    price: 799,
    originalPrice: 1049,
    rating: 4.9,
    reviewsCount: 110,
    images: [
      'https://images.unsplash.com/photo-1603555501671-8f96b3fce8b4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'BESTSELLER',
    description: 'Hand-drilled floral perforations cast mesmerizing ambient shadows while warming your favorite essential oils.',
    details: {
      material: 'Natural Terracotta with White Enamel Wash',
      dimensions: '11 cm x 10 cm',
      care: 'Wipe oil bowl after each use with alcohol wipe or mild soapy water.',
      dishwasherSafe: false,
      microwaveSafe: false,
      foodSafe: false
    },
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'mop-diff-02',
    name: 'Forest Moss Stoneware Essential Oil Diffuser',
    subtitle: 'Sage olive reactive glaze with removable bowl',
    category: 'diffusers',
    price: 949,
    originalPrice: 1299,
    rating: 4.8,
    reviewsCount: 76,
    images: [
      'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603555501671-8f96b3fce8b4?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'SALE',
    description: 'A two-piece deep well burner designed to hold enough water and oil for up to 4 hours of continuous aromatics.',
    details: {
      material: 'Heavy Stoneware',
      dimensions: '12 cm x 11 cm',
      care: 'Hand wash oil basin.',
      dishwasherSafe: true,
      microwaveSafe: false,
      foodSafe: false
    },
    inStock: true
  },
  {
    id: 'mop-diff-03',
    name: 'Earthen Totem Candle Chimney',
    subtitle: 'Hand-thrown tall ceramic lantern',
    category: 'diffusers',
    price: 1299,
    originalPrice: 1699,
    rating: 5.0,
    reviewsCount: 42,
    images: [
      'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'HANDMADE',
    description: 'Statement centerpiece inspired by ancient earthen kilns. Accommodates pillar candles and fragrance bricks.',
    details: {
      material: 'Red Clay & Wood-fired ash glaze',
      dimensions: '26 cm x 11 cm',
      care: 'Dust with soft dry brush.',
      dishwasherSafe: false,
      microwaveSafe: false,
      foodSafe: false
    },
    inStock: true
  },
  {
    id: 'mop-diff-04',
    name: 'Raw Terracotta Smudge Pot & Incense Dish',
    subtitle: 'Multipurpose dhoop burner with brass trivet',
    category: 'diffusers',
    price: 549,
    originalPrice: 699,
    rating: 4.7,
    reviewsCount: 93,
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603555501671-8f96b3fce8b4?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'SALE',
    description: 'Traditional fire-resistant clay bowl formulated for burning palo santo, sage, incense cones, or resin dhoop.',
    details: {
      material: 'High-density unglazed terracotta',
      dimensions: '10 cm diameter x 5 cm H',
      care: 'Empty ashes when cool.',
      dishwasherSafe: false,
      microwaveSafe: false,
      foodSafe: false
    },
    inStock: true
  },

  // --- DINNERWARE & BOWLS ---
  {
    id: 'mop-din-01',
    name: 'Organic Rim Stoneware Platter',
    subtitle: 'Freeform undulating edge serving tray',
    category: 'dinnerware',
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviewsCount: 67,
    images: [
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'HANDMADE',
    description: 'A striking organic oval tray hand-slabbed and shaped without molds. Every piece is entirely one of a kind.',
    details: {
      material: 'Speckled White Stoneware',
      dimensions: '32 cm x 18 cm',
      care: 'Food safe, dishwasher & microwave safe.',
      dishwasherSafe: true,
      microwaveSafe: true,
      foodSafe: true
    },
    inStock: true
  },
  {
    id: 'mop-din-02',
    name: 'Artisan Rice & Noodle Bowl Pair',
    subtitle: 'Set of 2 footed ceramic ramen / pasta bowls',
    category: 'bowls',
    price: 1199,
    originalPrice: 1599,
    rating: 4.8,
    reviewsCount: 118,
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'SALE',
    description: 'Deep, comforting silhouette with an unglazed foot ring for secure grip. Great for grain bowls, ramen, and salads.',
    details: {
      material: 'Stoneware Clay with Matte Ash Glaze',
      capacity: '650 ml each',
      dimensions: '15 cm diameter x 8 cm H',
      care: 'Dishwasher, microwave and oven safe up to 200°C.',
      dishwasherSafe: true,
      microwaveSafe: true,
      foodSafe: true
    },
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'mop-din-03',
    name: 'Stackable Soup Cups with Loop Handles',
    subtitle: 'Set of 2 nesting soup & stew crocks',
    category: 'bowls',
    price: 1349,
    originalPrice: 1799,
    rating: 4.9,
    reviewsCount: 84,
    images: [
      'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'BESTSELLER',
    description: 'Thick ceramic walls retain heat to keep hearty soups, chowders, or baked French onion recipes sizzling.',
    details: {
      material: 'Refractory Stoneware Clay',
      capacity: '450 ml each',
      dimensions: '13 cm x 7 cm',
      care: 'Microwave, oven and dishwasher safe.',
      dishwasherSafe: true,
      microwaveSafe: true,
      foodSafe: true
    },
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'mop-din-04',
    name: 'Earthy Charcoal Tapas Dish',
    subtitle: 'Shallow textured dip & mezze plate',
    category: 'dinnerware',
    price: 499,
    originalPrice: 649,
    rating: 4.7,
    reviewsCount: 50,
    images: [
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'SALE',
    description: 'Rustic shallow ceramic bowl perfect for olive oil dipping, appetizers, dry fruits, or jewelry trinkets.',
    details: {
      material: 'Dark Basalt Stoneware',
      dimensions: '14 cm diameter x 3 cm H',
      care: 'Food safe, lead free.',
      dishwasherSafe: true,
      microwaveSafe: true,
      foodSafe: true
    },
    inStock: true
  },

  // --- VASES & STUDIO PIECES ---
  {
    id: 'mop-vase-01',
    name: 'Pebble Matte Ceramic Bud Vase',
    subtitle: 'Hand-pinched miniature floral vessel',
    category: 'vases',
    price: 599,
    originalPrice: 799,
    rating: 4.8,
    reviewsCount: 61,
    images: [
      'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603555501671-8f96b3fce8b4?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'NEW',
    description: 'A delicate bud vase designed for single dried botanical stems or fresh garden cuttings on your desk or windowsill.',
    details: {
      material: 'Sandy Stoneware',
      dimensions: '10 cm x 9 cm',
      care: 'Water tight glaze lining.',
      dishwasherSafe: false,
      microwaveSafe: false,
      foodSafe: false
    },
    inStock: true,
    isNewArrival: true
  },
  {
    id: 'mop-vase-02',
    name: 'Terracotta Bellied Pitcher & Tumbler',
    subtitle: 'Traditional natural earthenware carafe set',
    category: 'dinnerware',
    price: 1599,
    originalPrice: 2099,
    rating: 4.9,
    reviewsCount: 89,
    images: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop'
    ],
    badge: 'HANDMADE',
    description: 'Naturally chills water through evaporative cooling. Infuses drinking water with subtle earthy sweetness.',
    details: {
      material: '100% Pure Natural Clay without chemical glaze',
      capacity: '1200 ml pitcher + 250 ml tumbler',
      dimensions: '22 cm H x 14 cm W',
      care: 'Hand scrub with hot water and baking soda. Dry completely in sunlight.',
      dishwasherSafe: false,
      microwaveSafe: false,
      foodSafe: true
    },
    inStock: true
  }
]

export const CATEGORIES = [
  {
    id: 'all',
    name: 'All Ceramics',
    count: 20,
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'mugs',
    name: 'Mugs & Cups',
    count: 6,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'dinnerware',
    name: 'Dinnerware',
    count: 4,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'diffusers',
    name: 'Aroma & Diffusers',
    count: 4,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'teaware',
    name: 'Tea & Coffee',
    count: 3,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'bowls',
    name: 'Serving Bowls',
    count: 3,
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=400&auto=format&fit=crop'
  }
]
