import React, { useMemo, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Container from '../components/ui/Container'
import { menuData } from '../data/menu'

const Money = ({ value }) => <span>{new Intl.NumberFormat('tr-TR',{style:'currency',currency:'TRY',maximumFractionDigits:0}).format(value)}</span>

const MenuItem = ({ item }) => (
  <div className="flex items-start justify-between gap-6 rounded-2xl border border-white/10 bg-black/20 p-5">
    <div>
      <p className="font-medium text-white">{item.name}</p>
      <p className="mt-1 text-sm text-white/60">{item.desc}</p>
    </div>
    <p className="shrink-0 text-white/80"><Money value={item.price} /></p>
  </div>
)

export default function MenuPage() {
  const loc = useLocation()
  const initial = new URLSearchParams(loc.search).get('c') || 'icecek'
  const [category, setCategory] = useState(initial)

  useEffect(() => {
    const c = new URLSearchParams(loc.search).get('c')
    if (c && c !== category) setCategory(c)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loc.search])

  const items = useMemo(
    () => (category === 'tatli' ? menuData.tatli : [...menuData.sicak, ...menuData.soguk]),
    [category]
  )

  const subtitle = category === 'tatli' ? 'Tatlılar' : 'İçecekler'

  return (
    <section className="py-20 bg-[linear-gradient(180deg,#0b1324_0%,#0a0f1a_100%)]">
      <Container>
        <div className="mb-10 text-center text-white">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/60">{subtitle}</p>
          <h1 className="text-3xl font-semibold sm:text-4xl">Menü</h1>
        </div>

        <div className="mb-8 flex justify-center gap-2">
          <button onClick={() => setCategory('tatli')} className={`rounded-xl border px-4 py-2 text-sm border-white/15 bg-white/5 text-white/80 hover:bg-white/10 ${category==='tatli' ? 'border-white/30 bg-white/10 text-white' : ''}`}>Tatlı</button>
          <button onClick={() => setCategory('icecek')} className={`rounded-xl border px-4 py-2 text-sm border-white/15 bg-white/5 text-white/80 hover:bg-white/10 ${category==='icecek' ? 'border-white/30 bg-white/10 text-white' : ''}`}>İçecek</button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => <MenuItem key={i.name} item={i} />)}
        </div>

        <p className="mt-8 text-center text-xs text-white/50">* Fiyatlar güncellenebilir. Alerjen bilgisi için baristalarımıza danışın.</p>
      </Container>
    </section>
  )
}
