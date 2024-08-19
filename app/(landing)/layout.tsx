import Footer from "../components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex-1 flex flex-col overflow-visible">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
