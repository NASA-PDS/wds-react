import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTagNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <rect width={19} height={19} x={0.5} y={0.5} stroke="#959599" rx={9.5} />
    <path fill="#959599" d="M11.5 14a1.5 1.5 0 0 1-3 0zM6 9c0-2 1.79-4 4-4s4 2 4 4v4H6z" />
    <path fill="#959599" d="M9 5a1 1 0 0 1 2 0v1H9zM5 12l1-1h8l1 1v1H5z" />
  </svg>
);
export default SvgTagNotification;
