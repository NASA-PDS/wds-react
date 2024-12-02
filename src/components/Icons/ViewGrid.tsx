import type { SVGProps } from "react";
const SvgViewGrid = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 6H0V3h5zM5 11H0V8h5zM5 16H0v-3h5zM12 6H7V3h5zM12 11H7V8h5zM12 16H7v-3h5zM19 6h-5V3h5zM19 11h-5V8h5zM19 16h-5v-3h5z"
    />
  </svg>
);
export default SvgViewGrid;
