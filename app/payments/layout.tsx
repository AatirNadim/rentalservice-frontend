import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RentnHop Payments Page",
  description: "Bike rental service payments page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" suppressHydrationWarning>

    //   <body className="min-h-screen overflow-auto flex flex-col">
    //     <div className="flex-1 flex flex-col overflow-visible">
    //       <main>
    <>{children}</>
    //         </main>
    //     </div>
    //   </body>
    // </html>
  );
}
