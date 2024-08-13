import React from "react";
import Links from "./Links";

const SubHeader = () => {
  return (
    <div className="flex items-center justify-center bg-secondary-foreground">
      <nav className="w-full max-w-[1920px] flex items-center justify-between p-4 h-[56px]">
        <section className="grid items-center grid-cols-3 gap-4">
          <span>India</span>
          <span>English</span>
          <span>INR</span>
        </section>
        <section className="flex justify-center items-center gap-8">
          <Links />
          <div className="flex flex-col items-start justify-center">
            <span className=" font-bold text-sm">Call us at</span>
            <span className="font-light text-sm">1800 123 4567</span>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default SubHeader;
