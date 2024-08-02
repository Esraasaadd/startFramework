import { useState } from "react";

export default function Contact() {
  const [userNameTyping, setUserNameTyping] = useState(false);
  const [userAgeTyping, setUserAgeTyping] = useState(false);
  const [userEmailTyping, setUserEmailTyping] = useState(false);
  const [userPasswordTyping, setUserPasswordTyping] = useState(false);

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value !== "");
  };

  return (
    <div className="flex h-screen mb-[-20px] mt-[-50px] md:mt-0">
      <div className="container flex flex-col items-center justify-center space-y-5">
        <h2 className="font-bold text-4xl text-[#2c3e50]">CONTACT SECTION</h2>
        <div className="row justify-between space-x-4 items-center">
          <div className="h-[4px] w-[80px] bg-[#2c3e50]"></div>
          <i className="fa-solid fa-star text-[#2c3e50]"></i>
          <div className="h-[4px] w-[80px] bg-[#2c3e50]"></div>
        </div>
        <div className="container w-10/12 md:w-1/2">
          <form>
            <div className="relative mb-6 w-full group">
              <input
                type="text"
                name="userName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#dee2e6] appearance-none  focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
                onChange={handleInputChange(setUserNameTyping)}
              />
              <label
                htmlFor="userName"
                className={`absolute text-sm text-gray-500 duration-300 transform ${
                  userNameTyping
                    ? "-translate-y-6 scale-75"
                    : "translate-y-0 scale-100"
                } top-3 -z-10 origin-[0] peer-focus:left-0`}
              >
                UserName
              </label>
            </div>

            <div className="relative mb-6 w-full group">
              <input
                type="text"
                name="userAge"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#dee2e6] appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
                onChange={handleInputChange(setUserAgeTyping)}
              />
              <label
                htmlFor="userAge"
                className={`absolute text-sm text-gray-500 duration-300 transform ${
                  userAgeTyping
                    ? "-translate-y-6 scale-75"
                    : "translate-y-0 scale-100"
                } top-3 -z-10 origin-[0] peer-focus:left-0`}
              >
                UserAge
              </label>
            </div>

            <div className="relative mb-6 w-full group">
              <input
                type="email"
                name="userEmail"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#dee2e6] appearance-none  focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
                onChange={handleInputChange(setUserEmailTyping)}
              />
              <label
                htmlFor="userEmail"
                className={`absolute text-sm text-gray-500 duration-300 transform ${
                  userEmailTyping
                    ? "-translate-y-6 scale-75"
                    : "translate-y-0 scale-100"
                } top-3 -z-10 origin-[0] peer-focus:left-0`}
              >
                UserEmail
              </label>
            </div>

            <div className="relative mb-6 w-full group">
              <input
                type="password"
                name="userPassword"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#dee2e6] appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
                onChange={handleInputChange(setUserPasswordTyping)}
              />
              <label
                htmlFor="userPassword"
                className={`absolute text-sm text-gray-500 duration-300 transform ${
                  userPasswordTyping
                    ? "-translate-y-6 scale-75"
                    : "translate-y-0 scale-100"
                } top-3 -z-10 origin-[0] peer-focus:left-0`}
              >
                UserPassword
              </label>
            </div>

            <button
              type="submit"
              className="text-white bg-[#1abc9c] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
