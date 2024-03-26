import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTagSlideshow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <circle cx={10} cy={10} r={9.5} stroke="#959599" />
    <path fill="#959599" d="M7 5h6v10H7zM4 7h2v6H4zM14 7h2v6h-2z" />
  </svg>
);
export default SvgTagSlideshow;
