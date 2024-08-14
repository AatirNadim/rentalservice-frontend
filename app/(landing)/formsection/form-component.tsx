"use client";

import CarSVG from "@/app/components/assets/car";
import Moped from "@/app/components/assets/moped";
import { Button } from "@/app/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { cn } from "@/lib/utils";
import React from "react";

enum TabsValue {
  BIKE = "bike",
  CAR = "car",
}

const FormComponent = () => {
  const [activeTab, setActiveTab] = React.useState<TabsValue>(TabsValue.BIKE);
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-6 p-4 md:p-8 lg:p-12">
      <h1 className="text-black font-bold text-xl sm:text-3xl xl:text-6xl">
        Rent Quality bikes
        <br /> with <span className="text-primary">Rentnhop</span>
      </h1>
      <section className="flex gap-0">
        <Button
          className={cn(
            "text-gray-400 border border-gray-400 rounded-lg rounded-tr-none rounded-br-none bg-transparent",
            activeTab === TabsValue.BIKE &&
              "bg-primary-foreground border-primary text-primary",
            "flex justify-center items-center gap-1"
          )}
          onClick={() => setActiveTab(TabsValue.BIKE)}
        >
          <Moped />
          Bike
        </Button>
        <Button
          className={cn(
            "text-gray-400 border border-gray-400 rounded-lg rounded-tl-none rounded-bl-none bg-transparent",
            activeTab === TabsValue.CAR &&
              "bg-primary-foreground border-primary text-primary",
            "flex justify-center items-center gap-1"
          )}
          onClick={() => setActiveTab(TabsValue.CAR)}
        >
          <CarSVG />
          Car
        </Button>
      </section>
    </div>
  );
};

export default FormComponent;
