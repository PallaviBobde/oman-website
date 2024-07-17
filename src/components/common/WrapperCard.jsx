// components/Card.js
import React from 'react';

const WrapperCard = ({ children }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {children}
    </div>
  );
};

export default WrapperCard;
