import React, { useState } from 'react';
import { Alert } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const ChangePasswd: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const handleChangeNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPassword === confirmPassword) {
      // Thành công
      setSuccessAlert(true);
      setTimeout(() => {
        setSuccessAlert(false);
      }, 3000);
      // Tiến hành thay đổi mật khẩu
    } else {
      // Thất bại
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <div className="change-password-container mx-auto max-w-xl mt-24 px-4">
      {/* Alert for Error */}
      {showAlert && (
        <Alert
          message={
            <span>
              <ExclamationCircleOutlined style={{ color: 'red' }} /> ERROR !{' '}
            </span>
          }
          description="Mật khẩu không khớp"
          type="error"
          closable
          onClose={() => setShowAlert(false)}
          className="fixed top-10 right-10"
        />
      )}

      {/* Alert for Success */}
      {successAlert && (
        <Alert
          message="SUCCESS"
          description="Mật khẩu đã được thay đổi thành công"
          type="success"
          showIcon
          className="fixed top-10 right-10"
        />
      )}

      <h2 className="text-center font-bold text-4xl px-20 mb-10">Thay đổi mật khẩu</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="form-group mb-6 flex flex-col">
          <label htmlFor="newPassword" className="block mb-2">Mật khẩu mới</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handleChangeNewPassword}
            className="w-full px-4 py-3 border-2 border-black rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Mật khẩu mới"
            minLength={7}
            maxLength={64}
           // required
          />
        </div>
        <div className="form-group mb-6 flex flex-col">
          <label htmlFor="confirmPassword" className="block mb-2">Xác nhận mật khẩu</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            className="w-full px-4 py-3 border-2 border-black rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Xác nhận mật khẩu"
            minLength={7}
            maxLength={64}
           // required
          />
        </div>
        <button
          type="submit"
          className="w-2/3 mx-auto bg-green-500 hover:bg-gray-500 text-white text-2xl py-3 rounded-lg transition duration-300 mb-6"
        >
          Thay đổi mật khẩu
        </button>
      </form>
      <div className="cancel-text mt-6 text-center">
        <p><a href="#" className="text-gray-600 text-2xl">Hủy</a></p>
      </div>
    </div>
  );
};

export default ChangePasswd;
