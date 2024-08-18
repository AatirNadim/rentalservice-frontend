import Link from "next/link";
import React from "react";
import FleetModal from "./fleet-modal";

const Fleet = () => {
  return (
    <div className="w-full max-w-[1296px] grid grid-cols-1 gap-8 mx-auto px-4 md:px-0">
      <section className="flex flex-col justify-start items-start gap-4 z-10">
        <h4 className="text-sm font-bold">Our Fleet</h4>
        <section className="flex flex-col md:flex-row gap-8 justify-between w-full">
          <h1 className="text-4xl font-[900] text-black">
            Explore our top deal
          </h1>
          <nav className="flex items-center gap-4 font-semibold [&>*]:text-gray-600">
            <Link href="/fleet" className="!text-primary">
              HOT SELLER
            </Link>
            <Link href="/fleet">BMW</Link>
            <Link href="/fleet">DUCATI</Link>
            <Link href="/fleet">HONDA</Link>
            <Link href="/fleet">SUZUKI</Link>
            <Link href="/fleet">YAMAHA</Link>
          </nav>
        </section>
      </section>
      <section className="w-full overflow-auto flex">
        <section className="w-fit flex items-center gap-4">
          <FleetModal />
          <FleetModal />
          <FleetModal />
          <FleetModal />
          <FleetModal />
        </section>
      </section>
    </div>
  );
};

export default Fleet;
