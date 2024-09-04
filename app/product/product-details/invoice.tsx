import Moped from "@/app/components/assets/moped";
import { Button } from "@/app/components/ui/button";
import { ArrowBigDown, ArrowDown, Calendar, Minus, Plus } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";
import React from "react";

const FromDate = () => (
  <div className="flex flex-col items-start gap-2 font-semibold">
    <span className="text-muted-foreground text-sm">From:</span>
    <span className="text-primary">12th July 2021</span>
  </div>
);

const Invoice = () => {
  return (
    <section className="w-full flex bg-white flex-col shadow-lg p-4 rounded-lg gap-4 min-w-[480px]">
      <section className="flex items-center gap-2 justify-between">
        <FromDate />
        <FromDate />
        <section className="flex justify-center items-end gap-2 md:gap-4 text-primary">
          <span>1 day, 2hrs</span>
          <Calendar />
        </section>
      </section>

      <div className="w-full h-px bg-gray-300" />
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">Price:</span>
        <span className="text-2xl font-bold text-primary">$100.00</span>
      </div>
      <div className="w-full h-px bg-gray-300" />
      <div className="flex items-center gap-2 justify-between">
        <section className="flex flex-col items-start gap-0">
          <h1 className="font-semibold">Gandhi Bhavan Metro Station</h1>
          <h4 className="text-muted-foreground text-sm">
            Location Timings: 8AM to 10AM
          </h4>
        </section>

        <Button className="bg-primary-foreground text-white font-bold rounded-full h-fit p-4 hover:bg-primary-foreground ">
          <IoMdArrowDropdown className="text-primary" size={20} />
        </Button>
      </div>
      <div className="w-full h-px bg-gray-300" />
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Moped />
          <section className="flex flex-col items-start">
            <span className="text-muted-foreground">Category:</span>
            <span className="text-primary">Bikes</span>
          </section>
        </div>
        <section className="flex items-center gap-2">
          <Button className="bg-primary-foreground text-white font-bold rounded-full h-fit p-4 hover:bg-primary-foreground ">
            <Plus size={16} className="text-secondary" />
          </Button>
          <span className="text-primary">1</span>
          <Button className="bg-primary-foreground text-white font-bold rounded-full h-fit p-4 hover:bg-primary-foreground ">
            <Minus size={16} className="text-secondary" />
          </Button>
        </section>
      </div>
      <div className="w-full h-px bg-gray-300" />
      <section className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <span className="text-primary text-lg font-semibold">$90</span>
          <h4
            className="text-muted-foreground underline text-sm cursor-pointer
            hover:text-gray-700 transition"
          >
            Show Breakup
          </h4>
        </div>
        <Button className="w-40 h-12 bg-primary text-white font-bold rounded-full">
          Book Now
        </Button>
      </section>
    </section>
  );
};

export default Invoice;
