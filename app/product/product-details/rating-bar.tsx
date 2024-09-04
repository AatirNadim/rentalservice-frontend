import React from "react";

interface RatingBarProps {
  rating: number;
}

const RatingBar = (props: RatingBarProps) => {
  return (
    <section className="flex items-center justify-between w-full">
      <span className="text-muted-foreground">5 Star</span>
      <div className=" bg-gray-200 rounded-full w-3/5">
        <div className="bg-primary h-2 rounded-full"></div>
      </div>
      <span className="text-muted-foreground">{props.rating}</span>
    </section>
  );
};

export default RatingBar;
