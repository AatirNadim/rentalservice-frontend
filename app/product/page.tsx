import React from "react";
import BreadCrumb from "./product-details/bread-crumb";
import HotsellerSVG from "../components/assets/hotseller";
import CruiserSVG from "../components/assets/cruiser";
import { Minus, Plus, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import Moped from "../components/assets/moped";
import Invoice from "./product-details/invoice";

const ProductPage = () => {
  return (
    <div className="flex max-w-[2400px] items-start justify-between p-4 lg:px-8 xl:px-16 bg-primary-foreground">
      <section className="flex-[0.7] flex flex-col gap-2 items-start">
        <BreadCrumb />
        <section className="flex flex-col gap-2 items-start">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-primary">Product Name</h1>
            <span className="text-gray-500">SKU: 123456</span>
          </div>
          <div className="flex items-center gap-2">
            <section className="flex items-center justify-center gap-2 text-muted-foreground">
              <Star size={16} className="text-primary" />
              <span>5.00 (49 Reviews)</span>
              <span className="flex items-center">.</span>
              <span>139 trips</span>
            </section>
            <section className="flex items-center justify-center gap-2">
              <HotsellerSVG />
              <CruiserSVG />
            </section>
          </div>
        </section>
        <Image
          src="/assets/product-img.png"
          alt="Product Image"
          width={800}
          height={600}
        />
      </section>
      <section className="flex-[0.3] flex flex-col gap-2 items-start">
        <Invoice />
      </section>
    </div>
  );
};

export default ProductPage;
