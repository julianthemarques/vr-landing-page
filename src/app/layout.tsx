import { Header } from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-style' });

export const metadata: Metadata = {
  title: 'VR Landing Page',
  description: 'Experience with virtual reality',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} font-[var(--font-style)] text-white bg-[#010101] py-10`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
