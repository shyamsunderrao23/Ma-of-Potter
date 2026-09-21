import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import { useShop } from '../context/ShopContext'

export const ContactPage: React.FC = () => {
  const { showToast } = useShop()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  })

  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'What happens if my ceramic pottery arrives damaged?',
      a: 'We provide a 100% Breakage Replacement Guarantee. Just take a photo upon opening and WhatsApp us at +91 98765 43210 within 48 hours. We dispatch an immediate free replacement.'
    },
    {
      q: 'Are all your ceramics lead-free and microwave safe?',
      a: 'Yes! All our glazes are made from non-toxic natural minerals and fired at 1200°C. They are 100% lead-free, food grade, and safe for microwave and dishwasher use.'
    },
    {
      q: 'Do you take custom or bulk orders for cafes and weddings?',
      a: 'Absolutely. We regularly design bespoke dinnerware sets, custom logo-stamped coffee mugs, and wedding favors. Select "Custom / Bulk Gifting" in the contact form to connect.'
    },
    {
      q: 'Can I visit the Jaipur pottery studio in person?',
      a: 'Yes, our studio in Sanganer, Jaipur is open for visitors Monday to Saturday (10 AM to 6 PM). Please drop us a message before visiting so our master potters can welcome you!'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    showToast('Your message has been sent to our studio team!', 'success')
  }

  return (
    <div className="min-h-screen bg-white py-10 sm:py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B36B4D] font-medium">
            Studio Communications
          </span>
          <h1 className="text-3xl sm:text-5xl font-medium text-[#271E18] mt-1">
            Get in Touch With The Potter
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Have questions about custom orders, wedding gifting, or studio visits? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* Left Studio Info Card */}
          <div className="lg:col-span-5 bg-[#261E1A] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E6A05E] font-medium">Visit Our Atelier</span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white mt-1">
                Jaipur Clay Studio & Kiln
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm mt-3 font-light leading-relaxed">
                Step inside our sunlit studio, see raw alluvial clay being thrown on traditional kick wheels, and explore our collection in person.
              </p>

              <div className="space-y-5 mt-8 text-xs sm:text-sm text-stone-300">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#E6A05E] flex-shrink-0 mt-0.5" />
                  <span>Plot 42, Potter’s Guild Lane, Sanganer Artisan Village, Jaipur, Rajasthan 302029</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-[#E6A05E] flex-shrink-0" />
                  <span>+91 98765 43210 / +91 91234 56789</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <Mail className="w-5 h-5 text-[#E6A05E] flex-shrink-0" />
                  <span>care@manofpotter.com / studio@manofpotter.com</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <Clock className="w-5 h-5 text-[#E6A05E] flex-shrink-0" />
                  <span>Mon - Sat: 10:00 AM – 7:00 PM (Closed Sundays)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-800">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Instant WhatsApp Support</span>
              </a>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#EDE0D1] shadow-sm">
            <h3 className="text-2xl font-medium text-stone-900 mb-2">Send Us a Message</h3>
            <p className="text-stone-500 text-xs sm:text-sm mb-6">Our studio coordinator will reply within 24 business hours.</p>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-stone-900">Message Received!</h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. We have logged your request and will reach out to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#B36B4D] text-white text-xs font-bold uppercase rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-600 mb-1 font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shyam Sundar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D]"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1 font-medium">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. shyam@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-600 mb-1 font-medium">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D]"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1 font-medium">Inquiry Topic</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D] cursor-pointer font-medium text-stone-800"
                    >
                      <option value="General Inquiry">General Product Inquiry</option>
                      <option value="Custom Order">Custom Ceramic Commission</option>
                      <option value="Corporate Gifting">Corporate & Wedding Gifting</option>
                      <option value="Workshop Booking">Studio Workshop Question</option>
                      <option value="Shipping Issue">Order Shipping / Replacement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-600 mb-1 font-medium">Your Message / Special Requests *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the pottery pieces you're looking for, dimensions, quantities, or specific glaze colors..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl outline-none focus:border-[#B36B4D] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B36B4D] hover:bg-[#94553D] text-white py-4 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-[#EDE0D1] shadow-sm">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#B36B4D] font-medium">Frequently Asked</span>
            <h3 className="text-2xl sm:text-3xl font-medium text-stone-900 mt-1">Pottery Studio FAQs</h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="border border-stone-200 rounded-2xl overflow-hidden transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 font-medium text-sm sm:text-base text-stone-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50"
                  >
                    <span>{faq.q}</span>
                    <span className="text-lg text-[#B36B4D]">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100 bg-stone-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
