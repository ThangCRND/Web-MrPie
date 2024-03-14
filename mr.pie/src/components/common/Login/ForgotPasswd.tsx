import React, { useState } from 'react';
import { Alert } from 'antd';
import { ExclamationCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

const ForgotPassword: React.FC = () => {
  const [emailError, setEmailError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailInput = event.currentTarget.email as HTMLInputElement;

    // Kiểm tra điều kiện và hiển thị các thông báo lỗi tương ứng
    const emailRegex = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
      setEmailError(true);
      setErrorMessage("Địa chỉ email không hợp lệ.");
      showErrorMessage();
    } else {
      setEmailError(false);
      setSuccessMessage("Yêu cầu lấy lại mật khẩu đã được gửi.");
      showSuccessMessage();
    }
  };

  const showErrorMessage = () => {
    setTimeout(() => {
      setErrorMessage('');
    }, 5000);
  };

  const showSuccessMessage = () => {
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  };

  return (
    <div className="forgot-password-container mx-auto max-w-xl mt-24 px-5">
      <h2 className="text-center font-bold text-4xl px-20 mb-10">Lấy lại mật khẩu</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="form-group mb-6 px-5 flex flex-col">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type=""
            id="email"
            name="email"
            className="w-full px-2 py-3 border-2 border-black rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Email"
           
          />
        </div>
        <button
          type="submit"
          className="w-1/3 mx-auto bg-green-500 hover:bg-gray-500 text-white text-2xl py-3 rounded-lg transition duration-300 mb-6">Lấy lại mật khẩu</button>

        <div className="signup-link mt-6 mb-20 text-center">
                <p><a href="#" className="font-bold text-1xl">Đăng nhập trở lại</a></p>
            </div>
      </form>

      {/* Thêm Alert để hiển thị thông báo */}
      {errorMessage && (
        <Alert
          message={<span><ExclamationCircleOutlined style={{ color: 'red' }} /> Error </span>}
          description={errorMessage}
          type="error"
          //showIcon
          closable
          onClose={() => setErrorMessage('')}
          className="fixed top-10 right-10"
        />
      )}

      {successMessage && (
        <Alert
          message={<span><CheckCircleOutlined style={{ color: 'green' }} /> Successful </span>}
          description={successMessage}
          type="success"
         // showIcon
          closable
          onClose={() => setSuccessMessage('')}
          className="fixed top-10 right-10"
        />
      )}
    </div>
  );
};

export default ForgotPassword;
