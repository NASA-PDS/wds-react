import type { SVGProps } from 'react';
const SvgViewList = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <g fill="currentColor" clipPath="url(#a)">
      <path d="M8 8H0V2h8zM8 18H0v-6h8zM10 2h10v2H10zM10 12h10v2H10zM10 6h6v2h-6zM10 16h6v2h-6z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgViewList;
