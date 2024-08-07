import type { SVGProps } from 'react';
const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path fill="currentColor" d="M7 9h12v2H7zM7 3h12v2H7zM7 15h12v2H7zM1 8h4v4H1zM1 2h4v4H1zM1 14h4v4H1z" />
  </svg>
);
export default SvgList;
