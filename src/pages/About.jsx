import React from 'react'
import Container from '../components/ui/Container'

export default function About() {
  return (
    <section className="py-20 bg-[linear-gradient(180deg,#0b111b_0%,#0b1324_100%)]">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <img src="/images/about-placeholder.jpg" alt="" className="h-full w-full object-cover opacity-90" onError={(e)=>{e.currentTarget.style.display='none'}} />
            </div>
          </div>
          <div className="text-white/90">
            <h1 className="mb-4 font-serif text-4xl font-semibold text-white">Hakkımızda</h1>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>Genperia; modern bar-kafe çizgisi, mavi neon yansımaları ve sade servis yaklaşımıyla şehirde yeni bir buluşma noktası.</p>
              <p>Üçüncü nesil kahveler, sıcak/soğuk içecekler ve günlük taze gelen hazır tatlılar öne çıkar.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
