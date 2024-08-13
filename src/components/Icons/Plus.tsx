import type { SVGProps } from 'react';
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path fill="currentColor" d="M0 9h20v2H0z" />
    <path fill="currentColor" d="M9 20V0h2v20z" />
  </svg>
);
export default SvgPlus;
