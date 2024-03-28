import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowDiagonal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      d="m3.774 17.916 11.14-11.14.232 7.027 2.289.076-.364-10.95-10.95-.364.076 2.29 7.028.231-11.14 11.14z"
    />
  </svg>
);
export default SvgArrowDiagonal;
