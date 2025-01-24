import React from "react";
import { CiUser, CiShop } from "react-icons/ci";
import logo from "../assets/logo (2).png";
import { useNavigate } from "react-router-dom";
import ClothesModal from "../modal/ClothesModal";
import { CartState } from "../store/CartState";
import { useRecoilValue } from "recoil";
import CartItemsModal from "../modal/CartItemsModal";

const SubNav = () => {
  const navigate = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = React.useState(false);
  const [isCartVisible, setIsCartVisible] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // const cartItems = useRecoilValue(CartState);
  // console.log(cartItems , "get cartitems")

  const handleSelectClick = () => {
    setIsPopupVisible(true);
  };

  // console.log(cartItems, "cartItems");

  return (
    <div className="py-4 shadow flex justify-between items-center px-20 w-full fixed top-0 left-0 right-0 z-40 bg-white">
      <img
        src={logo}
        alt=""
        className="h-16 w-16 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <ul className="text-[#2d2d2d] font-medium w-1/4 flex justify-evenly gap-7">
        <li
          onClick={() => navigate("/")}
          className="hover:text-white hover:bg-purple-700 px-4 py-2 rounded hover:cursor-pointer"
        >
          {/* <Link to="home" smooth={true} duration={500}> */}
          Home
          {/* </Link> */}
        </li>
        <li
          onClick={() => navigate("/about")}
          className="hover:text-white hover:bg-purple-700 px-4 py-2 rounded hover:cursor-pointer"
        >
          {/* <Link to="about" smooth={true} duration={500}> */}
          About
          {/* </Link> */}
        </li>
        <li
          onClick={handleSelectClick}
          className="hover:text-white hover:bg-purple-700 px-4 py-2 rounded hover:cursor-pointer"
        >
          Shop
        </li>
        <li
          onClick={() => navigate("/contact")}
          className="hover:text-white hover:bg-purple-700 px-4 py-2 rounded hover:cursor-pointer"
        >
          {/* <Link to="contact" smooth={true} duration={500}> */}
          Contact
          {/* </Link> */}
        </li>
      </ul>
      <ul className="flex space-x-4">
        <li className="relative border-r pr-2 hover:cursor-pointer hover:text-[#5F16B9]">
          <CiUser className="text-2xl" />
        </li>
        <li className="relative pr-2 hover:cursor-pointer hover:text-[#5F16B9]">
          <CiShop className="text-2xl" onClick={() => setIsCartVisible(true)} />
          <span className="absolute -top-1 right-0 bg-[#5F16B9] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {cartItems.length}
            {/* {getTotalCartQuantity()} */}
          </span>
        </li>
      </ul>
      {isCartVisible && <CartItemsModal setIsCartVisible={setIsCartVisible} />}
      {isPopupVisible && <ClothesModal setIsPopupVisible={setIsPopupVisible} />}
    </div>
  );
};

export default SubNav;
