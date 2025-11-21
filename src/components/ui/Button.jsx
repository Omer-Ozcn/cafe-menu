// src/components/ui/Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const SectionTitle = ({ subtitle, title, align = 'center', dark = true }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="text-[#C5A065] text-xs font-bold tracking-[0.3em] uppercase block mb-3 flex items-center gap-2 justify-center">
        {align === 'center' && <span className="w-8 h-[1px] bg-[#C5A065]/50"></span>}
        {subtitle}
        {align === 'center' && <span className="w-8 h-[1px] bg-[#C5A065]/50"></span>}
      </span>
      <h2 className={`font-serif text-4xl md:text-6xl ${dark ? 'text-[#1a1f2e]' : 'text-white'}`}>
        {title}
      </h2>
    </div>
  );
};

export const Button = ({ to, children, variant = 'primary' }) => {
  const baseClass =
    'inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300';
  const variants = {
    primary:
      'bg-[#1a1f2e] text-white hover:bg-[#C5A065] shadow-lg hover:shadow-xl border border-transparent',
    outline:
      'border border-[#1a1f2e]/20 text-[#1a1f2e] hover:bg-[#1a1f2e] hover:text-white',
    glass:
      'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]',
  };

  return (
    <Link to={to} className={`${baseClass} ${variants[variant]}`}>
      {children}
    </Link>
  );
};
