import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Sparkles, 
  ArrowRight, 
  Heart, 
  Flame, 
  Users, 
  Hammer, 
  Quote, 
  Check, 
  Globe2, 
  ShieldCheck, 
  Layers, 
  HandHeart, 
  Lightbulb,
  Award,
  Clock
} from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  role: string
  experience: string
  specialty: string
  image: string
  quote: string
  bio: string
  keySkill: string
}

export const AboutPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Master Ramu Kumhar',
      role: 'Master Wheel Thrower & Clay Patriarch',
      experience: '38 Years Experience',
      specialty: 'Symmetric Kick-Wheel Shaping',
      keySkill: 'Large-scale Vases & Ritual Pots',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      quote: 'Clay is alive. When you sit at the wheel with quiet devotion, the clay listens to your fingers.',
      bio: 'A 5th generation master potter carrying centuries of Jaipur pottery knowledge. Ramu Ji shapes every foundational vessel with a rhythm perfected across four decades, mentoring the next generation of studio artisans.'
    },
    {
      id: '2',
      name: 'Kavita Sharma',
      role: 'Chief Ceramicist & Glaze Alchemist',
      experience: '12 Years Experience',
      specialty: 'Lead-Free Natural Mineral Glazes',
      keySkill: 'Wood Ash & Matte Reactive Chemistry',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
      quote: 'Every glaze formulation is a poem of natural minerals reacting with woodfire and intense heat.',
      bio: 'An alumnus of the National Institute of Design who spent five years studying indigenous Rajasthani earth pigments. Kavita creates our signature non-toxic, food-safe glazes inspired by desert dawn hues.'
    },
    {
      id: '3',
      name: 'Devanshu Verma',
      role: 'Founder & Creative Director',
      experience: '10 Years Experience',
      specialty: 'Minimalist Pottery & Community Stories',
      keySkill: 'Modern Functional Product Architecture',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
      quote: 'We are not simply selling clay products. We are sharing a craft, telling stories, and celebrating our roots.',
      bio: 'Started Man_of_Potter in 2018 with a vision to preserve heritage potting clusters and deliver museum-grade, tactile everyday dinnerware into modern homes across the globe.'
    },
    {
      id: '4',
      name: 'Rajesh Mistry',
      role: 'Kiln Master & Vitrification Lead',
      experience: '24 Years Experience',
      specialty: '1200°C High-Heat Stoneware Firing',
      keySkill: 'Thermal Atmosphere & Reduction Control',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop',
      quote: 'Fire gives pottery its permanence. Precise temperature calibration ensures everyday microwave and dishwasher durability.',
      bio: 'Master kiln engineer who meticulously manages kiln firing cycles for 18 continuous hours, ensuring the clay completely vitrifies into indestructible stoneware without warping or structural fractures.'
    },
    {
      id: '5',
      name: 'Sunita Devi',
      role: 'Head of Hand Texturing & Detailing',
      experience: '16 Years Experience',
      specialty: 'Fluted Ribbing & Tactile Textures',
      keySkill: 'Sgraffito & Hand-Chiseled Reliefs',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
      quote: 'Every handmade texture catches light differently. That organic touch cannot be replicated by machines.',
      bio: 'Leads our female artisan guild in Jaipur, hand-carving tactile fluted grooves and subtle ribbed contours into every mug and dinner bowl while the clay is in its leather-hard stage.'
    },
    {
      id: '6',
      name: 'Amit Joshi',
      role: 'Studio Operations & Quality Lead',
      experience: '8 Years Experience',
      specialty: 'Eco Packaging & Quality Inspection',
      keySkill: 'Thermal Shock & Stress Quality Audits',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
      quote: 'Every piece is packed with zero plastic in recyclable honeycomb wrap, arriving safely in homes across India.',
      bio: 'Directs studio quality assurance, ensuring 100% lead-free compliance, zero-defect ring acoustics, and fair wages for all 35+ artisan families in our extended cooperative.'
    }
  ]

  const missionCards = [
    {
      action: 'PRESERVE',
      desc: 'Traditional pottery and craftsmanship.',
      icon: <ShieldCheck className="w-7 h-7 text-[#B36B4D]" />
    },
    {
      action: 'CREATE',
      desc: 'New possibilities from clay.',
      icon: <Flame className="w-7 h-7 text-[#B36B4D]" />
    },
    {
      action: 'CONNECT',
      desc: 'Artisans, creators, customers, and communities.',
      icon: <HandHeart className="w-7 h-7 text-[#B36B4D]" />
    },
    {
      action: 'INSPIRE',
      desc: 'The next generation to discover the beauty of handmade craft.',
      icon: <Lightbulb className="w-7 h-7 text-[#B36B4D]" />
    }
  ]

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2420] animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32 bg-[#1B1410] text-white">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1800&auto=format&fit=crop"
            alt="Hand shaping pottery clay"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B1410] via-[#1B1410]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B36B4D]/20 border border-[#B36B4D]/40 text-[#E6A05E] text-xs uppercase tracking-widest font-bold mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT MAN_OF_POTTER</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              A World Built <br />
              <span className="italic font-normal text-[#E8C29D]">Around Clay.</span>
            </h1>
            
            <p className="mt-6 text-stone-300 text-base sm:text-lg leading-relaxed font-light max-w-2xl">
              Man_of_Potter was born from a simple love for clay and a deep respect for the people who turn it into something meaningful.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#our-story"
                className="bg-[#B36B4D] hover:bg-[#C97B5C] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-orange-950/40 inline-flex items-center gap-2"
              >
                <span>Read The Story</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#meet-the-team"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all backdrop-blur-sm"
              >
                Meet Our Artisans & Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT MAN OF POTTER (ZIG-ZAG ALTERNATING STORY SECTIONS) */}
      <section id="our-story" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B36B4D] font-bold">2. ABOUT MAN OF POTTER</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#271E18] mt-2">
            A World Built Around Clay
          </h2>
          <div className="w-16 h-1 bg-[#B36B4D] mx-auto mt-4 rounded-full" />
        </div>

        {/* ZIG-ZAG 1: LEFT IMAGE, RIGHT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 sm:mb-32">
          {/* Left Column: Image */}
          <div className="lg:col-span-6 order-1">
            <div className="relative group">
              <div className="aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1200&auto=format&fit=crop"
                  alt="Potter hands shaping raw clay"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-[#EDE0D1] max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B36B4D]/10 flex items-center justify-center text-[#B36B4D]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-900 block">Heritage of Generations</span>
                    <span className="text-[11px] text-stone-500">Skills, stories, and traditions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3ECE2] text-[#B36B4D] text-xs font-bold tracking-widest uppercase mb-4">
              <span>More Than A Profession</span>
            </div>
            
            <h3 className="text-2xl sm:text-4xl font-bold text-[#271E18] leading-tight">
              A Way of Life Passed Through Hands That Know How to Shape the Earth
            </h3>
            
            <div className="mt-6 space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-stone-900 font-semibold">Man_of_Potter</strong> was born from a simple love for clay and a deep respect for the people who turn it into something meaningful.
              </p>
              <p>
                For generations, pottery has been more than a profession. It has been a way of life — passed from one generation to another through skills, stories, traditions, and hands that know how to shape the earth.
              </p>
              <p className="bg-[#FAF6F0] p-4 rounded-2xl border-l-4 border-[#B36B4D] text-stone-800 italic">
                "But as the world changes, many traditional crafts are slowly becoming less visible in our everyday lives. We believe that these traditions deserve to be seen, experienced, and carried forward. That is why Man_of_Potter exists."
              </p>
            </div>
          </div>
        </div>

        {/* ZIG-ZAG 2: LEFT CONTENT, RIGHT IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 sm:mb-32">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3ECE2] text-[#B36B4D] text-xs font-bold tracking-widest uppercase mb-4">
              <span>Creativity & Tradition</span>
            </div>
            
            <h3 className="text-2xl sm:text-4xl font-bold text-[#271E18] leading-tight">
              Where Ancient Techniques Inspire Modern Ideas
            </h3>
            
            <div className="mt-6 space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                We are building a space where traditional craftsmanship meets creativity, where ancient techniques can inspire modern ideas, and where people can rediscover the beauty of working with clay.
              </p>
              <p>
                Through our products, content, stories, and community, we want to celebrate the people behind the craft and introduce the next generation to a world that has existed for centuries.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-xl bg-white border border-[#EDE0D1] shadow-sm flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#B36B4D]/10 text-[#B36B4D] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-stone-800">Authentic Products</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#EDE0D1] shadow-sm flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#B36B4D]/10 text-[#B36B4D] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-stone-800">Inspiring Stories</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#EDE0D1] shadow-sm flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#B36B4D]/10 text-[#B36B4D] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-stone-800">Living Traditions</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#EDE0D1] shadow-sm flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#B36B4D]/10 text-[#B36B4D] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-stone-800">Creative Community</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative group">
              <div className="aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200&auto=format&fit=crop"
                  alt="Ceramic creations and studio glaze bottles"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              {/* Floating quote card */}
              <div className="absolute -bottom-6 -left-4 sm:bottom-6 sm:-right-6 bg-[#2C211B] text-white p-5 rounded-2xl shadow-xl max-w-xs border border-stone-700">
                <Quote className="w-5 h-5 text-[#E6A05E] mb-2" />
                <p className="text-xs italic text-stone-300">
                  "Traditional craftsmanship meets creativity to introduce the next generation to a timeless craft."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ZIG-ZAG 3: LEFT IMAGE, RIGHT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-6 order-1">
            <div className="relative group">
              <div className="aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1200&auto=format&fit=crop"
                  alt="Pottery workshop with artisans collaborating"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-[#EDE0D1] max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B36B4D]/10 text-[#B36B4D] flex items-center justify-center">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-900 block">CLAY IS OUR WORLD</span>
                    <span className="text-[11px] text-stone-500">Creating new possibilities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3ECE2] text-[#B36B4D] text-xs font-bold tracking-widest uppercase mb-4">
              <span>Our Core Purpose</span>
            </div>
            
            <h3 className="text-2xl sm:text-4xl font-bold text-[#271E18] leading-tight">
              We Are Not Simply Selling Clay Products
            </h3>
            
            <div className="mt-6 space-y-3.5">
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#EDE0D1] shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B36B4D] mt-1.5 flex-shrink-0" />
                <p className="text-sm font-semibold text-stone-800">We are sharing a craft.</p>
              </div>
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#EDE0D1] shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B36B4D] mt-1.5 flex-shrink-0" />
                <p className="text-sm font-semibold text-stone-800">We are telling stories.</p>
              </div>
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#EDE0D1] shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B36B4D] mt-1.5 flex-shrink-0" />
                <p className="text-sm font-semibold text-stone-800">We are celebrating our roots.</p>
              </div>
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#EDE0D1] shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B36B4D] mt-1.5 flex-shrink-0" />
                <p className="text-sm font-semibold text-stone-800">And we are creating new possibilities from one of the oldest materials on Earth.</p>
              </div>
            </div>

            <div className="mt-7 pt-6 border-t border-stone-200">
              <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold">This is our world.</p>
              <p className="text-2xl sm:text-3xl font-serif font-black text-[#B36B4D] tracking-wide mt-1">
                CLAY IS OUR WORLD.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* 3. OUR MISSION SECTION */}
      <section className="py-20 sm:py-28 bg-[#F4EDE4] border-y border-[#EDE0D1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B36B4D] font-bold">3. OUR MISSION</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#271E18] mt-2">
              Our Guiding Principles
            </h2>
            <div className="w-16 h-1 bg-[#B36B4D] mx-auto mt-4 rounded-full" />
          </div>

          {/* 4 Mission Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {missionCards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-[#EDE0D1] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF6F0] border border-[#EDE0D1] flex items-center justify-center mb-6 shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 tracking-wider">
                    {card.action}
                  </h3>
                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#B36B4D] uppercase tracking-wider">
                  <span>Pillar 0{idx + 1}</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Under the cards: Banner */}
          <div className="max-w-4xl mx-auto bg-[#241A14] text-white p-8 sm:p-10 rounded-3xl shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B36B4D]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <Quote className="w-8 h-8 text-[#E6A05E] mx-auto mb-4 opacity-80" />
              <p className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-[#FDFBF7] leading-relaxed italic">
                "We don't want clay to remain a memory. <br className="hidden sm:block" />
                We want it to remain a living part of our future."
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-stone-300 text-xs tracking-wider uppercase font-semibold">
                <span>Man_of_Potter Vision</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MEET THE EMPLOYEES & ARTISANS (ALTERNATING ZIG-ZAG / REVERSE-WISE LAYOUT) */}
      <section id="meet-the-team" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B36B4D]/10 text-[#B36B4D] text-xs uppercase tracking-widest font-bold mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>The People Behind The Craft</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#271E18]">
            Meet Our Master Artisans & Employees
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-4 leading-relaxed">
            The hands, hearts, and minds who shape the raw earth, formulate lead-free glazes, 
            fire the kilns, and bring authentic clay craft to life.
          </p>
          <div className="w-16 h-1 bg-[#B36B4D] mx-auto mt-4 rounded-full" />
        </div>

        {/* Alternating Zig-Zag Artisan Profiles */}
        <div className="space-y-20 sm:space-y-28">
          {teamMembers.map((member, idx) => {
            const isEven = idx % 2 === 0 // 0, 2, 4 -> Image Left, Content Right; 1, 3, 5 -> Content Left, Image Right

            return (
              <div 
                key={member.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <div className={`lg:col-span-5 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div className="relative group">
                    <div className="aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF6F0] bg-[#F3ECE2]">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    
                    {/* Experience Badge Floating */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#B36B4D] shadow-md border border-[#EDE0D1] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#B36B4D]" />
                      <span>{member.experience}</span>
                    </div>

                    {/* Specialty Pill Floating at Bottom */}
                    <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#1B1410]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl text-xs font-medium text-amber-200 shadow-xl flex items-center gap-2 border border-white/10">
                      <Hammer className="w-4 h-4 text-[#E6A05E] flex-shrink-0" />
                      <span className="truncate">{member.specialty}</span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-7 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#F3ECE2] text-[#B36B4D] text-xs font-bold tracking-widest uppercase">
                      Artisan 0{idx + 1}
                    </span>
                    <span className="text-xs text-stone-400">•</span>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Jaipur Studio</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#271E18] tracking-tight">
                    {member.name}
                  </h3>

                  <p className="text-sm sm:text-base font-semibold text-[#B36B4D] mt-1">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="text-stone-600 text-sm sm:text-base mt-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Quote Callout Box */}
                  <div className="mt-6 p-5 bg-[#FAF6F0] rounded-2xl border border-[#EDE0D1] relative">
                    <Quote className="w-5 h-5 text-[#B36B4D] absolute top-3 right-4 opacity-40" />
                    <p className="text-xs sm:text-sm italic text-stone-800 leading-relaxed pr-6">
                      "{member.quote}"
                    </p>
                  </div>

                  {/* Skills & Badges */}
                  <div className="mt-6 pt-5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#B36B4D]" />
                      <span className="text-xs font-bold text-stone-700">Specialty Focus:</span>
                      <span className="text-xs font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md">
                        {member.keySkill}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-stone-500">
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                      <span className="font-semibold text-stone-700">Verified Master Artisan</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </section>

      {/* 5. CTA / STUDIO VISIT & SHOP */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-3xl overflow-hidden bg-[#241A14] text-white p-8 sm:p-14 shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1400&auto=format&fit=crop"
              alt="Studio pottery pieces"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experience The Craft</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-snug">
              Discover Authentic Studio Ceramics & Clay Workshops
            </h2>
            
            <p className="text-stone-300 text-xs sm:text-sm mt-4 font-light leading-relaxed">
              Explore our handcrafted stoneware collections or join our hands-on pottery workshops in Jaipur to experience shaping clay with your own hands.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/shop"
                className="bg-[#B36B4D] hover:bg-[#C97B5C] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xl flex items-center gap-2"
              >
                <span>Shop Ceramics</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/workshops"
                className="bg-white/10 hover:bg-white/20 text-white border border-stone-500 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
              >
                Book Workshop
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
