import React from "react";
import CardWrapper from "./card-wrapper";
import Location from "@/app/components/assets/location";
import Calendar from "@/app/components/assets/calendar";
import Moped from "@/app/components/assets/moped";

const StepsWrapper = () => {
  return (
    <section className="max-w-[90%] w-[1296px] flex flex-col items-center justify-center gap-4 lg:gap-[60px] mt-4 md:mt-8 lg:mt-[50px] xl:mt-[104px]">
      <section className="flex flex-col gap-2 items-center ">
        <h1 className="text-sm font-bold">How It Works</h1>
        <h1 className="text-4xl text-black font-bold">Our working steps</h1>
      </section>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
        <CardWrapper
          svg={<Location />}
          title="Choose Location"
          description="Pellentesque a massa at lorem tincidunt efficitur fringilla eget mauris. Maecenas finibus dignissim varius. Fusce vitae ipsum dignissim."
        />
        <CardWrapper
          svg={<Calendar />}
          title="Choose Date"
          description="Pellentesque a massa at lorem tincidunt efficitur fringilla eget mauris. Maecenas finibus dignissim varius. Fusce vitae ipsum dignissim."
        />
        <CardWrapper
          svg={<Moped fill="#0056F1" size="60px" />}
          title="Choose Vehicle"
          description="Pellentesque a massa at lorem tincidunt efficitur fringilla eget mauris. Maecenas finibus dignissim varius. Fusce vitae ipsum dignissim."
        />
      </section>
    </section>
  );
};

export default StepsWrapper;
