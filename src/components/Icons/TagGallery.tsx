import type { SVGProps } from "react";
const SvgTagGallery = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <circle cx={10} cy={10} r={9.5} stroke="currentColor" />
    <path fill="currentColor" d="M5 8h10v6H5z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 7H6V6h8zM12 5H8V4h4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTagGallery;
