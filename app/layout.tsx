import type { Metadata } from 'next';
import { Geist, Lora } from 'next/font/google';
import './globals.css';

const sans = Geist({ variable: '--font-sans', subsets: ['latin'] });
const serif = Lora({ variable: '--font-serif', subsets: ['latin'] });

const title = 'Daniela Palma Carrasco | Estética facial';
const description = 'Orientación profesional y tratamientos con toxina botulínica, con evaluación individual y seguimiento.';

export const metadata: Metadata = {
  metadataBase: new URL('https://daniela-palma-estetica.shuffle-20111.chatgpt.site'),
  title,
  description,
  icons: { icon: '/icon.svg' },
  openGraph: { title, description, type: 'website', locale: 'es_CL', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Daniela Palma · Medicina estética y urgencia' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}

