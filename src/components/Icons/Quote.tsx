import * as React from 'react';
import type { SVGProps } from 'react';
const SvgQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={15} fill="none" viewBox="0 0 20 15" {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M18.907 13.98Q20 12.9 20 11.16V11a4 4 0 0 0-4.8-3.92 7.7 7.7 0 0 1 1.06-2.58q.92-1.32 2.416-2.4L17.353 0q-2.762 1.56-4.316 4.26-1.496 2.64-1.496 5.4 0 2.58 1.266 3.96a4.3 4.3 0 0 0 2.277 1.275 4 4 0 0 0 .982.104l.078.001q1.67 0 2.763-1.02M7.366 13.98q1.093-1.08 1.093-2.82V11a4 4 0 0 0-4.8-3.92A7.7 7.7 0 0 1 4.72 4.5q.921-1.32 2.417-2.4L5.812 0Q3.05 1.56 1.496 4.26 0 6.9 0 9.66q0 2.58 1.266 3.96a4.3 4.3 0 0 0 2.277 1.275 4 4 0 0 0 .982.104l.079.001q1.668 0 2.762-1.02"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgQuote;
