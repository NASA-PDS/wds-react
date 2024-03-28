import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path fill="currentColor" d="M1 2h18v2H1zM1 9h18v2H1zM1 16h18v2H1z" />
    <path fill="currentColor" d="M12 1h4v4h-4zM4 8h4v4H4zM9 15h4v4H9z" />
  </svg>
);
export default SvgFilter;
