import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCircleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <circle cx={10} cy={10} r={9.5} stroke="#fff" transform="rotate(-90 10 10)" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M11.055 10 7.8 6.767 8.572 6l4.028 4-4.028 4-.772-.767z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowCircleRight;
