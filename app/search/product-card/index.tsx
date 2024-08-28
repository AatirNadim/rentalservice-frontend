import Location from "@/app/components/assets/location";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <Card className="w-[340px] overflow-hidden">
      <CardHeader>
        <CardTitle>Activa 5G</CardTitle>
        <CardDescription className="flex items-center space-x-1 text-sm text-gray-500">
          <span className="flex items-center space-x-1">
            <Star size={16} className="text-primary" />
            <span>4.5</span>
          </span>
          <span className="flex items-center">.</span>
          <span>100 reviews</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        <section className="flex items-center justify-between">
          <section className="flex items-center justify-center flex-col gap-3 w-fit">
            <div>
              <h4 className="text-sm font-bold text-muted-foreground">
                Trip Limit
              </h4>
              <h1 className="text-base font-bold">100 km</h1>
            </div>
            <div>
              <h4 className="text-sm font-bold text-muted-foreground">
                Trip Limit
              </h4>
              <h1 className="text-base font-bold">100 km</h1>
            </div>
            <div>
              <h4 className="text-sm font-bold text-muted-foreground">
                Trip Limit
              </h4>
              <h1 className="text-base font-bold">100 km</h1>
            </div>
          </section>
          <section className="flex items-center justify-center">
            <Image
              src=""
              alt="Activa 5G"
              className="w-[100px] h-[100px] object-cover"
              width={100}
              height={100}
            />
          </section>
        </section>
        <section className="flex items-center justify-between">
          <section className="flex flex-col items-start justify-center">
            <h4 className="text-xl font-bold">$320/day</h4>
            <h1 className="text-sm font-bold underline text-muted-foreground">
              View Packages
            </h1>
          </section>
          <Button className="w-[100px] rounded-full bg-black text-white font-semibold hover:bg-black">
            Book Now
          </Button>
        </section>
      </CardContent>
      <CardFooter className="bg-primary-foreground text-black flex items-center justify-between pt-4">
        <section className="flex items-center gap-2 text-sm">
          <Location className="h-4 w-4" />
          <span>Gandhi Bhawan Metro Station</span>
        </section>
        <Select>
          <SelectTrigger className="w-[100px] border-0 bg-transparent">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
