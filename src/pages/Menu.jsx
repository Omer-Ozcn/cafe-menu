import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Cake } from 'lucide-react';
import Container from '../components/ui/Container';
import { SectionTitle } from '../components/ui/Button';
import { MENU_DATA } from '../data/constants';

export default function Menu() {
  return (
    <div className="pt-40 pb-20 bg-[#FDFBF7]">
      <Container>
        <SectionTitle subtitle="Keşfet" title="Genperia Menü" />
        <div className="space-y-20 mt-16">
          {/* Kahveler Bölümü */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-[#C5A065]/10 rounded-full text-[#C5A065]"><Coffee size={24}/></div>
              <h3 className="text-3xl font-serif text-[#1a1f2e]">İmza Kahveler</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {MENU_DATA.kahve.map((item, idx) => (
                <MenuCard key={item.id} item={item} idx={idx} />
              ))}
            </div>
          </div>
          
          {/* Tatlılar Bölümü (Benzer yapı) */}
           <div>
            <div className="flex items-center gap-4 mb-10">
               <div className="p-3 bg-[#C5A065]/10 rounded-full text-[#C5A065]"><Cake size={24}/></div>
               <h3 className="text-3xl font-serif text-[#1a1f2e]">El Yapımı Tatlılar</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {MENU_DATA.tatli.map((item, idx) => (
                <MenuCard key={item.id} item={item} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

// Küçük yardımcı component
const MenuCard = ({ item, idx }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1 }}
    className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
  >
    <div className="h-56 rounded-xl overflow-hidden mb-5 relative">
      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold text-[#1a1f2e] shadow-sm">
        {item.price}
      </div>
    </div>
    <h4 className="text-xl font-serif font-semibold text-[#1a1f2e] mb-2">{item.name}</h4>
    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
  </motion.div>
);