// src/components/RightPanel.jsx
import React from 'react'
import Icon from './ui/Icon'

export default function RightPanel({ open, onClose }) {
  return (
    <div className={`fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      {/* Arka plan karartma */}
      <div
        onClick={onClose}
        className={`absolute inset-0 transition ${open ? 'bg-black/40 backdrop-blur-sm' : 'bg-transparent'}`}
      />

      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-[92%] max-w-sm transform
        bg-[#080d16] text-white shadow-2xl ring-1 ring-white/10
        transition duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded bg-white/20" />
            <span className="text-lg font-semibold tracking-wide">GENPERIA</span>
          </div>
          <button
            aria-label="Kapat"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Icon name="close" />
          </button>
        </div>

        <div className="px-8 py-6">
          <ul className="space-y-6 text-xl">
            <li className="flex items-center gap-4">
              <Icon name="facebook" />
              <a href="#" className="hover:underline">Facebook</a>
            </li>
            <li className="flex items-center gap-4">
              <Icon name="x" />
              <a href="#" className="hover:underline">Twitter</a>
            </li>
            <li className="flex items-center gap-4">
              <Icon name="instagram" />
              <a href="#" className="hover:underline">Instagram</a>
            </li>
            <li className="flex items-center gap-4">
              <Icon name="pinterest" />
              <a href="#" className="hover:underline">Pinterest</a>
            </li>
          </ul>

          <hr className="my-8 border-white/10" />

          <div className="space-y-2">
            <p className="text-2xl font-medium tracking-wide">444 4 GEN (436)</p>
            <p className="text-white/70">info@genperia.com</p>
          </div>
        </div>
      </aside>
    </div>
  )
}
