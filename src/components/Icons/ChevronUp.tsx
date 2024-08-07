import type { SVGProps } from 'react';
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 7.362 1.918 15.5 0 13.569 10 3.5l10 10.069-1.918 1.931z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronUp;
