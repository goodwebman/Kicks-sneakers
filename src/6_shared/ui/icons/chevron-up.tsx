import type { SVGProps } from 'react';
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 25 24" {...props}>
    <path
      stroke={props.color || '#232321'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.5 15.75 12.25 9 19 15.75"
    />
  </svg>
);
export default SvgChevronUp;
