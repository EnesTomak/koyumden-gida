export const siteConfig = {
  // === 1. MARKA ve SEO BİLGİLERİ ===
  name: "Köyümden Gıda",
  title: "Köyümden Gıda | Üç Nesillik Lezzet Hikayesi",
  description: "Büyükannelerimizin sofrasındaki o lezzet, şimdi modern hijyen standartlarıyla kapınızda. Organik zeytinyağlı yaprak sarması.",
  keywords: "organik yaprak sarması, zeytinyağlı yaprak sarması, köyümden gıda, yaprak sarması sipariş, ev yapımı lezzet",
  url: "https://koyumdengida.com.tr",

  // === 2. İLETİŞİM ve WHATSAPP ===
  address: {
    street: "Sarma Sokağı No: 123",
    locality: "Lezzet Mahallesi",
    city: "İstanbul",
    country: "TR",
  },
  phone: "+905550001122",
  email: "siparis@koyumdengida.com.tr",

  openingHours: [
    { day: "Hafta İçi", hours: "09:00 - 20:00" },
    { day: "Cumartesi", hours: "09:00 - 22:00" },
    { day: "Pazar", hours: "Kapalı" },
  ],

  openingHoursSchema: [
    'Mo-Fr 09:00-20:00',
    'Sa 09:00-22:00',
    'Su 00:00-00:00',
  ],

  // === 3. GOOGLE ÜRÜN BİLGİSİ ===
  product: {
    name: "Köyümden Gıda Organik Zeytinyağlı Yaprak Sarması",
    description: "Taze köy yaprakları ve saf zeytinyağı ile hazırlanan, katkısız, ev yapımı yaprak sarması.",
    category: "Geleneksel Yemek",
    brandName: "Köyümden Gıda",
  },

  // === 4. BİLEŞEN İÇERİKLERİ ===
  content: {

    // --- StoryGrid (Hikaye Bölümü - GÜNCELLENDİ) ---
    story: {
      title: "Neden Vazgeçilmez?",
      description: "Dedelerimizden öğrendik, annelerimizden aldık. Şimdi sizin mutfağınıza, aynı özenle getiriyoruz.",
      cards: [
        {
          title: "Modern Gelenek",
          description: "Üç nesillik aile tarifimiz, modern teknolojiyle birleşti. El değmeden, hijyenik üretimle her sarmada anne eli değmiş gibi."
        },
        {
          title: "Şafak Vakti Hasat",
          description: "Her sabah güneş doğmadan toplanan, en taze asma yaprakları. Doğanın en saf, en canlı hali."
        },
        {
          title: "Altın Sıvı: Zeytinyağı",
          description: "Sadece yerel üreticilerden seçilen, soğuk sıkım zeytinyağı. Boğazı yakmayan, yumuşacık bir lezzet."
        },
        {
          title: "İlmik İlmik Lezzet",
          description: "Pirinç, baharat ve otların hassas dengesi. Ne çok ekşi, ne çok tuzlu; tam damağınıza layık."
        }
      ]
    },

    // --- VideoShowcase ---
    video: {
      title: "Sarma Ritüeli",
      description: "Her adımda gösterilen özen ve tutkuyu izleyin.",
      videoId: "dQw4w9WgXcQ",
      videoTitle: "Köyümden Gıda - Üretim Hikayesi"
    },

    // --- PhotoGallery ---
    gallery: {
      title: "Gözler İçin Bir Ziyafet",
      description: "Kalite tesadüf değildir; bir seçimdir.",
      buttonText: "Galeriyi Keşfet",
      items: [
        {
          id: 1,
          title: 'Modern Mutfak',
          src: '/images/gallery-1.webp',
          gridClass: 'md:col-span-2 md:row-span-2',
          description: 'Hijyen ve teknolojinin buluşması',
          alt: 'Yaprak sarma üretim tesisi'
        },
        {
          id: 2,
          title: 'Tazelik',
          src: '/images/gallery-2.webp',
          gridClass: 'md:col-span-1 md:row-span-1',
          description: 'Dalından yeni kopmuş',
          alt: 'Taze asma yaprağı'
        },
        {
          id: 3,
          title: 'Zeytinyağı',
          src: '/images/gallery-3.webp',
          gridClass: 'md:col-span-1 md:row-span-2',
          description: 'Ege\'nin kalbinden',
          alt: 'Zeytinyağı dökümü'
        },
        {
          id: 4,
          title: 'Sunum Sanatı',
          src: '/images/gallery-4.webp',
          gridClass: 'md:col-span-2 md:row-span-1',
          description: 'Sofranızın yıldızı',
          alt: 'Servis tabağı'
        },
      ]
    },

    // --- Referanslar ---
    clients: {
      title: "Bizi Tercih Edenler",
      description: "Kalitemize güvenen değerli iş ortaklarımız.",
      list: [
        { name: "Referans 1", logo: "/images/clients/placeholder-1.svg" },
        { name: "Referans 2", logo: "/images/clients/placeholder-2.svg" },
        { name: "Referans 3", logo: "/images/clients/placeholder-3.svg" }
      ]
    },

    contact: {
      title: "Bizimle Tanışın",
      description: "Sorularınız veya siparişleriniz için buradayız."
    }
  }
};