import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path fill="#fff" d="M5 17V3l12 7z" />
  </svg>
);
export default SvgPlay;
