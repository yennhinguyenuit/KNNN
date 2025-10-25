
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-pink-500"></div>
      <p className="text-blue-600 font-medium">AI đang phân tích, vui lòng chờ...</p>
    </div>
  );
};

export default Loader;
