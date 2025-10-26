import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from '../components/ui/Container'
import Icon from '../components/ui/Icon'
import RightPanel from '../components/RightPanel'
import MenuDropdown from '../components/navigation/MenuDropdown' // ⬅️ yeni

const linkCls = ({ isActive }) =>
  `text-sm transition ${isActive ? 'text-white' : 'text-white/90 hover:text-white'}`

export default function Header() {
  const [open, setOpen] = useState(false)
  const [panel, setPanel] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-lg bg-white/10" />
          <span className="text-lg font-semibold tracking-wide text-white">GENPERIA</span>
        </Link>

        {/* Masaüstü */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={linkCls}>Ana Sayfa</NavLink>
          <NavLink to="/about" className={linkCls}>Hakkımızda</NavLink>

          {/* Menü linki + hover dropdown */}
          <MenuDropdown />

          <NavLink to="/contact" className={linkCls}>İletişim</NavLink>
        </nav>

        {/* Sağ ikonlar */}
        <div className="flex items-center gap-3">
          <button onClick={() => setPanel(true)} aria-label="Hızlı panel" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"><Icon name="grid9" /></button>
          <button onClick={() => setOpen(v => !v)} className="rounded-xl border border-white/10 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 md:hidden" aria-label="Menü">Menü</button>
        </div>
      </Container>

      {/* Mobil açılır menü */}
      {open && (
        <div className="md:hidden">
          <div className="border-t border-white/10 bg-neutral-900/95 px-4 py-3 backdrop-blur">
            <div className="flex flex-col gap-2">
              <Link onClick={() => setOpen(false)} to="/" className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">Ana Sayfa</Link>
              <Link onClick={() => setOpen(false)} to="/about" className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">Hakkımızda</Link>

              {/* Menü + alt başlıklar */}
              <div className="rounded-lg px-3 py-2">
                <p className="mb-1 text-sm text-white/70">Menü</p>
                <div className="ml-3 flex flex-col">
                  <Link onClick={() => setOpen(false)} to="/menu?c=tatli" className="rounded px-2 py-1 text-sm text-white/80 hover:bg-white/10">Tatlı</Link>
                  <Link onClick={() => setOpen(false)} to="/menu?c=icecek" className="rounded px-2 py-1 text-sm text-white/80 hover:bg-white/10">İçecek</Link>
                </div>
              </div>

              <Link onClick={() => setOpen(false)} to="/contact" className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">İletişim</Link>
            </div>
          </div>
        </div>
      )}

      <RightPanel open={panel} onClose={() => setPanel(false)} />
    </header>
  )
}
