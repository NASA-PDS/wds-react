import type { SVGProps } from 'react';
const SvgSlideshow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path fill="currentColor" d="M4 4h12v12H4zM0 6h2v8H0zM18 6h2v8h-2z" />
  </svg>
);
export default SvgSlideshow;
