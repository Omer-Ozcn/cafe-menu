import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { Button } from '../ui/Button';
import { IMAGES } from '../../data/constants';

export default function AboutPreview() {
  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F3EFEA] skew-x-12 translate-x-20 opacity-50" />
      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* METİN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <span className="text-[#C5A065] font-bold tracking-widest uppercase text-xs mb-2 block">
              Deneyim
            </span>
            <h2 className="font-serif text-5xl text-[#1a1f2e] leading-tight mb-8">
              Gecenin Rengi, <br />
              <span className="relative inline-block">
                Kahvenin Kokusu
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#C5A065]/20 -z-10" />
              </span>
            </h2>
            <p className="text-[#1a1f2e]/70 leading-relaxed mb-8 text-lg">
              Genperia, sadece bir kahve dükkanı değil; mavi neon ışıkların mermer
              dokularla dans ettiği modern bir sığınak.
            </p>
            <Button to="/about" variant="outline">
              Hikayemiz
            </Button>
          </motion.div>

          {/* GÖRSEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 relative flex justify-center"
          >
            <div
              className="
                w-full max-w-[720px]
                rounded-3xl overflow-hidden 
                shadow-2xl border border-white 
                bg-brand-beige
                px-4 py-4
              "
            >
              <img
                src={IMAGES.about}
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000';
                }}
                alt="Genperia Bar Counter"
                className="
                  w-full h-auto
                  object-contain
                  transition-transform duration-1000
                  hover:scale-[1.03]
                "
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
