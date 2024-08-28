import { Metadata } from "next";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "RentalService",
  description: "Transit rental service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
