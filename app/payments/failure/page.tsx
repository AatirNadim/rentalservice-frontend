import Image from "next/image";
import React from "react";
import FailureModal from "./failure-modal";

const Failure = () => {
  return (
    <div className="flex-1 flex items-center justify-center text-2xl bg-primary-foreground relative">
      <Image
        src="/assets/failed-payment-bg.png"
        alt="Failure Background"
        width={500}
        height={500}
        className="absolute inset-0 h-full w-full object-fill"
      />
      <FailureModal />
    </div>
  );
};

export default Failure;
