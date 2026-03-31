import type {Metadata} from 'next';
import { Inter, Archivo_Black } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'ZK Construction Group | Engineering Excellence',
  description: 'Premium Construction, Electrical, and Plumbing services specializing in minimalist industrial design and precision execution.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#FAFAFA] text-[#1A1A1A] antialiased selection:bg-[#FF6B00] selection:text-white">
        {children}
      </body>
    </html>
  );
}
