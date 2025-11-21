import React from 'react'
import Container from '../components/ui/Container'

export default function Contact() {
  return (
    <section id="iletisim" className="bg-brand-beige py-20">
      <Container>
        <div className="mb-10 text-center text-brand-dark mt-20">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-brand-dark/50">
            Rezervasyon & Konum
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">İletişim</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* FORM */}
          <div className="rounded-2xl border border-brand-cream bg-white/80 p-6 text-brand-dark shadow-sm">
            <h3 className="mb-3 text-lg font-medium">Bize Yazın</h3>
            <form className="grid gap-3">
              <input
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                placeholder="Ad Soyad"
              />
              <input
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                placeholder="Telefon / E-posta"
              />
              <textarea
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 min-h-28"
                placeholder="Mesajınız"
              />
              <button
                type="button"
                className="rounded-xl bg-brand-dark px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-gold transition"
              >
                Gönder
              </button>
            </form>
          </div>

          {/* ÇALIŞMA SAATLERİ + HARİTA */}
          <div className="rounded-2xl border border-brand-cream bg-white/80 p-6 text-brand-dark shadow-sm">
            <h3 className="mb-3 text-lg font-medium">Çalışma Saatleri & Adres</h3>
            <ul className="space-y-2 text-sm text-brand-dark/80">
              <li>Hafta içi: 10:00 – 23:30</li>
              <li>Hafta sonu: 10:00 – 01:00</li>
              <li className="mt-4">
                Adres: Kültür, Atatürk Blv. 236 238, 60600 Niksar/Tokat
              </li>
              <li>Telefon: 0 (212) 000 00 00</li>
            </ul>

            {/* HARİTA */}
            <div className="mt-5 aspect-[16/10] w-full rounded-xl overflow-hidden border border-brand-cream">
              <iframe
                title="Genperia Konum"
                src="https://www.google.com/maps?q=K%C3%BClt%C3%BCr,+Atat%C3%BCrk+Blv.+236+238,+60600+Niksar%2FTokat&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
