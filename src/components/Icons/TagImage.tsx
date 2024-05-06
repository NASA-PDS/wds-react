import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTagImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <circle cx={10} cy={10} r={9.5} stroke="currentColor" />
    <path fill="currentColor" d="M15 6a2 2 0 1 1-4.001 0A2 2 0 0 1 15 6M14 9l3 5H3.5L8 6l3.7 6.7z" />
  </svg>
);
export default SvgTagImage;
