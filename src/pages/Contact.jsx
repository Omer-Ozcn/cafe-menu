import React from 'react'
import Container from '../components/ui/Container'

export default function Contact() {
  return (
    <section id="iletisim" className="bg-neutral-950 py-20">
      <Container>
        <div className="mb-10 text-center text-white">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/60">Rezervasyon & Konum</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">İletişim</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 text-white">
            <h3 className="mb-3 text-lg font-medium">Bize Yazın</h3>
            <form className="grid gap-3">
              <input className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Ad Soyad" />
              <input className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Telefon / E-posta" />
              <textarea className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 min-h-28" placeholder="Mesajınız" />
              <button type="button" className="rounded-xl bg-white/90 px-5 py-2.5 text-sm font-medium text-black hover:bg-white w-fit">Gönder</button>
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 text-white">
            <h3 className="mb-3 text-lg font-medium">Çalışma Saatleri & Adres</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Hafta içi: 10:00 – 23:30</li>
              <li>Hafta sonu: 10:00 – 01:00</li>
              <li className="mt-4">Adres: Şehir Merkezi, Moda Cad. No: 12</li>
              <li>Telefon: 0 (212) 000 00 00</li>
            </ul>
            <div className="mt-5 aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-white/10 to-white/5" />
          </div>
        </div>
      </Container>
    </section>
  )
}
