import React from 'react'

export default function TeaserCard({ title, subtitle, imgUrl, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full h-[400px] overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Resim: Hover'da büyür (Zoom Effect) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      
      {/* Gradient: Sadece alt kısımda, yazının okunması için */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
      
      <div className="absolute bottom-0 left-0 p-8 text-left w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="font-serif text-3xl text-white mb-1">{title}</h3>
        <p className="text-brand-beige text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
          {subtitle} →
        </p>
      </div>
    </button>
  )
}