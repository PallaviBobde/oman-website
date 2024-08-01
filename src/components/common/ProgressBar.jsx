// ProgressBar.js
import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 h-1 overflow-hidden">
      <div
        className="bg-green-500 h-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
