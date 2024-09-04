import Image from "next/image";
import React from "react";

interface SpecDialogProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SpecDialog = (props: SpecDialogProps) => {
  return (
    <div className="rounded-lg flex flex-col gap-2 p-4 bg-gradient-to-b from-[#0056f11a] to-primary-foreground from-0% to-100% min-w-[116px] h-[100px]">
      {props.icon}
      <h1 className="text-sm font-bold text-primary">{props.title}</h1>
      <h4 className="text-xs text-muted-foreground">{props.description}</h4>
    </div>
  );
};

export default SpecDialog;
