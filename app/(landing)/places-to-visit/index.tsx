import React from "react";
import SelectComp from "./select-comp";

const PlacesToVisit = () => {
  return (
    <section className="w-full grid grid-cols-1 mx-auto max-w-[1296px] px-4 md:px-0 text-black [&>*]:mx-auto gap-12">
      <h1 className="text-4xl font-bold text-black">Popular places near you</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between w-full">
        <SelectComp placeholder="Best Place to Visit In Delhi" />
        <SelectComp placeholder="Make your pleasure trips more pleasing" />
        <SelectComp placeholder="Places for professionals" />
        <SelectComp placeholder="Popular academic institutions" />
      </section>
    </section>
  );
};

export default PlacesToVisit;
