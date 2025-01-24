import React, { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CartState } from "../store/CartState";
import { ImageState } from "../store/ImageState";

const SizeModal = ({ handleClose }) => {
  const setCart = useSetRecoilState(CartState);
  // const imageState = useRecoilValue(ImageState);
  const imageState = localStorage.getItem("imageState");

  const [quantities, setQuantities] = useState({
    XS: 0,
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
  });

  const [checkoutModal, setCheckoutModal] = useState(false);

  const handleQuantityChange = (size, increment) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [size]: Math.max(0, prevQuantities[size] + increment),
    }));
  };

  const getTotalItems = () =>
    Object.values(quantities).reduce((a, b) => a + b, 0);
  const price = 16.0;
  const total = price * getTotalItems();

  // const handleCheckoutOpen = () => {
  //   const totalQuantity = getTotalItems();

  //   if (totalQuantity > 0) {
  //     const cartItem = {
  //       id: Date.now(),
  //       frontImage: imageState,
  //       backImage: imageState?.replace("1", "2"),
  //       quantities: { ...quantities }, // Add selected quantities
  //       totalQuantity,
  //       totalPrice: total, // Calculate the total price
  //     };

  //     setCart((prevCart) => [...prevCart, cartItem]); // Update the cart state

  //     // Reset the quantities state
  //     setQuantities({
  //       XS: 0,
  //       S: 0,
  //       M: 0,
  //       L: 0,
  //       XL: 0,
  //       XXL: 0,
  //     });

  //     setCheckoutModal(true);
  //   } else {
  //     alert("Please select at least one size!");
  //   }
  // };

  const handleCheckoutOpen = () => {
    const totalQuantity = getTotalItems();

    if (totalQuantity > 0) {
      const cartItem = {
        id: Date.now(),
        frontImage: imageState,
        backImage: imageState?.replace("1", "2"),
        quantities: { ...quantities }, // Store size-specific quantities
        totalQuantity,
        totalPrice: total, // Calculate the total price
      };

      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = [...existingCart, cartItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      setCart(updatedCart); 

      // Reset the quantities state
      setQuantities({
        XS: 0,
        S: 0,
        M: 0,
        L: 0,
        XL: 0,
        XXL: 0,
      });

      setCheckoutModal(true);
    } else {
      alert("Please select at least one size!");
    }
  };

  const handleCheckoutClose = () => {
    setCheckoutModal(false);
  };

  // const handleAddCart = () => {};

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center mt-20">
        <div className="bg-white rounded-lg shadow-xl h-[75%] w-full max-w-md p-4 overflow-y-auto">
          <div className="flex justify-between items-center pb-2 mb-4">
            <h2 className="text-lg font-semibold">Choose size</h2>
            <button
              className="text-lg font-semibold hover:text-gray-500"
              onClick={() => handleClose()}
            >
              x
            </button>
          </div>

          <div className="space-y-3">
            {Object.keys(quantities).map((size) => (
              <div
                key={size}
                className="flex justify-between items-center border-t py-2"
              >
                <span>{size}</span>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(size, -1)}
                    className="bg-gray-200 text-gray-600 px-3 py-1 rounded-l"
                  >
                    -
                  </button>
                  <span className="bg-gray-100 px-4 py-1">
                    {quantities[size]}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(size, 1)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 mt-4">
            {/* <div className="flex justify-between items-center">
              <p className="text-sm">1 item</p>
              <div>
                <span className="text-red-500 text-sm">
                  -20% off from 3 items
                </span>
                <a href="#" className="text-red-500 text-sm ml-2">
                  more info
                </a>
              </div>
            </div> */}

            <div className="flex justify-between items-center text-lg font-semibold ">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              className="bg-yellow-400 text-white w-full py-2 mt-4 rounded flex justify-center items-center"
              onClick={() => handleCheckoutOpen()}
            >
              <span className="mr-2">&#128722;</span> Add to cart
            </button>
          </div>
        </div>
      </div>
      {checkoutModal && (
        <CheckoutModal handleCheckoutClose={handleCheckoutClose} />
      )}
    </>
  );
};

export default SizeModal;
