import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowForward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" viewBox="0 0 32 32" {...props}>
    <circle cx={16} cy={16} r={16} fill="currentColor" />
    <path fill="#fff" d="M8 16.955h12.604l-3.844 4.107 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8z" />
  </svg>
);
export default SvgArrowForward;
