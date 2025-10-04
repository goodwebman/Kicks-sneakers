import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDarkPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 12h16m-8-8v16"
    />
  </svg>
);
export default SvgDarkPlus;
