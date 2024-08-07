import type { SVGProps } from 'react';
const SvgTagActivity = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <circle cx={10} cy={10} r={9.5} stroke="currentColor" />
    <path
      fill="currentColor"
      d="M5.7 12.07 5 15.61l3.53-.71zM15.6 7.83l-1.41 1.41-2.82-2.83L12.78 5zM6.42 11.37l4.23-4.25 2.82 2.82-4.23 4.25z"
    />
  </svg>
);
export default SvgTagActivity;
