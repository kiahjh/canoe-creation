import React from 'react';

interface Props {
  className?: string;
}

const Arrow: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 800 400"
      className={className}
    >
      <g
        stroke-width="12"
        stroke="#059669"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        transform="matrix(0.7660444431189779,-0.6427876096865396,0.6427876096865396,0.7660444431189779,-185.532821122207,350.69726662702465)"
      >
        <path d="M355 050Q188 150 755 450 " marker-end="url(#SvgjsMarker1411)"></path>
      </g>
      <defs>
        <marker
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          viewBox="0 0 10 10"
          orient="auto"
          id="SvgjsMarker1411"
        >
          <polyline
            points="0,5 5,2.5 0,0"
            fill="none"
            stroke-width="1.6666666666666667"
            stroke="#059669"
            stroke-linecap="round"
            transform="matrix(1,0,0,1,1.6666666666666667,2.5)"
            stroke-linejoin="round"
          ></polyline>
        </marker>
      </defs>
    </svg>
  );
};

export default Arrow;
