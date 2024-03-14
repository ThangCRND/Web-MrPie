
import React from 'react';
import { HeartOutlined } from '@ant-design/icons';

const Detailproduct: React.FC = () => {
  return (
    <div className="bg-yellow-100 min-h-screen">
      {/* Header */}
      <div className="bg-black text-white p-4">
        <p>Trang chủ &gt; Thực đơn &gt; Bánh lạnh &gt; <strong>Vegan Thai Cury</strong></p>
      </div>
      
      {/* Content */}
      <div className="flex justify-center items-center">
        {/* Left side */}
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold">Vegan Thai Cury</h1>
          <p className="text-sm">Giới thiệu về sản phẩm ngắn gọn</p>
          <p className="text-sm">Phân loại:</p>
          <div className="flex items-center mb-4">
            <select className="bg-gray-100 p-2 rounded-md mr-4">
              <option value="hot">Bánh nóng</option>
              <option value="cold">Bánh lạnh</option>
            </select>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button className="p-2">
                -
              </button>
              <input type="text" className="p-2 w-10 text-center" value="1" readOnly />
              <button className="p-2">
                +
              </button>
              <HeartOutlined className="h-6 w-6 ml-4 text-red-500" />
            </div>
          </div>
          <p className="text-sm">Size:</p>
          <div className="flex mb-4">
            <button className="bg-gray-200 text-sm px-4 py-2 rounded-md mr-2">S</button>
            <button className="bg-gray-200 text-sm px-4 py-2 rounded-md mr-2">M</button>
            <button className="bg-gray-200 text-sm px-4 py-2 rounded-md mr-2">L</button>
            <button className="bg-gray-200 text-sm px-4 py-2 rounded-md">J</button>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">Thêm vào giỏ hàng &gt;</button>
        </div>
        
        {/* Right side */}
        <div className="w-1/2">
          <img src="path_to_image" alt="Bánh" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Detailproduct;


