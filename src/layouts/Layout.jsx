import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

export default function MainLayout({ children }) {
  return (
    // Siyah gradient yerine brand-cream
    <div className="min-h-screen text-brand-dark bg-brand-cream font-sans selection:bg-brand-gold selection:text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}