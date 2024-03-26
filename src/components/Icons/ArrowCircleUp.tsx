import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCircleUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path stroke="#fff" d="M.5 10a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M10 8.945 6.767 12.2 6 11.428 10 7.4l4 4.028-.767.772z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowCircleUp;
