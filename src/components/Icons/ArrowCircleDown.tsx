import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCircleDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <circle cx={10} cy={10} r={9.5} stroke="currentColor" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 11.055 13.233 7.8l.767.772-4 4.028-4-4.028.767-.772z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowCircleDown;
