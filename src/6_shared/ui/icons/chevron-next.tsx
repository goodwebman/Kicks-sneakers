import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronNext = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 7 12"
    {...props}
  >
    <path
      stroke="#232321"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 1.5 5.5 6 1 10.5"
    />
  </svg>
);
export default SvgChevronNext;
