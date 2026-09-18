import React from 'react';

export const CrownPatternBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 1. Warm Luxury Gradient Meshes (Ivory, Champagne Gold & Warm Caramel Brown) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1300px] h-[750px] bg-gradient-to-b from-amber-200/40 via-amber-100/25 to-transparent dark:from-amber-700/20 dark:via-amber-950/25 dark:to-transparent blur-3xl opacity-85"></div>
      
      <div className="absolute top-[30%] -left-[200px] w-[650px] h-[650px] bg-gradient-to-tr from-[#e8c792]/30 via-[#c7914a]/20 to-transparent dark:from-[#5e381b]/25 dark:to-transparent rounded-full blur-3xl opacity-70"></div>
      
      <div className="absolute top-[60%] -right-[150px] w-[700px] h-[700px] bg-gradient-to-tl from-[#fae2b8]/35 via-[#d19b49]/20 to-transparent dark:from-[#4d2f16]/25 dark:to-transparent rounded-full blur-3xl opacity-70"></div>

      {/* 2. Dynamic Tilted, Scattered & Crisp Royal Crown Pattern (No Overlaps) */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.085] sm:opacity-[0.105] dark:opacity-[0.11] dark:sm:opacity-[0.135] transition-opacity duration-300" 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%"
      >
        <defs>
          {/* Individual High-Detail Crown Symbol */}
          <g id="royal-crown-motif">
            {/* Crown Base & Cushion */}
            <path 
              d="M -18 10 L 18 10 L 15 16 L -15 16 Z" 
              fill="currentColor" 
              stroke="currentColor" 
              strokeWidth="0.8" 
              strokeLinejoin="round" 
            />
            {/* Crown Main Peaks with Curves */}
            <path 
              d="M -17 8 L -19 -8 L -7 1 L 0 -15 L 7 1 L 19 -8 L 17 8 Z" 
              fill="currentColor" 
              stroke="currentColor" 
              strokeWidth="1.2" 
              strokeLinejoin="round" 
            />
            {/* Crown Jewels / Pearl Spheres */}
            <circle cx="-19" cy="-10.5" r="2.2" fill="currentColor" />
            <circle cx="0" cy="-18" r="3" fill="currentColor" />
            <circle cx="19" cy="-10.5" r="2.2" fill="currentColor" />
            <circle cx="-7.5" cy="-0.5" r="1.5" fill="currentColor" opacity="0.8" />
            <circle cx="7.5" cy="-0.5" r="1.5" fill="currentColor" opacity="0.8" />
          </g>

          {/* Sparkle Star Motif */}
          <g id="royal-sparkle-star">
            <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="currentColor" />
          </g>

          {/* Repeating Scattered, Tilted, Non-Overlapping Pattern Grid */}
          <pattern 
            id="dynamic-tilted-crowns" 
            width="260" 
            height="260" 
            patternUnits="userSpaceOnUse"
          >
            {/* Crown 1: Top-Left (Tilted -22 deg, scale 1.05) */}
            <g 
              transform="translate(55, 60) rotate(-22) scale(1.05)" 
              className="text-[#683c15] dark:text-[#f8d48e]"
            >
              <use href="#royal-crown-motif" />
            </g>

            {/* Crown 2: Top-Right (Tilted +28 deg, scale 1.2) */}
            <g 
              transform="translate(195, 65) rotate(28) scale(1.2)" 
              className="text-[#7a481d] dark:text-[#ffde9e]"
            >
              <use href="#royal-crown-motif" />
            </g>

            {/* Crown 3: Center-Mid (Tilted -35 deg, scale 0.9) */}
            <g 
              transform="translate(130, 140) rotate(-35) scale(0.9)" 
              className="text-[#593210] dark:text-[#ebc47a]"
            >
              <use href="#royal-crown-motif" />
            </g>

            {/* Crown 4: Bottom-Left (Tilted +34 deg, scale 1.15) */}
            <g 
              transform="translate(65, 205) rotate(34) scale(1.15)" 
              className="text-[#704218] dark:text-[#f8d591]"
            >
              <use href="#royal-crown-motif" />
            </g>

            {/* Crown 5: Bottom-Right (Tilted -18 deg, scale 1.0) */}
            <g 
              transform="translate(205, 205) rotate(-18) scale(1.0)" 
              className="text-[#643914] dark:text-[#fedb96]"
            >
              <use href="#royal-crown-motif" />
            </g>

            {/* Elegant Floating Sparkle Stars in the Gaps */}
            <g transform="translate(125, 45) rotate(15) scale(0.85)" className="text-[#a46c2b] dark:text-[#ffd68a] opacity-80">
              <use href="#royal-sparkle-star" />
            </g>
            <g transform="translate(45, 135) rotate(-25) scale(0.75)" className="text-[#a46c2b] dark:text-[#ffd68a] opacity-70">
              <use href="#royal-sparkle-star" />
            </g>
            <g transform="translate(225, 140) rotate(30) scale(0.9)" className="text-[#a46c2b] dark:text-[#ffd68a] opacity-85">
              <use href="#royal-sparkle-star" />
            </g>
            <g transform="translate(135, 225) rotate(-10) scale(0.8)" className="text-[#a46c2b] dark:text-[#ffd68a] opacity-75">
              <use href="#royal-sparkle-star" />
            </g>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#dynamic-tilted-crowns)" />
      </svg>

      {/* 3. Subtle Vignette Depth Frame */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(230,210,180,0.18)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,7,5,0.45)_100%)]"></div>

    </div>
  );
};
