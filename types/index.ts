export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Statistic {
  value: string;
  label: string;
  suffix?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export interface Brand {
  name: string;
  logo: string;
  category: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}
