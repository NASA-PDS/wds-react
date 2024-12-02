import type { SVGProps } from "react";
const SvgTagBlog = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 6H5v7h4l3 2v-2h3zM7 8h6v1H7zm4 2H7v1h4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTagBlog;
