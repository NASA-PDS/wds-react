import type { SVGProps } from "react";
const SvgCollapse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      d="m7.633 13.078-5.657 5.657-.707-.707 5.657-5.657zM12.563 6.735l5.657-5.657.707.707-5.657 5.657z"
    />
    <path stroke="currentColor" strokeWidth={2} d="M1 12h7v7M19 8h-7V1" />
  </svg>
);
export default SvgCollapse;
