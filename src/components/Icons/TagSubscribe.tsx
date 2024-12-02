import type { SVGProps } from "react";
const SvgTagSubscribe = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 13.353 3.573-3.398L5 6.572zM10 10.442 14.703 6H5.297zM9.029 10.461 5.296 14h9.545l-3.868-3.542-.974.922zM15 13.229V6.572L11.432 9.95z"
    />
    <rect
      width={19}
      height={19}
      x={0.5}
      y={0.5}
      stroke="currentColor"
      rx={9.5}
    />
  </svg>
);
export default SvgTagSubscribe;
