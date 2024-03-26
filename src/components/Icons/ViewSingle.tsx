import * as React from 'react';
import type { SVGProps } from 'react';
const SvgViewSingle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path fill="#fff" d="M20 13H0V3h20zM0 15h8v2H0z" />
  </svg>
);
export default SvgViewSingle;
