import React from 'react'
import { CheckCircle2, Info, ShoppingBag, X } from 'lucide-react'
import { useShop } from '../context/ShopContext'

export const Toast: React.FC = () => {
  const { toasts, removeToast } = useShop()

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-3 bg-[#241A15] text-white px-4 py-3 rounded-2xl shadow-2xl border border-stone-700 text-xs font-medium animate-fade-in max-w-sm"
        >
          {toast.type === 'cart' ? (
            <ShoppingBag className="w-4 h-4 text-[#E6A05E] flex-shrink-0" />
          ) : toast.type === 'info' ? (
            <Info className="w-4 h-4 text-blue-400 flex-shrink-0" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          )}

          <span className="flex-1">{toast.message}</span>

          <button
            onClick={() => removeToast(toast.id)}
            className="text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  )
}
