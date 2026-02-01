export const SITE = {
  name: 'Mesfney Love Foundation',
  legalName: 'Mesfiney Love Fund',
  shortName: 'MLF',
  registrationNumber: '1139089',
  foundedDate: '2008-07-04',
  founder: 'Nebiat Yoseph',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mesfneylove.org',
  contact: {
    email: 'mesfneylove@gmail.com',
    phone: '0208 452 9312',
    phoneInternational: '+44-20-8452-9312',
  },
  address: {
    street: '7A Fordwych Road',
    city: 'London',
    postcode: 'NW2 3TN',
    country: 'GB',
  },
  impact: {
    totalRaised: 24694.61,
    kidsHelped: 20,
    yearsSinceFoundation: new Date().getFullYear() - 2008,
    projectCount: 5,
  },
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our Story' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/team', label: 'Our Team' },
  { href: '/events', label: 'Events' },
  { href: '/donate', label: 'Donate' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/contact', label: 'Contact' },
] as const;

export const NAV_KEY_MAP: Record<string, string> = {
  '/': 'home',
  '/about': 'about',
  '/achievements': 'achievements',
  '/team': 'team',
  '/events': 'events',
  '/donate': 'donate',
  '/volunteer': 'volunteer',
  '/contact': 'contact',
};
