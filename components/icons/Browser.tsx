import * as React from "react";
import type { SVGProps } from "react";
const SvgBrowser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#browser_svg__a)">
      <path
        fill="#fff"
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M5.625 2.5a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25m2.5 0a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25M18.75 5H1.25V2.5c0-.69.56-1.25 1.25-1.25h15c.69 0 1.25.56 1.25 1.25zm0 12.5c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25V6.25h17.5zM17.5 0h-15A2.5 2.5 0 0 0 0 2.5v15A2.5 2.5 0 0 0 2.5 20h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 17.5 0M3.125 2.5a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="browser_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrowser;
