import { ToastContainer } from 'react-toastify';
import type { Metadata } from 'next';
import { lato, montserrat, poppins } from './fonts';
import 'react-toastify/dist/ReactToastify.css';
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
        className={[lato.className, montserrat.className, poppins.className, 'antialiased'].join(' ')}
      >
        {children}
        <ToastContainer position='top-center' autoClose={3000} theme='light' />
      </body>
    </html>
  );
}
