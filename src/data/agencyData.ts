import { StudioFacility, ProgramDivision, GalleryItem, ShopItem } from '../types';

import chibiFigureImg from '../assets/images/kpop_chibi_figure_1789750728337.jpg';
import plushieImg from '../assets/images/kpop_idol_plushie_1789750742520.jpg';
import acrylicKeychainImg from '../assets/images/kpop_acrylic_keychain_1789750755442.jpg';
import acrylicStandeeImg from '../assets/images/kpop_acrylic_standee_1789750804420.jpg';
import lightstickKeychainImg from '../assets/images/kpop_lightstick_keychain_1789750767452.jpg';
import photocardSetImg from '../assets/images/kpop_photocard_set_1789750792322.jpg';
import handsomeIdolImg from '../assets/images/kpop_handsome_idol_1789750779611.jpg';
import idolStageImg from '../assets/images/kpop_idol_stage_1789750822603.jpg';

export const PROGRAM_DIVISIONS: ProgramDivision[] = [
  {
    id: 'prog-1',
    title: 'Vokal Performans & Akustik Kayıt',
    subtitle: 'Canlı Ses Dayanıklılığı & Stüdyo Hakimiyeti',
    description: 'Birebir şan koçları eşliğinde nefes kontrolü, 4 oktav ses aralığı geliştirme, mikrofon dinamikleri ve çok sesli armoni eğitimi.',
    hours: '480+ Saat / Yıl',
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    skills: ['Neumann U87 Vokal Analizi', 'Canlı Nefes & Diyafram', 'Korece/İngilizce Fonetik'],
    focus: 'Teknik Ses Gelişimi'
  },
  {
    id: 'prog-2',
    title: 'Koreografi & 360° Dans Disiplini',
    subtitle: 'Milimetrik Senkronizasyon & Sahne Karizması',
    description: 'Seul’ün önde gelen dans akademileriyle ortak müfredatta; popping, tutting, çağdaş dans ve yüksek tempolu K-Pop koreografileri.',
    hours: '620+ Saat / Yıl',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    skills: ['Milimetrik Beden İzolasyonu', 'Kamera Açısı & Bakış', '8K Hareket Analizi'],
    focus: 'Sahne Hakimiyeti'
  },
  {
    id: 'prog-3',
    title: 'Müzik Prodüksiyonu & Beatmaking',
    subtitle: 'Akustik Aranje & Dijital Ses Tasarımı',
    description: 'Logic Pro, Ableton ve Pro Tools üzerinde kendi bestelerini üretebilen, melodi ve beat tasarımı yapabilen bağımsız sanatçı yetiştirme.',
    hours: '320+ Saat / Yıl',
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    skills: ['SSL Duality Konsol', 'Synthesizer & Drum Programming', 'Dolby Atmos Miksaj'],
    focus: 'Kreatif Üretim'
  },
  {
    id: 'prog-4',
    title: 'Küresel Medya & İmaj Yönetimi',
    subtitle: 'Uluslararası Basın & Sahne Duruşu',
    description: 'Global röportaj simülasyonları, kamera önü karizma koçluğu, editoryal moda çekimleri ve sahne imajı tasarımı.',
    hours: '240+ Saat / Yıl',
    imageUrl: handsomeIdolImg,
    skills: ['Basın Konferansı Simülasyonu', 'Sahne Aydınlatma Pozu', 'Kriz & Medya Yönetimi'],
    focus: 'Global İmaj'
  }
];

export const STUDIO_FACILITIES: StudioFacility[] = [
  {
    id: 'fac-1',
    name: 'Apollo Live Akustik & Ses Laboratuvarı',
    category: 'Vokal & Kayıt Stüdyosu',
    specs: 'Solid State Logic (SSL) Miks Konsolu · 6 İzolasyon Kabini · Neumann U87 & Telefunken Mikrofon Havuzu',
    description: 'Maslak Kampüsü’nün üst katında yer alan floating-floor (akustik yüzer zemin) teknolojili stüdyo, sıfır gürültü izolasyonu ile uluslararası albüm standartlarında kayıt ortamı sunar.',
    location: 'Kat 4, Maslak Kampüsü',
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
    tags: ['SSL Duality Konsol', 'Neumann U87', 'Dolby Atmos 7.1.4']
  },
  {
    id: 'fac-2',
    name: '360° Senkronize Dans Laboratuvarı',
    category: 'Koreografi & Performans Salonu',
    specs: '450 m² Eklem Dostu Yaylı Ahşap Zemin · 180° Geniş Ayna Duvarı · Konser Işık & Ses Simülatörü',
    description: 'Seul’ün en iyi prova salonlarının mimarisi örnek alınarak hazırlanan stüdyo, 8K yüksek hızlı kameralarla dansçıların senkronizasyonunu anlık olarak ekrana yansıtır.',
    location: 'Kat 2, Maslak Kampüsü',
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80',
    tags: ['Yaylı Parke Zemin', '8K Hareket Takibi', 'Stadyum Monitörleri']
  },
  {
    id: 'fac-3',
    name: 'Visual & High-Fashion Medya Stüdyosu',
    category: 'Medya, Klip & İmaj Çekim Alanı',
    specs: 'Profoto D2 / B10X Flaş Sistemleri · Motorlu Sonsuz Fon Duvarı · Profesyonel Saç/Makyaj Kulisleri',
    description: 'Sanatçıların albüm kapakları, konsept teaser fotoğrafları ve küresel basın yayınları için hazırlanan son teknoloji fotoğraf ve klip çekim stüdyosu.',
    location: 'Kat 1, Maslak Kampüsü',
    imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Profoto Işık Seti', 'Sonsuz Fon', 'Moda & Basın Kulis']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Baş Vokal & Merkez İdol Teaser Portresi',
    category: 'İdol Portreleri & Medya',
    imageUrl: handsomeIdolImg,
    location: 'Gangnam Studio A, Seul',
    year: '2026',
    description: 'K-Pop debut albümü baş vokalisti resmi konsept çekimi ve uluslararası medya teaser portresi.'
  },
  {
    id: 'g-2',
    title: 'Genesis Unit Canlı Stadyum Performansı',
    category: 'Sahne & Konser',
    imageUrl: idolStageImg,
    location: 'Olympic Gymnastics Arena, Seul',
    year: '2026',
    description: '50.000 kişilik arena lansmanında senkronize dans ve altın ışıklandırmalı canlı konser şovu.'
  },
  {
    id: 'g-3',
    title: 'K-Choreo Yoğun Dans Provası',
    category: 'Dans Provası',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
    location: 'Studio Alpha Dans Salonu, Maslak',
    year: '2026',
    description: 'Baş koreograflar eşliğinde 8 saatlik kesintisiz grup senkronizasyonu ve formasyon çalışması.'
  },
  {
    id: 'g-4',
    title: 'Akustik Kayıt Kabini & Vokal Seansı',
    category: 'Ses Stüdyosu',
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
    location: 'Apollo Ses Laboratuvarı, İstanbul',
    year: '2026',
    description: 'Neumann U87 stüdyo kondansatör mikrofonu ile canlı vokal kaydı ve tonlama çalışmaları.'
  },
  {
    id: 'g-5',
    title: 'Asya Müzik Arenası Turne Atmosferi',
    category: 'Sahne & Konser',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    location: 'Asia World-Expo Arena, Tokyo',
    year: '2026',
    description: 'Görkemli lazer ve sahne pirotekniği eşliğinde gerçekleşen küresel lansman konseri.'
  },
  {
    id: 'g-6',
    title: 'SSL Konsolda Beat & Mastering Düzenlemesi',
    category: 'Ses Stüdyosu',
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
    location: 'Sound Suite A, Maslak HQ',
    year: '2026',
    description: 'Analog ve dijital hibrit konsol üzerinde debut parçalarının son mastering düzenlemeleri.'
  }
];

export const OFFICIAL_MERCH_ITEMS: ShopItem[] = [
  {
    id: 'md-1',
    name: 'Chibi Idol Genesis 3D Koleksiyon Figürü',
    category: 'Figür',
    price: '480 ₺',
    originalPrice: '620 ₺',
    imageUrl: chibiFigureImg,
    badge: 'En Çok Satan',
    status: 'Ön Sipariş',
    description: 'Sahne kostümlü, el boyaması detaylara sahip sevimli 3D mini koreli erkek idol koleksiyonluk masaüstü figürü (12 cm).',
    rating: 5.0
  },
  {
    id: 'md-2',
    name: 'Tatlış İdol Peluş Maskot & Çanta Süsü',
    category: 'Özel Koleksiyon',
    price: '390 ₺',
    originalPrice: '490 ₺',
    imageUrl: plushieImg,
    badge: 'Özel Seri',
    status: 'Sınırlı Stok',
    description: 'Yumuşacık mikro-elyaf dokulu, tavşan kulaklı tatlış mini koreli idol peluş çanta süsü ve koleksiyon maskotu (15 cm).',
    rating: 4.9
  },
  {
    id: 'md-3',
    name: 'Holografik Akrilik İdol Anahtarlık',
    category: 'Anahtarlık',
    price: '190 ₺',
    originalPrice: '240 ₺',
    imageUrl: acrylicKeychainImg,
    badge: 'Yeni Çıktı',
    status: 'Sınırlı Stok',
    description: 'Çift taraflı çizilmez epoksi kaplama, sevimli chibi anime idol çizimi ve yıldız simli metal askı halkası.',
    rating: 4.9
  },
  {
    id: 'md-4',
    name: 'Mini Stage Acrylic Standee Masaüstü Figür',
    category: 'Figür',
    price: '340 ₺',
    originalPrice: '420 ₺',
    imageUrl: acrylicStandeeImg,
    badge: 'Koleksiyonluk',
    status: 'Ön Sipariş',
    description: 'Neon ışıklı mini sahne zeminine oturan şeffaf akrilik idol karakter standı ve imza plaketi.',
    rating: 4.8
  },
  {
    id: 'md-5',
    name: 'Official Genesis Lightstick Mini Anahtarlık',
    category: 'Anahtarlık',
    price: '220 ₺',
    originalPrice: '290 ₺',
    imageUrl: lightstickKeychainImg,
    badge: 'Işıklı Seri',
    status: 'Ön Sipariş',
    description: 'Resmi konser ışık çubuğu (lightstick) şeklinde altın kristal küre ve LED ışıklı mini anahtarlık.',
    rating: 5.0
  },
  {
    id: 'md-6',
    name: 'Holografik Fotokart & Özel Lanyard Seti',
    category: 'Özel Koleksiyon',
    price: '260 ₺',
    originalPrice: '350 ₺',
    imageUrl: photocardSetImg,
    badge: 'Koleksiyon Paketi',
    status: 'Pek Yakında',
    description: 'Özel altın yaldızlı koleksiyon kutusunda 6 adet parlak holografik idol fotokartı ve logolu askı ipi.',
    rating: 4.9
  }
];
