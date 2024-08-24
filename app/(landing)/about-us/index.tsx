import Cities from "@/app/components/assets/cities";
import LinkSVG from "@/app/components/assets/linkSVG";
import Mask from "@/app/components/assets/mask";
import Moped from "@/app/components/assets/moped";
import Praying from "@/app/components/assets/praying";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full max-w-[1296px] grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto px-4 md:px-0">
      <Image
        src="/assets/bikes.png"
        alt="About Us"
        width={520}
        height={800}
        // layout="responsive"
        className="h-[800px] w-[520px]"
      />
      <section className="flex flex-col justify-start items-start gap-4 relative z-10">
        <h4 className="text-sm font-bold">About Us</h4>
        <h1 className="text-4xl font-bold text-black">
          Feel The Best Experience With <br /> Our Rental Deals
        </h1>
        <p className="text-muted-foreground">
          RentalService, headquartered in India, is a leading Motorcycle Rental
          Platform with a presence in all major cities like Delhi , Mumbai ,
          Leh, Manali , Goa , Chandigarh , Rishikesh , Mussorrie and many more.
          Getting a bike on rent in Delhi offers significant convenience by
          eliminating the expenses associated with ownership and maintenance.
          <br />
          <br />
          Customers can select from an extensive range of motorcycles, from the
          Honda Activa to the Hayabusa, with numerous pickup points conveniently
          located near key tourist attractions & all hotsports. RentalService
          provides a seamless rental experience with hassle-free reservations,
          24/7 assistance, mechanic support, complimentary accessories,
          cloakroom services, and delivery and pickup options.
        </p>
        <Link
          href="/about-us"
          className="text-secondary font-bold transition flex items-center justify-center gap-2"
        >
          <span>Read More</span>
          <LinkSVG className="text-primary" />
        </Link>
        <section className="flex items-center bg-secondary rounded-lg text-white [&>span]:flex-col">
          <span className="flex items-center gap-2 py-4 px-8">
            <Cities className="h-[24px]" />
            <span className="font-bold flex flex-col items-center gap-2 text-3xl">
              <span>40+</span>
              <span className="text-xs">Cities</span>
            </span>
          </span>
          <div className="w-px bg-gray-700 h-full" />
          <span className="flex items-center gap-2 p-4">
            <Moped className="h-[24px]" fill="#fff" />
            <span className="font-bold flex flex-col items-center gap-2 text-3xl">
              <span>6000+</span>
              <span className="text-xs">Bikes</span>
            </span>
          </span>
          <div className="w-px bg-gray-700 h-full" />
          <span className="flex items-center gap-2 p-4">
            <Mask className="h-[24px]" />
            <span className="font-bold flex flex-col items-center gap-2 text-3xl">
              <span>5k</span>
              <span className="text-xs">Happy Customers</span>
            </span>
          </span>
          <div className="w-px bg-gray-700 h-full" />
          <span className="flex items-center gap-2 p-4">
            <Praying className="h-[24px]" />
            <span className="font-bold flex flex-col items-center gap-2 text-3xl">
              <span>4.8/5</span>
              <span className="text-xs">1200+ reviews</span>
            </span>
          </span>
        </section>
      </section>
    </section>
  );
};

export default AboutUs;
