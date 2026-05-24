export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  created_at?: string;
}

export interface Booking {
  id: number;
  name: string;
  phone: string;
  address: string;
  service_type?: string;
  message?: string;
  status: 'new' | 'contacted' | 'completed' | 'cancelled';
  created_at: string;
}

export interface GalleryImage {
  id: number;
  title: string;
  image_path: string;
  category: string;
  created_at?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
  created_at?: string;
}

export interface SiteContent {
  id: number;
  key: string;
  value: string;
  section: string;
}

export interface AdminUser {
  id: number;
  username: string;
  password_hash: string;
  created_at?: string;
}
