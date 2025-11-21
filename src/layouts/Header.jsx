import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8); // eşiği düşürdük
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBg =
    isHome && !isScrolled
      ? 'bg-transparent'
      : 'bg-brand-beige/95 backdrop-blur-md shadow-sm';

  const textColor =
    isHome && !isScrolled ? 'text-white' : 'text-brand-dark';

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        ${headerBg}
        ${isScrolled ? 'py-2 md:py-0' : 'py-1 md:py-0'}
        transition-[background-color,padding,box-shadow]
        duration-200
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO (image) */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/brand/genperia-logo.png"
            alt="Genperia"
            className={`
              h-[130px] md:h-[130px]
              object-contain
              select-none
            `}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {['Ana Sayfa', 'Menü', 'Hikayemiz', 'İletişim'].map((item, index) => {
            const path =
              item === 'Ana Sayfa'
                ? '/'
                : item === 'Hikayemiz'
                ? '/about'
                : item === 'İletişim'
                ? '/contact'
                : '/menu';

            return (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  `
                  text-xs font-bold uppercase tracking-[0.2em]
                  transition-colors duration-200
                  hover:text-brand-gold
                  ${isActive ? 'text-brand-gold' : textColor}
                `
                }
              >
                {item}
              </NavLink>
            );
          })}
        </nav>

        {/* MOBİL MENÜ BUTONU */}
        <div className="flex items-center gap-4">
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBİL MENÜ OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-[#0b1120] z-40 md:hidden pt-32 px-6"
          >
            <nav className="flex flex-col gap-8 text-center">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl text-white font-serif hover:text-[#C5A065]"
              >
                Ana Sayfa
              </Link>
              <Link
                to="/menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl text-white font-serif hover:text-[#C5A065]"
              >
                Menü
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl text-white font-serif hover:text-[#C5A065]"
              >
                Hikayemiz
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl text-white font-serif hover:text-[#C5A065]"
              >
                İletişim
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
