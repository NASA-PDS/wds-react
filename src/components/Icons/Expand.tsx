import type { SVGProps } from "react";
const SvgExpand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.148 17.192v-1.81l-4.99.009 9.233-9.232-.009 4.99h1.81v-8.1h-8.1L9.085 4.85h4.998L4.85 14.082V9.084l-1.8.009v8.099z"
    />
  </svg>
);
export default SvgExpand;
