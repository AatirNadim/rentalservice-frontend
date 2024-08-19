import SuccessSymbol from "@/app/components/assets/payments/success-symbol";
import Ticket from "@/app/components/assets/payments/ticket";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import React from "react";

const SuccessModal = () => {
  return (
    <Card className=" w-[480px] flex flex-col items-center gap-4 z-50">
      <CardHeader>
        <CardTitle>
          <SuccessSymbol className="w-[250px] h-[250px] text-primary-foreground" />
        </CardTitle>
        <CardDescription className="text-center text-2xl text-black font-bold">
          Payment Successfull
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center text-black text-lg">
        <span>Booking ref no.: TH87793</span>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-center w-full">
        <Button
          className="flex items-center justify-center gap-2 rounded-full w-full font-bold"
          variant="default"
        >
          <span>View Pickup Pass</span>
          <Ticket className="w-6 h-6" />
        </Button>
        <Button className="rounded-full shadow-md bg-primary-foreground w-full font-bold" variant="outline">
          Book another ride
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SuccessModal;
