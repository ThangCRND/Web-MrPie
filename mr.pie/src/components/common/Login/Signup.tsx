import React from 'react';

const Signup: React.FC = () => {
  return (

 <div className="h-full flex justify-center items-center">
      <form
        id="registerForm"
        className="w-full max-w-sm"
        noValidate
        autoComplete="off"
      >
        {/* Title */}
        <div className="flex justify-center items-center mt-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Đăng Ký</h1>
        </div>

        {/* Họ và tên */}
        <div className="mb-6">
          <div className="md:w-full">
            <input
              className="bg-gray-100 appearance-none border-2 border-black rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF]"
              id="fullName"
              type="text"
              placeholder="Họ và tên"
              minLength={2}
              maxLength={64}
              required
            />
          </div>
          <p
            id="fullNameErrorMessage"
            className="text-sm font-semibold text-red-400 ml-5 hidden"
          ></p>
        </div>

        {/* Tài khoản */}
        <div className="mb-6">
          <div className="md:w-full">
            <input
              className="bg-gray-100 appearance-none border-2 border-black rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF]"
              id="username"
              type="text"
              placeholder="Tài khoản"
              minLength={2}
              maxLength={64}
              required
            />
          </div>
          <p
            id="usernameErrorMessage"
            className="text-sm font-semibold text-red-400 ml-5 hidden"
          ></p>
        </div>

        {/* Email */}
        <div className="mb-6">
          <div className="md:w-full">
            <input
              className="bg-gray-100 appearance-none border-2 border-black rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF]"
              id="email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              title="Email không phù hợp"
              type="email"
              minLength={2}
              maxLength={64}
              placeholder="Email"
              required
            />
          </div>
          <p
            id="emailErrorMessage"
            className="text-sm font-semibold text-red-400 ml-5 hidden"
          ></p>
        </div>

        {/* Số điện thoại */}
        <div className="mb-6">
          <div className="md:w-full">
            <input
              className="bg-gray-100 appearance-none border-2 border-black rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF]"
              id="phoneNumber"
              pattern="(?=.*\d).{10,11}"
              minLength={6}
maxLength={12}
              title="Số điện thoại phù hợp có độ lớn 10 or 11 số và không được nhập chữ"
              type="tel"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9+()]/g, '');
              }}
              placeholder="Số điện thoại"
              required
            />
          </div>
          <p
            id="phoneNumberErrorMessage"
            className="text-sm font-semibold text-red-400 ml-5 hidden"
          ></p>
        </div>

        {/* Mật khẩu */}
        <div className="mb-6">
          <div className="md:w-full">
            <input
              className="bg-gray-100 appearance-none border-2 border-black rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF]"
              id="password"
              type="password"
              placeholder="Mật khẩu"
              maxLength={64}
              minLength={7}
              required
            />
          </div>
          <p
            id="passwordErrorMessage"
            className="text-sm font-semibold text-red-400 ml-5 hidden"
          ></p>
        </div>

        {/* Nhập lại Mật khẩu */}
        <div className="mb-6">
          <div className="md:w-full">
            <input
              className="bg-gray-100 appearance-none border-2 border-black rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF]"
              id="retypePassword"
              type="password"
              maxLength={64}
              minLength={7}
              placeholder="Nhập lại mật khẩu"
              required
            />
          </div>
          <p
            id="retypePasswordErrorMessage"
            className="text-sm font-semibold text-red-400 ml-5 hidden"
          ></p>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-full md:w-1/3">
            <button
              className="w-full shadow  bg-green-500 hover:bg-gray-500 text-white focus:shadow-outline focus:outline-none font-bold py-2 px-6 rounded"
              type="submit"
            >
              Đăng Ký
            </button>
          </div>
        </div>

        {/* Đường dẫn đăng nhập */}
        <div className="mt-6 flex justify-center items-center">
          <p>
            Bạn đã có tài khoản ?
            <span className="text-md font-bold text-[#1890FF] cursor-pointer">
              <a href="#">Đăng nhập</a>
            </span>
          </p>
        </div>
      </form>
    </div>


    );
};

export default Signup;