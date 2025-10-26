import React from 'react'
import Container from '../ui/Container'
import TeaserCard from '../TeaserCard'
import { useNavigate } from 'react-router-dom'

export default function TeaserSection() {
  const nav = useNavigate()
  return (
    <section className="relative py-14 text-white bg-[linear-gradient(180deg,#0b1324_0%,#0b111b_60%,#0b111b_100%)]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[#0d111a]/80" />
      <Container>
        <div className="relative mb-8 sm:mb-10">
          <div className="flex items-center gap-4">
            <span className="hidden h-px w-16 bg-white/30 sm:inline-block" />
            <p className="text-[10px] tracking-[0.35em] text-white/70">LEZZETE AÇILAN KAPI</p>
          </div>
          <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">Genperia Menüsü</h2>
        </div>
        <div className="relative grid place-items-center gap-4 sm:grid-cols-2 sm:gap-5">
          <TeaserCard title="Tatlı"   imgUrl="/images/teaser-dessert.jpg" onClick={() => nav('/menu?c=tatli')} />
          <TeaserCard title="İçecek" imgUrl="/images/teaser-drink.jpg"  onClick={() => nav('/menu?c=icecek')} />
        </div>
      </Container>
    </section>
  )
}
