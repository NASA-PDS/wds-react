import type { SVGProps } from "react";
const SvgTagPressRelease = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 5H6v10h8zm-2 2H8v2h4zm-4 3h4v1H8zm3 2H8v1h3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTagPressRelease;
