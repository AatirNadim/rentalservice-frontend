import FailureSymbol from "@/app/components/assets/payments/failure-symbol";
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

const FailureModal = () => {
  return (
    <Card className=" w-[480px] flex flex-col items-center gap-4 z-50">
      <CardHeader>
        <CardTitle>
          <FailureSymbol className="w-[250px] h-[250px] text-primary-foreground" />
        </CardTitle>
        <CardDescription className="text-center text-2xl text-black font-bold">
          Payment Failed
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center text-black text-lg">
        <span>Sorry, we couldn't make your payment</span>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-center w-full">
        <Button
          className="flex items-center justify-center gap-2 rounded-full w-full font-bold"
          variant="default"
        >
          <span>Try Payment Again</span>
        </Button>
        <span className="text-muted-foreground text-center text-sm">
          If your money has been deducted, please contact our admin
        </span>
        <Button
          className="rounded-full shadow-md bg-primary-foreground w-full font-bold"
          variant="outline"
        >
          Contact Us
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FailureModal;
