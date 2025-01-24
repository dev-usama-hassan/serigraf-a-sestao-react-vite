import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schema/LoginSchema";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import SignupModal from "./SignUpModal"; 

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); 
  const {
    register,
    handleSubmit,
    formState: { errors }, 
    watch,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [isSignUpModalOpen, setSignUPModalOpen] = useState(false);

  const openSignUpModal = () => {
    setSignUPModalOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUPModalOpen(false);
  };

  const email = watch("email", "");
  const password = watch("password", "");

  const onSubmit = (data) => {
    const { email, password } = data;
    if (email !== "test@example.com" || password !== "Password123!") {
      setIsLoginError(true);
    } else {
      setIsLoginError(false);
      navigate("/checkout");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 50 }}
      >
        <div className="bg-white rounded-xl shadow-xl p-8 w-full sm:w-[360px] md:w-[420px] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-lg text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
          <p className="text-center font-inter font-semibold text-3xl mb-6">
            Log in
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email or username"
                {...register("email")}
                className="mt-2 w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
                autoComplete="off"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  {...register("password")} 
                  className="mt-2 w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
              {isLoginError && (
                <p className="text-red-500 text-sm mt-2">
                  Invalid email or password
                </p>
              )}
            </div> 

            <div className="flex justify-end text-sm font-semibold">
              <button
                type="button"
                onClick={openSignUpModal}
                className="text-yellow-600"
              >
                Or Sign Up
              </button>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Log In
            </button>
          </form>
        </div>
      </div>

      <SignupModal isOpen={isSignUpModalOpen} onClose={closeSignUpModal} />
    </>
  );
};

export default LoginModal;
