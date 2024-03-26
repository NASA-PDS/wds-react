import * as React from 'react';
import type { SVGProps } from 'react';
const SvgViewMosaic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path fill="#fff" d="M12 9H0V3h12zM20 17H8v-6h12zM20 9h-6V3h6zM6 17H0v-6h6z" />
  </svg>
);
export default SvgViewMosaic;
