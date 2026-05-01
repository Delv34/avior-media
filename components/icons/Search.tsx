import type { SVGProps } from "react";
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.875}
      d="M6.708 12.25a5.542 5.542 0 1 0 0-11.083 5.542 5.542 0 0 0 0 11.083M12.833 12.833l-1.166-1.166"
    />
  </svg>
);
export default SvgSearch;
