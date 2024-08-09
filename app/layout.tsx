import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import NextTopLoader from "nextjs-toploader";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RentnHop",
  description: "Bike rental service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTopLoader showSpinner={false} color="#0056f1" />
        <Header />
        <div className="flex flex-col overflow-hidden">
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
