import React from 'react'

export default function TeaserCard({ title, imgUrl, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative isolate w-full max-w-[460px] overflow-hidden rounded-md border border-white/10 bg-neutral-900/40 shadow md:max-w-[420px]"
      style={{ height: '320px' }}
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-serif text-2xl font-semibold text-white drop-shadow-sm sm:text-[28px]">
        {title}
      </span>
    </button>
  )
}
