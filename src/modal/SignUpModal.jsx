import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../schema/SignupSchema";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const SignupModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ 
    resolver: zodResolver(signupSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSignupError, setIsSignupError] = useState(false);

  const email = watch("email", "");
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const onSubmit = (data) => {
    const { email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      setIsSignupError(true);
    } else {
      setIsSignupError(false);
      navigate("/login");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      style={{ zIndex: 50 }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-[380px] md:w-[1000px] relative mt-5">
        <button
          onClick={onClose}
          className="absolute top-4 right-7 text-4xl text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <p className="text-center font-inter font-semibold text-2xl mb-4">
          Sign Up
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name and Last Name in a Row */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="first_name"
                type="text"
                placeholder="Enter your first name"
                {...register("first_name")}
                className="mt-2 w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.first_name.message}
                </p>
              )}
            </div>

            <div className="w-1/2">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="last_name"
                type="text"
                placeholder="Enter your last name"
                {...register("last_name")}
                className="mt-2 w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.last_name.message}
                </p>
              )}
            </div>
          </div>

          {/* Street and City in a Row */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="street"
                className="block text-sm font-medium text-gray-700"
              >
                Street <span className="text-red-500">*</span>
              </label>
              <input
                id="street"
                type="text"
                placeholder="Enter your street"
                {...register("street")}
                className="mt-2 w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              {errors.street && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.street.message}
                </p>
              )}
            </div>

            <div className="w-1/2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                id="city"
                type="text"
                placeholder="Enter your city"
                {...register("city")}
                className="mt-2 w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>
          </div>

          {/* State and Zip Code in a Row */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State <span className="text-red-500">*</span>
              </label>
              <input
                id="state"
                type="text"
                placeholder="Enter your state"
                {...register("state")}
                className="mt-2 w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.state.message}
                </p>
              )}
            </div>

            <div className="w-1/2">
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700"
              >
                Zip Code <span className="text-red-500">*</span>
              </label>
              <input
                id="zip"
                type="text"
                placeholder="Enter your zip code"
                {...register("zip")}
                className="mt-2 w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              {errors.zip && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.zip.message}
                </p>
              )}
            </div>
          </div>

          {/* Country Code and Email in a Row */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="country_code"
                className="block text-sm font-medium text-gray-700"
              >
                Country Code <span className="text-red-500">*</span>
              </label>
              <input
                id="country_code"
                type="text"
                placeholder="Enter your country code"
                {...register("country_code")}
                className="mt-2 w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              {errors.country_code && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.country_code.message}
                </p>
              )}
            </div>

            <div className="w-1/2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                {...register("email")}
                className="mt-2 w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Password and Confirm Password in a Row */}
          <div className="flex space-x-4">
            <div className="w-1/2">
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
                  className="mt-2 w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-4 mt-1 transform -translate-y-1/2 text-xl text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
            </div>

            <div className="w-1/2">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  {...register("confirmPassword")}
                  className="mt-2 w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-4 mt-1 transform -translate-y-1/2 text-xl text-gray-600"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
              {isSignupError && (
                <p className="text-red-500 text-sm mt-1">
                  Passwords do not match
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end text-sm font-[800] mr-3">
            <button onClick={onClose} className="text-yellow-600">
              Or Log In
            </button>
          </div>

          <button
            type="submit"
            className="w-[25%] h-12 bg-yellow-500 ml-96 text-center text-black rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Sign Up
          </button> 
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
