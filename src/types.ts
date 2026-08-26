export type ServiceId = 
  | 'end-of-tenancy'
  | 'domestic'
  | 'office'
  | 'deep-cleaning'
  | 'one-off'
  | 'regular'
  | 'post-construction'
  | 'moving-in-out';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  shortDescription: string;
  fullDescription: string;
  badge?: string;
  idealFor: string;
  estimatedDuration: string;
  image?: string;
  features: string[];
  checklist: {
    category: string;
    items: string[];
  }[];
}

export interface AreaItem {
  name: string;
  borough: string;
  postcodes: string[];
  popular: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Booking & Pricing' | 'Services' | 'Equipment';
}

export interface QuoteFormState {
  serviceId: ServiceId;
  propertyType: 'flat' | 'terraced' | 'semi-detached' | 'detached' | 'commercial';
  bedrooms: number;
  bathrooms: number;
  frequency: 'one-off' | 'weekly' | 'fortnightly' | 'monthly';
  postcode: string;
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: 'morning' | 'afternoon' | 'anytime';
  addons: {
    ovenClean: boolean;
    insideWindows: boolean;
    carpetClean: boolean;
    fridgeInterior: boolean;
  };
  notes: string;
}
