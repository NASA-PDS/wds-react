import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTagMediaAdvisory = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <circle cx={10} cy={10} r={9.5} stroke="currentColor" />
    <path fill="currentColor" d="M5 8h8v4H5zM6.5 12h2l1 3h-2z" />
    <path fill="currentColor" d="m8 9 6-4v10l-6-4z" />
  </svg>
);
export default SvgTagMediaAdvisory;
