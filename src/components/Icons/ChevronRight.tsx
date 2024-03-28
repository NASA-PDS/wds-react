import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.638 10 4.5 1.918 6.431 0 16.5 10 6.431 20 4.5 18.082z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronRight;
