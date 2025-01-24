import React, { useState } from "react";
import { PaymentComponent } from "./PaymentComp";
import { useRecoilValue } from "recoil";
import { ImageState } from "../store/ImageState";
import SubNav from "./SubNav";

const Checkout = () => {
  const imageState = useRecoilValue(ImageState);

  const [isVisible, setIsVisible] = useState(false);

  // State for personal data
  const [personalData, setPersonalData] = useState({
    email: "",
    name: "",
    surname: "",
    address: "",
    postalCode: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    deliveryInstructions: "",
    newsletter: false,
  });

  // State for delivery method
  const [deliveryMethod, setDeliveryMethod] = useState("standard"); // can be 'standard' or 'priority'

  // State for order items
  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      name: "Men, short sleeve, white, high quality (Customized)",
      price: 16.0,
      quantity: 1,
    },
  ]);

  // Calculate subtotal and total
  const calculateSubtotal = () => {
    return orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shippingCost = deliveryMethod === "priority" ? 4.9 : 0; // Shipping cost for priority delivery
    return subtotal + shippingCost;
  };

  return (
    <>
      <SubNav />
      <div className="min-h-screen bg-gray-100 p-4 mt-24  ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Personal Data & Delivery Method */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">1. Personal data</h2>
            <form className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email*"
                  value={personalData.email}
                  onChange={(e) =>
                    setPersonalData({ ...personalData, email: e.target.value })
                  }
                  className="border border-gray-300 p-3 rounded w-full"
                />
                <input
                  type="text"
                  placeholder="Name*"
                  value={personalData.name}
                  onChange={(e) =>
                    setPersonalData({ ...personalData, name: e.target.value })
                  }
                  className="border border-gray-300 p-3 rounded w-full"
                />
                <input
                  type="text"
                  placeholder="Surname*"
                  value={personalData.surname}
                  onChange={(e) =>
                    setPersonalData({
                      ...personalData,
                      surname: e.target.value,
                    })
                  }
                  className="border border-gray-300 p-3 rounded w-full md:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Address (street, building name...)*"
                  value={personalData.address}
                  onChange={(e) =>
                    setPersonalData({
                      ...personalData,
                      address: e.target.value,
                    })
                  }
                  className="border border-gray-300 p-3 rounded w-full md:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Postal code*"
                  value={personalData.postalCode}
                  onChange={(e) =>
                    setPersonalData({
                      ...personalData,
                      postalCode: e.target.value,
                    })
                  }
                  className="border border-gray-300 p-3 rounded w-full"
                />
                <input
                  type="text"
                  placeholder="City*"
                  value={personalData.city}
                  onChange={(e) =>
                    setPersonalData({ ...personalData, city: e.target.value })
                  }
                  className="border border-gray-300 p-3 rounded w-full"
                />
                <select
                  value={personalData.state}
                  onChange={(e) =>
                    setPersonalData({ ...personalData, state: e.target.value })
                  }
                  className="border border-gray-300 p-3 rounded w-full md:col-span-2"
                >
                  <option>Choose your state*</option>
                  <option>State 1</option>
                  <option>State 2</option>
                </select>
                <input
                  type="text"
                  placeholder="Country*"
                  value={personalData.country}
                  onChange={(e) =>
                    setPersonalData({
                      ...personalData,
                      country: e.target.value,
                    })
                  }
                  className="border border-gray-300 p-3 rounded w-full md:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Phone number*"
                  value={personalData.phone}
                  onChange={(e) =>
                    setPersonalData({ ...personalData, phone: e.target.value })
                  }
                  className="border border-gray-300 p-3 rounded w-full md:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Delivery instructions"
                  value={personalData.deliveryInstructions}
                  onChange={(e) =>
                    setPersonalData({
                      ...personalData,
                      deliveryInstructions: e.target.value,
                    })
                  }
                  className="border border-gray-300 p-3 rounded w-full md:col-span-2"
                />
                <div className="md:col-span-2 flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={personalData.newsletter}
                    onChange={(e) =>
                      setPersonalData({
                        ...personalData,
                        newsletter: e.target.checked,
                      })
                    }
                  />
                  <label htmlFor="newsletter">
                    I want to get 20% OFF on my next order and receive exclusive
                    offers and promotions.
                  </label>
                </div>
              </div>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                2. Delivery method
              </h2>
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="delivery"
                    value="standard"
                    checked={deliveryMethod === "standard"}
                    onChange={() => setDeliveryMethod("standard")}
                  />
                  <span>Standard Delivery</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="delivery"
                    value="priority"
                    checked={deliveryMethod === "priority"}
                    onChange={() => setDeliveryMethod("priority")}
                  />
                  <span>
                    PRIORITY: Delivery between Tuesday 29/10 and Wednesday 06/11
                    <span className="ml-2 text-gray-500">
                      Priority Production $4.90
                    </span>
                  </span>
                </label>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setIsVisible(!isVisible)}
                  className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 active:bg-yellow-600"
                >
                  CONTINUE WITH PAYMENT METHOD
                </button>
              </div>
              {isVisible ? <PaymentComponent /> : ""}

              <p className="mt-2 text-sm">
                I have read and accept the{" "}
                <a href="#" className="text-blue-500 underline">
                  terms and conditions
                </a>{" "}
                and the{" "}
                <a href="#" className="text-blue-500 underline">
                  privacy policy
                </a>{" "}
                in order to place the order.
              </p>
            </form>
          </div>

          {/* Right Section - Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Summary of your order
            </h2>

            {/* Gift Option */}
            <div className="flex items-center mb-4">
              <input type="checkbox" id="gift" className="mr-2" />
              <label htmlFor="gift" className="text-sm">
                This order contains a gift
              </label>
            </div>

            {/* Order Items */}
            <div className="flex flex-col gap-4 mb-4">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center gap-4 border-b pb-4"
                >
                  {console.log(imageState, "console is here")}
                  <img src={imageState} alt="Product" className="w-16 h-16" />
                  <div className="text-sm">
                    <p>{item.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-500">Size:</span>
                      <select className="border border-gray-300 rounded p-1">
                        <option>M</option>
                        <option>XXL</option>
                        <option>XL</option>
                      </select>
                    </div>
                  </div>
                  <p>${item.price.toFixed(2)}</p>
                  <button className="text-red-500 hover:underline">
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <div className="text-sm text-blue-500 mb-4">
              <a href="#">Got a promo code?</a>
            </div>

            {/* Subtotal and Total */}
            <div className="flex justify-between items-center text-lg mb-2">
              <p>Subtotal:</p>
              <p>${calculateSubtotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center text-lg mb-2">
              <p>Shipping costs:</p>
              <p>{deliveryMethod === "priority" ? "$4.90" : "Free"}</p>
            </div>
            <div className="flex justify-between items-center text-xl font-semibold">
              <p>Total:</p>
              <p>${calculateTotal().toFixed(2)}</p>
            </div>

            {/* Payment Methods */}
            <div className="mt-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/768px-Stripe_Logo%2C_revised_2016.svg.png"
                alt="Payment methods"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
