import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="none" viewBox="0 0 28 26" {...props}>
    <g filter="url(#a)">
      <path fill="#fff" d="M4 11.194h15.755l-4.805 5.134L16.515 18 24 10l-7.485-8-1.565 1.672 4.805 5.134H4z" />
    </g>
    <defs>
      <filter id="a" width={28} height={28} x={0} y={0} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_314_447" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="effect1_dropShadow_314_447" result="effect2_dropShadow_314_447" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_314_447" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgArrowRight;
