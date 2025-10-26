import React from 'react'
import Container from '../ui/Container'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative isolate">
      <div className="h-[84vh] w-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/genperia-hero.jpg)' }}>
        <div className="h-full w-full bg-gradient-to-b from-black/60 via-black/40 to-black/70">
          <Container className="flex h-full flex-col items-center justify-center text-center text-white">
            <p className="mb-3 text-sm tracking-[0.35em] text-white/80">COFFEE • DESSERT</p>
            <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">Şehrin Işığında Yeni Bir Tat</h1>
            <p className="mx-auto mb-8 max-w-2xl text-balance text-white/80">
              Genperia’da üçüncü nesil kahve, akşam ışıkları ve modern mimari bir araya geliyor.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/menu" className="rounded-xl bg-white/90 px-5 py-2.5 text-sm font-medium text-black hover:bg-white">Menüyü Gör</Link>
              <Link to="/contact" className="rounded-xl border border-white/20 bg-transparent px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10">Bize Ulaş</Link>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}
