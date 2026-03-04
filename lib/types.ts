// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Base node type
export interface DrupalNode {
  __typename: string
  id: string
  title: string
  path: string
  created?: {
    timestamp: number
  }
  changed?: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredSchoolsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// School
export interface DrupalSchool extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  schoolLevel?: DrupalTerm[]
  address?: string
  phone?: string
  principal?: string
  enrollmentCount?: number
  image?: DrupalImage
}

export interface SchoolsData {
  nodeSchools: {
    nodes: DrupalSchool[]
  }
}

// Board Member
export interface DrupalBoardMember extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  position?: string
  email?: string
  phone?: string
  photo?: DrupalImage
  termStart?: {
    timestamp: number
  }
  termEnd?: {
    timestamp: number
  }
}

export interface BoardMembersData {
  nodeBoardMembers: {
    nodes: DrupalBoardMember[]
  }
}

// Program
export interface DrupalProgram extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  programArea?: DrupalTerm[]
  eligibility?: string
  gradesServed?: string
  image?: DrupalImage
}

export interface ProgramsData {
  nodePrograms: {
    nodes: DrupalProgram[]
  }
}

// District Event
export interface DrupalEvent extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  eventDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  location?: string
  eventType?: DrupalTerm[]
  registrationUrl?: string
  image?: DrupalImage
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// News Article
export interface DrupalNews extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
  category?: DrupalTerm[]
  featured?: boolean
}

export interface NewsData {
  nodeNewsItems: {
    nodes: DrupalNews[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
