import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTagTopic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <circle cx={10} cy={10} r={9.5} stroke="#959599" />
    <path fill="#959599" d="M7 5h2v10H7zM11 5h2v10h-2z" />
    <path fill="#959599" d="M5 7h10v2H5zM5 11h10v2H5z" />
  </svg>
);
export default SvgTagTopic;
