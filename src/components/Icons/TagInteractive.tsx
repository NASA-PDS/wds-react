import type { SVGProps } from "react";
const SvgTagInteractive = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      fill="currentColor"
      d="M14.473 9.474a.84.84 0 0 0-.857-.832c-.3 0-.571.159-.72.396v-.026a.84.84 0 0 0-.858-.831c-.299 0-.57.158-.72.382v-.026a.84.84 0 0 0-.857-.831c-.3 0-.571.158-.721.382V5.331a.87.87 0 0 0-.245-.594.86.86 0 0 0-.598-.237.84.84 0 0 0-.857.831v5.119c0 .053-.027.092-.068.105-.04.014-.095.014-.122-.026l-.87-.831a.904.904 0 0 0-1.102-.106.8.8 0 0 0-.368.58c-.04.238.041.476.19.66l2.163 2.533a3.26 3.26 0 0 0 2.475 1.135h1.347c.748 0 1.455-.29 1.985-.805.53-.514.83-1.2.83-1.926z"
    />
  </svg>
);
export default SvgTagInteractive;
