export const siteConfig = {
  // === 1. MARKA ve SEO BİLGİLERİ ===
  name: "Köyümden Gıda",
  title: "Köyümden Gıda | Organik Zeytinyağlı Yaprak Sarması",
  description: "Köyümden Gıda'dan taze asma yaprağı ile hazırlanmış, organik zeytinyağlı yaprak sarması. Geleneksel lezzetler kapınızda.",
  keywords: "organik yaprak sarması, zeytinyağlı yaprak sarması, köyümden gıda, yaprak sarması sipariş, ev yapımı yaprak sarma, yaprak sarması",
  url: "https://koyumdengida.com.tr", // !! ÖNEMLİ: Burayı kendi domaininizle değiştirin !!

  // === 2. İLETİŞİM ve WHATSAPP ===
  address: {
    street: "Sarma Sokağı No: 123", // Kendi adresinizle güncelleyin
    locality: "Lezzet Mahallesi",
    city: "İstanbul", // Kendi şehrinizle güncelleyin
    country: "TR",
  },
  phone: "+905550001122", // !! ÖNEMLİ: Kendi WhatsApp numaranızla değiştirin !!
  email: "siparis@koyumdengida.com.tr", // Kendi e-postanızla güncelleyin
  
  // Arayüz için Açılış Saatleri
  openingHours: [
    { day: "Hafta İçi", hours: "09:00 - 20:00" },
    { day: "Cumartesi", hours: "09:00 - 22:00" },
    { day: "Pazar", hours: "Kapalı" }, // Örnek olarak güncellendi
  ],
  
  // Schema Markup için Açılış Saatleri
  openingHoursSchema: [
    'Mo-Fr 09:00-20:00',
    'Sa 09:00-22:00',
    'Su 00:00-00:00', // Pazar kapalı
  ],
  
  // Sosyal Medya Linkleri
  //social: {
    //instagram: "https://instagram.com/koyumdengida", // Kendi linkinizle güncelleyin
    //facebook: "https://facebook.com/koyumdengida",  // Kendi linkinizle güncelleyin
  //},

  // === 3. GOOGLE ÜRÜN BİLGİSİ ===
  product: {
    name: "Köyümden Gıda Organik Zeytinyağlı Yaprak Sarması",
    description: "Taze köy yaprakları ve saf zeytinyağı ile hazırlanan, katkısız, ev yapımı yaprak sarması.",
    category: "Geleneksel Yemek",
    brandName: "Köyümden Gıda",
  },

  // === 4. BİLEŞEN İÇERİKLERİ (YENİ EKLENEN BÖLÜM) ===
  content: {
    
    // --- StoryGrid (Hikaye Bölümü) ---
    story: {
      title: "Mutfağımızdan Sofranıza",
      description: "Her bir sarma, aile geleneğimizin ve doğanın en iyisini sunma tutkusunun bir yansımasıdır.",
      cards: [
        {
          title: "Kalite Standardımız",
          description: "Üç nesillik aile tarifimiz, modern teknolojiyle birleşti. El değmeden, hijyenik üretimle her sarmada aynı lezzet."
        },
        {
          title: "En Taze Yapraklar",
          description: "Her sabah erken saatlerde toplanan, organik asma yaprakları. Doğanın en saf hali, mutfağımızda."
        },
        {
          title: "Saf Zeytinyağı",
          description: "Sadece yerel üreticilerden seçilen, soğuk sıkım zeytinyağı. Her damlası lezzet dolu."
        },
        {
          title: "Mükemmel Karışım",
          description: "Pirinç, baharat ve otların hassas dengesi. Makine hassasiyetiyle her sarmada tutarlı mükemmellik."
        }
      ]
    },

    // --- VideoShowcase (Video Bölümü) ---
    video: {
      title: "Sarma Ritüeli",
      description: "Nasıl yapıldığını izleyin: her adımda gösterilen özen ve tutku",
      videoId: "dQw4w9WgXcQ", // Bu 'Rick Astley' videosunun ID'sidir :) Kendi YouTube video ID'niz ile değiştirin
      videoTitle: "Köyümden Gıda - Organik Yaprak Sarma Üretim Videosu"
    },

    // --- PhotoGallery (Galeri Bölümü) ---
    gallery: {
      title: "Gözler İçin Bir Ziyafet",
      description: "Her bir sarma, kalite standartlarımıza uygun olarak titizlikle hazırlanır ve sunulur.",
      buttonText: "Tüm Galeriyi Görüntüle",
      items: [
        { 
          id: 1, 
          title: 'Modern Üretim Hattı', 
          src: '/images/gallery-1.webp',
          gridClass: 'md:col-span-2 md:row-span-2',
          description: 'Son teknoloji ekipmanlarla hijyenik üretim',
          alt: 'Yaprak sarma üretim hattı makinesi'
        },
        { 
          id: 2, 
          title: 'En Taze Asma Yaprakları', 
          src: '/images/gallery-2.webp',
          gridClass: 'md:col-span-1 md:row-span-1',
          description: 'Organik, sabah toplanan taze yapraklar',
          alt: 'Üzerinde su damlaları olan taze asma yaprağı'
        },
        { 
          id: 3, 
          title: 'Saf Ege Zeytinyağı', 
          src: '/images/gallery-3.webp',
          gridClass: 'md:col-span-1 md:row-span-2',
          description: 'Soğuk sıkım, yerel üreticilerden',
          alt: 'Şişeden tavaya dökülen zeytinyağı'
        },
        { 
          id: 4, 
          title: 'Mükemmel Sunum', 
          src: '/images/gallery-4.webp',
          gridClass: 'md:col-span-2 md:row-span-1',
          description: 'Her tabak bir sanat eseri',
          alt: 'Limon ve yoğurt ile servis edilen yaprak sarması tabağı'
        },
      ]
    },

    // --- ContactSection (İletişim Bölümü) ---
    contact: {
      title: "Köyümden Gıda'yı Ziyaret Edin",
      description: "Sipariş verin veya dükkanımızda bizi ziyaret edin."
    }
  }
};