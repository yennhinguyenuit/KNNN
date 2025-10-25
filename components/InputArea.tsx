
import React from 'react';
import { type InputMode } from '../types';
import { DocumentTextIcon, LinkIcon } from './icons';

interface InputAreaProps {
  mode: InputMode;
  setMode: (mode: InputMode) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  onCheck: () => void;
  isLoading: boolean;
}

const InputArea: React.FC<InputAreaProps> = ({ mode, setMode, inputValue, setInputValue, onCheck, isLoading }) => {
  const TabButton: React.FC<{ currentMode: InputMode, targetMode: InputMode, children: React.ReactNode }> = ({ currentMode, targetMode, children }) => {
    const isActive = currentMode === targetMode;
    return (
      <button
        onClick={() => setMode(targetMode)}
        className={`flex-1 px-4 py-3 text-sm font-semibold rounded-t-lg transition-colors duration-200 flex items-center justify-center gap-2
          ${isActive 
            ? 'bg-white text-blue-600 border-b-2 border-blue-600' 
            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="flex">
        <TabButton currentMode={mode} targetMode="text">
          <DocumentTextIcon className="w-5 h-5" /> Dán văn bản
        </TabButton>
        <TabButton currentMode={mode} targetMode="link">
          <LinkIcon className="w-5 h-5" /> Dán liên kết
        </TabButton>
      </div>

      <div className="p-4 sm:p-6">
        {mode === 'text' ? (
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Dán toàn bộ nội dung bài báo vào đây..."
            className="w-full h-48 p-3 border border-gray-300 rounded-md resize-y focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            disabled={isLoading}
          />
        ) : (
          <input
            type="url"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="https://vnexpress.net/bai-bao-vi-du"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            disabled={isLoading}
          />
        )}
        <button
          onClick={onCheck}
          disabled={isLoading || !inputValue.trim()}
          className="mt-4 w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold py-3 px-4 rounded-lg
                     hover:from-blue-700 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-blue-300 
                     transition-all duration-300 ease-in-out transform hover:scale-[1.02]
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? 'Đang kiểm tra...' : 'Kiểm tra ngay'}
        </button>
      </div>
    </div>
  );
};

export default InputArea;
