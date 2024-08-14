import React from "react";
import FormComponent from "./form-component";
import Image from "next/image";

const FormSection = () => {
  return (
    <section className="grid grid-cols-2 bg-white rounded-lg shadow-md">
      <FormComponent />
      <Image
        src="/assets/landing-img.png"
        alt="Hero Image"
        width={930}
        height={724}
      />
    </section>
  );
};

export default FormSection;
