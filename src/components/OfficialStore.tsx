import React, { useState } from 'react';
import { OFFICIAL_MERCH_ITEMS } from '../data/agencyData';
import { ShopItem } from '../types';
import { ShoppingBag, Sparkles, Star, Heart, Check, Info, X } from 'lucide-react';

export const OfficialStore: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});
  const [notification, setNotification] = useState<{ title: string; message: string } | null>(null);

  const categories = ['Tümü', 'Figür', 'Anahtarlık', 'Özel Koleksiyon'];

  const filteredItems = selectedCategory === 'Tümü'
    ? OFFICIAL_MERCH_ITEMS
    : OFFICIAL_MERCH_ITEMS.filter(item => item.category === selectedCategory);

  const toggleLike = (id: string) => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleMerchClick = (item: ShopItem) => {
    setNotification({
      title: `${item.name}`,
      message: 'Bu ürün 2026 Seul Genesis Lansmanı öncesi resmi ön tanıtım aşamasındadır. Çevrim içi satışlar ve sevkiyatlar çok yakında başlayacaktır!'
    });
  };

  return (
    <section id="magaza" className="py-20 border-t border-[#e8ded2] dark:border-[#261e18] bg-[#fdfbf7] dark:bg-[#0d0a08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700/60 text-amber-950 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Resmi Ürünler & Hayran Koleksiyonu</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              MaCaRa Official Merch & Figür Mağazası
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Özel tasarım tatlış koreli idol chibi figürleri, holografik akrilik anahtarlıklar ve resmi turne aksesuarları koleksiyonu.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-neutral-950 font-black shadow-xs'
                    : 'bg-white text-neutral-600 hover:bg-amber-100/70 dark:bg-[#1a1410] dark:text-neutral-400 dark:hover:bg-[#261e18] border border-[#e8ded2] dark:border-[#261e18]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-[#e8ded2] dark:border-[#261e18] bg-white dark:bg-[#140f0c] overflow-hidden flex flex-col justify-between shadow-sm hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300 group"
            >
              {/* Product Visual */}
              <div className="aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-900 relative">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Status / Discount Badge */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {item.badge && (
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500 text-neutral-950 shadow-xs">
                      {item.badge}
                    </span>
                  )}
                  <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white">
                    {item.status}
                  </span>
                </div>

                {/* Like / Wishlist Button */}
                <button
                  onClick={() => toggleLike(item.id)}
                  aria-label="Favorilere Ekle"
                  className="absolute top-3 right-3 p-2.5 rounded-full bg-white/80 dark:bg-black/70 backdrop-blur-md text-neutral-700 dark:text-neutral-200 hover:text-red-500 transition-colors shadow-xs"
                >
                  <Heart className={`w-4 h-4 ${likedItems[item.id] ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-mono text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 font-mono text-[11px] font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{item.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-neutral-900 dark:text-white leading-snug">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Price & Action */}
                <div className="mt-6 pt-4 border-t border-[#e8ded2] dark:border-[#261e18] flex items-center justify-between gap-4">
                  <div>
                    <div className="text-lg font-bold text-neutral-900 dark:text-white font-mono">
                      {item.price}
                    </div>
                    {item.originalPrice && (
                      <span className="text-[11px] text-neutral-400 line-through font-mono">
                        {item.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Non-functional Preview Button with realistic feedback */}
                  <button
                    onClick={() => handleMerchClick(item)}
                    className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ön Sipariş İncele</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Toast Notice Modal */}
        {notification && (
          <div 
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setNotification(null)}
          >
            <div 
              className="relative max-w-md w-full bg-white dark:bg-[#17120e] rounded-3xl border border-[#e8ded2] dark:border-[#261e18] p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setNotification(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-4">
                <Info className="w-6 h-6" />
              </div>

              <h4 className="font-cinzel text-xl font-bold text-neutral-900 dark:text-white mb-2">
                {notification.title}
              </h4>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                {notification.message}
              </p>

              <div className="p-3 rounded-xl bg-[#f7f3ec] dark:bg-[#201914] border border-[#e8ded2] dark:border-[#261e18] text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mb-6">
                Status: Resmi Katalog Teşhiri (Ön Tanıtım Sürümü)
              </div>

              <button
                onClick={() => setNotification(null)}
                className="w-full py-3 rounded-xl bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-600 transition-colors"
              >
                Anladım
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
