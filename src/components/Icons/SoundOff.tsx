import type { SVGProps } from "react";
const SvgSoundOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 6 6-6v20l-6-6H1V6zm13.535 1.879-1.414-1.415L16 8.586l-2.121-2.122-1.415 1.415L14.586 10l-2.122 2.121 1.415 1.415 2.12-2.122 2.122 2.122 1.414-1.415L17.415 10z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSoundOff;
