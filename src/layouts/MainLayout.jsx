import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen text-white bg-[linear-gradient(180deg,#070b13_0%,#0a0f1a_40%,#0b1120_100%)]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
