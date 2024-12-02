import type { SVGProps } from "react";
const SvgTagBio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <circle cx={10} cy={10} r={9.5} stroke="currentColor" />
    <circle cx={10} cy={6} r={2} fill="currentColor" />
    <path fill="currentColor" d="M15 14a5 5 0 1 0-10 0h10" />
  </svg>
);
export default SvgTagBio;
