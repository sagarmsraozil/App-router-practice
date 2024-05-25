import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              <li className="nav-link">Home</li>
              <li className="nav-link">About Us</li>
              <li className="nav-link">Contact</li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <Link href="/">Footer</Link>
        </footer>
      </body>
    </html>
  );
}
