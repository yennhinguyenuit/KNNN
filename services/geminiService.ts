
import { GoogleGenAI, Type } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const factCheckSchema = {
  type: Type.OBJECT,
  properties: {
    verdict: {
      type: Type.STRING,
      description: "Kết luận cuối cùng. Phải là một trong ba giá trị: 'Thông tin chính xác', 'Thông tin sai lệch', 'Không thể xác định'.",
      enum: ['Thông tin chính xác', 'Thông tin sai lệch', 'Không thể xác định']
    },
    summary: {
      type: Type.STRING,
      description: "Một đoạn tóm tắt ngắn gọn bằng tiếng Việt giải thích lý do đưa ra kết luận."
    },
    confidence: {
      type: Type.NUMBER,
      description: "Độ tin cậy của kết luận, từ 0 đến 100."
    },
    sources: {
      type: Type.ARRAY,
      description: "Danh sách các nguồn tin uy tín (nếu có) đã được dùng để đối chiếu, bao gồm tên và link.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          url: { type: Type.STRING }
        },
        required: ['name', 'url']
      }
    }
  },
  required: ['verdict', 'summary', 'confidence']
};

export const checkNews = async (content: string, mode: 'text' | 'link') => {
  const promptContent = mode === 'link'
    ? `Hãy phân tích nội dung của bài báo từ URL sau: ${content}`
    : `Hãy phân tích đoạn văn bản sau:\n\n---\n${content}\n---`;

  const fullPrompt = `
    Bạn là một chuyên gia kiểm chứng thông tin (fact-checker) chuyên về tin tức tại Việt Nam. 
    Nhiệm vụ của bạn là phân tích nội dung được cung cấp và đối chiếu với các nguồn tin chính thống, 
    uy tín của Việt Nam như VTV, VnExpress, Tuổi Trẻ, Thanh Niên, Dân Trí, VietnamNet, báo Nhân Dân.

    ${promptContent}

    Dựa trên phân tích, hãy đưa ra kết luận về tính xác thực của thông tin.
    Nếu bạn không thể truy cập vào link, hãy báo rằng không thể xác định.
    Hãy trả về kết quả dưới dạng JSON theo schema đã định sẵn. Trong phần tóm tắt (summary), 
    hãy giải thích ngắn gọn tại sao bạn lại đưa ra kết luận đó, và nếu có thể, hãy chỉ ra 
    những điểm đáng ngờ hoặc các bằng chứng đối chiếu được.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: fullPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: factCheckSchema,
        temperature: 0.2,
      },
    });

    const jsonText = response.text.trim();
    // Gemini may wrap JSON in markdown backticks
    const cleanedJsonText = jsonText.replace(/^```json\n?/, '').replace(/\n?```$/, '');
    return JSON.parse(cleanedJsonText);

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Không thể phân tích nội dung. Vui lòng thử lại.");
  }
};
