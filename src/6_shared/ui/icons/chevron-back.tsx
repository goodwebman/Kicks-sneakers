import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#232321"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.5 12.5 6 8l4.5-4.5"
    />
  </svg>
);
export default SvgChevronBack;
