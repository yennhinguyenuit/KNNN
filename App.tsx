import React, { useState, useCallback } from 'react';
import { type FactCheckResult, type InputMode } from './types';
import { checkNews } from './services/geminiService';
import Header from './components/Header';
import InputArea from './components/InputArea';
import ResultDisplay from './components/ResultDisplay';
import Loader from './components/Loader';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [mode, setMode] = useState<InputMode>('text');
  const [inputValue, setInputValue] = useState<string>('');
  const [result, setResult] = useState<FactCheckResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleModeChange = (newMode: InputMode) => {
    setMode(newMode);
    setInputValue('');
    setResult(null);
    setError(null);
  }

  const handleCheck = useCallback(async () => {
    if (!inputValue.trim()) {
      setError('Vui lòng nhập nội dung hoặc liên kết để kiểm tra.');
      return;
    }
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const apiResult = await checkNews(inputValue, mode);
      setResult(apiResult);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Đã có lỗi không xác định xảy ra.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, mode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-100 py-6 sm:py-12">
      <div className="container mx-auto px-4">
        <Header />
        <main className="mt-8">
          <InputArea 
            mode={mode}
            setMode={handleModeChange}
            inputValue={inputValue}
            setInputValue={setInputValue}
            onCheck={handleCheck}
            isLoading={isLoading}
          />
          
          <div className="mt-8">
            {isLoading && <Loader />}
            {error && (
              <div className="max-w-3xl mx-auto p-4 bg-red-100 text-red-700 border border-red-300 rounded-lg text-center">
                {error}
              </div>
            )}
            {result && <ResultDisplay result={result} />}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
