import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import React from "react";

interface CardWrapperProps {
  svg: React.ReactNode;
  title: string;
  description: string;
}

const CardWrapper = ({ svg, title, description }: CardWrapperProps) => {
  return (
    <Card className="w-[306px] flex flex-col items-center justify-center text-center mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          {svg}
        </CardTitle>
        <CardDescription className="text-black font-bold text-2xl">
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p
          className="text-base text-muted-foreground"
        >{description}</p>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export default CardWrapper;
