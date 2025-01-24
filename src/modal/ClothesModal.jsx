import React from "react";
import logo from "../assets/logo (2).png";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ImageState } from "../store/ImageState";
import notFound from "../assets/notfound.png";

// men tshirt
import BLACK1 from "../assets/Clothes/Men tshirt/BLACK1.png";
import GREY1 from "../assets/Clothes/Men tshirt/GREY1.png";
import WHITE1 from "../assets/Clothes/Men tshirt/WHITE1.png";
import NAVY1 from "../assets/Clothes/Men tshirt/NAVY1.png";
import RED1 from "../assets/Clothes/Men tshirt/RED1.png";
// men slevless
import BLACK1SLEEVLESS from "../assets/Clothes/Men slevless/BLACK1SLEEVLESS.png";
import GREY1SLEEVLESS from "../assets/Clothes/Men slevless/GREY1SLEEVLESS.png";
import WHITE1SLEEVLESS from "../assets/Clothes/Men slevless/WHITE1SLEEVLESS.png";
import NAVY1SLEEVLESS from "../assets/Clothes/Men slevless/NAVY1SLEEVLESS.png";
// men sweatshirt
import BLACK1SWEAT from "../assets/Clothes/Men sweatshirt/BLACK1SWEAT.png";
import BLACK2SWEAT from "../assets/Clothes/Men sweatshirt/BLACK1SWEAT.png";

import GREY1SWEAT from "../assets/Clothes/Men sweatshirt/GREY1SWEAT.png";
import WHITE1SWEAT from "../assets/Clothes/Men sweatshirt/WHITE1SWEAT.png";
import NAVY1SWEAT from "../assets/Clothes/Men sweatshirt/NAVY1SWEAT.png";
import RED1SWEAT from "../assets/Clothes/Men sweatshirt/RED1SWEAT.png";

// ladies tshirt
import LADIESBLACK1 from "../assets/Clothes/Ladies tshirt/BLACK1.png";
import LADIESGREY1 from "../assets/Clothes/Ladies tshirt/GREY1.png";
import LADIESWHITE1 from "../assets/Clothes/Ladies tshirt/WHITE1.png";
import LADIESNAVY1 from "../assets/Clothes/Ladies tshirt/NAVY1.png";
import LADIESRED1 from "../assets/Clothes/Ladies tshirt/RED1.png";
// ladies slevless
import LADIESBLACK1SLEEVLESS from "../assets/Clothes/Ladies slevless/BLACK1SLEVLESS.png";
import LADIESGREY1SLEEVLESS from "../assets/Clothes/Ladies slevless/GREY1SLEVLESS.png";
import LADIESWHITE1SLEEVLESS from "../assets/Clothes/Ladies slevless/WHITE1SLEVLESS.png";
import LADIESNAVY1SLEEVLESS from "../assets/Clothes/Ladies slevless/NAVY1SLEVLESS.png";
// ladies sweatshirt
import LADIESBLACK1SWEAT from "../assets/Clothes/Ladies sweatshirt/BLACK1SWEAT.png";
import LADIESGREY1SWEAT from "../assets/Clothes/Ladies sweatshirt/GREY1SWEAT.png";
import LADIESWHITE1SWEAT from "../assets/Clothes/Ladies sweatshirt/WHITE1SWEAT.png";
import LADIESNAVY1SWEAT from "../assets/Clothes/Ladies sweatshirt/NAVY1SWEAT.png";
import LADIESRED1SWEAT from "../assets/Clothes/Ladies sweatshirt/RED1SWEAT.png";

// KIDS tshirt
import KIDSBLACK1 from "../assets/Clothes/Kids tshirt/BLACK1.png";
import KIDSGREY1 from "../assets/Clothes/Kids tshirt/GREY1.png";
import KIDSWHITE1 from "../assets/Clothes/Kids tshirt/WHITE1.png";
import KIDSNAVY1 from "../assets/Clothes/Kids tshirt/NAVY1.png";
import KIDSRED1 from "../assets/Clothes/Kids tshirt/RED1.png";

// KIDS sweatshirt
import KIDSBLACK1SWEAT from "../assets/Clothes/Kids sweatshirt/BLACK1SWEAT.png";
import KIDSGREY1SWEAT from "../assets/Clothes/Kids sweatshirt/GREY1SWEAT.png";
import KIDSWHITE1SWEAT from "../assets/Clothes/Kids sweatshirt/WHITE1SWEAT.png";
import KIDSNAVY1SWEAT from "../assets/Clothes/Kids sweatshirt/NAVY1SWEAT.png";
import KIDSRED1SWEAT from "../assets/Clothes/Kids sweatshirt/RED1SWEAT.png";

//Cap
import CAP from "../assets/Clothes/Cap/CAP.png";
import CAPBLACK from "../assets/Clothes/Cap/CAPBLACK.png";
import CAPWHITE from "../assets/Clothes/Cap/CAPWHITE.png";

//bag
import BAG from "../assets/Clothes/Totte bag/TOTTE BAG.png";
import { selectedCategoryState } from "../store/SelectedCategory";
import { ProdSelectedColor } from "../store/ProdSelectedColor";
import { ProdSelectedSize } from "../store/ProdSelectedSize";

const ClothesModal = ({ setIsPopupVisible }) => {
  const navigate = useNavigate();
  // const [selectedCat, setSelectedCat] = React.useState("men");
  const [selectedCat, setSelectedCat] = useRecoilState(selectedCategoryState);

  const [selectedImage, setSelectedImage] = React.useState(null);
  // const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);

  const [imageState, setImageState] = useRecoilState(ImageState);
  const [selectedColor, setselectedColor] = useRecoilState(ProdSelectedColor);
  const [selectedSize, setselectedSize] = useRecoilState(ProdSelectedSize);
  localStorage.setItem("imageState", imageState);
  console.log(imageState, "imageState");

  localStorage.setItem("selectedCat", selectedCat);
  console.log("selectedCat", selectedCat)

  // console.log(selectedSize,'size is here')
  // console.log(selectedColor,'color is here')
  const menProduct = [
    {
      image:
        "https://backend.piratak.es/static/assets/Clothes/Men%20tshirt/BLACK1.png",
    },
    // { image: GREY1 },
    // { image: WHITE1 },
    // { image: NAVY1 },
    // { image: RED1 },
    {
      image:
        "https://backend.piratak.es/static/assets/Clothes/Men%20slevless/BLACK1SLEEVLESS.png",
    },
    // { image: GREY1SLEEVLESS },
    // { image: WHITE1SLEEVLESS },
    // { image: NAVY1SLEEVLESS },
    {
      image:
        "https://backend.piratak.es/static/assets/Clothes/Men%20sweatshirt/BLACK1SWEAT.png",
    },
    // { image: GREY1SWEAT },
    // { image: WHITE1SWEAT },
    // { image: NAVY1SWEAT },
    // { image: RED1SWEAT },
  ];

  const womenProducts = [
    {
      image:
        "https://backend.piratak.es/static/assets/Clothes/Ladies%20tshirt/BLACK1.png",
    },
    // { image: LADIESGREY1 },
    // { image: LADIESWHITE1 },
    // { image: LADIESNAVY1 },
    // { image: LADIESRED1 },
    {
      image:
        "https://backend.piratak.es/static/assets/Clothes/Ladies%20slevless/BLACK1SLEVLESS.png",
    },
    // { image: LADIESGREY1SLEEVLESS },
    // { image: LADIESWHITE1SLEEVLESS },
    // { image: LADIESNAVY1SLEEVLESS },
    {
      image:
        "https://backend.piratak.es/static/assets/Clothes/Ladies%20sweatshirt/BLACK1SWEAT.png",
    },
    // { image: LADIESGREY1SWEAT },
    // { image: LADIESWHITE1SWEAT },
    // { image: LADIESNAVY1SWEAT },
    // { image: LADIESRED1SWEAT },
  ];

  const kidsProduct = [
    {
      image:
        "https://backend.piratak.es/static/assets/Clothes/Kids%20tshirt/BLACK1.png",
    },
    // { image: KIDSGREY1 },
    // { image: KIDSWHITE1 },
    // { image: KIDSNAVY1 },
    // { image: KIDSRED1 },
    // { image: KIDSGREY1SWEAT },
    // { image: KIDSWHITE1SWEAT },
    // { image: KIDSNAVY1SWEAT },
    // { image: KIDSRED1SWEAT },
    {
      image:
        "https://backend.piratak.es/static/assets/Clothes/Kids%20sweatshirt/BLACK1SWEAT.png",
    },
  ];

  const cap = [
    { image: "https://backend.piratak.es/static/assets/Clothes/Cap/CAP.png" }, 
    {
      image:
        "https://backend.piratak.es/static/assets/Clothes/Cap/CAPBLACK.png",
    },
    {
      image:
        "https://backend.piratak.es/static/assets/Clothes/Cap/CAPWHITE.png",
    },
  ];

  const bag = [
    {
      image:
        "https://backend.piratak.es/static/assets/Clothes/Totte%20bag/TOTTE%20BAG.png",
    },
  ];

  const handleImageClick = (image) => {
    console.log(image, "image is here ");
    setImageState(image);
  };

  const handleClick = (category) => {
    setSelectedCat(category);
    setImageState(null);
  };

  const renderProducts = () => {
    let products = [];
    if (selectedCat === "men") {
      products = menProduct;
    } else if (selectedCat === "women") {
      products = womenProducts;
    } else if (selectedCat === "kid") {
      products = kidsProduct;
    } else if (selectedCat === "cap") {
      products = cap;
    } else if (selectedCat === "bag") {
      products = bag;
    }
    return products.map(({ image }, index) => (
      <div
        key={index}
        className={`w-[40%] md:w-[28%] ${
          imageState === image
            ? "border border-[#5F16B9] border-solid  "
            : "border border-solid "
        } h-40 rounded py-4 shadow flex items-center justify-center`}
        onClick={() => handleImageClick(image)}
      >
        {/* {console.log(index, "index is hereeee")} */}
        <img src={image} alt="" className={`h-28 cursor-pointer`} />
      </div>
    ));
  };

  const handlenavigate = () => {
    // if (selectedImage) {
    //   setImageState(selectedImage);
    //   navigate("/dummy_work");
    //   setIsPopupVisible(false);
    // } else {
    //   alert("Please select an image first.");
    // }
    // navigate("/dummy_work");
    setIsPopupVisible(false);
  };
  console.log(selectedImage, "selectedImage in modal");
  console.log(imageState, "imageState in modal");

  // selectedCat;
  console.log(selectedCat, "selected Cat ");

  const handleColorChange = (color) => {
    console.log(color);
    console.log(imageState, "imagestate");

    // Convert the input color to uppercase
    color = color.toUpperCase();
    console.log(color);

    // Define all possible colors
    const colors = ["RED", "BLACK", "NAVY", "WHITE", "GREY"];

    // Find the current color in imageState and replace it with the new color
    const currentColor = colors.find((c) => imageState.includes(c));
    console.log(currentColor);

    if (currentColor) {
      setImageState(imageState.replace(currentColor, color));
      setselectedColor(color.toLowerCase());
    } else {
      console.error("No valid color found in imageState.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded shadow h-3/4 w-4/5 flex flex-row relative">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={() => setIsPopupVisible(false)}
          >
            <RxCross2 />
          </button>
          <div className="py-5 w-1/6 px-5">
            <div className="border-b-2 border-gray-200 pb-4">
              <img src={logo} alt="" className="h-12 w-12" />
            </div>
            <p
              onClick={() => handleClick("men")}
              className={`text-[#2d2d2d] text-md mt-12 cursor-pointer ${
                selectedCat === "men" ? "text-[#5F16B9] font-black" : ""
              }`}
            >
              Men
            </p>
            <p
              onClick={() => handleClick("women")}
              className={`text-[#2d2d2d] text-md mt-3 cursor-pointer ${
                selectedCat === "women" ? "text-[#5F16B9] font-black" : ""
              }`}
            >
              Women
            </p>
            <p
              onClick={() => handleClick("kid")}
              className={`text-[#2d2d2d] text-md mt-3 cursor-pointer ${
                selectedCat === "kid" ? "text-[#5F16B9] font-black" : ""
              }`}
            >
              Kids
            </p>
            <p
              onClick={() => handleClick("cap")}
              className={`text-[#2d2d2d] text-md mt-3 cursor-pointer ${
                selectedCat === "cap" ? "text-[#5F16B9] font-black" : ""
              }`}
            >
              Cap
            </p>
            <p
              onClick={() => handleClick("bag")}
              className={`text-[#2d2d2d] text-md mt-3 cursor-pointer ${
                selectedCat === "bag" ? "text-[#5F16B9] font-black" : ""
              }`}
            >
              Bag
            </p>
          </div>
          <div className="border-l border-gray-200 w-3/6">
            <h1 className="text-md mx-10 md:mx-0 md:text-2xl font-semibold text-[#2d2d2d] text-center pt-7 pb-6">
              Select Any One Product that you want
            </h1>
            <div className="py-4 px-4 md:px-6 pl-5 md:pl-10 flex flex-wrap gap-3 md:gap-6">
              {renderProducts()}
              {/* adsdas */}
            </div>
          </div>
          <div className="border-l border-gray-200 w-2/6 flex items-center justify-center">
            {imageState ? (
              <div>
                <img
                  src={imageState}
                  alt="Selected"
                  className="h-40 mx-auto "
                />
                {selectedCat !== "bag" && selectedCat !== "cap" && (
                  <>
                    <h1 className="text-lg font-semibold text-center mt-4">
                      Available Sizes
                    </h1>

                    <div className="flex justify-center mt-2 space-x-4">
                      {["XS", "S", "M", "L", "XL", "2Xl"].map((size) => (
                        <div
                          key={size}
                          onClick={() => setselectedSize(size)}
                          className={`border-2 border-gray-300 rounded-full text-sm px-3 py-1 text-center cursor-pointer ${
                            selectedSize === size
                              ? "ring-2 ring-[#5F16B9] ring-offset-2     scale-110 "
                              : ""
                          } hover:border-[#5F16B9] hover:text-[#5F16B9]`}
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                    <h1 className="text-lg font-semibold text-center mt-4">
                      Available Colors
                    </h1>
                    <div className="flex justify-center mt-2 space-x-4">
                      {["Black", "red", "navy", "white", "grey"].map(
                        (color) => (
                          <div
                            key={color}
                            className={`w-5 h-5 rounded-full cursor-pointer ${
                              selectedColor === color
                                ? "ring-2 ring-[#5F16B9] ring-offset-2     scale-110 "
                                : ""
                            }`}
                            style={{
                              backgroundColor:
                                color === "white"
                                  ? "#f3f4f6" // Tailwind's gray-200
                                  : color === "red"
                                  ? "#FF0000" // Tailwind's red-600
                                  : color === "navy"
                                  ? "#001f3f"
                                  : color === "black"
                                  ? "#000000"
                                  : "#9ca3af",
                            }}
                            // onClick={()=>setselectedColor(color)}
                            onClick={() => handleColorChange(color)}
                          ></div>
                        )
                      )}
                    </div>
                  </>
                )}
                <div className="flex justify-center px-8">
                  <a
                    href="/dummy_work"
                    className="py-3 px-8 bg-[#5F16B9] text-white rounded flex justify-center items-center mt-8 hover:bg-transparent border-2 border-[#5F16B9] hover:text-[#5F16B9]"
                    onClick={handlenavigate}
                  >
                    Move On Editor
                  </a>
                </div>
              </div>
            ) : (
              <div>
                {/* <img src={notFound} alt="" className="h-40 mx-auto" />
                <p className="text-center mt-4">Details about the image...</p> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClothesModal;
