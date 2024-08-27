import React from "react";

interface TestimonialHueProps {
  className?: string;
}

const TestimonialHue = (props: TestimonialHueProps) => {
  return (
    <svg
      width="422"
      height="849"
      viewBox="0 0 422 849"
      fill="none"
      className={props.className || ""}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_448_2492)">
        <circle cx="-2.5" cy="424.5" r="124.5" fill="#0056F1" />
      </g>
      <defs>
        <filter
          id="filter0_f_448_2492"
          x="-427"
          y="0"
          width="849"
          height="849"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="150"
            result="effect1_foregroundBlur_448_2492"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default TestimonialHue;
