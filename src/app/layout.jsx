import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Provides from '@/components/Provides';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Provides>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {children}
        </Provides>
      </body>
    </html>
  );
}
