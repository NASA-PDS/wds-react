import type { SVGProps } from 'react';
const SvgTagInfographic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <circle cx={10} cy={10} r={9.5} stroke="currentColor" />
    <path fill="currentColor" d="M6 7h2v8H6zM9 5h2v10H9zM12 9h2v6h-2z" />
  </svg>
);
export default SvgTagInfographic;
