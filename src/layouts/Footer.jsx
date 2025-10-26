import React from 'react'
import Container from '../components/ui/Container'
import Icon from '../components/ui/Icon'

function Social({ href, label, icon }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:scale-105 hover:border-white/25 hover:text-white"
    >
      <Icon name={icon} />
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 py-10 text-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium">GENPERIA</p>
            <p className="text-xs text-white/60">© {new Date().getFullYear()} Tüm hakları saklıdır.</p>
          </div>
          <div className="flex items-center gap-4">
            <Social href="https://instagram.com" label="Instagram" icon="instagram" />
            <Social href="https://facebook.com" label="Facebook" icon="facebook" />
            <Social href="https://x.com" label="X" icon="x" />
            <Social href="https://pinterest.com" label="Pinterest" icon="pinterest" />
            <Social href="mailto:hello@genperia.com" label="E-posta" icon="mail" />
          </div>
        </div>
      </Container>
    </footer>
  )
}
