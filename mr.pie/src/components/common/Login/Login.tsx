import React, { useState, useRef } from 'react';
import { Alert } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const Login: React.FC = () => {
  let isValidate;
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    isValidate = true;
    event.preventDefault();
    validateUsername();
    validatePassword();
    if (isValidate) {
      setShowSuccessAlert(true);
      // Tự động tắt Alert khi thành công sau 3 giây
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
      
    }
  };

  const displayErrorMessage = (setError, errorMessage, elementRef) => {
    isValidate = false;
    setError(errorMessage);
    setShowAlert(true);
    elementRef.current.classList.add(
      'invalid:border-pink-500',
      'invalid:text-pink-600'
    );
    const timeoutId = setTimeout(() => {
      setError('');
      setShowAlert(false);

      elementRef.current.classList.remove(
        'invalid:border-pink-500',
        'invalid:text-pink-600'
      );
    }, 3000);

    
    if (elementRef.current.timeoutId) {
      clearTimeout(elementRef.current.timeoutId);
    }

    
    elementRef.current.timeoutId = timeoutId;
  };

  const validateUsername = () => {
    if (username.trim() === '') {
      displayErrorMessage(
        setUsernameError,
        'Tài khoản không được để trống',
        usernameRef
      );
    } else if (username.length > 64) {
      displayErrorMessage(
        setUsernameError,
        'Tài khoản quá dài',
        usernameRef
      );
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      displayErrorMessage(
        setUsernameError,
        'Tài khoản không được chứa kí tự đặc biệt',
        usernameRef
      );
    }
  };

  const validatePassword = () => {
    if (password.trim() === '') {
      displayErrorMessage(
        setPasswordError,
        'Mật khẩu không được để trống',
        passwordRef
      );
    } else if (password.length < 7) {
      displayErrorMessage(
        setPasswordError,
        'Mật khẩu quá ngắn',
        passwordRef
      );
    } else if (password.length > 64) {
      displayErrorMessage(
        setPasswordError,
        'Mật khẩu quá dài',
        passwordRef
      );
    }
  };

  return (
    <div className="login-container mx-auto max-w-xl mt-24 px-4">
      {/* Alert for Error */}
      {showAlert && (
        <Alert
          message={
            <span>
              <ExclamationCircleOutlined style={{ color: 'red' }} /> ERROR !{' '}
            </span>
          }
          description="Thông báo lỗi"
          type="error"
          closable
          onClose={() => setShowAlert(false)}
          className="fixed top-10 right-10"
        />
      )}

      {/* Alert for Success */}
      {showSuccessAlert && (
        <Alert
          message="SUCCESS"
          description="Thông báo thành công"
          type="success"
          showIcon
          className="fixed top-10 right-10"
        />
      )}

      <h2 className="text-center font-bold text-4xl px-20 mb-10">Đăng nhập</h2>
      <form onSubmit={validateForm} className="flex flex-col">
        <div className="form-group mb-6 flex flex-col">
          <label htmlFor="username" className="block mb-2">
            Tài khoản
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className={`w-full px-4 py-3 border-2 border-black rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500 ${
              usernameError ? 'invalid:border-pink-500 invalid:text-pink-600' : ''
            }`}
            placeholder="Tài khoản"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
            ref={usernameRef}
          />
          {usernameError && (
            <p className="text-sm font-semibold text-red-400 ml-5">{usernameError}</p>
          )}
        </div>
        <div className="form-group mb-6 flex flex-col">
          <label htmlFor="password" className="block mb-2">
            Mật khẩu
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={`w-full px-4 py-3 border-2 border-black rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500 ${
              passwordError ? 'invalid:border-pink-500 invalid:text-pink-600' : ''
            }`}
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           
            ref={passwordRef}
          />
          {passwordError && (
            <p className="text-sm font-semibold text-red-400 ml-5">{passwordError}</p>
          )}
        </div>
        <div className="forgot-password mb-6 text-right">
          <a href="#" className="text-gray-600 hover:text-brown">
            Quên mật khẩu?
          </a>
        </div>
        <button
          id="login"
          type="submit"
          className="w-1/3 mx-auto bg-green-500 hover:bg-gray-500 text-white text-2xl py-3 rounded-lg transition duration-300 mb-6"
        >
          Đăng nhập
        </button>
      </form>
      <div className="signup-link mt-6 mb-14 text-center">
        <p>
          <a href="#" className=" text-gray-600 text-1xl">
            Tạo tài khoản ngay
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
