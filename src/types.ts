export interface StudioFacility {
  id: string;
  name: string;
  category: string;
  specs: string;
  description: string;
  location: string;
  imageUrl: string;
  tags: string[];
}

export interface ProgramDivision {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  hours: string;
  imageUrl: string;
  skills: string[];
  focus: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Sahne & Konser' | 'Dans Provası' | 'Ses Stüdyosu' | 'İdol Portreleri & Medya';
  imageUrl: string;
  location: string;
  year: string;
  description: string;
}

export interface ShopItem {
  id: string;
  name: string;
  category: 'Figür' | 'Anahtarlık' | 'Özel Koleksiyon';
  price: string;
  originalPrice?: string;
  imageUrl: string;
  badge?: string;
  status: 'Ön Sipariş' | 'Tükendi' | 'Sınırlı Stok' | 'Pek Yakında';
  description: string;
  rating: number;
}
