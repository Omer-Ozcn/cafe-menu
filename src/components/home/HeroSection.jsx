import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button'; // Yolu kontrol et
import { IMAGES } from '../../data/constants';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0b1120]">
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 w-full h-[110%]">
        <img 
          src={IMAGES.hero}
          onError={(e) => {
             e.target.src = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=2000";
             e.target.style.filter = "brightness(0.6) contrast(1.2)";
          }}
          alt="Genperia Bar Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-black/40" />
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-6">
             <div className="px-4 py-1.5 rounded-full border border-[#C5A065]/30 bg-black/40 backdrop-blur-sm text-[#C5A065] text-xs font-bold tracking-[0.3em] uppercase">
                Est. 2025 • Tokat
             </div>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-8 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] leading-[0.9]">
            Genperia
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Şehrin ışığında yeni bir tat. <br/>
            <span className="text-[#C5A065]">3. Nesil Kahve</span> ve modern mimarinin buluşma noktası.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button to="/menu" variant="glass">Menüyü İncele</Button>
            <Button to="/contact" variant="glass">Yol Tarifi Al</Button>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] tracking-widest uppercase">Keşfet</span>
        <ArrowRight className="rotate-90 w-5 h-5" />
      </motion.div>
    </section>
  );
}