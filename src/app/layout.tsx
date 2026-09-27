import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Dynamically determine the canonical URL for deployment flexibility (Vercel, custom domain, or local)
const getSiteUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'https://keptapp.com';
};

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#0F1117' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kept - Don't just plan it. Keep it.",
    template: '%s | Kept',
  },
  description:
    "Planning is easy. Following through is hard. Kept turns your plans into commitments - then actively helps you stay accountable until they're done.",
  keywords: [
    'Kept productivity app',
    'AI accountability agent',
    'follow-through tool',
    'Pomodoro timer',
    'Eisenhower matrix',
    'focus mode',
    'commitment tracker',
    'early access waitlist',
  ],
  authors: [{ name: 'Kept Startup Team', url: siteUrl }],
  creator: 'Kept',
  publisher: 'Kept',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Kept - Don't just plan it. Keep it.",
    description:
      "Planning is easy. Following through is hard. Kept turns your plans into commitments - then actively helps you stay accountable until they're done.",
    url: siteUrl,
    siteName: 'Kept',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        secureUrl: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Kept - Don't just plan it. Keep it. The AI accountability and follow-through app.",
        type: 'image/jpeg',
      },
      {
        url: `${siteUrl}/og-image.png`,
        secureUrl: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Kept - Don't just plan it. Keep it.",
        type: 'image/png',
      },
      {
        url: `${siteUrl}/og-image-square.jpg`,
        secureUrl: `${siteUrl}/og-image-square.jpg`,
        width: 800,
        height: 800,
        alt: 'Kept - Living Accountability',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kept - Don't just plan it. Keep it.",
    description:
      "Planning is easy. Following through is hard. Kept turns your plans into commitments - then actively helps you stay accountable until they're done.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: '@keptapp',
    site: '@keptapp',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
