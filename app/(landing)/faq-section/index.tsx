import Image from "next/image";
import React from "react";
import { FAQAccordion } from "./accordion";

const FAQSection = () => {
  return (
    <div className="grid grid-cols-1 mx-auto max-w-[1296px] px-4 md:px-0 text-black [&>*]:mx-auto gap-12 py-4 md:py-8 lg:py-12 xl:py-16 z-100">
      <section className="flex flex-col items-center justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-[60px] xl:gap-[120px]">
        <section className="flex flex-col gap-4 items-center">
          <h4 className="text-sm font-bold text-primary">FAQS</h4>
          <h1 className="text-4xl font-bold text-black">
            Frequently Asked Questions
          </h1>
        </section>
        <section className="grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-[138px]">
          <Image
            src="/assets/faq-bike.png"
            width={450}
            height={636}
            alt="FAQ 1"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
          />
          <FAQAccordion />
        </section>
      </section>
    </div>
  );
};

export default FAQSection;
