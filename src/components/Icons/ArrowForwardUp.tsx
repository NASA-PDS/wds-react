import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowForwardUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" viewBox="0 0 25 25" {...props}>
    <circle cx={12.5} cy={12.5} r={12.5} fill="currentColor" />
    <path
      fill="#fff"
      d="m8.608 17.447 6.963-6.962.145 4.392 1.43.047-.227-6.843-6.843-.228.047 1.43 4.392.146-6.962 6.963z"
    />
  </svg>
);
export default SvgArrowForwardUp;
