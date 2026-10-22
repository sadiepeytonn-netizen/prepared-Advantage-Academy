import { site } from './site';
import { areas } from './areas';
import type { ClassInfo, Faq } from './classes';

export const orgId = `${site.url}/#academy`;

export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EducationalOrganization'],
    '@id': orgId,
    name: site.name,
    url: `${site.url}/`,
    telephone: '+1-903-238-5483',
    email: site.email,
    image: `${site.url}/og-image.jpg`,
    logo: `${site.url}/favicon.svg`,
    description:
      'Locally and veteran-owned security officer and firearms training academy in Longview, Texas. Level 2 and Level 3 security officer classes, Level 3 requalification, Texas License to Carry (LTC), permitless carry and private handgun training.',
    foundingDate: site.founded,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.street,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.zip,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.lat, longitude: site.lng },
    hasMap: site.googleCid,
    areaServed: [
      { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: site.lat, longitude: site.lng }, geoRadius: '160934' },
      ...areas.map((a) => ({ '@type': 'City', name: `${a.city}, TX` })),
    ],
    paymentAccepted: site.payment.join(', '),
    priceRange: '$100-$300',
    founder: { '@id': `${site.url}/#don-radcliffe` },
    sameAs: [site.facebook, site.googleCid],
    hasCredential: site.licenseNumbers.map((n) => ({
      '@type': 'EducationalOccupationalCredential',
      name: `Texas DPS Private Security license ${n}`,
    })),
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/#don-radcliffe`,
    name: 'Don Radcliffe',
    jobTitle: 'Firearms and Classroom Instructor',
    worksFor: { '@id': orgId },
    description:
      'Former Dallas police officer and Dallas County constable. Texas handgun license instructor since 1995, Texas Level 3 security instructor since 2010, TCOLE-certified firearms instructor and NRA Certified Range Safety Officer.',
    knowsAbout: ['Texas License to Carry', 'Texas security officer licensing', 'Firearms instruction', 'Range safety'],
  };
}

export function courseSchema(c: ClassInfo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: c.name,
    description: c.description,
    url: `${site.url}/classes/${c.slug}/`,
    provider: { '@id': orgId },
    inLanguage: 'en',
    ...(c.priceValue
      ? { offers: { '@type': 'Offer', category: 'Paid', price: c.priceValue, priceCurrency: 'USD', availability: 'https://schema.org/InStock' } }
      : {}),
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Onsite',
      courseSchedule: { '@type': 'Schedule', repeatFrequency: c.when },
      location: { '@id': orgId },
      instructor: { '@id': `${site.url}/#don-radcliffe` },
    },
  };
}

export function faqSchema(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function crumbsSchema(trail: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: `${site.url}${t.href}` })),
  };
}
