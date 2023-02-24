import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Provides from '@/components/Provides';
import SearchBox from '@/components/SearchBox';
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

          {/* Search Box */}
          <SearchBox />

          {children}
        </Provides>
      </body>
    </html>
  );
}
