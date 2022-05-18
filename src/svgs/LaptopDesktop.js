import React from 'react';

function LaptopDesktop() {
  return (
    <div className="laptop_desktop_svg">
      <svg width="974" height="786" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="0%" y1="27.97%" x2="100%" y2="72.03%" id="c">
            <stop stop-color="#FF8F71" offset="0%" />
            <stop stop-color="#FF3E55" offset="100%" />
          </linearGradient>
          <filter
            x="-16.5%"
            y="-28.5%"
            width="132.9%"
            height="157.1%"
            filterUnits="objectBoundingBox"
            id="a"
          >
            <feOffset dy="20" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur
              stdDeviation="20"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0.421821759 0 0 0 0 0.554338424 0 0 0 0 0.893710371 0 0 0 0.243444056 0"
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <rect id="b" x="0" y="0" width="506" height="335.872" rx="3" />
          <path d="M3 0h692.9a3 3 0 013 3v14.105H0V3a3 3 0 013-3z" id="e" />
        </defs>
        <g fill="none" fill-rule="evenodd">
          <rect
            stroke="#2D2E40"
            opacity=".5"
            transform="matrix(1 0 0 -1 0 786)"
            x="59.5"
            y="59.5"
            width="665"
            height="667"
            rx="332.5"
          />
          <rect
            stroke="#2D2E40"
            opacity=".25"
            transform="matrix(1 0 0 -1 0 786)"
            x=".5"
            y=".5"
            width="783"
            height="785"
            rx="391.5"
          />
          <rect
            fill="#2D2E40"
            opacity=".08"
            transform="matrix(1 0 0 -1 0 786)"
            x="117"
            y="117"
            width="550"
            height="552"
            rx="275"
          />
          <g transform="translate(190 192)" filter="url(#a)">
            <rect
              fill="#535353"
              fill-rule="nonzero"
              x="82"
              y="16"
              width="538"
              height="368"
              rx="12"
            />
            <rect
              fill="#1D1D25"
              fill-rule="nonzero"
              x="85"
              y="19"
              width="532"
              height="362"
              rx="10"
            />
            <g transform="translate(99 32)">
              <mask id="d" fill="#fff">
                <use xlinkHref="#b" />
              </mask>
              <use fill="url(#c)" fill-rule="nonzero" xlinkHref="#b" />
              <rect
                fill="#F9F6F6"
                fill-rule="nonzero"
                mask="url(#d)"
                x="-.325"
                y="60.293"
                width="506"
                height="275.838"
                rx="3"
              />
              <g mask="url(#d)" fill-rule="nonzero">
                <g transform="translate(71.475 37.46)">
                  <rect fill="#FFF" width="106.646" height="256.541" rx="3" />
                  <rect
                    fill="#FFF"
                    x="124.798"
                    width="238.251"
                    height="256.541"
                    rx="3"
                  />
                  <rect
                    fill="#E7E7E7"
                    x="135.009"
                    y="13.622"
                    width="217.83"
                    height="60.162"
                    rx="3"
                  />
                  <rect
                    fill="#E7E7E7"
                    x="135.009"
                    y="86.27"
                    width="64.668"
                    height="60.162"
                    rx="3"
                  />
                  <rect
                    fill="#E7E7E7"
                    x="215.561"
                    y="86.27"
                    width="137.278"
                    height="60.162"
                    rx="3"
                  />
                </g>
              </g>
            </g>
            <g
              transform="translate(349)"
              fill="#4A5166"
              fill-rule="nonzero"
              opacity=".098"
            >
              <rect width="13.6" height="3" rx="1.5" />
              <rect x="16.8" width="3.2" height="3" rx="1.5" />
            </g>
            <g transform="translate(0 380)">
              <mask id="f" fill="#fff">
                <use xlinkHref="#e" />
              </mask>
              <use fill="#52526F" fill-rule="nonzero" xlinkHref="#e" />
              <rect
                fill="#2F2F47"
                fill-rule="nonzero"
                mask="url(#f)"
                x="292.371"
                y="-41.908"
                width="114.156"
                height="52.171"
                rx="10"
              />
            </g>
            <path
              d="M0 397h699a6 6 0 01-6 6H6a6 6 0 01-6-6z"
              fill="#393A56"
              fill-rule="nonzero"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default LaptopDesktop;
