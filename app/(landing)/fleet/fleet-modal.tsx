import RightDirection from "@/app/components/assets/right-direction";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const FleetModal = () => {
  return (
    <Card className="h-[310px] w-[302px] bg-white flex flex-col items-center gap-4">
      <CardHeader>
        <Image
          src="/images/fleet/fleet1.png"
          alt="fleet"
          width={262}
          height={160}
        />
        <CardTitle>Activa 5G</CardTitle>
      </CardHeader>
      <CardContent className="w-full px-4 h-fit py-0">
        <CardFooter className="flex items-center justify-between w-full p-0">
          <div className="flex flex-col items-start justify-between w-full">
            <span className="text-sm font-semibold text-muted-foreground">
              Starting
            </span>
            <span className="text-sm font-semibold flex items-center gap-2">
              <span className="text-2xl font-bold">₹320</span>
              <span className="text-xs font-semibold">/day</span>
            </span>
          </div>
          <Button
            className="border border-primary bg-primary-foreground"
            variant={"outline"}
          >
            <RightDirection className="w-4 h-4" />
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default FleetModal;
