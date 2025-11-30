import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shri-Da Chemicals Pvt. Ltd. | Agricultural Solutions',
  description: 'Premium agricultural chemicals and drone technology solutions for modern farming.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        {children}

        <Footer />
      </body>
    </html>
  );
}