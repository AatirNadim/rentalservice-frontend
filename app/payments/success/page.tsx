import SuccessBG from "@/app/components/assets/payments/success-bg";
import React from "react";
import SuccessModal from "./success-modal";

const Success = () => {
  return (
    <div className="flex-1 flex items-center justify-center text-2xl relative bg-primary-foreground">
      <section className="absolute left-0 bottom-0">
        <SuccessBG className="max-h-[90vh] max-w-[90vh]" />
      </section>
      <SuccessModal />
    </div>
  );
};

export default Success;
