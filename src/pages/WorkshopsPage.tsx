import React, { useState } from 'react'
import { Sparkles, Calendar, Clock, MapPin, Users, CheckCircle2 } from 'lucide-react'
import { useShop } from '../context/ShopContext'

export const WorkshopsPage: React.FC = () => {
  const { showToast, formatPrice } = useShop()
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null)
  const [booked, setBooked] = useState(false)
  const [bookingForm, setBookingForm] = useState({
    name: 'Shyam Sundar',
    email: 'shyam@example.com',
    phone: '+91 9876543210',
    participants: 1,
    date: '2026-10-04'
  })

  const workshops = [
    {
      id: 'ws-wheel',
      title: 'Beginner Kick-Wheel Throwing',
      level: 'All Levels (No Experience Needed)',
      duration: '2.5 Hours',
      price: 1999,
      batchSize: 'Max 6 Students per Potter',
      description: 'Learn the foundational art of centering, opening, pulling walls, and shaping your own ceramic mug and bowl on the spinning wheel.',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800&auto=format&fit=crop',
      includes: ['Unlimited studio clay', 'Glazing & kiln firing of 2 items', 'Home courier of finished items', 'Jaipur Masala Chai & cookies']
    },
    {
      id: 'ws-couples',
      title: "Romantic Couples' Clay & Pottery Date",
      level: 'Couples & Duo Experience',
      duration: '3.0 Hours',
      price: 3499,
      batchSize: 'Private Wheel Station',
      description: 'A soulful creative evening. Sit together at the pottery wheel, shape matching coffee mugs, and hand-carve personalized initials into wet clay.',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop',
      includes: ['Pair of wheels', 'Custom stamp initials', 'Complimentary wine/artisanal tea', 'Kiln firing of 4 vessels']
    },
    {
      id: 'ws-masterclass',
      title: 'Advanced Reactive Glazing & Kiln Firing',
      level: 'Intermediate to Advanced',
      duration: 'Full Day (10am - 5pm)',
      price: 4999,
      batchSize: 'Max 4 Students',
      description: 'Deep dive into raw mineral glaze chemistry, ash formulation, wax resist decorative carving, and wood-fired kiln loading techniques.',
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop',
      includes: ['Glaze chemistry handbook', 'Raw mineral kit', 'Certificate of Completion', 'Full studio lunch']
    }
  ]

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    setBooked(true)
    showToast('Workshop seat reserved successfully!', 'success')
  }

  return (
    <div className="min-h-screen bg-white py-10 sm:py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2E5D5] text-[#B36B4D] text-xs uppercase tracking-widest font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Jaipur Studio Experiences</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-medium text-[#271E18]">
            Hands-On Pottery Workshops
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Step away from screens and connect with the grounding earth. Experience wheel throwing,
            clay sculpting, and kiln glazing under the direct mentorship of our master artisans.
          </p>
          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-stone-500">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#B36B4D]" /> Sanganer Artisan Village, Jaipur</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#B36B4D]" /> Every Saturday & Sunday</span>
          </div>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {workshops.map((w) => (
            <div
              key={w.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EDE0D1] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F3ECE2]">
                  <img src={w.image} alt={w.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-[#241A15]/80 backdrop-blur-md text-[#E8C29D] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {w.level}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#B36B4D]" /> {w.duration}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-[#B36B4D]" /> {w.batchSize}</span>
                  </div>

                  <h3 className="text-xl font-medium text-stone-900 mb-2">
                    {w.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed font-light mb-4">
                    {w.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-stone-100 text-xs text-stone-700">
                    {w.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase font-bold">Fee per session</span>
                    <span className="font-serif text-2xl font-black text-[#2A1E18]">
                      {formatPrice(w.price)}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedWorkshop(w.id)
                      setBooked(false)
                    }}
                    className="bg-[#B36B4D] hover:bg-[#94553D] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    Reserve Slot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Modal */}
        {selectedWorkshop && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
            <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#EDE0D1]">
              <div className="flex items-center justify-between pb-4 border-b">
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  {workshops.find((w) => w.id === selectedWorkshop)?.title}
                </h3>
                <button
                  onClick={() => setSelectedWorkshop(null)}
                  className="p-1.5 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-100"
                >
                  ✕
                </button>
              </div>

              {booked ? (
                <div className="py-8 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                  <h4 className="font-serif text-2xl font-bold text-stone-900">Reservation Confirmed!</h4>
                  <p className="text-xs text-stone-600">
                    We have saved your slot for <strong>{bookingForm.date}</strong>. Our studio coordinator will send location maps and workshop preparation details to <strong>{bookingForm.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSelectedWorkshop(null)}
                    className="w-full bg-[#B36B4D] text-white py-3 rounded-xl text-xs font-bold uppercase"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="mt-6 space-y-4 text-xs">
                  <div>
                    <label className="block text-stone-600 mb-1 font-medium">Participant Name</label>
                    <input
                      type="text"
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1 font-medium">Email Address</label>
                    <input
                      type="email"
                      required
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-stone-600 mb-1 font-medium">Date Selection</label>
                      <input
                        type="date"
                        required
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-600 mb-1 font-medium">No. of Participants</label>
                      <input
                        type="number"
                        min="1"
                        max="6"
                        value={bookingForm.participants}
                        onChange={(e) => setBookingForm({ ...bookingForm, participants: Number(e.target.value) })}
                        className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl outline-none"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#B36B4D] hover:bg-[#94553D] text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg mt-2 cursor-pointer"
                  >
                    Confirm Booking
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
