import { Button } from "@/app/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

interface AvailableModalProps {
  imgUrl: string;
  title: string;
  description: string;
}

const AvailableModal = (props: AvailableModalProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      <section className="flex items-center gap-2">
        <Image
          src={props.imgUrl}
          alt="available"
          width={64}
          height={64}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lPAAAAABJRU5ErkJggg=="
        />
        <section className="flex flex-col items-start">
          <h1 className=" font-semibold">{props.title}</h1>
          <h4 className="text-muted-foreground text-sm">{props.description}</h4>
        </section>
      </section>
      <section className="flex items-center gap-2">
        <Button className="flex items-center justify-center rounded-lg border-2 border-primary bg-white text-black">
          <Plus size={16} className="text-secondary" />
        </Button>
        <span className="text-primary font-semibold">01</span>
        <Button className="flex items-center justify-center rounded-lg border-2 border-primary bg-white text-black">
          <Minus size={16} className="text-secondary" />
        </Button>
      </section>
    </div>
  );
};

export default AvailableModal;
