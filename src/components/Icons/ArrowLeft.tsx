import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path fill="currentColor" d="M20 8.806H4.246L9.05 3.672 7.485 2 0 10l7.485 8 1.565-1.672-4.804-5.134H20z" />
  </svg>
);
export default SvgArrowLeft;
