import './globals.css';
import { Inter } from 'next/font/google';

import { MainContainer } from './MainContainer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Country Information',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
