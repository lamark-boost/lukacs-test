import React from 'react';

const Star: React.FC = () => (
  <div style={{ display: 'inline-block', margin: '0' }}>
    <svg
      height="25"
      width="23"
      className="star"
      viewBox="0 0 25 23"
      fill="#FFD700"
    >
      <polygon
        points="9.9, 1.1, 3.3, 21.9, 19.8, 8.4, 0, 8.4, 16.5, 21.9"
      />
    </svg>
  </div>
);

export default Star;