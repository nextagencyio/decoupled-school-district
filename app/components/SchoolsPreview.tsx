'use client'

import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_FEATURED_SCHOOLS_DOC } from '@/lib/queries'
import { DrupalSchool } from '@/lib/types'
import { MapPin, Users, ArrowRight, School } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage'
import { DrupalHomepage } from '@/lib/types'

interface FeaturedSchoolsData {
  nodeSchools: {
    nodes: DrupalSchool[]
  }
}

interface SchoolsPreviewProps {
  homepageContent?: DrupalHomepage | null
}

export default function SchoolsPreview({ homepageContent }: SchoolsPreviewProps) {
  const { data, loading, error } = useQuery<FeaturedSchoolsData>(GET_FEATURED_SCHOOLS_DOC)

  const schools = data?.nodeSchools?.nodes || []

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Schools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-1 bg-primary-200 rounded-t" />
                <div className="h-48 bg-gray-200 mb-4" />
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-2" />
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error || schools.length === 0) {
    return null
  }

  const sectionTitle = homepageContent?.featuredSchoolsTitle || 'Our Schools'

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{sectionTitle}</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our network of schools serving students across the Riverside district.
            </p>
          </div>
          <Link
            href="/schools"
            className="hidden md:flex items-center text-primary-700 hover:text-primary-800 font-medium"
          >
            View All Schools
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schools.slice(0, 3).map((school) => (
            <Link
              key={school.id}
              href={school.path || `/schools/${school.id}`}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <div className="h-1 bg-primary-600" />
              <div className="relative h-48 bg-primary-100">
                {school.image?.url ? (
                  <ResponsiveImage
                    src={school.image.url}
                    alt={school.image.alt || school.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    variations={school.image.variations}
                    targetWidth={400}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <School className="w-16 h-16 text-primary-300" />
                  </div>
                )}
                {school.schoolLevel && school.schoolLevel.length > 0 && (
                  <div className="absolute top-4 left-4 bg-accent-500 text-primary-900 px-3 py-1 rounded text-sm font-bold">
                    {school.schoolLevel[0].name}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {school.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-500">
                  {school.principal && (
                    <p>Principal: {school.principal}</p>
                  )}
                  {school.enrollmentCount && (
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{school.enrollmentCount.toLocaleString()} Students</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link
            href="/schools"
            className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium"
          >
            View All Schools
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
