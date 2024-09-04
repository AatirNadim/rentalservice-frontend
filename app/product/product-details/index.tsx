import React from "react";
import BreadCrumb from "./bread-crumb";
import { Star } from "lucide-react";
import HotsellerSVG from "@/app/components/assets/hotseller";
import CruiserSVG from "@/app/components/assets/cruiser";
import Image from "next/image";
import SpecDialog from "./spec-dialog";
import EngineSVG from "@/app/components/assets/product-display/engine";
import AvailableModal from "./available-modal";

const ProductDetails = () => {
  return (
    <>
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
      <section className="flex flex-col gap-2 items-start">
        <h1 className="text-xl font-bold text-secondary">Description</h1>
        <span className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin, nunc non lacinia dictum, est purus euismod odio, nec
          luctus urna felis id sapien. Nullam nec erat nec nunc varius
          vestibulum. Nullam auctor, felis nec ultricies ultricies, felis ligula
          ultricies justo, nec lacinia arcu mi nec libero. Donec sollicitudin,
          mi nec ultrices tincidunt, purus metus lacinia lacus, sed lacinia
          justo justo eget nisi. Sed ut lacus nec turpis malesuada fermentum.
          Aenean nec nunc ac nisi lacinia tincidunt. Nullam nec erat nec nunc
          varius vestibulum. Nullam auctor, felis nec ultricies ultricies, felis
          ligula ultricies justo, nec lacinia arcu mi nec libero. Donec
          sollicitudin, mi nec ultrices tincidunt, purus metus lacinia lacus,
          sed lacinia justo justo eget nisi. Sed ut lacus nec turpis malesuada
          fermentum. Aenean nec nunc ac nisi lacinia tincidunt.
        </span>
      </section>
      <section className="flex flex-col gap-2 items-start w-full">
        <h1 className="text-xl font-bold text-secondary">Specs</h1>
        <section className="w-full overflow-auto">
          <section className="flex items-center justify-between gap-2 ">
            <SpecDialog
              icon={<EngineSVG className="w-8 h-8" />}
              title="Engine"
              description="4 Stroke, Single Cylinder"
            />
            <SpecDialog
              icon={<EngineSVG className="w-8 h-8" />}
              title="Engine"
              description="4 Stroke, Single Cylinder"
            />
            <SpecDialog
              icon={<EngineSVG className="w-8 h-8" />}
              title="Engine"
              description="4 Stroke, Single Cylinder"
            />
            <SpecDialog
              icon={<EngineSVG className="w-8 h-8" />}
              title="Engine"
              description="4 Stroke, Single Cylinder"
            />
            <SpecDialog
              icon={<EngineSVG className="w-8 h-8" />}
              title="Engine"
              description="4 Stroke, Single Cylinder"
            />
          </section>
        </section>
      </section>
      <section className="grid grid-cols-2 w-full justify-between">
        <section className="grid grid-cols-1 gap-4 col-span-1">
          <h1 className="text-xl font-bold text-secondary">
            Available Add Ons
          </h1>
          <section className="flex items-center justify-between gap-3 flex-col">
            <AvailableModal
              imgUrl="/assets/helmet.png"
              title="Product Name"
              description="Product Description"
            />
            <AvailableModal
              imgUrl="/assets/helmet.png"
              title="Product Name"
              description="Product Description"
            />
            <AvailableModal
              imgUrl="/assets/helmet.png"
              title="Product Name"
              description="Product Description"
            />
          </section>
        </section>
        <section className="grid grid-cols-1 gap-2 col-span-1">
          <h1 className="text-xl font-bold text-secondary">Special Requests</h1>
          <section className="flex items-center justify-between gap-2 "></section>
        </section>
      </section>
    </>
  );
};

export default ProductDetails;
