import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: "Kept — Don't just plan it. Keep it.",
  description: "Kept is a productivity app built to help you turn plans into completed actions through intelligent reminders, focus tools and active AI accountability.",
  keywords: [
    'Kept productivity app',
    'AI accountability agent',
    'follow-through tool',
    'Pomodoro timer',
    'Eisenhower matrix',
    'focus mode',
    'early access waitlist'
  ],
  authors: [{ name: 'Kept Startup Team' }],
  openGraph: {
    title: "Kept — Don't just plan it. Keep it.",
    description: 'Kept turns your plans into commitments — then helps you stay accountable until they are done.',
    url: 'https://keptapp.com',
    siteName: 'Kept Productivity',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kept — Don't just plan it. Keep it.",
    description: 'Kept helps you actually follow through with intelligent reminders, focus tools and AI accountability.',
  },
  robots: {
    index: true,
    follow: true,
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
