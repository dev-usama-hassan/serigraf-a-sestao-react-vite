import React from "react";
// import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaPinterest,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";

import logo from "../assets/logo (2).png";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#2f333a] flex px-36">
        <div className="w-1/4 flex items-center">
          <img src={logo} alt="" className="h-44 w-44 rounded-full" />
        </div>
        <div className="w-1/4 pt-14 pl-28">
          <h1 className="text-white font-bold text-xl">Links</h1>

          <p className="text-sm font-normal py-2 text-white mt-4 cursor-pointer">
            {/* <Link to="home" smooth={true} duration={500}> */}
              Home
            {/* </Link> */}
          </p>
          <p className="text-sm font-normal py-2 text-white cursor-pointer">
            {" "}
            {/* <Link to="about" smooth={true} duration={500}> */}
              About us
            {/* </Link> */}
          </p>
          <p className="text-sm font-normal py-2 text-white cursor-pointer">
            Shop
          </p>
          <p className="text-sm font-normal py-2 text-white cursor-pointer">
            {" "}
            {/* <Link to="contact" smooth={true} duration={500}> */}
              Contact
            {/* </Link> */}
          </p>
        </div>
        <div className="w-1/4 pt-14 pl-16">
          <h1 className="text-white font-medium text-xl">My Account</h1>
          <p className="text-sm font-normal py-2 text-white mt-4">Login</p>
          <p className="text-sm font-normal py-2 text-white">My Cart</p>
          <p className="text-sm font-normal py-2 text-white">Wishlist</p>
          {/* <p className="text-sm font-normal py-2 text-white">Compare</p>
          <p className="text-sm font-normal py-2 text-white">My Account</p> */}
        </div>

        <div className="w-1/4 pt-14 pb-4 pl-10">
          <h1 className="text-white font-medium text-xl">Information</h1>
          <p className="text-sm font-medium text-white mt-4">
            Serigrafia Sestao, Pol.2, Beurko Viejo Kalea, 22, 48902
            Barakaldo,Biscay
            <br />
            <span className="font-bold">Phone:</span> 944370259
            <br />
            <span className="font-bold">Email:</span>
            <a
              href="mailto:serigrafiasestao@serigrafiasestao.com"
              className="text-blue-500"
            >
              serigrafiasestao@serigrafiasestao.com
            </a>
          </p>
          <p className="text-sm font-medium text-white mt-2">
            Serigrafia Sestao Gernika, Elbira Iturri Kalea, 3, 48300
            Gernika-Lumo, Bizkaia
            <br />
            <span className="font-bold">Phone:</span> 946257262
            <br />
            <span className="font-bold">Email:</span>
            <a
              href="mailto:gernika@serigrafiasestao.es"
              className="text-blue-500"
            >
              gernika@serigrafiasestao.es
            </a>
          </p>
        </div>
      </div>
      {/* <div className="py-2 bg-[#2d2d2d] px-14  flex justify-end">
      <div className="border border-red-500 w-1/5 flex gap-3 py-2">

      </div>
    </div> */}
    </>
  );
};

export default Footer;
