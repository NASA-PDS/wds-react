import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTagAll = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <circle cx={10} cy={10} r={9.5} stroke="currentColor" />
    <path fill="currentColor" d="M9 9h6v6H9zM7 7h1v7H7zM5 5h1v7H5z" />
    <path fill="currentColor" d="M7 7h7v1H7zM5 5h7v1H5z" />
  </svg>
);
export default SvgTagAll;
