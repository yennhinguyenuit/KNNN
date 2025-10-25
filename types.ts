
export interface FactCheckSource {
  name: string;
  url: string;
}

export interface FactCheckResult {
  verdict: 'Thông tin chính xác' | 'Thông tin sai lệch' | 'Không thể xác định';
  summary: string;
  confidence: number;
  sources?: FactCheckSource[];
}

export type InputMode = 'text' | 'link';
