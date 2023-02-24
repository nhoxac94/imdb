import Header from '@/components/Header';
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

          {children}
        </Provides>
      </body>
    </html>
  );
}
