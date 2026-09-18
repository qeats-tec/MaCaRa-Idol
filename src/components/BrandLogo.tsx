import React from 'react';
import { Crown } from 'lucide-react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', showSubtitle = true }) => {
  const iconBoxSizes = {
    sm: 'w-8 h-8 rounded-xl text-xs',
    md: 'w-10 h-10 rounded-2xl text-sm',
    lg: 'w-14 h-14 rounded-2xl text-base'
  };

  const crownSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  return (
    <div className="flex items-center gap-3 select-none group">
      {/* Luxury Royal Crown Emblem in Warm Gold & Espresso Brown */}
      <div className={`${iconBoxSizes[size]} relative flex items-center justify-center bg-gradient-to-br from-[#f8dfa5] via-[#d49a2a] to-[#874b1e] dark:from-[#fceecb] dark:via-[#e5a83b] dark:to-[#6d3714] text-neutral-950 shadow-md border border-[#fae5b8]/80 dark:border-[#fcd98c]/50 shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        {/* Crown Icon */}
        <Crown className={`${crownSizes[size]} text-[#381c08] fill-[#381c08]/20 stroke-[2.2]`} />
        {/* Subtle sparkle point */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-200 blur-[0.5px] ring-1 ring-amber-400"></span>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2 leading-none">
          <span className={`font-cinzel ${textSizes[size]} font-extrabold tracking-tight bg-gradient-to-r from-[#2e1d13] via-[#754722] to-[#b87c24] dark:from-[#fffdf7] dark:via-[#f5d799] dark:to-[#df9b32] bg-clip-text text-transparent`}>
            MaCaRa
          </span>
          <span className="font-cinzel text-xs font-bold text-amber-700 dark:text-amber-400 tracking-wider uppercase">
            IDOLS
          </span>
          <span className="text-[10px] font-bold font-mono tracking-wider px-1.5 py-0.5 rounded-md bg-amber-200/80 text-[#542d10] dark:bg-amber-950/90 dark:text-amber-300 border border-amber-300/60 dark:border-amber-700/50">
            TR
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] uppercase tracking-[0.22em] text-[#7a6452] dark:text-[#a89584] font-semibold mt-1">
            Global Trainee Division &bull; Royal Campus
          </span>
        )}
      </div>
    </div>
  );
};
