import React from "react";
import BreadCrumb from "./product-details/bread-crumb";
import HotsellerSVG from "../components/assets/hotseller";
import CruiserSVG from "../components/assets/cruiser";
import { Minus, Plus, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import Moped from "../components/assets/moped";
import Invoice from "./product-details/invoice";
import ProductDetails from "./product-details";

const ProductPage = () => {
  return (
    <div className="flex max-w-[2400px] items-start justify-between p-4 lg:px-8 xl:px-16 bg-primary-foreground">
      <section className="flex-[0.7] flex flex-col gap-4 items-start">
        <ProductDetails />
      </section>
      <section className="flex-[0.3] flex flex-col gap-2 items-start">
        <Invoice />
      </section>
    </div>
  );
};

export default ProductPage;
