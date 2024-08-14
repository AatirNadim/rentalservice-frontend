import React from "react";

interface CarSVGProps {
  className?: string;
  size?: string;
}

const CarSVG = ({ className, size }: CarSVGProps) => {
  return (
    <svg
      width={size ?? "18"}
      height={size ?? "19"}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ""}
    >
      <path
        d="M16.875 7.8125H16.0763L14.1504 4.44172C14.052 4.26956 13.9098 4.12648 13.7383 4.02696C13.5668 3.92743 13.372 3.87501 13.1737 3.875H4.82625C4.62796 3.87501 4.43319 3.92743 4.26168 4.02696C4.09017 4.12648 3.94801 4.26956 3.84961 4.44172L1.92375 7.8125H1.125C0.975816 7.8125 0.832742 7.87176 0.727252 7.97725C0.621763 8.08274 0.5625 8.22582 0.5625 8.375C0.5625 8.52418 0.621763 8.66726 0.727252 8.77275C0.832742 8.87824 0.975816 8.9375 1.125 8.9375H1.6875V14.5625C1.6875 14.8609 1.80603 15.147 2.017 15.358C2.22798 15.569 2.51413 15.6875 2.8125 15.6875H4.5C4.79837 15.6875 5.08452 15.569 5.2955 15.358C5.50647 15.147 5.625 14.8609 5.625 14.5625V13.4375H12.375V14.5625C12.375 14.8609 12.4935 15.147 12.7045 15.358C12.9155 15.569 13.2016 15.6875 13.5 15.6875H15.1875C15.4859 15.6875 15.772 15.569 15.983 15.358C16.194 15.147 16.3125 14.8609 16.3125 14.5625V8.9375H16.875C17.0242 8.9375 17.1673 8.87824 17.2727 8.77275C17.3782 8.66726 17.4375 8.52418 17.4375 8.375C17.4375 8.22582 17.3782 8.08274 17.2727 7.97725C17.1673 7.87176 17.0242 7.8125 16.875 7.8125ZM4.82625 5H13.1737L14.7804 7.8125H3.21961L4.82625 5ZM4.5 14.5625H2.8125V13.4375H4.5V14.5625ZM13.5 14.5625V13.4375H15.1875V14.5625H13.5ZM15.1875 12.3125H2.8125V8.9375H15.1875V12.3125ZM3.9375 10.625C3.9375 10.4758 3.99676 10.3327 4.10225 10.2273C4.20774 10.1218 4.35082 10.0625 4.5 10.0625H5.625C5.77418 10.0625 5.91726 10.1218 6.02275 10.2273C6.12824 10.3327 6.1875 10.4758 6.1875 10.625C6.1875 10.7742 6.12824 10.9173 6.02275 11.0227C5.91726 11.1282 5.77418 11.1875 5.625 11.1875H4.5C4.35082 11.1875 4.20774 11.1282 4.10225 11.0227C3.99676 10.9173 3.9375 10.7742 3.9375 10.625ZM11.8125 10.625C11.8125 10.4758 11.8718 10.3327 11.9773 10.2273C12.0827 10.1218 12.2258 10.0625 12.375 10.0625H13.5C13.6492 10.0625 13.7923 10.1218 13.8977 10.2273C14.0032 10.3327 14.0625 10.4758 14.0625 10.625C14.0625 10.7742 14.0032 10.9173 13.8977 11.0227C13.7923 11.1282 13.6492 11.1875 13.5 11.1875H12.375C12.2258 11.1875 12.0827 11.1282 11.9773 11.0227C11.8718 10.9173 11.8125 10.7742 11.8125 10.625ZM6.75 2.1875C6.75 2.03832 6.80926 1.89524 6.91475 1.78975C7.02024 1.68426 7.16332 1.625 7.3125 1.625H10.6875C10.8367 1.625 10.9798 1.68426 11.0852 1.78975C11.1907 1.89524 11.25 2.03832 11.25 2.1875C11.25 2.33668 11.1907 2.47976 11.0852 2.58525C10.9798 2.69074 10.8367 2.75 10.6875 2.75H7.3125C7.16332 2.75 7.02024 2.69074 6.91475 2.58525C6.80926 2.47976 6.75 2.33668 6.75 2.1875Z"
        fill="#797979"
        fill-opacity="0.8"
      />
    </svg>
  );
};

export default CarSVG;
