import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { CartState } from "../store/CartState"; // Assuming you are using this, not required for modal logic
import LoginModal from "./LoginModal"; 

const CheckoutModal = ({ handleCheckoutClose }) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };  

  return (
    <>
      {!isLoginModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-40">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-center items-center ml-5">
              <div className="text-green-500 ml-auto">
                <FaRegCheckCircle className="text-2xl" /> 
              </div>
              <button
                className="text-gray-500 hover:text-gray-700 ml-auto"
                onClick={handleCheckoutClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="text-center my-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Product added to shopping cart
              </h2>
            </div>
            <div className="flex justify-center space-x-4">
              <img src="/path/to/your/image" alt="Product front" className="h-32" />
              <img
                src="/path/to/your/image"
                alt="Product back"
                className="h-32"
              />
            </div>
            <div className="my-2 mt-8">
              <button
                onClick={openLoginModal}
                className="w-full bg-yellow-300 text-[#2d2d2d] py-2 px-5 rounded-lg font-semibold hover:bg-yellow-400"
              >
                Go to checkout
              </button>
            </div>
            <div className="my-2">
              <button
                onClick={handleCheckoutClose}
                className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200"
              >
                Continue designing 
              </button> 
            </div>
          </div>
        </div>
      )}

      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </> 
  );
};

export default CheckoutModal;
