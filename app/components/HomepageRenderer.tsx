'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import SchoolsPreview from './SchoolsPreview'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import {
  ClipboardList,
  School,
  BookOpen,
  Bus,
  Utensils,
  Users,
  GraduationCap,
  Library,
  Trophy,
  Music,
  Microscope,
  Globe,
  ArrowRight,
  Megaphone,
  Info,
} from 'lucide-react'
import Image from 'next/image'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const quickLinks = [
  { title: 'Enrollment', description: 'Register your child and learn about enrollment requirements', icon: ClipboardList, href: '/schools', color: 'bg-primary-600' },
  { title: 'Schools', description: 'Find schools in the Riverside Unified School District', icon: School, href: '/schools', color: 'bg-primary-700' },
  { title: 'Academic Programs', description: 'Explore our academic programs and curriculum offerings', icon: BookOpen, href: '/programs', color: 'bg-primary-800' },
  { title: 'Transportation', description: 'Bus routes, schedules, and transportation services', icon: Bus, href: '/schools', color: 'bg-accent-600' },
  { title: 'Nutrition Services', description: 'School meals, menus, and nutrition assistance programs', icon: Utensils, href: '/events', color: 'bg-primary-900' },
  { title: 'Board of Education', description: 'Meet our board members and view meeting schedules', icon: Users, href: '/board', color: 'bg-primary-600' },
]

const districtPrograms = [
  { title: 'Advanced Placement', description: 'College-level courses and exam preparation', icon: GraduationCap },
  { title: 'STEM Academy', description: 'Science, technology, engineering, and mathematics', icon: Microscope },
  { title: 'Arts & Music', description: 'Visual arts, performing arts, and music education', icon: Music },
  { title: 'Athletics', description: 'Competitive sports and physical education programs', icon: Trophy },
  { title: 'Library Services', description: 'Media centers, digital resources, and literacy programs', icon: Library },
  { title: 'World Languages', description: 'Spanish, French, Mandarin, and language immersion', icon: Globe },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80&fit=crop', alt: 'School campus', caption: 'Riverside High School' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&fit=crop', alt: 'Students in classroom', caption: 'Student Learning' },
  { src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80&fit=crop', alt: 'Science lab', caption: 'STEM Education' },
  { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80&fit=crop', alt: 'School library', caption: 'Media Center' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Alert / Announcement Banner */}
      <div className="bg-accent-50 border-b border-accent-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <Megaphone className="w-5 h-5 text-accent-700" />
            </div>
            <p className="text-sm text-accent-900 font-medium">
              <span className="font-bold">District Notice:</span> Open enrollment for the 2026-2027 school year begins April 1.{' '}
              <a href="/schools" className="underline hover:text-accent-700">Learn about enrollment</a>
            </p>
          </div>
        </div>
      </div>

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Quick Links Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Quick Links</h2>
            <p className="text-gray-600 mt-1">Access key district resources and services</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="h-1 bg-primary-600" />
                <div className="p-6 flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${link.color} rounded-lg flex items-center justify-center`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors">{link.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{link.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Featured Schools */}
      <ErrorBoundary>
        <SchoolsPreview homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* District Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">District Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the academic and extracurricular programs offered across Riverside USD.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {districtPrograms.map((program) => (
              <div
                key={program.title}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-1 bg-primary-600" />
                <div className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <program.icon className="w-7 h-7 text-primary-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-500">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/programs"
              className="inline-flex items-center px-6 py-3 bg-primary-700 text-white rounded hover:bg-primary-800 transition-colors font-bold"
            >
              View All Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our District</h2>
            <p className="text-gray-600">Inside Riverside Unified School District</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div key={img.caption} className="relative group overflow-hidden rounded-lg">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-sm font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Official Multi-Column Footer */}
      <footer className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* About */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-800" />
                </div>
                <span className="text-lg font-bold text-white">Riverside USD</span>
              </div>
              <p className="text-primary-300 text-sm mb-4">
                Riverside Unified School District is committed to providing a world-class education for every child. Our dedicated teachers, innovative programs, and supportive community create an environment where every student can thrive.
              </p>
              <div className="text-primary-400 text-sm space-y-1">
                <p>500 Riverside Drive, Riverside, CA 92501</p>
                <p>(951) 555-0100</p>
                <p>info@riversideusd.edu</p>
              </div>
            </div>

            {/* District */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">District</h4>
              <ul className="space-y-2 text-primary-300 text-sm">
                <li><a href="/schools" className="hover:text-accent-400 transition-colors">Our Schools</a></li>
                <li><a href="/board" className="hover:text-accent-400 transition-colors">Board of Education</a></li>
                <li><a href="/programs" className="hover:text-accent-400 transition-colors">Programs</a></li>
                <li><a href="/news" className="hover:text-accent-400 transition-colors">District News</a></li>
              </ul>
            </div>

            {/* Families */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Families</h4>
              <ul className="space-y-2 text-primary-300 text-sm">
                <li><a href="/schools" className="hover:text-accent-400 transition-colors">Enrollment</a></li>
                <li><a href="/schools" className="hover:text-accent-400 transition-colors">Transportation</a></li>
                <li><a href="/events" className="hover:text-accent-400 transition-colors">School Calendar</a></li>
                <li><a href="/events" className="hover:text-accent-400 transition-colors">Nutrition Services</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Connect</h4>
              <ul className="space-y-2 text-primary-300 text-sm">
                <li><a href="/contact" className="hover:text-accent-400 transition-colors">Contact Us</a></li>
                <li><a href="/events" className="hover:text-accent-400 transition-colors">Events</a></li>
                <li><a href="/news" className="hover:text-accent-400 transition-colors">Newsroom</a></li>
                <li><a href="/contact" className="hover:text-accent-400 transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar with accessibility statement */}
        <div className="border-t border-primary-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-400">
              <p>&copy; {new Date().getFullYear()} Riverside Unified School District. All rights reserved.</p>
              <div className="flex items-center gap-1">
                <Info className="w-3 h-3" />
                <span>An official website of Riverside Unified School District</span>
              </div>
              <div className="flex gap-4">
                <a href="/accessibility" className="hover:text-accent-400 transition-colors">Accessibility</a>
                <a href="/privacy" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-accent-400 transition-colors">Terms of Use</a>
                <a href="/sitemap" className="hover:text-accent-400 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
