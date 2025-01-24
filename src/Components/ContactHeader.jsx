import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function ContactHeader() {
  const randomNum = () => {
    return parseInt(Math.random() * 20 * 5 + 20);
  };

  const randomDelay = () => {
    return Math.random() * 4 + 1;
  };

  return (
    <>
      <div className="bg-[#EFF2F7] flex justify-center items-center h-56 overflow-hidden relative mt-24">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-3 opacity-80 ">Contact Us</h2>
          <p className="flex items-center justify-center gap-2">
            <span className="text-primary">
              <Link to="/">
                <FaHome />
              </Link>
            </span>
            / Contact us
          </p>
        </div>
        <ul
          style={{ columnGap: randomNum() * 5, rowGap: randomNum() }}
          className="absolute h-full w-full flex flex-wrap justify-center items-center  z-0"
        >
          {[...Array(7)].map((_, index) => (
            <li
              style={{
                height: randomNum(),
                width: randomNum(),
                left: randomNum(),
                top: randomNum() * 2 + "px",
                animationDelay: randomDelay() * 0.5 + "s",
              }}
              key={index}
              className="animate rounded-lg opacity-40 bg-[#5F16B9] relative"
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ContactHeader;
