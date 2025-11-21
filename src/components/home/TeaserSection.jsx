import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Container from '../ui/Container';
import { SectionTitle } from '../ui/Button';

const TeaserCard = ({ title, subtitle, imgUrl, link }) => (
  <Link to={link} className="block group relative w-full h-[500px] overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500">
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
      style={{ backgroundImage: `url(${imgUrl})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/90 via-[#0b1120]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
    <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
      <h3 className="font-serif text-4xl text-white mb-3">{title}</h3>
      <div className="w-12 h-[2px] bg-[#C5A065] mb-4 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <p className="text-white/80 text-base font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">{subtitle}</p>
      <span className="inline-flex items-center text-white text-sm font-semibold tracking-widest uppercase border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
        İncele <ChevronRight className="w-4 h-4 ml-1" />
      </span>
    </div>
  </Link>
);

export default function TeaserSection() {
  return (
    <section className="py-24 bg-[#F3EFEA]">
      <Container>
        <SectionTitle subtitle="Lezzetlerimiz" title="Genperia Seçkisi" />
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
            <TeaserCard 
              title="İmza Tatlılar" 
              subtitle="San Sebastian'dan Magnolia'ya, el yapımı mutluluk."
              imgUrl="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800" 
              link="/menu" 
            />
          </motion.div>
          <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
            <TeaserCard 
              title="Barista Dokunuşu" 
              subtitle="LaCimbali makinemizden çıkan kusursuz espresso bazlı içecekler."
              imgUrl="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
              link="/menu" 
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}