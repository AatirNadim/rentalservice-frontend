import React from "react";
import Logo from "../assets/logo";
import TabSection from "../header/section2/tabs";
import Link from "next/link";
import FooterTabs from "./tabs";
import { Button } from "../ui/button";
import GooglePlay from "../assets/google-play";
import AppStore from "../assets/app-store";
import Links from "../header/Links";

const Description = () => {
  return (
    <section className="space-y-4 flex flex-col w-full gap-4 md:gap-8 lg:gap-12 xl:gap-16">
      <section className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-2 items-center justify-center">
          <Logo size="56px" />
          <section className="flex flex-col items-start justify-center">
            <span className="font-bold">Rentnhop</span>
            <span className="font-light text-sm">Easy bike rentals</span>
          </section>
        </div>
        <FooterTabs />
      </section>
      <section className="leading-relaxed flex flex-col md:flex-row items-start justify-center md:justify-between">
        <section className="flex flex-col items-start justify-center gap-2">
          <p className="text-sm leading-relaxed w-[380px]">
            Welcome to our website, where we strive to provide you with the
            latest news, insights, and resources on a wide range of topics. Our
            mission is to be your go-to destination for engaging and informative
            content.
          </p>
          <Links />
        </section>
        <section className="grid grid-cols-2 items-center gap-2">
          <Button className="!bg-transparent hover:bg-transparent p-0">
            <GooglePlay />
          </Button>
          <Button className="!bg-transparent hover:bg-transparent p-0">
            <AppStore />
          </Button>
        </section>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4"></section>
    </section>
  );
};

export default Description;
