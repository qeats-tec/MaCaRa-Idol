import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ShoppingBag } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#fdfbf7]/90 dark:bg-[#0d0a08]/90 border-b border-[#e8ded2] dark:border-[#261e18] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center">
            <BrandLogo size="md" />
          </a>

          {/* Clean Editorial Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600 dark:text-neutral-400">
            <a href="#hakkimizda" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Hakkımızda
            </a>
            <a href="#egitim" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Departmanlar
            </a>
            <a href="#studyo" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Stüdyolar
            </a>
            <a href="#seul" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              İstanbul &times; Seul
            </a>
            <a href="#galeri" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Görsel Arşiv
            </a>
            <a href="#magaza" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-amber-700 dark:text-amber-400 font-bold flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Resmi Mağaza</span>
            </a>
          </nav>

          {/* Right Controls: Theme Toggle */}
          <div className="flex items-center space-x-3">
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={isDarkMode ? "Aydınlık Moda Geç" : "Karanlık Moda Geç"}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#e8ded2] dark:border-[#261e18] bg-white dark:bg-[#17120e] text-neutral-800 dark:text-neutral-200 hover:border-amber-400 dark:hover:border-amber-500 transition-all cursor-pointer shadow-xs text-xs font-semibold"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline text-amber-200">Aydınlık Mod</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-amber-700" />
                  <span className="hidden sm:inline text-neutral-700">Karanlık Mod</span>
                </>
              )}
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-700 dark:text-neutral-300"
              aria-label="Menü"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e8ded2] dark:border-[#261e18] bg-[#fdfbf7] dark:bg-[#0d0a08] px-5 py-4 space-y-3">
          <a
            href="#hakkimizda"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200"
          >
            Hakkımızda
          </a>
          <a
            href="#egitim"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200"
          >
            Departmanlar
          </a>
          <a
            href="#studyo"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200"
          >
            Stüdyolar
          </a>
          <a
            href="#seul"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200"
          >
            İstanbul &times; Seul
          </a>
          <a
            href="#galeri"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200"
          >
            Görsel Arşiv
          </a>
          <a
            href="#magaza"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-amber-700 dark:text-amber-400"
          >
            Resmi Mağaza & Figür
          </a>
        </div>
      )}
    </header>
  );
};
