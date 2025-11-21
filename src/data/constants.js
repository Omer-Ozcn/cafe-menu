// Renk Paleti
export const BRAND = {
  cream: "bg-[#FDFBF7]",
  dark: "text-[#1a1f2e]",
  gold: "text-[#C5A065]",
  neonBlue: "text-[#3b82f6]",
};

// Resim Yolları
export const IMAGES = {
  hero: "/images/genperia-hero.jpg",
  about: "/images/about-placeholder.jpg",
};

// Menü Verisi
export const MENU_DATA = {
  kahve: [
    {
      id: 1,
      name: 'Espresso',
      desc: 'Yoğun gövdeli, tek shot kısa kahve. Klasik başlangıç noktası.',
      image:
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      name: 'Double Espresso',
      desc: 'Çift shot espresso; daha yoğun ve güçlü kahve deneyimi.',
      image:
        'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      name: 'Ristretto',
      desc: 'Daha kısa sürede, daha az su ile alınan yoğun espresso shot.',
      image:
        'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 4,
      name: 'Lungo',
      desc: 'Daha uzun çekilmiş, daha yumuşak içimli espresso varyasyonu.',
      image:
        'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 5,
      name: 'Americano',
      desc: 'Espresso üzerine sıcak su eklenerek hazırlanan, hafif gövdeli kahve.',
      image:
        'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 6,
      name: 'Filtre Kahve',
      desc: 'Günlük taze öğütülmüş çekirdeklerle hazırlanan sade siyah kahve.',
      image:
        'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 7,
      name: 'French Press',
      desc: 'Kalın öğütüm çekirdeklerle, gövdeli ve yoğun bir demleme.',
      image:
        'https://images.unsplash.com/photo-1477764227684-8c4e5bca6f0d?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 8,
      name: 'V60 Pour Over',
      desc: 'Hafif, berrak ve aromatik fincan için manuel demleme yöntemi.',
      image:
        'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 9,
      name: 'Chemex',
      desc: 'Temiz, çay benzeri gövde ve berrak aromalar sunan demleme yöntemi.',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 10,
      name: 'AeroPress',
      desc: 'Yoğun aromalı, kısa sürede hazırlanan modern demleme yöntemi.',
      image:
        'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 11,
      name: 'Latte',
      desc: 'Tek shot espresso, bol süt ve ince süt köpüğü ile dengeli içim.',
      image:
        'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 12,
      name: 'Cappuccino',
      desc: 'Eşit oranlarda espresso, süt ve süt köpüğü. Üzerine hafif kakao.',
      image:
        'https://images.unsplash.com/photo-1502462041640-b3d7e50d0660?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 13,
      name: 'Flat White',
      desc: 'Çift shot espresso ve mikroköpük süt ile yoğun kahve tadı.',
      image:
        'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 14,
      name: 'Cortado',
      desc: 'Espresso ve sütü eşit oranda buluşturan kısa ve dengeli içim.',
      image:
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 15,
      name: 'Macchiato',
      desc: 'Espresso üzerine az miktarda süt köpüğü eklenerek hazırlanır.',
      image:
        'https://images.unsplash.com/photo-1432107294469-414527cb5c65?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 16,
      name: 'Mocha',
      desc: 'Espresso, süt ve kakao ile hazırlanan çikolatalı kahve.',
      image:
        'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 17,
      name: 'Beyaz Çikolatalı Kahve',
      desc: 'Espresso ve süt bazında, beyaz çikolata aromasıyla zenginleştirilmiş kahve.',
      image:
        'https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 18,
      name: 'Karamelli Latte',
      desc: 'Espresso, süt ve karamel aroması; üzerinde hafif köpük ve karamel gezdirme.',
      image:
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 19,
      name: 'Fındık Aromalı Latte',
      desc: 'Kavrulmuş fındık notaları taşıyan, sütlü ve yumuşak içimli kahve.',
      image:
        'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 20,
      name: 'Soğuk Demleme Kahve',
      desc: 'Uzun sürede soğuk demleme yöntemiyle hazırlanmış, düşük asiditeli kahve.',
      image:
        'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 21,
      name: 'Iced Americano',
      desc: 'Buz üzerinde, espresso ve soğuk su ile hazırlanan ferahlatıcı kahve.',
      image:
        'https://images.unsplash.com/photo-1532000389005-8a43c42f97e4?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 22,
      name: 'Iced Latte',
      desc: 'Buz, soğuk süt ve espresso ile hazırlanan hafif ve serinletici latte.',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 23,
      name: 'Iced Mocha',
      desc: 'Buz üzerinde espresso, süt ve kakao karışımı; çikolata sevenler için.',
      image:
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 24,
      name: 'Nitro Cold Brew',
      desc: 'Azotla zenginleştirilmiş soğuk demleme; kremamsı doku ve yumuşak içim.',
      image:
        'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=800',
    },
  ],

  tatli: [
    {
      id: 5,
      name: 'San Sebastian',
      desc: 'Akışkan kıvam, üzerine Belçika çikolatası sosu.',
      image:
        'https://images.unsplash.com/photo-1621856560001-765394813147?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 6,
      name: 'Tiramisu',
      desc: 'İtalyan usulü, mascarpone peynirli.',
      image:
        'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 7,
      name: 'Magnolia',
      desc: 'Taze çilek ve bisküvi kırıntılarıyla.',
      image:
        'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 8,
      name: 'Brownie',
      desc: 'Cevizli, yoğun çikolatalı, sıcak servis.',
      image:
        'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800',
    },
  ],
};
