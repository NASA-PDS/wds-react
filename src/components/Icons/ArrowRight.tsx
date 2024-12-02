import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 11.194h15.755l-4.805 5.134L12.515 18 20 10l-7.485-8-1.565 1.672 4.805 5.134H0z"
    />
  </svg>
);
export default SvgArrowRight;
