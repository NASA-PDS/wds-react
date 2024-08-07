import type { SVGProps } from 'react';
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path fill="currentColor" d="M0 0h20v3.893H0zM0 8.054h20v3.893H0zM0 16.107h20V20H0z" />
  </svg>
);
export default SvgMenu;
