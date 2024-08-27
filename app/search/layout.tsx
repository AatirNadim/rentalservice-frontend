import { Metadata } from "next";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "RentalService Search",
  description: "Transit rental service search results",
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
