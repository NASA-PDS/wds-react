import type { SVGProps } from 'react';
const SvgTagVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <circle cx={10} cy={10} r={9.5} stroke="currentColor" />
    <path fill="currentColor" d="M15 9.995 7 14.66V5.33z" />
  </svg>
);
export default SvgTagVideo;
