import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import NextTopLoader from "nextjs-toploader";
import Header from "./components/header";
import Footer from "./components/footer";

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
        <div className="flex flex-col overflow-hidden bg-primary">
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
