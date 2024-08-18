import React from "react";
import FormSection from "./formsection";
import StepsWrapper from "./steps";
import AboutUs from "./about-us";
import { cn } from "@/lib/utils";
import Fleet from "./fleet";
import PlacesToVisit from "./places-to-visit";
import TestimonialWrapper from "./testimonial";

const page = () => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-2 text-primary bg-primary-foreground",
        "gap-4 sm:gap-8 md:gap-12 lg:gap-[58px] xl:gap-[104px]"
      )}
    >
      <FormSection />
      <StepsWrapper />
      <AboutUs />
      <Fleet />
      <PlacesToVisit />
      <TestimonialWrapper />
    </div>
  );
};

export default page;
