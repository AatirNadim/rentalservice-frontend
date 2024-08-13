import Link from "next/link";
import Description from "./description";
import FAQ from "./faq";
import Links from "./links";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white ">
      <div className="container mx-auto flex flex-col gap-4 lg:gap-8 xl:gap-[57px] px-4 py-12 sm:gap-12 md:px-6 lg:py-16 max-w-[1296px]">
        <Description />
        <FAQ />
        <Links />
        <section className="text-xs text-muted-foreground">
          &copy; 2024 Example Website. All rights reserved.
        </section>
      </div>
    </footer>
  );
}
