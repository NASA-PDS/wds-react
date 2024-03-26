import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M10 12.638 18.082 4.5 20 6.431 10 16.5 0 6.431 1.918 4.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronDown;
