import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MuiThemeProvider } from '@/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '送機行程表單',
  description: '填寫您的送機行程資訊，讓我們提供更貼心的服務。',
  icons: {
    icon: '/airport-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
