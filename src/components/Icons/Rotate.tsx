import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRotate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      d="M8.976 13.786v2.616c1.103-.905 2.907-2.415 4.01-3.32-1.103-.906-2.907-2.415-4.01-3.321v2.616c-1.102 0-2.205-.1-3.107-.302-.3-3.32.2-7.044 2.205-9.56v-.1s-.3-1.61-.3-1.71C5.869 2.112 4.967 4.427 4.566 6.842c-2.405.402-6.514 2.515-3.507 5.031 2.104 1.51 5.211 1.811 7.917 1.912M3.664 8.654c.2-.1.401-.1.602-.201-.1.704-.1 1.409-.1 2.113 0 .402 0 .704.1 1.107-1.002-.302-2.606-.805-2.806-1.61.2-.705 1.202-1.107 2.204-1.409M18.999 8.252a9 9 0 0 0-2.205-1.107c.1.503.1 1.107.2 1.71 2.005.906 2.005 1.51 0 2.315 0 .604-.1 1.107-.2 1.71 2.205-.603 4.61-2.616 2.205-4.629"
    />
    <path
      fill="currentColor"
      d="M15.49 6.843c-.4-1.912-1.001-3.522-2.104-5.032L14.89 0H9.678c.3 1.51.701 3.623.902 5.132l1.804-2.113c.701 1.006 1.202 2.113 1.503 3.522-1.904-.302-4.31-.302-6.414-.201-.1.503-.3 1.006-.3 1.509 2.104-.201 4.91-.201 7.015.201.3 2.717 0 5.736-1.303 8.151-2.105 4.126-5.212 2.214-6.414-1.409-.602-.1-1.103-.2-1.704-.302 1.203 5.233 6.314 8.05 9.32 2.415 1.704-2.918 2.005-6.742 1.404-10.062"
    />
  </svg>
);
export default SvgRotate;