import React from 'react';

function EditorMobile() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="406"
      height="331"
      fill="none"
      viewBox="0 0 406 331"
      className="editor_mobile"
    >
      <path
        fill="#2D2E40"
        d="M315 164.5c0 61.58-49.92 111.5-111.5 111.5S92 226.08 92 164.5 141.92 53 203.5 53 315 102.92 315 164.5z"
        opacity="0.08"
      ></path>
      <path
        stroke="#2D2E40"
        d="M328.5 163c0 69.312-56.188 125.5-125.5 125.5S77.5 232.312 77.5 163 133.688 37.5 203 37.5 328.5 93.688 328.5 163z"
        opacity="0.5"
      ></path>
      <path
        stroke="#2D2E40"
        d="M365.5 163c0 89.746-72.754 162.5-162.5 162.5S40.5 252.746 40.5 163 113.254.5 203 .5 365.5 73.254 365.5 163z"
        opacity="0.25"
      ></path>
      <mask
        id="mask0_103_19"
        style={{ maskType: 'alpha' }}
        width="326"
        height="217"
        x="40"
        y="54"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M361 54H45a5 5 0 00-5 5v207a5 5 0 005 5h316a5 5 0 005-5V59a5 5 0 00-5-5z"
        ></path>
      </mask>
      <g mask="url(#mask0_103_19)">
        <g filter="url(#filter0_d_103_19)">
          <path
            fill="#000"
            d="M361 54H45a5 5 0 00-5 5v207a5 5 0 005 5h316a5 5 0 005-5V59a5 5 0 00-5-5z"
          ></path>
        </g>
        <path
          fill="url(#paint0_linear_103_19)"
          d="M361 54H45a5 5 0 00-5 5v207a5 5 0 005 5h316a5 5 0 005-5V59a5 5 0 00-5-5z"
        ></path>
        <path
          fill="#2D2E40"
          d="M43 117.525h320a2.991 2.991 0 012.121.879 2.991 2.991 0 01.879 2.121V268c0 .796-.316 1.559-.879 2.121A2.996 2.996 0 01363 271H43a2.999 2.999 0 01-3-3V120.525a2.998 2.998 0 013-3z"
        ></path>
        <path
          fill="#fff"
          d="M151.917 78.246h-62.95a3 3 0 00-3 3v63.707a3 3 0 003 3h62.95a3 3 0 003-3V81.246a3 3 0 00-3-3z"
        ></path>
        <path
          fill="#2D2E40"
          d="M120.442 133.405c11.023 0 19.959-8.956 19.959-20.003s-8.936-20.003-19.959-20.003-19.959 8.956-19.959 20.003 8.936 20.003 19.959 20.003z"
        ></path>
        <path
          fill="#fff"
          d="M317.033 78.246H169.408a3 3 0 00-3 3v159.478a3 3 0 003 3h147.625a3 3 0 003-3V81.246a3 3 0 00-3-3z"
        ></path>
      </g>
      <path
        stroke="url(#paint1_linear_103_19)"
        strokeLinecap="round"
        strokeWidth="8"
        d="M146 198c23.871-37.394 41.526-57.6 52.964-60.62 17.158-4.53 12.04 42.374 36.744 36.938 24.705-5.436 27.717-52.994 46.403-55.234 18.685-2.241 28.57 41.257 36.733 45.264 5.441 2.672 12.16-3.105 20.156-17.332"
      ></path>
      <defs>
        <filter
          id="filter0_d_103_19"
          width="406"
          height="297"
          x="0"
          y="34"
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
            result="effect1_dropShadow_103_19"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_103_19"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_103_19"
          x1="40"
          x2="310.256"
          y1="114.426"
          y2="294.319"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8F71"></stop>
          <stop offset="1" stopColor="#FF3E55"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_103_19"
          x1="146"
          x2="315.946"
          y1="151.882"
          y2="221.443"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8F71"></stop>
          <stop offset="1" stopColor="#FF3E55"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default EditorMobile;
