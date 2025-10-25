
import React from 'react';
import { type FactCheckResult, type FactCheckSource } from '../types';
import { CheckCircleIcon, XCircleIcon, QuestionMarkCircleIcon, LinkIcon } from './icons';

interface ResultDisplayProps {
  result: FactCheckResult;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  const getVerdictStyles = () => {
    switch (result.verdict) {
      case 'Thông tin chính xác':
        return {
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          borderColor: 'border-green-300',
          icon: <CheckCircleIcon className="w-8 h-8 text-green-600" />
        };
      case 'Thông tin sai lệch':
        return {
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
          borderColor: 'border-red-300',
          icon: <XCircleIcon className="w-8 h-8 text-red-600" />
        };
      default:
        return {
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-800',
          borderColor: 'border-yellow-300',
          icon: <QuestionMarkCircleIcon className="w-8 h-8 text-yellow-600" />
        };
    }
  };

  const { bgColor, textColor, icon, borderColor } = getVerdictStyles();

  const getAuthenticityDetails = () => {
    if (result.verdict === 'Không thể xác định') {
      return null;
    }

    const authenticityLevel = result.verdict === 'Thông tin sai lệch'
      ? 100 - result.confidence
      : result.confidence;

    const authenticityColor = authenticityLevel > 75
      ? 'text-green-600'
      : authenticityLevel > 50
      ? 'text-yellow-600'
      : 'text-red-600';

    return { level: authenticityLevel, color: authenticityColor };
  };

  const authenticityDetails = getAuthenticityDetails();

  const SourceItem: React.FC<{ source: FactCheckSource }> = ({ source }) => (
    <li className="flex items-start gap-3">
      <LinkIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" aria-hidden="true" />
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors break-all"
      >
        {source.name}
      </a>
    </li>
  );

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden opacity-0 animate-fade-in-up">
      <div className={`p-5 flex items-center gap-4 ${bgColor} border-b ${borderColor}`}>
        {icon}
        <div>
            <h2 className={`text-xl font-bold ${textColor}`}>{result.verdict}</h2>
            {authenticityDetails && (
              <div className="mt-1 flex items-center">
                  <p className={`text-sm font-medium ${textColor}`}>Mức độ xác thực:</p>
                  <div className="w-32 h-2 bg-gray-200 rounded-full ml-2 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-blue-500" style={{ width: `${authenticityDetails.level}%` }}></div>
                  </div>
                  <p className={`ml-2 text-sm font-bold ${authenticityDetails.color}`}>{Math.round(authenticityDetails.level)}%</p>
              </div>
            )}
        </div>
      </div>
      <div className="p-6 space-y-6">
        <div className="opacity-0 animate-fade-in-up animation-delay-200">
          <h3 className="font-semibold text-gray-800">Tóm tắt phân tích:</h3>
          <p className="mt-1 text-gray-600 leading-relaxed">{result.summary}</p>
        </div>
        <div className="opacity-0 animate-fade-in-up animation-delay-400">
            <h3 className="font-semibold text-gray-800">Nguồn tham khảo:</h3>
            {result.sources && result.sources.length > 0 ? (
              <ul className="mt-2 space-y-2">
                {result.sources.map((source, index) => (
                  <SourceItem key={index} source={source} />
                ))}
              </ul>
            ) : (
                <p className="mt-1 text-gray-500 italic">AI không tìm thấy nguồn tham khảo cụ thể.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
