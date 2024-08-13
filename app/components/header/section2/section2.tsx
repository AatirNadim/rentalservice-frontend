import React from "react";
import Logo from "../../assets/logo";
import TabSection from "./tabs";
import { Button } from "../../ui/button";
import Moped from "../../assets/moped";

const Section2 = () => {
  return (
    <section className="flex items-center justify-center">
      <section className="flex w-full h-[90px] items-center max-w-[1920px] p-4 gap-4">
        <div className="flex gap-2 items-center justify-center">
          <Logo size="56px" />
          <section className="flex flex-col items-start justify-center">
            <span className="font-bold">Rentnhop</span>
            <span className="font-light text-sm">Easy bike rentals</span>
          </section>
        </div>
        <TabSection />
        <Button
          variant={"ghost"}
          className="flex items-center justify-center text-sm px-2 py-0.5 ml-auto"
        >
          <Moped size="20px" />
          Cart
        </Button>
        <Button
          variant={"default"}
          className="flex items-center justify-center text-sm px-4 py-3 hover:bg-primary rounded-full font-bold w-32"
        >
          Login/SignUp
        </Button>
      </section>
    </section>
  );
};

export default Section2;
