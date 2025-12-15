import "./globals.css";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = { title: "The Alpha Epsilon Centennial" };


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-row">
            <div className="social">
              <a href="#" aria-label="Instagram">⌁</a>
              <a href="#" aria-label="Facebook">f</a>
            </div>

            <div className="brand">
              <h1>The Alpha Epsilon<br />Centennial</h1>
              <div className={`tagline ${greatVibes.className}`}>Celebrating 100 years</div>

              <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/vendor1">Alpha Epsilon</Link>
                <Link href="/vendor2">LBJ Greek Designs</Link>
                <Link href="/vendor3">AEC Heirloom</Link>
                <Link href="/raffle">Raffle</Link>
              </nav>
            </div>

            <div style={{ width: 22 }} />
          </div>
        </header>

        <main className="panel">{children}</main>

        <footer className="site-footer">
          <div className="container">
            © 2025 The Alpha Epsilon Centennial Boutique. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}