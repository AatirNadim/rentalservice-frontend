import Moped from "@/app/components/assets/moped";
import { Button } from "@/app/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React from "react";

const Invoice = () => {
  return (
    <section className="w-full flex bg-white flex-col shadow-lg p-4 rounded-lg gap-2 min-w-[480px]">
      <div className="w-full h-px bg-gray-300" />
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">Price:</span>
        <span className="text-2xl font-bold text-primary">$100.00</span>
      </div>
      <div className="w-full h-px bg-gray-300" />
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">Availability:</span>
        <span className="text-primary">In Stock</span>
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
          <Button className="bg-primary-foreground text-white font-bold rounded-full">
            <Plus size={16} className="text-secondary" />
          </Button>
          <span className="text-primary">1</span>
          <Button className="bg-primary-foreground text-white font-bold rounded-full">
            <Minus size={16} className="text-secondary" />
          </Button>
        </section>
      </div>
      <div className="w-full h-px bg-gray-300" />
      <section className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <span className="text-primary text-lg font-semibold">$90</span>
          <h4 className="text-muted-foreground underline text-sm">
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
