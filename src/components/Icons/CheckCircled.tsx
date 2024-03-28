import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheckCircled = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18m-1.503-5.089 6.707-6.707L13.79 5.79l-5.293 5.293L6.204 8.79 4.79 10.204z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckCircled;
