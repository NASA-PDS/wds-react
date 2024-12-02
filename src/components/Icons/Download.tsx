import type { SVGProps } from "react";
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.045 0v10.604L4.938 6.76 3.6 8.012 10 14l6.4-5.988-1.338-1.252-4.106 3.844V0z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 16v-3H0v5h20v-5h-2v3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDownload;
