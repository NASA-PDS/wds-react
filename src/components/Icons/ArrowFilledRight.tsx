import type { SVGProps } from "react";
const SvgArrowFilledRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path fill="currentColor" d="M7 17V3l8.4 7z" />
  </svg>
);
export default SvgArrowFilledRight;
