import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";

export const PaymentComponent = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardName, setCardName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ cardNumber, expirationDate, cvc });
  };

  return (
    <div className="mt-4 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-4">Enter Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          {/* <FontAwesomeIcon
            icon={faCcVisa}
            className="text-blue-500 mr-2"
            size="2x"
          /> */}
          <span className="text-lg">Visa Card</span>
        </div>
        <div className="mb-4">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            placeholder="1234 5678 9012 3456"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label
              htmlFor="expirationDate"
              className="block text-sm font-medium text-gray-700"
            >
              Expiration Date
            </label>
            <input
              type="text"
              id="expirationDate"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              required
              placeholder="MM/YY"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="cvc"
              className="block text-sm font-medium text-gray-700"
            >
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              required
              placeholder="123"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Card Name
          </label>
          <input
            type="text"
            id="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
            placeholder="Enter your card name"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-300 text-[#2d2d2d] py-2 rounded-lg hover:bg-yellow-400"
        >
          Proceed with Payment
        </button>
      </form>
    </div>
  );
};
