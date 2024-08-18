import React from "react";
import FormComponent from "./form-component";
import Image from "next/image";

const FormSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg items-center w-full">
      <FormComponent />
      <Image
        className="hidden md:block"
        src="/assets/landing-img.png"
        alt="Hero Image"
        width={930}
        height={724}
      />
    </section>
  );
};

export default FormSection;
