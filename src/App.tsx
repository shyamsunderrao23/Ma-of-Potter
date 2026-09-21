import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShopProvider } from './context/ShopContext'
import { ScrollToTop } from './components/ScrollToTop'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { CartDrawer } from './components/CartDrawer'
import { WishlistDrawer } from './components/WishlistDrawer'
import { QuickViewModal } from './components/QuickViewModal'
import { CheckoutModal } from './components/CheckoutModal'
import { SearchModal } from './components/SearchModal'
import { Toast } from './components/Toast'

// Page Components
import { HomePage } from './pages/HomePage'
import { ShopPage } from './pages/ShopPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { AboutPage } from './pages/AboutPage'
import { WorkshopsPage } from './pages/WorkshopsPage'
import { JournalPage } from './pages/JournalPage'
import { JournalDetailPage } from './pages/JournalDetailPage'
import { ContactPage } from './pages/ContactPage'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { BestSellersPage } from './pages/BestSellersPage'

export default function App() {
  return (
    <BrowserRouter>
      <ShopProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-white text-[#2C2420] flex flex-col font-sans selection:bg-[#B36B4D] selection:text-white">
          {/* Global Sticky Header */}
          <Header />

          {/* Page Routing Outlet */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bestsellers" element={<BestSellersPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/:category" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/workshops" element={<WorkshopsPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/journal/:id" element={<JournalDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              {/* Fallback Route */}
              <Route path="*" element={<ShopPage />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Global Interactive Modals & Drawers */}
          <CartDrawer />
          <WishlistDrawer />
          <QuickViewModal />
          <CheckoutModal />
          <SearchModal />
          <Toast />
        </div>
      </ShopProvider>
    </BrowserRouter>
  )
}
