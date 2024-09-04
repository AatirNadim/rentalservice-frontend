import React from "react";

interface EngineSVGProps {
  className: string;
}

const EngineSVG = (props: EngineSVGProps) => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className ?? ""}
    >
      <mask id="path-1-inside-1_2009_779" fill="white">
        <path d="M17.9167 7.50001H17.5V7.08334C17.5 5.93501 16.565 5.00001 15.4167 5.00001H13.3333V2.50001H15.8333C16.2933 2.50001 16.6667 2.12668 16.6667 1.66668C16.6667 1.20668 16.2933 0.833344 15.8333 0.833344H9.16667C8.70667 0.833344 8.33333 1.20668 8.33333 1.66668C8.33333 2.12668 8.70667 2.50001 9.16667 2.50001H11.6667V5.00001H9.53083C8.78667 5.00001 8.08667 5.32834 7.61083 5.90001L6.27667 7.50001H6.25C5.10167 7.50001 4.16667 8.43501 4.16667 9.58334V10.8333H1.66667V8.33334C1.66667 7.87334 1.29333 7.50001 0.833333 7.50001C0.373333 7.50001 0 7.87334 0 8.33334V15C0 15.46 0.373333 15.8333 0.833333 15.8333C1.29333 15.8333 1.66667 15.46 1.66667 15V12.5H4.16667V14.3092C4.16667 14.9767 4.42667 15.605 4.89917 16.0775L6.4225 17.6008C6.89417 18.0733 7.5225 18.3333 8.19083 18.3333H15.4167C16.4233 18.3333 17.2642 17.6167 17.4583 16.6667H17.9167C19.065 16.6667 20 15.7317 20 14.5833V9.58334C20 8.43501 19.065 7.50001 17.9167 7.50001ZM18.3333 14.5833C18.3333 14.8133 18.1467 15 17.9167 15H16.6667C16.2067 15 15.8333 15.3733 15.8333 15.8333V16.25C15.8333 16.48 15.6467 16.6667 15.4167 16.6667H8.19083C7.96833 16.6667 7.75833 16.58 7.60083 16.4225L6.0775 14.8992C5.92 14.7417 5.83333 14.5325 5.83333 14.3092V9.58334C5.83333 9.35334 6.02 9.16668 6.25 9.16668H6.66667C6.91417 9.16668 7.14833 9.05668 7.30667 8.86668L8.89083 6.96668C9.04917 6.77584 9.2825 6.66668 9.53083 6.66668H15.4167C15.6467 6.66668 15.8333 6.85334 15.8333 7.08334V8.33334C15.8333 8.79334 16.2067 9.16668 16.6667 9.16668H17.9167C18.1467 9.16668 18.3333 9.35334 18.3333 9.58334V14.5833Z" />
      </mask>
      <path
        d="M17.5 7.50001H15C15 8.88072 16.1193 10 17.5 10V7.50001ZM13.3333 5.00001H10.8333C10.8333 6.38072 11.9526 7.50001 13.3333 7.50001V5.00001ZM13.3333 2.50001V1.01328e-05C11.9526 1.01328e-05 10.8333 1.1193 10.8333 2.50001L13.3333 2.50001ZM11.6667 2.50001H14.1667C14.1667 1.1193 13.0474 1.01328e-05 11.6667 1.01328e-05V2.50001ZM11.6667 5.00001V7.50001C13.0474 7.50001 14.1667 6.38072 14.1667 5.00001L11.6667 5.00001ZM7.61083 5.90001L9.5309 7.50106L9.5323 7.49937L7.61083 5.90001ZM6.27667 7.50001V10C7.01835 10 7.72174 9.67069 8.19673 9.10106L6.27667 7.50001ZM4.16667 10.8333V13.3333C5.54738 13.3333 6.66667 12.2141 6.66667 10.8333H4.16667ZM1.66667 10.8333H-0.833333C-0.833333 12.2141 0.285955 13.3333 1.66667 13.3333L1.66667 10.8333ZM1.66667 12.5V10C0.285955 10 -0.833333 11.1193 -0.833333 12.5H1.66667ZM4.16667 12.5H6.66667C6.66667 11.1193 5.54738 10 4.16667 10L4.16667 12.5ZM4.89917 16.0775L6.66693 14.3097L6.66693 14.3097L4.89917 16.0775ZM6.4225 17.6008L8.19183 15.8346L8.19027 15.8331L6.4225 17.6008ZM17.4583 16.6667V14.1667C16.2706 14.1667 15.2468 15.0024 15.009 16.1661L17.4583 16.6667ZM7.60083 16.4225L5.83307 18.1903L5.83307 18.1903L7.60083 16.4225ZM6.0775 14.8992L7.84527 13.1314L7.84527 13.1314L6.0775 14.8992ZM7.30667 8.86668L5.38653 7.26572L5.38611 7.26622L7.30667 8.86668ZM8.89083 6.96668L10.811 8.56764L10.8148 8.563L8.89083 6.96668ZM17.9167 5.00001H17.5V10H17.9167V5.00001ZM20 7.50001V7.08334H15V7.50001H20ZM20 7.08334C20 4.5543 17.9457 2.50001 15.4167 2.50001V7.50001C15.1843 7.50001 15 7.31572 15 7.08334H20ZM15.4167 2.50001H13.3333V7.50001H15.4167V2.50001ZM15.8333 5.00001V2.50001H10.8333V5.00001H15.8333ZM13.3333 5.00001H15.8333V1.01328e-05H13.3333V5.00001ZM15.8333 5.00001C17.674 5.00001 19.1667 3.50739 19.1667 1.66668H14.1667C14.1667 0.745965 14.9126 1.01328e-05 15.8333 1.01328e-05V5.00001ZM19.1667 1.66668C19.1667 -0.174035 17.674 -1.66666 15.8333 -1.66666V3.33334C14.9126 3.33334 14.1667 2.58739 14.1667 1.66668H19.1667ZM15.8333 -1.66666H9.16667V3.33334H15.8333V-1.66666ZM9.16667 -1.66666C7.32595 -1.66666 5.83333 -0.174035 5.83333 1.66668H10.8333C10.8333 2.58739 10.0874 3.33334 9.16667 3.33334V-1.66666ZM5.83333 1.66668C5.83333 3.50739 7.32595 5.00001 9.16667 5.00001V1.01328e-05C10.0874 1.01328e-05 10.8333 0.745965 10.8333 1.66668H5.83333ZM9.16667 5.00001H11.6667V1.01328e-05H9.16667V5.00001ZM9.16667 2.50001V5.00001H14.1667V2.50001H9.16667ZM11.6667 2.50001H9.53083V7.50001H11.6667V2.50001ZM9.53083 2.50001C8.0439 2.50001 6.63997 3.15859 5.68936 4.30065L9.5323 7.49937C9.53359 7.49783 9.53405 7.49758 9.53357 7.49795C9.53316 7.49827 9.53242 7.49875 9.53144 7.49921C9.53046 7.49967 9.52959 7.49994 9.52904 7.50006C9.52841 7.5002 9.52886 7.50001 9.53083 7.50001V2.50001ZM5.69077 4.29896L4.35661 5.89896L8.19673 9.10106L9.53089 7.50106L5.69077 4.29896ZM6.27667 5.00001H6.25V10H6.27667V5.00001ZM6.25 5.00001C3.72095 5.00001 1.66667 7.0543 1.66667 9.58334H6.66667C6.66667 9.81572 6.48238 10 6.25 10V5.00001ZM1.66667 9.58334V10.8333H6.66667V9.58334H1.66667ZM4.16667 8.33334H1.66667V13.3333H4.16667V8.33334ZM4.16667 10.8333V8.33334H-0.833333V10.8333H4.16667ZM4.16667 8.33334C4.16667 6.49263 2.67405 5.00001 0.833333 5.00001V10C-0.0873786 10 -0.833333 9.25406 -0.833333 8.33334H4.16667ZM0.833333 5.00001C-1.00738 5.00001 -2.5 6.49263 -2.5 8.33334H2.5C2.5 9.25406 1.75405 10 0.833333 10V5.00001ZM-2.5 8.33334V15H2.5V8.33334H-2.5ZM-2.5 15C-2.5 16.8407 -1.00738 18.3333 0.833333 18.3333V13.3333C1.75405 13.3333 2.5 14.0793 2.5 15H-2.5ZM0.833333 18.3333C2.67405 18.3333 4.16667 16.8407 4.16667 15H-0.833333C-0.833333 14.0793 -0.0873786 13.3333 0.833333 13.3333V18.3333ZM4.16667 15V12.5H-0.833333V15H4.16667ZM1.66667 15H4.16667V10H1.66667V15ZM1.66667 12.5V14.3092H6.66667V12.5H1.66667ZM1.66667 14.3092C1.66667 15.6394 2.18985 16.9037 3.1314 17.8453L6.66693 14.3097L6.66667 14.3092H1.66667ZM3.1314 17.8453L4.65473 19.3686L8.19027 15.8331L6.66693 14.3097L3.1314 17.8453ZM4.65317 19.367C5.59514 20.3107 6.86059 20.8333 8.19083 20.8333V15.8333C8.18607 15.8333 8.18427 15.8329 8.18487 15.833C8.18544 15.8331 8.18713 15.8336 8.18943 15.8345C8.19174 15.8355 8.1935 15.8365 8.19446 15.8371C8.19544 15.8378 8.19449 15.8373 8.19183 15.8346L4.65317 19.367ZM8.19083 20.8333H15.4167V15.8333H8.19083V20.8333ZM15.4167 20.8333C17.6381 20.8333 19.4811 19.2543 19.9077 17.1673L15.009 16.1661C15.0472 15.979 15.2086 15.8333 15.4167 15.8333V20.8333ZM17.4583 19.1667H17.9167V14.1667H17.4583V19.1667ZM17.9167 19.1667C20.4457 19.1667 22.5 17.1124 22.5 14.5833H17.5C17.5 14.351 17.6843 14.1667 17.9167 14.1667V19.1667ZM22.5 14.5833V9.58334H17.5V14.5833H22.5ZM22.5 9.58334C22.5 7.0543 20.4457 5.00001 17.9167 5.00001V10C17.6843 10 17.5 9.81572 17.5 9.58334H22.5ZM15.8333 14.5833C15.8333 13.4326 16.766 12.5 17.9167 12.5V17.5C19.5274 17.5 20.8333 16.1941 20.8333 14.5833H15.8333ZM17.9167 12.5H16.6667V17.5H17.9167V12.5ZM16.6667 12.5C14.826 12.5 13.3333 13.9926 13.3333 15.8333H18.3333C18.3333 16.7541 17.5874 17.5 16.6667 17.5V12.5ZM13.3333 15.8333V16.25H18.3333V15.8333H13.3333ZM13.3333 16.25C13.3333 15.0993 14.266 14.1667 15.4167 14.1667V19.1667C17.0274 19.1667 18.3333 17.8607 18.3333 16.25H13.3333ZM15.4167 14.1667H8.19083V19.1667H15.4167V14.1667ZM8.19083 14.1667C8.6293 14.1667 9.05579 14.3419 9.3686 14.6547L5.83307 18.1903C6.46087 18.8181 7.30737 19.1667 8.19083 19.1667V14.1667ZM9.3686 14.6547L7.84527 13.1314L4.30973 16.6669L5.83307 18.1903L9.3686 14.6547ZM7.84527 13.1314C8.15713 13.4433 8.33333 13.8702 8.33333 14.3092H3.33333C3.33333 15.1948 3.68287 16.0401 4.30973 16.6669L7.84527 13.1314ZM8.33333 14.3092V9.58334H3.33333V14.3092H8.33333ZM8.33333 9.58334C8.33333 10.7341 7.40071 11.6667 6.25 11.6667V6.66668C4.63929 6.66668 3.33333 7.97263 3.33333 9.58334H8.33333ZM6.25 11.6667H6.66667V6.66668H6.25V11.6667ZM6.66667 11.6667C7.65805 11.6667 8.59514 11.2256 9.22722 10.4671L5.38611 7.26622C5.70152 6.88773 6.17028 6.66668 6.66667 6.66668V11.6667ZM9.22681 10.4676L10.811 8.56763L6.97069 5.36572L5.38653 7.26572L9.22681 10.4676ZM10.8148 8.563C10.4959 8.94735 10.0228 9.16668 9.53083 9.16668V4.16668C8.54223 4.16668 7.6024 4.60434 6.96684 5.37035L10.8148 8.563ZM9.53083 9.16668H15.4167V4.16668H9.53083V9.16668ZM15.4167 9.16668C14.266 9.16668 13.3333 8.23406 13.3333 7.08334H18.3333C18.3333 5.47263 17.0274 4.16668 15.4167 4.16668V9.16668ZM13.3333 7.08334V8.33334H18.3333V7.08334H13.3333ZM13.3333 8.33334C13.3333 10.1741 14.826 11.6667 16.6667 11.6667V6.66668C17.5874 6.66668 18.3333 7.41263 18.3333 8.33334H13.3333ZM16.6667 11.6667H17.9167V6.66668H16.6667V11.6667ZM17.9167 11.6667C16.766 11.6667 15.8333 10.7341 15.8333 9.58334H20.8333C20.8333 7.97263 19.5274 6.66668 17.9167 6.66668V11.6667ZM15.8333 9.58334V14.5833H20.8333V9.58334H15.8333Z"
        fill="#0056F1"
        mask="url(#path-1-inside-1_2009_779)"
      />
    </svg>
  );
};

export default EngineSVG;
