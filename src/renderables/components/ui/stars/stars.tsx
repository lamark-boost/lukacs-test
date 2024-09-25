import React from 'react';
import Star from '../star/star';

interface StarsProps {
  numberOfStars: number;
}

const Stars: React.FC<StarsProps> = ({ numberOfStars }) => {
  const starsArray = Array(numberOfStars).fill(0);

  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {starsArray.map((_, index) => (
        <Star key={index} />
      ))}
    </div>
  );
};

export default Stars;