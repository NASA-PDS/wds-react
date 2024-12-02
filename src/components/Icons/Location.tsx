import type { SVGProps } from "react";
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path fill="currentColor" d="M8.479 11.724 11.124 20 17 0 0 11.465z" />
  </svg>
);
export default SvgLocation;
