import React from 'react';
import { STUDIO_FACILITIES } from '../data/agencyData';
import { Building2, MapPin } from 'lucide-react';

export const VisionProcess: React.FC = () => {
  return (
    <section id="studyo" className="py-20 border-t border-[#e8ded2] dark:border-[#261e18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700/60 text-amber-950 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>İstanbul Maslak &bull; 4.500 m² İnovasyon Kampüsü</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Dünya Standartlarında Stüdyo & Altyapı
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Sanatçıların sahneye, albüm kayıtlarına ve küresel lansmanlara kusursuz hazırlanması için tasarlanan profesyonel ses, dans ve görsel laboratuvarları.
          </p>
        </div>

        {/* 3 Facility Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STUDIO_FACILITIES.map((facility) => (
            <div 
              key={facility.id}
              className="rounded-3xl border border-[#e8ded2] dark:border-[#261e18] bg-white dark:bg-[#17120e] overflow-hidden flex flex-col shadow-sm hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300 group"
            >
              {/* Photo */}
              <div className="aspect-4/3 overflow-hidden bg-neutral-900 relative">
                <img 
                  src={facility.imageUrl} 
                  alt={facility.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-amber-300">
                    {facility.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-amber-700 dark:text-amber-400 font-bold mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{facility.location}</span>
                  </div>

                  <h3 className="font-cinzel text-xl font-bold text-neutral-900 dark:text-white">
                    {facility.name}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e8ded2] dark:border-[#261e18] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-neutral-400 block">
                    Teknik Donanım:
                  </span>
                  <p className="text-[11px] font-mono font-semibold text-neutral-700 dark:text-neutral-300 bg-[#f7f3ec] dark:bg-[#201914] p-2.5 rounded-xl border border-[#e8ded2] dark:border-[#261e18]">
                    {facility.specs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
