import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m7.362 10 8.138 8.082L13.569 20 3.5 10 13.569 0 15.5 1.918z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronLeft;
