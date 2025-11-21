// About.jsx
import React from 'react'
import Container from '../components/ui/Container'

export default function About() {
  return (
    <section className="py-20 bg-brand-cream ">
      <Container>
        <div className="grid items-center gap-10 mt-20 md:grid-cols-2">
          
          {/* GÖRSEL BLOĞU - GÜNCELLENDİ */}
          <div className="flex justify-center">
            <div
              className="
                w-full max-w-[820px]          /* Masaüstünde daha geniş */
                rounded-3xl overflow-hidden
                border border-brand-beige 
                bg-brand-beige
                shadow-[0_30px_60px_rgba(0,0,0,0.25)]
                py-4 px-4                     /* Kenarlarda biraz iç boşluk */
              "
            >
              <img
                src="/images/about-placeholder.jpg"
                alt="Genperia iç mekan"
                className="
                  w-full h-auto               /* Yükseklik otomatik */
                  object-contain              /* KIRPMADAN tam göster */
                  rounded-2xl
                "
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
          </div>

          {/* METİN BLOĞU */}
          <div className="text-brand-dark">
            <h1 className="mb-4 font-serif text-4xl font-semibold">Hakkımızda</h1>
            <div className="space-y-4 text-sm leading-relaxed text-brand-dark/80">
              <p>
                Genperia; modern bar-kafe çizgisi, mavi neon yansımaları ve sade servis
                yaklaşımıyla şehirde yeni bir buluşma noktası.
              </p>
              <p>
                Üçüncü nesil kahveler, sıcak/soğuk içecekler ve günlük taze gelen tatlılar
                öne çıkar. Loş atmosferin içinde ferah bir lezzet deneyimi sunarız.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
