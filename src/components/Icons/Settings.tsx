import type { SVGProps } from 'react';
const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 0H8l-.698 3.488a6.8 6.8 0 0 0-1.61.914L2.34 3.268l-2 3.464 2.7 2.373a7 7 0 0 0-.038.895q-.01.451.038.895l-2.7 2.373 2 3.464 3.352-1.134a6.8 6.8 0 0 0 1.61.914L8 20h4l.698-3.488a6.8 6.8 0 0 0 1.61-.914l3.352 1.134 2-3.464-2.7-2.373q.048-.443.038-.895.01-.451-.038-.895l2.7-2.373-2-3.464-3.351 1.134a6.8 6.8 0 0 0-1.611-.914zM7.86 7.859A2.93 2.93 0 0 1 10 7 2.93 2.93 0 0 1 13 10a2.93 2.93 0 0 1-3 3 2.93 2.93 0 0 1-3-3 2.93 2.93 0 0 1 .859-2.141"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSettings;
