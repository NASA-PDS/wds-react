import type { SVGProps } from "react";
const SvgTagLaunch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <circle cx={10} cy={10} r={9.5} stroke="currentColor" />
    <path fill="currentColor" d="m9 4 1-1 1 1v7H9zM7 14l3-3 3 3H7" />
    <path
      fill="currentColor"
      d="M8 14H4a2 2 0 1 1 4 0M16 14h-4a2 2 0 1 1 4 0M9 8h2l2 2H7z"
    />
  </svg>
);
export default SvgTagLaunch;
