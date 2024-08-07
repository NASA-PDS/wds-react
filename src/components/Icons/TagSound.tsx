import type { SVGProps } from 'react';
const SvgTagSound = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path stroke="currentColor" d="M.5 10a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" />
    <path fill="currentColor" fillRule="evenodd" d="M5 13V7h2v6zM9 15V5h2v10zM13 13V7h2v6z" clipRule="evenodd" />
  </svg>
);
export default SvgTagSound;
