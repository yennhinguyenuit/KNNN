import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center mt-12 py-6 border-t border-gray-200">
      <p className="text-sm text-gray-500 max-w-2xl mx-auto">
        <span className="font-semibold">Lưu ý:</span> Kết quả được tạo ra bởi AI và chỉ mang tính chất tham khảo. 
        Chúng tôi không đảm bảo tính chính xác 100%. Vui lòng luôn kiểm chứng thông tin từ nhiều nguồn uy tín.
      </p>
    </footer>
  );
};

export default Footer;
