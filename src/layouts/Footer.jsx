import React from 'react'
import Container from '../components/ui/Container'
import Icon from '../components/ui/Icon'

function Social({ href, label, icon }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="
        grid h-10 w-10 place-items-center
        rounded-full border border-white/20
        bg-white/5 text-white/80
        transition
        hover:scale-105 hover:border-brand-gold/70 hover:text-brand-gold
      "
    >
      <Icon name={icon} className="h-4 w-4" />
    </a>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black/80 py-12 md:py-16 text-white">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Sol blok: logo + tagline */}
          <div className="space-y-3 text-center sm:text-left">
            <p className="text-lg sm:text-xl font-brand tracking-[0.3em] uppercase">
              Genperia
            </p>
            <p className="text-sm sm:text-base text-white/70 max-w-sm">
              Şehrin ışıkları altında, loş bar atmosferi ve dengeli tatlarla modern bir kahve deneyimi.
            </p>
          </div>

          {/* Orta blok: adres & iletişim */}
          <div className="space-y-2 text-center sm:text-left">
            <p className="text-sm font-semibold text-white/80">Adres</p>
            <p className="text-sm text-white/70">Kültür, Atatürk Blv. 236 238</p>
            <p className="text-sm text-white/70">60600 Niksar / Tokat</p>
            <p className="mt-2 text-sm text-white/70">
              E-posta: <span className="text-white">hello@genperia.com</span>
            </p>
          </div>

          {/* Sağ blok: sosyal medya + yıl */}
          <div className="flex flex-col items-center gap-4 sm:items-end">
            <div className="flex items-center gap-3">
              <Social href="https://instagram.com" label="Instagram" icon="instagram" />
              <Social href="mailto:hello@genperia.com" label="E-posta" icon="mail" />
            </div>
            <p className="text-xs sm:text-[13px] text-white/60 mt-1">
              © {year} Genperia. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
