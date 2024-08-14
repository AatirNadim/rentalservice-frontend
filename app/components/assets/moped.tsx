import React from "react";

interface MopedProps {
  className?: string;
  size?: string;
  fill?: string;
}

const Moped = ({ className, size, fill }: MopedProps) => {
  return (
    <svg
      width={size ?? "20"}
      height={size ?? "21"}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ""}
    >
      <path
        d="M16.25 3.62496H13.0625C12.9191 2.91853 12.5358 2.28341 11.9777 1.82722C11.4195 1.37103 10.7208 1.12183 10 1.12183C9.27915 1.12183 8.58047 1.37103 8.02234 1.82722C7.46421 2.28341 7.08095 2.91853 6.9375 3.62496H3.75C3.58424 3.62496 3.42527 3.69081 3.30806 3.80802C3.19085 3.92523 3.125 4.0842 3.125 4.24996C3.125 4.41572 3.19085 4.57469 3.30806 4.6919C3.42527 4.80911 3.58424 4.87496 3.75 4.87496H6.9375C7.07299 5.53419 7.41769 6.13207 7.92031 6.57965C7.04981 6.97864 6.312 7.61892 5.79439 8.42456C5.27678 9.23019 5.00108 10.1674 5 11.125V16.125C5 16.4565 5.1317 16.7744 5.36612 17.0088C5.60054 17.2433 5.91848 17.375 6.25 17.375H7.5C7.5 18.038 7.76339 18.6739 8.23223 19.1427C8.70107 19.6116 9.33696 19.875 10 19.875C10.663 19.875 11.2989 19.6116 11.7678 19.1427C12.2366 18.6739 12.5 18.038 12.5 17.375H13.75C14.0815 17.375 14.3995 17.2433 14.6339 17.0088C14.8683 16.7744 15 16.4565 15 16.125V11.125C14.9989 10.1674 14.7232 9.23019 14.2056 8.42456C13.688 7.61892 12.9502 6.97864 12.0797 6.57965C12.5823 6.13207 12.927 5.53419 13.0625 4.87496H16.25C16.4158 4.87496 16.5747 4.80911 16.6919 4.6919C16.8092 4.57469 16.875 4.41572 16.875 4.24996C16.875 4.0842 16.8092 3.92523 16.6919 3.80802C16.5747 3.69081 16.4158 3.62496 16.25 3.62496ZM11.25 17.375C11.25 17.7065 11.1183 18.0244 10.8839 18.2588C10.6495 18.4933 10.3315 18.625 10 18.625C9.66848 18.625 9.35054 18.4933 9.11612 18.2588C8.8817 18.0244 8.75 17.7065 8.75 17.375V13.625C8.75 13.2934 8.8817 12.9755 9.11612 12.7411C9.35054 12.5067 9.66848 12.375 10 12.375C10.3315 12.375 10.6495 12.5067 10.8839 12.7411C11.1183 12.9755 11.25 13.2934 11.25 13.625V17.375ZM13.75 11.125V16.125H12.5V13.625C12.5 12.9619 12.2366 12.326 11.7678 11.8572C11.2989 11.3884 10.663 11.125 10 11.125C9.33696 11.125 8.70107 11.3884 8.23223 11.8572C7.76339 12.326 7.5 12.9619 7.5 13.625V16.125H6.25V11.125C6.25 10.1304 6.64509 9.17657 7.34835 8.47331C8.05161 7.77005 9.00544 7.37496 10 7.37496C10.9946 7.37496 11.9484 7.77005 12.6517 8.47331C13.3549 9.17657 13.75 10.1304 13.75 11.125ZM8.125 4.24996C8.125 3.87912 8.23497 3.51661 8.44099 3.20826C8.64702 2.89992 8.93986 2.6596 9.28247 2.51768C9.62508 2.37577 10.0021 2.33864 10.3658 2.41099C10.7295 2.48333 11.0636 2.66191 11.3258 2.92413C11.588 3.18636 11.7666 3.52045 11.839 3.88416C11.9113 4.24788 11.8742 4.62488 11.7323 4.96749C11.5904 5.3101 11.35 5.60294 11.0417 5.80896C10.7334 6.01499 10.3708 6.12496 10 6.12496C9.50272 6.12496 9.0258 5.92741 8.67417 5.57578C8.32254 5.22415 8.125 4.74724 8.125 4.24996Z"
        fill={fill ?? "#242424"}
      />
    </svg>
  );
};

export default Moped;
