import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Crown } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-[#e5d7c3] dark:border-[#332318] bg-[#faf5ec]/90 dark:bg-[#0c0805]/90 pt-14 pb-12 overflow-hidden backdrop-blur-md">
      
      {/* Required Faint Subtle Watermark with Crown */}
      <div 
        aria-hidden="true"
        className="absolute bottom-2 right-4 flex items-center gap-3 text-[70px] sm:text-[100px] font-cinzel font-black select-none pointer-events-none tracking-tighter opacity-[0.035] dark:opacity-[0.05] text-[#5e381b] dark:text-amber-200"
      >
        <Crown className="w-24 h-24 sm:w-32 sm:h-32" />
        <span>MaCaRa TR</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#e5d7c3] dark:border-[#332318]">
          
          <div>
            <BrandLogo size="md" />
            <p className="mt-3 text-xs text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
              MaCaRa Idols TR &bull; Global Trainee Division. Türkiye ve Asya merkezli kapalı devre idol gelişim, sahne sanatları ve küresel debut kampüsü.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono text-neutral-700 dark:text-neutral-300">
            <span className="flex items-center gap-1.5"><Crown className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> İstanbul Maslak Royal Campus</span>
            <span className="hidden sm:inline text-amber-700/50">&bull;</span>
            <span>Seul Gangnam HQ</span>
            <span className="hidden sm:inline text-amber-700/50">&bull;</span>
            <span>Tokyo Hub</span>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
          <p>
            &copy; {new Date().getFullYear()} MaCaRa Idols TR &bull; Kraliyet Seviyesi Küresel İdol Eğitimi. Tüm Hakları Saklıdır.
          </p>
          <div className="flex items-center space-x-6">
            <span>Gizlilik Politikası</span>
            <span>A&R Protokolü</span>
            <span>İletişim</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
