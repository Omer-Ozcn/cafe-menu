import React from 'react'
import Container from '../ui/Container'
import { Link } from 'react-router-dom'

export default function AboutPreview() {
  return (
    <section className="py-20 bg-[linear-gradient(180deg,#0b111b_0%,#0b1324_100%)]">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="aspect-[5/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <img src="/images/about-placeholder.jpg" alt="" className="h-full w-full object-cover object-[50%_80%]" onError={(e)=>{e.currentTarget.style.display='none'}} />
            </div>
          </div>
          <div className="text-white/90">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-white sm:text-4xl">Tatlar Bizden Keyif Sizden…</h2>
            <p className="text-sm leading-relaxed text-white/70">
              Loş mavi bar ışıkları ve mermer dokular arasında kahve ve tatlıda yalın bir deneyim.
              Cheesecake & cappuccino ikilimizle tanışın.
            </p>
            <div className="mt-6">
              <Link to="/about" className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15">Devam</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
