import type { SVGProps } from "react";
const SvgTagData = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <circle cx={10} cy={10} r={9.5} stroke="currentColor" />
    <circle cx={4.5} cy={10.5} r={1.5} fill="currentColor" />
    <circle cx={8} cy={5.5} r={1.5} fill="currentColor" />
    <circle cx={12} cy={13.5} r={1.5} fill="currentColor" />
    <path fill="currentColor" d="M17 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m8.072 4.526 4 8 3.018-4.313.82.574-3.982 5.687-4-8-3.018 4.313-.82-.574z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTagData;
