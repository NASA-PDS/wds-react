import type { SVGProps } from "react";
const SvgTagFeature = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 4 1.262 4.107a.14.14 0 0 0 .134.103L15.5 8.2l-3.325 2.53a.15.15 0 0 0-.051.167L13.4 15l-3.317-2.544a.14.14 0 0 0-.167 0L6.601 15l1.276-4.102a.15.15 0 0 0-.051-.167L4.5 8.201l4.104.01V8.21a.14.14 0 0 0 .135-.103z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTagFeature;
