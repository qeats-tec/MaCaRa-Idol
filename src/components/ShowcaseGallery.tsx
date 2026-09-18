import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/agencyData';
import { GalleryItem } from '../types';
import { Camera, MapPin, Maximize2, X } from 'lucide-react';

export const ShowcaseGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['Tümü', 'Sahne & Konser', 'Dans Provası', 'Ses Stüdyosu', 'Prodüksiyon & Medya'];

  const filteredItems = activeCategory === 'Tümü'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="galeri" className="py-20 border-t border-[#e8ded2] dark:border-[#261e18] bg-[#f7f3ec]/60 dark:bg-[#120d0a]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700/60 text-amber-950 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Görsel Arşiv & Portfolyo</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Stüdyo, Sahne & Canlı Performans Galerisi
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Maslak pratik seansları, ses kayıt odaları ve uluslararası stadyum sahnelerinden yüksek çözünürlüklü kareler.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-neutral-950 font-black shadow-xs'
                    : 'bg-white text-neutral-600 hover:bg-amber-100/70 dark:bg-[#1f1712] dark:text-neutral-400 dark:hover:bg-[#2c221a] border border-[#e8ded2] dark:border-[#261e18]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="rounded-2xl border border-[#e8ded2] dark:border-[#261e18] bg-white dark:bg-[#17120e] overflow-hidden shadow-sm hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300 group flex flex-col cursor-pointer"
            >
              <div className="aspect-4/3 overflow-hidden bg-neutral-900 relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-amber-300">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-amber-700 dark:text-amber-400 font-mono mb-1.5 font-bold">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location} &bull; {item.year}</span>
                  </div>
                  <h4 className="font-cinzel text-base font-bold text-neutral-900 dark:text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* High-Res Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-[#140f0c] rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-16/10 max-h-[65vh] w-full bg-black overflow-hidden">
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-[#17120e] text-white">
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 font-bold mb-2">
                  <span>{selectedImage.category}</span>
                  <span>{selectedImage.location} &bull; {selectedImage.year}</span>
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white">
                  {selectedImage.title}
                </h3>
                <p className="mt-2 text-xs text-neutral-300">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
