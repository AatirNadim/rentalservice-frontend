import React from "react";
import FormSection from "./formsection";
import StepsWrapper from "./steps";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2 text-primary bg-primary-foreground">
      <FormSection />
      <StepsWrapper />
    </div>
  );
};

export default page;
