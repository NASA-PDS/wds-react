import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTagArticle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path stroke="currentColor" d="M.5 10a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" />
    <path fill="currentColor" d="M7 5v10l3-3 3 3V5z" />
  </svg>
);
export default SvgTagArticle;
