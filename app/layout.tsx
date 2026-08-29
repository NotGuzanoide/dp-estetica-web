import type { Metadata } from 'next';
import { Geist, Lora } from 'next/font/google';
import './globals.css';

const sans = Geist({ variable: '--font-sans', subsets: ['latin'] });
const serif = Lora({ variable: '--font-serif', subsets: ['latin'] });

export const metadata: Metadata = { title: 'Daniela Palma Carrasco | Estética facial', description: 'Orientación profesional y tratamientos con toxina botulínica, con evaluación individual y seguimiento.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}

