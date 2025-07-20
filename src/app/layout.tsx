import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Global Soil Mycobiome Consortium',
    template: '%s | GSMc',
  },
  description: 'Advancing global understanding of soil fungal diversity and ecosystem function through collaborative research and open data sharing.',
  keywords: [
    'soil mycobiome',
    'fungal diversity',
    'soil ecology',
    'mycorrhizal fungi',
    'global collaboration',
    'scientific research',
    'biodiversity',
    'ecosystem function'
  ],
  authors: [
    {
      name: 'Global Soil Mycobiome Consortium',
      url: 'https://gsmc.vmikk.dev',
    },
  ],
  creator: 'Global Soil Mycobiome Consortium',
  publisher: 'University of Tartu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Global Soil Mycobiome Consortium',
    description: 'Advancing global understanding of soil fungal diversity and ecosystem function through collaborative research.',
    siteName: 'GSMc',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Global Soil Mycobiome Consortium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Soil Mycobiome Consortium',
    description: 'Advancing global understanding of soil fungal diversity and ecosystem function.',
    images: ['/images/og-image.jpg'],
    creator: '@tedersoo',
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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${merriweather.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* Skip links for accessibility */}
        <a 
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        <a 
          href="#navigation"
          className="skip-link"
        >
          Skip to navigation
        </a>
        
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
        
        {/* Analytics and performance monitoring would go here */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics or other analytics scripts */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  // Web Vitals reporting
                  window.addEventListener('load', () => {
                    if ('web-vitals' in window) {
                      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                        getCLS(console.log);
                        getFID(console.log);
                        getFCP(console.log);
                        getLCP(console.log);
                        getTTFB(console.log);
                      });
                    }
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
