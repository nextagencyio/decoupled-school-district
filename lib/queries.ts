import { gql as apolloGql } from '@apollo/client'

// Tagged template that returns the query string (for server-side use with client.raw())
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredSchoolsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Schools
export const GET_SCHOOLS = gql`
  query GetSchools($first: Int = 20) {
    nodeSchools(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeSchool {
          body {
            processed
            summary
          }
          schoolLevel {
            ... on TermInterface {
              id
              name
            }
          }
          address
          phone
          principal
          enrollmentCount
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_SCHOOL_BY_PATH = gql`
  query GetSchoolByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeSchool {
            id
            title
            path
            body {
              processed
            }
            schoolLevel {
              ... on TermInterface {
                id
                name
              }
            }
            address
            phone
            principal
            enrollmentCount
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Board Members
export const GET_BOARD_MEMBERS = gql`
  query GetBoardMembers($first: Int = 50) {
    nodeBoardMembers(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeBoardMember {
          body {
            processed
          }
          position
          email
          phone
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          termStart {
            timestamp
          }
          termEnd {
            timestamp
          }
        }
      }
    }
  }
`

export const GET_BOARD_MEMBER_BY_PATH = gql`
  query GetBoardMemberByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeBoardMember {
            id
            title
            path
            body {
              processed
            }
            position
            email
            phone
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            termStart {
              timestamp
            }
            termEnd {
              timestamp
            }
          }
        }
      }
    }
  }
`

// Programs
export const GET_PROGRAMS = gql`
  query GetPrograms($first: Int = 20) {
    nodePrograms(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeProgram {
          body {
            processed
            summary
          }
          programArea {
            ... on TermInterface {
              id
              name
            }
          }
          eligibility
          gradesServed
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_PROGRAM_BY_PATH = gql`
  query GetProgramByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeProgram {
            id
            title
            path
            body {
              processed
            }
            programArea {
              ... on TermInterface {
                id
                name
              }
            }
            eligibility
            gradesServed
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Events
export const GET_EVENTS = gql`
  query GetEvents($first: Int = 20) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          body {
            processed
            summary
          }
          eventDate {
            timestamp
          }
          endDate {
            timestamp
          }
          location
          eventType {
            ... on TermInterface {
              id
              name
            }
          }
          registrationUrl
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventType {
              ... on TermInterface {
                id
                name
              }
            }
            registrationUrl
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// News
export const GET_NEWS = gql`
  query GetNews($first: Int = 20) {
    nodeNewsItems(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeNews {
          body {
            processed
            summary
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          category {
            ... on TermInterface {
              id
              name
            }
          }
          featured
        }
      }
    }
  }
`

export const GET_NEWS_BY_PATH = gql`
  query GetNewsByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeNews {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            category {
              ... on TermInterface {
                id
                name
              }
            }
            featured
          }
        }
      }
    }
  }
`

// Generic route query
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeSchool {
            id
            title
            path
            body {
              processed
            }
            schoolLevel {
              ... on TermInterface {
                id
                name
              }
            }
            address
            phone
            principal
            enrollmentCount
          }
          ... on NodeBoardMember {
            id
            title
            path
            body {
              processed
            }
            position
            email
            phone
          }
          ... on NodeProgram {
            id
            title
            path
            body {
              processed
            }
            programArea {
              ... on TermInterface {
                id
                name
              }
            }
            eligibility
            gradesServed
          }
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventType {
              ... on TermInterface {
                id
                name
              }
            }
            registrationUrl
          }
          ... on NodeNews {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            category {
              ... on TermInterface {
                id
                name
              }
            }
            featured
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredSchoolsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured schools for homepage
export const GET_FEATURED_SCHOOLS = gql`
  query GetFeaturedSchools {
    nodeSchools(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeSchool {
          schoolLevel {
            ... on TermInterface {
              id
              name
            }
          }
          principal
          enrollmentCount
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured news for homepage
export const GET_FEATURED_NEWS = gql`
  query GetFeaturedNews {
    nodeNewsItems(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeNews {
          body {
            summary
          }
          image {
            url
            alt
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          category {
            ... on TermInterface {
              id
              name
            }
          }
          featured
        }
      }
    }
  }
`

// Upcoming events for homepage
export const GET_UPCOMING_EVENTS = gql`
  query GetUpcomingEvents {
    nodeEvents(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          eventDate {
            timestamp
          }
          location
          eventType {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`

// ─── Parsed DocumentNode versions for client-side Apollo useQuery() ───

export const GET_FEATURED_SCHOOLS_DOC = apolloGql`
  query GetFeaturedSchools {
    nodeSchools(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeSchool {
          schoolLevel {
            ... on TermInterface {
              id
              name
            }
          }
          principal
          enrollmentCount
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`
