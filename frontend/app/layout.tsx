import type { Metadata } from 'next';
import { lato, montserrat, poppins } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'AI-Powered Online Job Preparation Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body 
        className={`${lato.className} ${montserrat.className} ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
