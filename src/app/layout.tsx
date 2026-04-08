import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://kevinsenjaya.dev'),
  title: {
    default: 'Kevin Senjaya – Backend Engineer & Software Developer',
    template: '%s | Kevin Senjaya',
  },
  description:
    'Kevin Senjaya is a Backend Engineer & System Architect with 6+ years of experience. Specialized in Spring Boot, .NET Core, PHP/Laravel, and scalable system architecture. Junior Manager Software Developer at Indomaret Group & Head of IT at Arrangely.io.',
  keywords: [
    'Kevin Senjaya',
    'Backend Developer',
    'Software Developer',
    'System Architect',
    'Spring Boot',
    '.NET Core',
    'Java Developer',
    'PHP Developer',
    'Laravel Developer',
    'React Developer',
    'Indomaret',
    'Arrangely',
    'Rolling Glory',
    'Jakarta Developer',
    'Indonesia Software Engineer',
    'Klik Indomaret',
    'Portfolio',
    'Backend Engineer Indonesia',
    'Full Stack Developer',
    'Junior Manager Software Developer',
    'Software Engineer Jakarta',
    'Backend Engineer',
  ],
  authors: [{ name: 'Kevin Senjaya', url: 'https://kevinsenjaya.dev' }],
  creator: 'Kevin Senjaya',
  publisher: 'Kevin Senjaya',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://kevinsenjaya.dev',
    siteName: 'Kevin Senjaya Portfolio',
    title: 'Kevin Senjaya – Backend Engineer & Software Developer',
    description:
      'Backend Engineer & System Architect with 6+ years of experience building scalable systems at Indomaret Group, Arrangely.io, and Rolling Glory.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kevin Senjaya – Backend Engineer & Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin Senjaya – Backend Engineer & Software Developer',
    description:
      'Backend Engineer & System Architect with 6+ years of experience building scalable systems.',
    images: ['/og-image.png'],
    creator: '@kevinsenjaya',
  },
  alternates: {
    canonical: 'https://kevinsenjaya.dev',
  },
  category: 'technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kevin Senjaya',
  url: 'https://kevinsenjaya.dev',
  jobTitle: 'Junior Manager Software Developer',
  description:
    'Backend Engineer & System Architect with 6+ years of experience in the Indonesian technology industry.',
  email: 'kevinsenjaya72@gmail.com',
  telephone: '+6208986062538',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jakarta',
    addressCountry: 'ID',
  },
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Indomaret Group',
    },
    {
      '@type': 'Organization',
      name: 'Arrangely.io',
    },
  ],
  knowsAbout: [
    'Java',
    'Spring Boot',
    'C#',
    '.NET Core',
    'PHP',
    'Laravel',
    'React.js',
    'Backend Development',
    'System Architecture',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#080c18" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-[#02040a] text-white">{children}</body>
    </html>
  )
}
