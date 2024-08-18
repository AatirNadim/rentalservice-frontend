import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Image from "next/image";
import React from "react";

interface TestimonialModalProps {
  imgUrl: string;
  title: string;
  description: string;
  name: string;
  date: string;
}

const TestimonialModal = (props: TestimonialModalProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>{props.description}</CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col items-center justify-center gap-4">
        <Image
          src={props.imgUrl}
          alt="testimonial"
          width={80}
          height={80}
          className="rounded-full border-[6px] border-primary"
        />
        <h1 className="text-lg font-bold text-primary">{props.name}</h1>
        <span className="text-sm text-primary">{props.date}</span>
      </CardFooter>
    </Card>
  );
};

export default TestimonialModal;
