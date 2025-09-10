import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <path
      fill="#232321"
      stroke="#232321"
      strokeWidth={0.047}
      d="M12.18 2.648c5.255 0 9.532 4.276 9.532 9.532a9.5 9.5 0 0 1-1.901 5.705l-.012.016 5.16 5.16a1.344 1.344 0 0 1-1.799 1.977l-.1-.08-5.159-5.16-.016.013a9.5 9.5 0 0 1-5.705 1.9c-5.256 0-9.532-4.276-9.532-9.531s4.276-9.531 9.532-9.532Zm1.336 2.815a6.85 6.85 0 0 0-8.184 6.717 6.86 6.86 0 0 0 6.848 6.848 6.849 6.849 0 0 0 1.336-13.565Z"
    />
  </svg>
);
export default SvgSearch;
