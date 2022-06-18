import React from 'react';

function Editor() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="925"
      height="882"
      fill="none"
      viewBox="0 0 925 882"
      className="editor_desktop"
    >
      <path
        fill="#2D2E40"
        d="M785 446c0 165.685-134.315 300-300 300S185 611.685 185 446v-2c0-165.685 134.315-300 300-300s300 134.315 300 300v2z"
        opacity="0.08"
      ></path>
      <path
        stroke="#2D2E40"
        d="M824.5 442c0 187.501-151.999 339.5-339.5 339.5S145.5 629.501 145.5 442v-2c0-187.501 151.999-339.5 339.5-339.5S824.5 252.499 824.5 440v2z"
        opacity="0.5"
      ></path>
      <path
        stroke="#2D2E40"
        d="M924.5 442c0 242.729-196.771 439.5-439.5 439.5S45.5 684.729 45.5 442v-2C45.5 197.271 242.271.5 485 .5S924.5 197.271 924.5 440v2z"
        opacity="0.25"
      ></path>
      <mask
        id="mask0_103_3"
        style={{ maskType: 'alpha' }}
        width="642"
        height="427"
        x="40"
        y="242"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M667 242H55c-8.284 0-15 6.716-15 15v397c0 8.284 6.716 15 15 15h612c8.284 0 15-6.716 15-15V257c0-8.284-6.716-15-15-15z"
        ></path>
      </mask>
      <g mask="url(#mask0_103_3)">
        <g filter="url(#filter0_d_103_3)">
          <path
            fill="#000"
            d="M667 242H55c-8.284 0-15 6.716-15 15v397c0 8.284 6.716 15 15 15h612c8.284 0 15-6.716 15-15V257c0-8.284-6.716-15-15-15z"
          ></path>
        </g>
        <path
          fill="url(#paint0_linear_103_3)"
          d="M667 242H55c-8.284 0-15 6.716-15 15v397c0 8.284 6.716 15 15 15h612c8.284 0 15-6.716 15-15V257c0-8.284-6.716-15-15-15z"
        ></path>
        <path
          fill="#2D2E40"
          d="M43 367h636c.796 0 1.559.316 2.121.879.563.562.879 1.325.879 2.121v296c0 .796-.316 1.559-.879 2.121A2.996 2.996 0 01679 669H43a2.999 2.999 0 01-3-3V370a2.998 2.998 0 013-3z"
        ></path>
        <path
          fill="#fff"
          d="M263.308 289.709H133.523a3 3 0 00-3 3v131.165a3 3 0 003 3h129.785a3 3 0 003-3V292.709a3 3 0 00-3-3z"
        ></path>
        <path
          fill="#2D2E40"
          d="M198.416 398.248c21.708 0 39.306-17.622 39.306-39.36s-17.598-39.36-39.306-39.36-39.306 17.622-39.306 39.36 17.598 39.36 39.306 39.36z"
        ></path>
        <path
          fill="#fff"
          d="M588.477 289.709H291.939a3 3 0 00-3 3v319.617a3 3 0 003 3h296.538a3 3 0 003-3V292.709a3 3 0 00-3-3z"
        ></path>
      </g>
      <path
        stroke="url(#paint1_linear_103_3)"
        strokeLinecap="round"
        strokeWidth="8"
        d="M249 526c47.125-73.367 81.977-113.013 104.557-118.938 33.87-8.886 23.765 83.14 72.535 72.473 48.77-10.666 54.716-103.974 91.603-108.37 36.887-4.397 56.402 80.946 72.515 88.81 10.742 5.241 24.005-6.094 39.79-34.007"
      ></path>
      <defs>
        <filter
          id="filter0_d_103_3"
          width="722"
          height="507"
          x="0"
          y="222"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="20"></feOffset>
          <feGaussianBlur stdDeviation="20"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.421822 0 0 0 0 0.554338 0 0 0 0 0.89371 0 0 0 0.243444 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_3"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_103_3"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_103_3"
          x1="40"
          x2="572.2"
          y1="361.052"
          y2="715.031"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8F71"></stop>
          <stop offset="1" stopColor="#FF3E55"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_103_3"
          x1="249"
          x2="584.853"
          y1="435.674"
          y2="572.303"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8F71"></stop>
          <stop offset="1" stopColor="#FF3E55"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Editor;
