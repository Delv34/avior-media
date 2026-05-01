import * as React from "react";
import type { SVGProps } from "react";
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#download_svg__a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.5}
        d="M.333 5.167V15.8c0 1.353 0 2.03.264 2.547.231.454.6.825 1.056 1.056.516.264 1.192.264 2.543.264h11.608c1.35 0 2.026 0 2.542-.264a2.42 2.42 0 0 0 1.058-1.056c.263-.517.263-1.193.263-2.543V5.167m-19.334 0h19.334m-19.334 0 1.65-2.887c.405-.709.607-1.063.892-1.32a2.4 2.4 0 0 1 .873-.507c.366-.12.774-.12 1.59-.12h9.323c.817 0 1.226 0 1.592.12.323.105.62.278.872.506.285.258.488.613.893 1.322l1.649 2.886M10 8.792v7.25m0 0 3.625-2.417M10 16.042l-3.625-2.417"
      />
    </g>
    <defs>
      <clipPath id="download_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDownload;
