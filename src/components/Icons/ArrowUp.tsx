import type { SVGProps } from 'react';
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path fill="currentColor" d="M11.194 20V4.246l5.134 4.804L18 7.485 10 0 2 7.485 3.672 9.05l5.134-4.804V20z" />
  </svg>
);
export default SvgArrowUp;
