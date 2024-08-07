import type { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      d="m20 17.738-5.326-5.326A8 8 0 1 0 0 8a8 8 0 0 0 12.412 6.673L17.737 20zM2.267 8.002A5.733 5.733 0 0 1 8 2.27a5.733 5.733 0 1 1 0 11.465 5.734 5.734 0 0 1-5.733-5.733"
    />
  </svg>
);
export default SvgSearch;
