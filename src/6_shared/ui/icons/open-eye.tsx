import * as React from 'react';
import type { SVGProps } from 'react';
const SvgOpenEye = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M12 16.01a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 11.98c6.09-10.66 13.91-10.65 20 0M22 12.01c-6.09 10.66-13.91 10.65-20 0"
    />
  </svg>
);
export default SvgOpenEye;
