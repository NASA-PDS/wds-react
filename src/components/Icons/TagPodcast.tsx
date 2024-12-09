import type { SVGProps } from "react";
const SvgTagPodcast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="currentColor"
      d="M.5 10a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z"
    />
    <path fill="currentColor" d="M8 6a2 2 0 1 1 4 0v3a2 2 0 1 1-4 0z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 8v1a4 4 0 0 0 8 0V8h1v1A5 5 0 0 1 5 9V8z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M9 13h2v3H9z" />
  </svg>
);
export default SvgTagPodcast;
