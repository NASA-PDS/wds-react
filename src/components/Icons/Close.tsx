import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M8.582 10 0 18.584l1.416 1.412 8.58-8.58L18.583 20l1.416-1.412-8.588-8.588 8.588-8.589L18.583 0 9.996 8.586 1.413.003-.003 1.415z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClose;
