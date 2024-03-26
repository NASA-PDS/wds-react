import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="#fff"
      d="M16 6a3 3 0 1 0-2.965-2.54L5.016 7.78a3 3 0 1 0 0 4.443l8.02 4.317a3 3 0 1 0 .949-1.76l-8.02-4.318a3 3 0 0 0 0-.922l8.019-4.318C14.516 5.705 15.224 6 16 6"
    />
  </svg>
);
export default SvgShare;
