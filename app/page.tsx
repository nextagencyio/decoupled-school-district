import { getClient } from '@/lib/drupal-client'
import { GET_HOMEPAGE_DATA } from '@/lib/queries'
import HomepageRenderer from './components/HomepageRenderer'
import SetupGuide from './components/SetupGuide'
import ContentSetupGuide from './components/ContentSetupGuide'
import { Metadata } from 'next'
import { checkConfiguration } from '../lib/config-check'

// Enable ISR with 1 hour revalidation
export const revalidate = 3600
export const dynamic = 'force-dynamic'


export async function generateMetadata(): Promise<Metadata> {
  const title = 'Riverside Unified School District - Excellence in Education'
  const description = 'Riverside Unified School District is committed to providing a world-class education for every child. Our dedicated teachers, innovative programs, and supportive community create an environment where every student can thrive.'

  return {
    title,
    description,
    keywords: ['School District', 'K-12 Education', 'Schools', 'Programs', 'Enrollment', 'Board of Education'],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function Home() {
  // Check if the app is properly configured
  const configStatus = checkConfiguration()

  if (!configStatus.isConfigured) {
    return <SetupGuide missingVars={configStatus.missingVars} />
  }

  const client = getClient()

  // Fetch homepage content via direct GraphQL query (not route-based)
  // because the homepage node may not have a path alias at "/"
  let homepageContent: any = null
  try {
    const data = await client.raw(GET_HOMEPAGE_DATA)
    homepageContent = data?.nodeHomepages?.nodes?.[0] || null
  } catch (error) {
    console.error('Error fetching homepage:', error)
  }

  // Check if connected but no content exists - show content import guide
  if (!homepageContent) {
    const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
    return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
  }

  return <HomepageRenderer homepageContent={homepageContent} />
}
