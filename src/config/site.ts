// Dosya Yolu: src/config/site.ts

export const siteConfig = {
  // === 1. MARKA ve SEO BİLGİLERİ ===
  name: "Köyümden Gıda",
  title: "Köyümden Gıda | Organik Zeytinyağlı Yaprak Sarması",
  description: "Köyümden Gıda'dan taze asma yaprağı ile hazırlanmış, organik zeytinyağlı yaprak sarması. Geleneksel lezzetler kapınızda.",
  keywords: "organik yaprak sarması, zeytinyağlı yaprak sarması, köyümden gıda, yaprak sarması sipariş, ev yapımı yaprak sarma, yaprak sarması",
  url: "https://koyumdengida.com.tr", // !! ÖNEMLİ: Burayı kendi domaininizle değiştirin !!

  // === 2. İLETİŞİM ve WHATSAPP ===
  address: {
    street: "Ali Alp Cd. No: 53", // Kendi adresinizle güncelleyin
    locality: "Merkez Mahallesi",
    city: "Zonguldak", // Kendi şehrinizle güncelleyin
    country: "TR",
  },
  phone: "+90 539 835 02 29", // !! ÖNEMLİ: Kendi WhatsApp numaranızla değiştirin !!
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
  

  // === 3. GOOGLE ÜRÜN BİLGİSİ ===
  product: {
    name: "Köyümden Gıda Organik Zeytinyağlı Yaprak Sarması",
    description: "Taze köy yaprakları ve saf zeytinyağı ile hazırlanan, katkısız, ev yapımı yaprak sarması.",
    category: "Geleneksel Yemek",
    brandName: "Köyümden Gıda",
  }
};