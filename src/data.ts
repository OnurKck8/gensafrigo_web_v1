import balikciImg from './assets/images/balikçi_alüminyum.jpeg';
import etImg from './assets/images/et_kancali.jpeg';
import sutImg from './assets/images/sut_sarkuteri.jpeg';
import medikalImg from './assets/images/ilac.jpeg';
import sanalMarketImg from './assets/images/sanal_market.jpeg';
import fullPaslanmazImg from './assets/images/paslanmaz.jpeg';

export const mainCategories = ['Tümü', 'Cihazlar', 'İzolasyonlar'] as const;
export type MainCategory = (typeof mainCategories)[number];

export const categories = ['Tümü', '0-7m³', '7-10m³', '10m³ Üzeri', '17m³ Üzeri', 'Kasalı Araç'];
export const insulationCategories = ['Tümü', 'Balıkçı', 'Et & Gıda', 'Süt & Şarküteri', 'İlaç & Medikal', 'Sanal Market', 'Paslanmaz'];

export interface Product {
  id: string;
  model: string;
  series: string;
  mainCategory: 'Cihazlar' | 'İzolasyonlar';
  category: string;
  volume: string;
  voltage: string;
  temp: string;
  capacity: string;
  shortDesc: string;
  image: string;
  detailImage: string;
  altText: string;
  installLocation: string;
  airflow: string;
  vehicles: string[];
  filterCategories?: string[];
  searchKeywords?: string[];
  galleryImages?: string[];
}

export const products: Product[] = [
  {
    id: 'gns1-e',
    model: 'GNS1-E',
    series: 'GNS1 Serisi',
    mainCategory: 'Cihazlar',
    category: '0-7m³',
    volume: '0 - 7 m³',
    voltage: 'DC 12 V / 24 V',
    temp: '+4°C / -18°C',
    capacity: 'Verimli Soğutma',
    shortDesc: 'Sanal market araçları için önerilir. 0-7 m³ gibi araçlar için ideal çözüm.',
    image: "https://www.image2url.com/r2/default/images/1777103295975-3b1ae71c-d89f-48d0-aa82-e555a9ee02a1.png",
    detailImage: "https://www.image2url.com/r2/default/images/1777104457466-327c3cbb-f190-4c7e-ae5e-c98d15c03527.png",
    altText: "Sanal market araçları ve hafif ticari araçlar için elektrikli frigo soğutucu",
    installLocation: 'Araç Tavanı',
    airflow: 'Optimize Edilmiş Fan Sistemi',
    vehicles: ['Sanal Market Araçları', 'Fiorino', 'Courier', 'Minivan', 'Doblo', 'Combo'],
    searchKeywords: ['elektrikli', 'sanal market', 'mini', 'küçük panelvan', 'gns1'],
  },
  {
    id: 'gns2-e',
    model: 'GNS2-E',
    series: 'GNS2 Serisi',
    mainCategory: 'Cihazlar',
    category: '0-10m³',
    filterCategories: ['0-7m³', '7-10m³'],
    volume: '0 - 10 m³',
    voltage: 'DC 12 V / 24 V',
    temp: '+4°C / -18°C',
    capacity: '1750 W / 1300 W',
    shortDesc: 'Kompakt ve orta hacimli araçlar için güvenilir soğutma çözümü.',
    image: "https://www.image2url.com/r2/default/images/1776865949894-17b28fc7-8ea2-4c44-9aaf-6e54038e201c.png",
    detailImage: "https://www.image2url.com/r2/default/images/1777031119435-36e364a4-e9eb-4dd5-b7c9-e57d7e6fbf33.png",
    altText: "Doblo frigo, Berlingo frigo, Custom ve Transporter uyumlu elektrikli frigo soğutucu montajlı araç",
    installLocation: 'Araç Tavanı',
    airflow: '750 m³/h',
    vehicles: ['Doblo', 'Berlingo', 'Caddy', 'Scudo', 'Combo', 'Kangoo', 'Trafic', 'Custom', 'Transporter', 'Vito', 'Expert', 'Jumpy'],
    searchKeywords: ['elektrikli', 'orta panelvan', 'gns2', 'doblo', 'transporter', 'vito', 'custom'],
  },
  {
    id: 'gns4-series',
    model: 'GNS4-E | GNS4D-E',
    series: 'GNS4 SERİSİ',
    mainCategory: 'Cihazlar',
    category: '10m³ Üzeri',
    volume: '10 m³\'ten Büyük',
    voltage: 'DC 12 V / 24 V',
    temp: '+4°C / -18°C',
    capacity: 'Güçlü Verim',
    shortDesc: '10 m³\'ten büyük araçlar için tasarlanmış, güçlü ve verimli elektrikli frigo çözümü.',
    image: "https://www.image2url.com/r2/default/images/1776835318541-e497ccbe-4405-436a-8779-8ab394023559.png",
    detailImage: "https://www.image2url.com/r2/default/images/1777031227298-eea0a2dd-0b1e-4b9e-ba33-272187c39e7d.png",
    altText: "Transit frigo ve panelvan kasalar için tasarlanmış profesyonel frigorifik araç soğutucusu ve frigo sistemleri",
    installLocation: 'Araç Tavanı',
    airflow: 'Çift Fanlı Sistem',
    vehicles: ['Transit', 'Ducato', 'Boxer', 'Jumper', 'Master', 'Crafter'],
    searchKeywords: ['elektrikli', 'büyük panelvan', 'gns4', 'gns4d', 'transit', 'ducato', 'crafter'],
  },
  {
    id: 'gns4k-e',
    model: 'GNS4K-E',
    series: 'GNS4K SERİSİ',
    mainCategory: 'Cihazlar',
    category: 'Kasalı Araç',
    volume: '10 m³\'ten Büyük',
    voltage: 'DC 24 V',
    temp: '+4°C / -18°C',
    capacity: 'Güçlü Verim',
    shortDesc: 'Kasalı araçlar için önerilir. 10 m³\'ten büyük araçlar için güçlü ve verimli elektrikli frigo.',
    image: "https://www.image2url.com/r2/default/images/1777098086730-a789a136-0631-4cbd-81b4-66ceca85d560.png",
    detailImage: "https://www.image2url.com/r2/default/images/1777104870123-1e1305d7-1c22-4311-a943-69e9936f97ea.png",
    altText: "Kasalı araçlar için tasarlanmış profesyonel frigorifik araç soğutucusu ve frigo sistemleri",
    installLocation: 'Kasa Üzeri',
    airflow: 'Çift Fanlı Sistem',
    vehicles: ['Kasalı Araçlar', 'Kamyonetler'],
    searchKeywords: ['elektrikli', 'kasalı', 'kamyonet', 'gns4k'],
  },
  {
    id: 'gns5-series',
    model: 'GNS5-E | GNS5D-E',
    series: 'GNS5 SERİSİ',
    mainCategory: 'Cihazlar',
    category: '17m³ Üzeri',
    volume: '17 m³ ve Üzeri',
    voltage: 'DC 12 V / 24 V',
    temp: '+4°C / -18°C',
    capacity: 'Maksimum Güç',
    shortDesc: 'İster Panelvan ister Kasalı araç, tüm konfigürasyonlarda üstün performans sunar.',
    image: "https://www.image2url.com/r2/default/images/1777386190198-0bea56bf-fc17-49b4-b6d2-c290eb000226.png",
    detailImage: "https://www.image2url.com/r2/default/images/1777107404021-7aafcc6f-3c02-4e20-bbb8-442914f236a5.png",
    altText: "Frigo kasa ve geniş hacimli araçlar için üstün performanslı endüstriyel elektrikli frigo ve araç frigo üniteleri",
    installLocation: 'Araç Tavanı veya Kasa Üzeri',
    airflow: 'Maksimum Performans',
    vehicles: ['Daily', 'Sprinter', 'Crafter', 'Kasalı Araçlar'],
    searchKeywords: ['elektrikli', 'maxi', 'gns5', 'gns5d', 'sprinter', 'daily'],
  },
  {
    id: 'gns5k-e',
    model: 'GNS5K-E',
    series: 'GNS5K SERİSİ',
    mainCategory: 'Cihazlar',
    category: 'Kasalı Araç',
    volume: '17 m³ ve Üzeri',
    voltage: 'DC 24 V',
    temp: '+4°C / -18°C',
    capacity: 'Maksimum Güç',
    shortDesc: 'Kasalı araçlar için önerilir. Tüm konfigürasyonlarda üstün performans sunar.',
    image: "https://www.image2url.com/r2/default/images/1776835536179-74aa4c30-e5f8-4dc9-a3b8-6da41ed81c5b.png",
    detailImage: "https://www.image2url.com/r2/default/images/1777105096056-00cdfc42-355a-4316-a0dc-019f3a014a99.png",
    altText: "Büyük kasalı araçlar için üstün performanslı endüstriyel elektrikli frigo ve araç frigo üniteleri",
    installLocation: 'Kasa Üzeri',
    airflow: 'Maksimum Performans',
    vehicles: ['Büyük Kasalı Araçlar', 'Kamyonlar'],
    searchKeywords: ['elektrikli', 'büyük kasalı', 'kamyon', 'gns5k'],
  },
  // ============================================================================
  // İZOLASYON ÜRÜNLERİ (Görselleri kendi linklerinizle kolayca değiştirebilirsiniz)
  // ============================================================================
  {
    id: 'balikci-izolasyon',
    model: 'Balıkçı Aracı İzolasyonu',
    series: 'İzolasyon Serisi',
    mainCategory: 'İzolasyonlar',
    category: 'Balıkçı',
    volume: 'Tüm Hacimler (3 - 25 m³)',
    voltage: 'Su Sızdırmaz CTP & Epoksi Zemin',
    temp: 'Drenaj Kanallı / Tuzlu Suya Dayanıklı',
    capacity: 'Yüksek Yoğunluk Poliüretan',
    shortDesc: 'Balıkçılık ve deniz ürünleri taşımacılığı için su sızdırmaz, paslanmaz drenaj kanallı ve kolay yıkanabilir hijyenik araç izolasyonu.',
    image: balikciImg,
    detailImage: balikciImg,
    altText: "Balıkçı araçları için su sızdırmaz drenaj kanallı frigorifik araç izolasyonu",
    installLocation: 'Tam Araç İçi Kaplama',
    airflow: 'Korozyon & Koku Önleyici Yüzey',
    vehicles: ['Transit', 'Crafter', 'Sprinter', 'Ducato', 'Doblo', 'Boxer'],
    searchKeywords: ['balıkçı', 'balikci', 'balık', 'balik', 'deniz ürünü', 'deniz ürünleri', 'su ürünleri', 'izolasyon', 'drenaj', 'su sızdırmaz'],
    // Kendi balıkçı izolasyon resimlerinizi bu diziye ekleyebilirsiniz:
    galleryImages: [
      balikciImg,
      balikciImg,
      balikciImg,
      balikciImg,
    ],
  },
  {
    id: 'et-gida-izolasyon',
    model: 'Et & Karkas Taşıma İzolasyonu',
    series: 'İzolasyon Serisi',
    mainCategory: 'İzolasyonlar',
    category: 'Et & Gıda',
    volume: 'Tüm Hacimler (5 - 25 m³)',
    voltage: 'Paslanmaz Çengel & Ray Sistemi',
    temp: '-18°C / +4°C Yüksek Isı Tutuşu',
    capacity: 'Antimikrobiyel CTP Yüzey',
    shortDesc: 'Et, tavuk ve karkas taşımacılığına özel paslanmaz krom çengel raylı, darbeye dayanıklı ve hijyenik panelvan izolasyonu.',
    image: etImg,
    detailImage: etImg,
    altText: "Et ve karkas taşıma araçları için çengel raylı frigorifik araç izolasyonu",
    installLocation: 'Tavan Ray & Tam Araç İçi',
    airflow: 'Gıda Kodeksine Uygun Kaplama',
    vehicles: ['Transit', 'Crafter', 'Sprinter', 'Master', 'Daily'],
    searchKeywords: ['et', 'karkas', 'kasap', 'tavuk', 'gıda', 'gida', 'çengel', 'izolasyon'],
    galleryImages: [
      etImg,
      etImg,
      etImg,
    ],
  },
  {
    id: 'sut-sarkuteri-izolasyon',
    model: 'Süt & Şarküteri İzolasyonu',
    series: 'İzolasyon Serisi',
    mainCategory: 'İzolasyonlar',
    category: 'Süt & Şarküteri',
    volume: 'Tüm Hacimler (3 - 20 m³)',
    voltage: 'Hijyenik Monoblok Kaplama',
    temp: '0°C / +4°C Termal Stabilite',
    capacity: 'Isı Köprüsüz Poliüretan',
    shortDesc: 'Süt, peynir, yoğurt ve şarküteri sevkiyatları için yüksek ısı yalıtımlı, yük sabitleme raylı hijyenik araç izolasyonu.',
    image: sutImg,
    detailImage: sutImg,
    altText: "Süt ve şarküteri dağıtım araçları için hijyenik panelvan izolasyonu",
    installLocation: 'Tam Araç İçi Kaplama',
    airflow: 'Kolay Temizlenebilir Yüzey',
    vehicles: ['Doblo', 'Courier', 'Custom', 'Transporter', 'Ducato', 'Transit'],
    searchKeywords: ['süt', 'sut', 'şarküteri', 'sarkuteri', 'peynir', 'yoğurt', 'gıda', 'izolasyon'],
    galleryImages: [
      sutImg,
      sutImg,
      sutImg,
    ],
  },
  {
    id: 'medikal-ilac-izolasyon',
    model: 'İlaç & Medikal Soğuk Zincir İzolasyonu',
    series: 'İzolasyon Serisi',
    mainCategory: 'İzolasyonlar',
    category: 'İlaç & Medikal',
    volume: 'Tüm Hacimler (3 - 20 m³)',
    voltage: 'Hijyenik Monoblok Kaplama',
    temp: '+2°C / +8°C Hassas Koruma',
    capacity: 'Sıfır Isı Kaybı Teknolojisi',
    shortDesc: 'İlaç, aşı ve medikal ürün taşımacılığı için yüksek hassasiyetli, dezenfeksiyona uygun soğuk zincir araç izolasyonu.',
    image: medikalImg,
    detailImage: medikalImg,
    altText: "İlaç ve medikal taşıma araçları için soğuk zincir araç izolasyonu",
    installLocation: 'Tam Araç İçi & Sensör Altyapısı',
    airflow: 'Homojen Termal Dağılım',
    vehicles: ['Doblo', 'Caddy', 'Transporter', 'Vito', 'Sprinter', 'Transit'],
    searchKeywords: ['ilaç', 'ilac', 'medikal', 'ecza', 'aşı', 'sağlık', 'soğuk zincir', 'izolasyon'],
    galleryImages: [
      medikalImg,
      medikalImg,
      medikalImg,
    ],
  },
  {
    id: 'sanal-market-izolasyon',
    model: 'Sanal Market İzolasyonu',
    series: 'İzolasyon Serisi',
    mainCategory: 'İzolasyonlar',
    category: 'Sanal Market',
    volume: '0 - 12 m³ Panelvan',
    voltage: 'Hijyenik Monoblok Kaplama',
    temp: '+4°C / -18°C Çift Isı Bölmesi',
    capacity: 'Yüksek Yoğunluk Poliüretan',
    shortDesc: 'Online market ve hızlı teslimat filoları için katlanabilir raf sistemli, soğuk ve donuk bölmeli özel sanal market araç izolasyonu.',
    image: sanalMarketImg,
    detailImage: sanalMarketImg,
    altText: "Sanal market teslimat araçları için raflı ve çok bölmeli frigorifik araç izolasyonu",
    installLocation: 'Tam Araç İçi & Modüler Raf',
    airflow: 'Hızlı Dağıtıma Uygun Tasarım',
    vehicles: ['Doblo', 'Courier', 'Fiorino', 'Custom', 'Transit', 'Ducato'],
    searchKeywords: ['sanal market', 'market', 'online market', 'e-ticaret', 'raf', 'raflı', 'teslimat', 'izolasyon'],
    galleryImages: [
      sanalMarketImg,
      sanalMarketImg,
      sanalMarketImg,
    ],
  },
  {
    id: 'full-paslanmaz-izolasyon',
    model: 'Paslanmaz İzolasyonu',
    series: 'İzolasyon Serisi',
    mainCategory: 'İzolasyonlar',
    category: 'Paslanmaz',
    volume: 'Tüm Hacimler (3 - 25 m³)',
    voltage: 'Saf Paslanmaz Çelik',
    temp: 'Yüksek Korozyon & Darbe Direnci',
    capacity: 'Kaynaklı Su Sızdırmaz Kabin',
    shortDesc: 'Duvar, tavan ve zeminde komple 304 kalite paslanmaz çelik kaplamalı, ağır hizmet ve maksimum hijyen standartlı araç izolasyonu.',
    image: fullPaslanmazImg,
    detailImage: fullPaslanmazImg,
    altText: "Duvar tavan ve zemini full 304 paslanmaz çelik kaplı frigorifik araç izolasyonu",
    installLocation: 'Komple Paslanmaz Çelik Kaplama',
    airflow: 'Maksimum Darbe & Asit Dayanımı',
    vehicles: ['Transit', 'Crafter', 'Sprinter', 'Ducato', 'Daily', 'Kasalı Araçlar'],
    searchKeywords: ['full paslanmaz', 'paslanmaz', 'krom', 'çelik', 'celik', '304', 'ağır hizmet', 'hijyen', 'izolasyon'],
    galleryImages: [
      fullPaslanmazImg,
      fullPaslanmazImg,
      fullPaslanmazImg,
    ],
  },
];


