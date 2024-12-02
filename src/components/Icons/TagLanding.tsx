import type { SVGProps } from "react";
const SvgTagLanding = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <circle cx={10} cy={10} r={9.5} stroke="currentColor" />
    <path fill="currentColor" d="M9 12h2l2 3H7z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m10.586 12 3.197-3.197L13.382 8H6.618l-.401.803L9.414 12zM9 13h2l4-4-1-2H6L5 9z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M15 9H5a5 5 0 0 1 10 0" />
  </svg>
);
export default SvgTagLanding;
