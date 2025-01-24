// import React, { useState } from "react";
// import logo from "../assets/logo (2).png";
// import { RxCross2 } from "react-icons/rx";
// import image1 from "../assets/men1.jpg";
// import image2 from "../assets/men2.jpg";
// import image3 from "../assets/sweater.jpg";
// import image4 from "../assets/sleeveless.jpg";
// import W_image1 from "../assets/women_1.png";
// import W_image2 from "../assets/women_2.jpg";
// import W_image3 from "../assets/women_3.png";
// import W_image4 from "../assets/women_4.jpg";
// import notFound from "../assets/notfound.png";

// const SelectedPopup = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [selectedCat, setSelectedCat] = useState("men");
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleSelectClick = () => {
//     setIsPopupVisible(true);
//   };

//   const menProduct = [
//     { image: image1 },
//     { image: image2 },
//     { image: image3 },
//     { image: image4 },
//   ];

//   const womenProducts = [
//     { image: W_image1 },
//     { image: W_image2 },
//     { image: W_image3 },
//     { image: W_image4 },
//   ];

//   const handleClick = (category) => {
//     setSelectedCat(category);
//     setSelectedImage(null);
//   };

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   const renderProducts = () => {
//     const products = selectedCat === "men" ? menProduct : womenProducts;
//     return products.map(({ image }, index) => (
//       <div
//         key={index}
//         className="w-[28%] h-40 rounded py-4 shadow flex items-center justify-center"
//         onClick={() => handleImageClick(image)}
//       >
//         <img src={image} alt="" className="h-28 cursor-pointer" />
//       </div>
//     ));
//   };  

//   return (
//     <>
//       <div className="py-4">
//         <h1 className="text-2xl text-[#2d2d2d] text-center font-semibold underline">
//           Select Any One Category Of Your Choice
//         </h1>
//         <button
//           className="py-3 px-14 bg-[#5F16B9] text-white rounded block mx-auto mt-8 hover:bg-transparent border-2 border-[#5F16B9] hover:text-[#5F16B9]"
//           onClick={handleSelectClick}
//         >
//           Select
//         </button>
//       </div>

//       {isPopupVisible && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white rounded shadow h-3/4 w-4/5 flex relative">
//             <button
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//               onClick={() => setIsPopupVisible(false)}
//             >
//               <RxCross2 />
//             </button>
//             <div className="py-5 w-1/6 px-5">
//               <div className="border-b-2 border-gray-200 pb-4">
//                 <img src={logo} alt="" className="h-12 w-12" />
//               </div>
//               <p
//                 onClick={() => handleClick("men")}
//                 className={`text-[#2d2d2d] text-md font-medium mt-12 cursor-pointer ${
//                   selectedCat === "men"
//                     ? "text-[#5F16B9] font-black text-md"
//                     : ""
//                 }`}
//               >
//                 Men
//               </p>
//               <p
//                 onClick={() => handleClick("women")}
//                 className={`text-[#2d2d2d] text-md font-medium mt-3 cursor-pointer ${
//                   selectedCat === "women"
//                     ? "text-[#5F16B9] font-black text-md"
//                     : ""
//                 }`}
//               >
//                 Women
//               </p>
//               <p
//                 onClick={() => handleClick("kid")}
//                 className={`text-[#2d2d2d] text-md font-medium mt-3 cursor-pointer ${
//                   selectedCat === "kid"
//                     ? "text-[#5F16B9] font-black text-md"
//                     : ""
//                 }`}
//               >
//                 Kids
//               </p>
//             </div>
//             <div className="border-l border-gray-200 w-3/6">
//               <h1 className="text-2xl font-semibold text-[#2d2d2d] text-center pt-7 pb-6">
//                 Select Any One Product that you want
//               </h1>
//               <div className="py-4 px-6 pl-10 flex flex-wrap gap-6">
//                 {renderProducts()}
//               </div>
//             </div>
//             <div className=" border-l border-gray-200 w-2/6 flex items-center justify-center">
//               {selectedImage ? (
//                 <div>
//                   <img src={selectedImage} alt="Selected" className="h-40" />
//                   <p className="text-center mt-4">Details about the image...</p>

//                   <h1> // show sizes of products //</h1>
//                   <p> // show colors of products //</p>

//                   <button
//                     className="py-3 px-14 bg-[#5F16B9] text-white rounded block mx-auto mt-8 hover:bg-transparent border-2 border-[#5F16B9] hover:text-[#5F16B9]"
//                     onClick={() => alert("Editor Process................")}
//                   >
//                     Move On Editor
//                   </button>
//                 </div>
//               ) : (
//                 <div>
//                   <img src={notFound} alt="" srcset="" className="h-40" />
//                   <p className="text-center mt-4">Details about the image...</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default SelectedPopup;
