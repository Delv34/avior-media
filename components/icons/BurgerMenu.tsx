import type { SVGProps } from "react";
const SvgBurgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeWidth={2}
      d="M3.333 15h13.334M3.333 10h13.334M3.333 5h13.334"
    />
  </svg>
);
export default SvgBurgerMenu;
