import React from "react";
import TestimonialModal from "./testimonial-modal";
import TestimonialHue from "@/app/components/assets/testimonial-hue";

const TestimonialWrapper = () => {
  return (
    <section className="bg-secondary w-full relative">
      <div className="absolute left-0 top-auto bottom-auto h-full z-10">
        <TestimonialHue className="h-full" />
      </div>
      <div className="grid grid-cols-1 mx-auto max-w-[1296px] px-4 md:px-0 text-black [&>*]:mx-auto gap-12 py-4 md:py-8 lg:py-12 xl:py-16 z-100">
        <section className="flex flex-col items-center justify-center gap-4 ">
          <h4 className="text-sm font-bold text-white">Testimonial</h4>
          <h1 className="text-4xl font-bold text-white">What riders say</h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between w-full z-50">
          <TestimonialModal
            imgUrl=""
            date="June 2, 2024"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicab."
            name="Akshay Vartak"
            title="Great Customer Service"
            key={1}
          />
          <TestimonialModal
            imgUrl=""
            date="June 2, 2024"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicab."
            name="Akshay Vartak"
            title="Great Customer Service"
            key={2}
          />
          <TestimonialModal
            imgUrl=""
            date="June 2, 2024"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicab."
            name="Akshay Vartak"
            title="Great Customer Service"
            key={3}
          />
        </section>
      </div>
    </section>
  );
};

export default TestimonialWrapper;
