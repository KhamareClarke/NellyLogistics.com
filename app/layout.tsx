import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Preloader } from '@/components/Preloader';
// Vercel Analytics (will be tree-shaken in production if not used)
const VercelAnalytics = () => {
  if (process.env.NODE_ENV !== 'production') return null;
  
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              // Load analytics scripts in production only
              if (window.location.hostname !== 'localhost') {
                // Vercel Speed Insights
                const si = document.createElement('script');
                si.src = 'https://vitals.vercel-analytics.com/v1/script.js';
                si.async = true;
                document.head.appendChild(si);
                
                // Vercel Analytics
                const va = document.createElement('script');
                va.src = 'https://va.vercel-scripts.com/v1/script.js';
                va.defer = true;
                document.head.appendChild(va);
              }
            }
          `,
        }}
      />
    </>
  );
};

// Optimize font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

// App configuration
const APP_NAME = "Nelly's Logistics";
const APP_DESCRIPTION = '24/7 Same-Day & Next-Day Courier Service UK';
const APP_URL = 'https://www.nellyslogistics.com';

// Viewport configuration for responsive design and PWA
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover', // Support for notched devices
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light dark',
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: `${APP_NAME} | ${APP_DESCRIPTION}`,
    template: `%s | ${APP_NAME}`
  },
  description: 'Reliable 24/7 courier service across the UK and Europe. Same-day, next-day, and time-critical deliveries from Birmingham. Insured, tracked, and DBS-checked drivers. Call now for instant quote.',
  keywords: [
    'courier service Birmingham', 'same day delivery UK', 'next day courier',
    'Birmingham logistics', 'UK courier service', 'time critical delivery',
    '24/7 courier', 'DBS checked drivers', 'insured courier', 'tracked delivery'
  ],
  authors: [{ name: APP_NAME }],
  creator: APP_NAME,
  publisher: APP_NAME,
  applicationName: APP_NAME,
  generator: 'Next.js',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: APP_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: APP_URL,
    siteName: APP_NAME,
    title: `${APP_NAME} | 24/7 Courier Service`,
    description: 'Professional same-day & next-day courier service across UK & Europe. Fully insured, real-time tracking, DBS-checked drivers. Available 24/7.',
    images: [
      {
        url: `${APP_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} - Professional Courier Service`,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} | 24/7 Courier Service`,
    description: 'Same-day & next-day courier service across UK & Europe. 24/7 service, fully insured.',
    images: [`${APP_URL}/og-image.jpg`],
    creator: '@nellyslogistics',
    site: '@nellyslogistics',
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
};

// Add structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: "Nelly's Logistics",
  image: `${APP_URL}/logo.png`,
  '@id': '',
  url: APP_URL,
  telephone: '02475 269000',
  priceRange: '££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 5 Warwick St',
    addressLocality: 'Coventry',
    postalCode: 'CV5 6ET',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.4068,
    longitude: -1.5197,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://www.facebook.com/nellyslogistics',
    'https://www.instagram.com/nellyslogistics',
    'https://www.linkedin.com/company/nellyslogistics',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/custom.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased bg-white text-slate-900 dark:bg-slate-900 dark:text-white`}>
        <Preloader />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
        <VercelAnalytics />
        
        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.performance.mark('page_loaded');
              // Performance monitoring code
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').then(
                    registration => console.log('ServiceWorker registration successful'),
                    err => console.log('ServiceWorker registration failed: ', err)
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
