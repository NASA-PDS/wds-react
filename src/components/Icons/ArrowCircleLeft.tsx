import type { SVGProps } from 'react';
const SvgArrowCircleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path stroke="currentColor" d="M10 19.5a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19Z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m8.945 10 3.255 3.233-.772.767L7.4 10l4.028-4 .772.767z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowCircleLeft;
