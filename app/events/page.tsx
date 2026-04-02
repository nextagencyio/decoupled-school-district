import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_EVENTS } from '@/lib/queries'
import { EventsData } from '@/lib/types'
import Header from '../components/Header'
import EventCard from '../components/EventCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Events | Riverside Unified School District',
  description: 'Browse upcoming events in the Riverside Unified School District.',
}

async function getEvents() {
  try {
    const client = getClient()
    const data = await client.raw(GET_EVENTS, { first: 50 })
    return data?.nodeEvents?.nodes || []
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

export default async function EventsPage() {
  const items = await getEvents()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-primary-800 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3">
            Events
          </h1>
          <p className="text-primary-200 max-w-3xl">
            Stay informed about upcoming events, meetings, and activities across the district.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Events Yet</h2>
              <p className="text-gray-500">
                Events will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (
                <EventCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
