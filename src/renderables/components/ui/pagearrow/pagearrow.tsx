import React from 'react';

interface PageArrowProps {
  direction: 'next' | 'previous';
}

const PageArrow: React.FC<PageArrowProps> = ({ direction }) => {
  const isNext = direction === 'next';
  const points = isNext ? "10,6 16,12 10,18" : "14,6 8,12 14,18";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 26 26"
      fill="black"
    >
      <circle cx="12" cy="12" r="12" />
      <polygon points={points} fill="white" />
    </svg>
  );
};

export default PageArrow;