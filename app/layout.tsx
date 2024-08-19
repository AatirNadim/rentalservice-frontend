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
      <body className="min-h-screen overflow-auto flex flex-col">
        <NextTopLoader showSpinner={false} color="#0056f1" />
        <Header />
        {children}
      </body>
    </html>
  );
}
