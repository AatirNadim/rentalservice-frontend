import React from "react";
import BreadCrumb from "./bread-crumb";
import { Star } from "lucide-react";
import HotsellerSVG from "@/app/components/assets/hotseller";
import CruiserSVG from "@/app/components/assets/cruiser";
import Image from "next/image";
import SpecDialog from "./spec-dialog";
import EngineSVG from "@/app/components/assets/product-display/engine";
import AvailableModal from "./available-modal";
import RatingBar from "./rating-bar";

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
              title="Helmet"
              description="Complimentary"
            />
            <AvailableModal
              imgUrl="/assets/helmet.png"
              title="Pillion Helmet"
              description="Rs. 1200"
            />
            <AvailableModal
              imgUrl="/assets/gloves.png"
              title="Gloves"
              description="Rs. 250"
            />
          </section>
        </section>
        <section className="grid grid-cols-1 gap-2 col-span-1">
          <h1 className="text-xl font-bold text-secondary">Special Requests</h1>
          <section className="flex items-center justify-between gap-2 "></section>
        </section>
      </section>
      <section className="flex flex-col gap-4 justify-between w-full rounded-lg border-2 border-primary p-4 text-sm bg-white">
        <h1 className="text-xl font-bold text-secondary">Things to remember</h1>

        <ul className="flex flex-col gap-2 items-start w-full list-disc">
          <li className="flex items-center gap-2">
            <span className="text-muted-foreground"></span>
            <span className="text-muted-foreground">
              The minimum age of renting a Bike is 20 Years.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-muted-foreground"></span>
            <span className="text-muted-foreground">
              Vehicles are provided with Empty Tanks (Enough fuel to reach the
              nearest Petrol Pump).
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-muted-foreground"></span>
            <span className="text-muted-foreground">
              All Challans issued during the trip are to be paid in full by the
              customer.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-muted-foreground"></span>
            <span className="text-muted-foreground">
              Negligent, Drunk Driving, Overspeeding (above 80KM/Hr) will
              attract a fine of Rs. 1000.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-muted-foreground"></span>
            <span className="text-muted-foreground">
              General Servicing (Engine Oil Change, Filter Cleaning, Brake
              Check) is mandatory after every 1500 KM Trip by the customer.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-muted-foreground"></span>
            <span className="text-muted-foreground">
              This cost must be borne by customer and proper invoice for the
              servicing is to be furnished on return. Due to non-servicing any
              issue arising in engine would be paid by customer. Additional fine
              of Rs. 1000 is applicable in such cases.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-muted-foreground"></span>
            <span className="text-muted-foreground">
              Only the person who has made the reservation is allowed to drive
              the vehicle. Any discrepancy would attract a penalty of Rs. 2000.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-muted-foreground"></span>
            <span className="text-muted-foreground">
              Accident / Damages to Vehicle must be paid in full at the time of
              return. In such cases the exact amount would be estimated by the
              Service Centre /Location Mechanic.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-muted-foreground"></span>
            <span className="text-muted-foreground">
              Complete Engine warranty is covered by us. Wear and Tear
              (Puncture, Tyre, Brakes, Clutch Plate) and Electrical Fault
              damages will borne by customers.
            </span>
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-4 justify-between w-full rounded-lg border-2 border-primary p-4 text-sm bg-white">
        <h1 className="text-xl font-bold text-secondary">
          Documentation and Security Deposit
        </h1>
      </section>
      <section className="flex flex-col gap-4 justify-between w-full rounded-lg border-2 border-primary p-4 text-sm bg-white">
        <h1 className="text-xl font-bold text-secondary">
          Cancelling and Rescheduling
        </h1>
      </section>
      <section className="flex flex-col gap-4 justify-between w-full rounded-lg border-2 border-primary p-4 text-sm bg-white">
        <h1 className="text-xl font-bold text-secondary">Overall Rating</h1>
        <section className="flex items-center justify-between w-full"></section>
        <section className="flex flex-col items-center justify-between w-fullflex-col">
          {/* design progress bars */}
          <RatingBar rating={5} />
          <RatingBar rating={5} />
          <RatingBar rating={5} />
          <RatingBar rating={5} />
        </section>
      </section>
      <section className="flex flex-col gap-4 justify-between w-full rounded-lg border-2 border-primary p-4 text-sm bg-white">
        <h1 className="text-xl font-bold text-secondary">Reviews</h1>
      </section>
    </>
  );
};

export default ProductDetails;
