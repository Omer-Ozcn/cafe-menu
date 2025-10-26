import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

/**
 * Header içinde "Menü" linki için hover/dropdown.
 * - Masaüstü: hover ile açılır, focus/klavye ile de erişilebilir.
 * - Mobil: bu component kullanılmıyor; Header kendi mobil listesi var.
 */
export default function MenuDropdown() {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(null)
  const nav = useNavigate()

  const openNow   = () => { clearTimeout(timerRef.current); setOpen(true) }
  const closeSoon = () => { timerRef.current = setTimeout(() => setOpen(false), 120) }

  useEffect(() => () => clearTimeout(timerRef.current), [])

  return (
    <div
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onFocus={openNow}
      onBlur={closeSoon}
    >
      {/* Üstteki menü linki */}
      <NavLink
        to="/menu"
        className={({ isActive }) =>
          `text-sm transition ${isActive ? 'text-white' : 'text-white/90 hover:text-white'}`
        }
        onClick={(e) => { e.preventDefault(); setOpen((v) => !v) }}
        aria-haspopup="menu"
        aria-expanded={open ? 'true' : 'false'}
      >
        Menü
      </NavLink>

      {/* Aşağı açılan panel */}
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-[140%] w-72 rounded-xl bg-[#241a14] shadow-2xl ring-1 ring-black/40"
        >
          <ul className="p-6 space-y-6">
            <li>
              <button
                className="text-lg text-slate-300 hover:text-white transition"
                onClick={() => nav('/menu?c=tatli')}
                role="menuitem"
              >
                Tatlı
              </button>
            </li>
            <li>
              <button
                className="text-lg text-slate-300 hover:text-white transition"
                onClick={() => nav('/menu?c=icecek')}
                role="menuitem"
              >
                İçecek
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
