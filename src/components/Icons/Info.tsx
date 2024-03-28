import * as React from 'react';
import type { SVGProps } from 'react';
const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path stroke="currentColor" d="M10 19.5a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19Z" />
    <path fill="currentColor" d="M9 8h2v8H9z" />
    <circle cx={10} cy={5.5} r={1} fill="currentColor" />
  </svg>
);
export default SvgInfo;
