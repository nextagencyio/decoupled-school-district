// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeBoardMember {
  id: string;
  body: { value: string; summary?: string };
  email: string;
  path: string;
  phone: string;
  photo: { url: string; alt: string; width: number; height: number };
  position: string;
  termEnd: { time: string };
  termStart: { time: string };
  title: string;
}

export interface NodeEvent {
  id: string;
  body: { value: string; summary?: string };
  endDate: { time: string };
  eventDate: { time: string };
  eventType: any[];
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  path: string;
  registrationUrl: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredSchoolsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeNews {
  id: string;
  body: { value: string; summary?: string };
  category: any[];
  featured: boolean;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeProgram {
  id: string;
  body: { value: string; summary?: string };
  eligibility: string;
  gradesServed: string;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  programArea: any[];
  title: string;
}

export interface NodeSchool {
  id: string;
  address: string;
  body: { value: string; summary?: string };
  enrollmentCount: number;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  phone: string;
  principal: string;
  schoolLevel: any[];
  title: string;
}
