import type { SVGProps } from "react";
const SvgTagFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <circle cx={10} cy={10} r={9.5} stroke="currentColor" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 7V5.5h3L9.5 7H15v7H5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTagFile;
