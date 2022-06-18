import React from 'react';

function Circles() {
  return (
    <div>
      <svg
        width="1014"
        height="1018"
        xmlns="http://www.w3.org/2000/svg"
        className="circles-svg"
      >
        <g transform="matrix(1 0 0 -1 0 1018)" fill="none" fillRule="evenodd">
          <rect
            fill="#3E4062"
            x="213"
            y="214"
            width="588"
            height="590"
            rx="294"
          />
          <rect
            stroke="#878D92"
            opacity=".5"
            x=".5"
            y=".5"
            width="1013"
            height="1017"
            rx="506.5"
          />
          <rect
            stroke="#878D92"
            x="170.5"
            y="171.5"
            width="673"
            height="675"
            rx="336.5"
          />
        </g>
      </svg>
    </div>
  );
}

export default Circles;
