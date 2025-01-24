// import React from "react";
// import { FaRegCheckCircle, FaTrashAlt } from "react-icons/fa";
// import { useRecoilValue, useRecoilState } from "recoil";
// import { CartState } from "../store/CartState";
// import { Link } from "react-router-dom";

// const CartItemsModal = ({ setIsCartVisible }) => {
//   // const cartItems = useRecoilValue(CartState);

//   const [cartItems, setCartItems] = useRecoilState(CartState);

//   React.useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(cart);
//   }, []);

//   const handleDelete = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));e
//   };

//   // const handleDelete = (id) => {
//   //   const updatedCart = cartItems.filter((item) => item.id !== id);
//   //   setCartItems(updatedCart);
//   // };

//  return (
//    <>
//      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
//        <div className="bg-white rounded-lg p-6 max-w-md h-[85%] overflow-y-scroll w-full shadow-lg">
//          <h2 className="text-xl font-bold mb-4 text-gray-800">Your Cart</h2>
//          {cartItems.length > 0 ? (
//            <div className="space-y-4">
//              {cartItems.map((item, index) => (
//                <div key={index} className="border-b pb-4 last:border-none">
//                  <div className="flex items-center mb-4">
//                    <img
//                      src={item.frontImage}
//                      alt={`Front view of ${item.title}`}
//                      className="w-16 h-16 rounded object-cover mr-4"
//                    />
//                    <img
//                      src={item.backImage}
//                      alt={`Back view of ${item.title}`}
//                      className="w-16 h-16 rounded object-cover"
//                    />
//                  </div>
//                  {/* <h3 className="text-sm font-semibold text-gray-700">
//                    Item ID: {item.id}
//                  </h3> */}
//                  <p className="text-sm text-gray-500">
//                    Total Quantity: {item.totalQuantity}
//                  </p>
//                  <p className="text-sm text-gray-500 mb-2">
//                    Total Price: ${item.totalPrice}
//                  </p>
//                  <div>
//                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
//                      Sizes and Quantities:
//                    </h4>
//                    <ul className="space-y-1">
//                      {Object.entries(item.quantities).map(
//                        ([size, quantity]) => (
//                          <li key={size} className="text-sm text-gray-500">
//                            <span className="font-medium">Size {size}:</span>{" "}
//                            {quantity}
//                          </li>
//                        )
//                      )}
//                    </ul>
//                  </div>
//                  <button
//                    className="text-red-500 hover:text-red-600 mt-4"
//                    onClick={() => handleDelete(item.id)}
//                  >
//                    <FaTrashAlt size={16} /> Remove Item
//                  </button>
//                </div>
//              ))}
//            </div>
//          ) : (
//            <p className="text-gray-500">Your cart is empty.</p>
//          )}
//          <div className="mt-6 flex justify-between items-center">
//            <button
//              className="text-sm text-gray-600 hover:underline"
//              onClick={() => setIsCartVisible(false)}
//            >
//              Continue Shopping
//            </button>
//            <Link to="/checkout">
//              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
//                Checkout
//              </button>
//            </Link>
//          </div>
//        </div>
//      </div>
//    </>
//  );
// };

// export default CartItemsModal;

import React, { useState } from "react";
import { FaRegCheckCircle, FaTrashAlt } from "react-icons/fa";
import { useRecoilValue, useRecoilState } from "recoil";
import { CartState } from "../store/CartState";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import { loginSchema } from "../schema/LoginSchema";

const CartItemsModal = ({ setIsCartVisible }) => {
  const [cartItems, setCartItems] = useRecoilState(CartState);

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleOpen = () => {
    setLoginModalOpen(true);
  };

  const closeModal = () => {
    setLoginModalOpen(false);
  };

  React.useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, size, change) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantities[size] + change;
        if (newQuantity < 0) return item;

        const updatedQuantities = { ...item.quantities, [size]: newQuantity };
        const pricePerItem = 16;
        const updatedTotalPrice = Object.entries(updatedQuantities).reduce(
          (total, [key, qty]) => total + qty * pricePerItem,
          0
        );

        return {
          ...item,
          quantities: updatedQuantities,
          totalQuantity: item.totalQuantity + change,
          totalPrice: updatedTotalPrice,
        };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md h-[85%] overflow-y-scroll w-full shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Your Cart</h2>
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="border-b pb-4 last:border-none">
                  <div className="flex items-center mb-4">
                    <img
                      src={item.frontImage}
                      alt={`Front view of ${item.title}`}
                      className="w-16 h-16 rounded object-cover mr-4"
                    />
                    {/* <img
                      src={item.backImage}
                      alt={`Back view of ${item.title}`}
                      className="w-16 h-16 rounded object-cover"
                    /> */}
                    <button
                      className="text-red-500 hover:text-red-600 mt-4 ml-16"
                      onClick={() => handleDelete(item.id)}
                    >
                      <FaTrashAlt size={16} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Total Quantity: {item.totalQuantity}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    Total Price: ${item.totalPrice}
                  </p>
                  {/* <div className="flex">
                    <ul className="space-y-2">
                      {Object.entries(item.quantities).map(
                        ([size, quantity]) => (
                          <li
                            key={size}
                            className="flex items-center justify-between text-sm text-gray-500"
                          >
                            <span className="font-medium text-md flex items-center">
                              {size}:
                            </span>
                            <div className="flex items-center space-x-2">
                              <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded"
                                onClick={() =>
                                  updateQuantity(item.id, size, -1)
                                }
                                disabled={quantity <= 0}
                              >
                                -
                              </button>
                              <span className="">{quantity}</span>
                              <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded"
                                onClick={() => updateQuantity(item.id, size, 1)}
                              >
                                +
                              </button>
                            </div>
                          </li>
                        )
                      )}
                    </ul>
                  </div> */}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
          <div className="mt-6 flex justify-between items-center">
            <button
              className="text-sm text-gray-600 hover:underline"
              onClick={() => setIsCartVisible(false)}
            >
              Continue Shopping
            </button>
            <button
              onClick={handleOpen}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Checkout
            </button>
            {isLoginModalOpen && (
              <LoginModal isOpen={isLoginModalOpen} onClose={closeModal} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemsModal;
