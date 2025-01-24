// const [currentSlide, setCurrentSlide] = useState(0);
// const slides = [
//   {
//     products: "New Products",
//     text: "Men's Products",
//     imgSrc: "/docs/images/carousel/carousel-1.svg",
//     para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id facilis exercitationem, tempore quisquam quas molestiae",
//   },
//   {
//     products: "New Products",
//     text: "Women's Product",
//     imgSrc: "/docs/images/carousel/carousel-2.svg",
//     para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id facilis exercitationem, tempore quisquam quas molestiae",
//   },
//   {
//     products: "New Products",
//     text: "Creativity",
//     imgSrc: "/docs/images/carousel/carousel-3.svg",
//     para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id facilis exercitationem, tempore quisquam quas molestiae",
//   },
//   {
//     products: "New Products",
//     text: "Best Design's",
//     imgSrc: "/docs/images/carousel/carousel-4.svg",
//     para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id facilis exercitationem, tempore quisquam quas molestiae",
//   },
//   {
//     products: "New Products",
//     text: "Products",
//     imgSrc: "/docs/images/carousel/carousel-5.svg",
//     para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id facilis exercitationem, tempore quisquam quas molestiae",
//   },
// ];

// React.useEffect(() => {
//   const timer = setInterval(() => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   }, 3000);

//   return () => clearInterval(timer);
// }, [slides.length]);

// const prevSlide = () => {
//   setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
// };

// const nextSlide = () => {
//   setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
// };

// return (
//   <div className="relative w-full bg-[#e7e7e7] min-h-screen">
//     <div className="relative min-h-screen rounded-lg md:h-96">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`flex justify-between items-center h-full transition-opacity duration-1000 ease-linear ${
//             index === currentSlide ? "opacity-100" : "opacity-0"
//           } absolute inset-0`}
//         >
//           <div className="w-1/2 justify-center items-center pl-28 pr-7">
//             <p className="text-[#474747] font-medium text-xl py-4">
//               {slide.products}
//             </p>
//             <h1 className="text-5xl font-bold text-[#212121]">
//               {slide.text}
//             </h1>
//             <p className="text-md font-normal text-[#474747] pt-7 pb-8">
//               {slide.para}
//             </p>
//             <button className="text-white bg-[#ff7003] px-5 py-2 rounded hover:bg-black hover:text-[#ff7003]">
//               Shop Now
//             </button>
//           </div>

//           <div className="w-1/2">
//             {/* <img
//               src={slide.imgSrc}
//               className="w-full h-full object-cover"
//               alt={`Slide ${index + 1}`}
//             /> */}
//             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//               <path
//                 fill="#FF7003"
//                 d="M35.5,-41.2C45.7,-33.8,53.5,-22.3,60.5,-7C67.6,8.3,74.1,27.4,68.7,42.4C63.3,57.4,46.1,68.3,28.4,72.3C10.7,76.3,-7.5,73.5,-25,67.6C-42.6,61.7,-59.4,52.9,-63.8,39.6C-68.1,26.3,-60,8.6,-55.5,-8.6C-51.1,-25.9,-50.5,-42.6,-41.8,-50.3C-33.2,-58,-16.6,-56.6,-2,-54.2C12.7,-51.9,25.3,-48.6,35.5,-41.2Z"
//                 transform="translate(100 100)"
//               />
//             </svg>
//           </div>
//         </div>
//       ))}
//     </div>

//     <button
//       type="button"
//       className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//       onClick={prevSlide}
//     >
//       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/60">
//         <svg
//           className="w-4 h-4 text-[#2d2d2d]"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 6 10"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M5 1 1 5l4 4"
//           />
//         </svg>
//         <span className="sr-only">Previous</span>
//       </span>
//     </button>
//     <button
//       type="button"
//       className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//       onClick={nextSlide}
//     >
//       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/60">
//         <svg
//           className="w-4 h-4 text-[#2d2d2d]"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 6 10"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="m1 9 4-4-4-4"
//           />
//         </svg>
//         <span className="sr-only">Next</span>
//       </span>
//     </button>
//   </div>
// );













// import React, { useState, useRef, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { CiShoppingCart, CiText, CiImageOn } from "react-icons/ci";
// import {
//   Stage,
//   Layer,
//   Text,
//   Image as KonvaImage,
//   Transformer,
// } from "react-konva";
// import useImage from "use-image";
// import Select from "react-select";
// import WebFont from "webfontloader";

// const fonts = [
//   { value: "Arial", label: "Arial" },
//   { value: "Times New Roman", label: "Times New Roman" },
//   { value: "Courier New", label: "Courier New" },
//   { value: "Roboto", label: "Roboto" },
//   { value: "Open Sans", label: "Open Sans" },
//   { value: "Lato", label: "Lato" },
//   { value: "Montserrat", label: "Montserrat" },
//   { value: "Oswald", label: "Oswald" },
//   { value: "Raleway", label: "Raleway" },
// ];

// const ImageEditor = () => {
//   const location = useLocation();
//   const image = location.state?.image;
//   console.log(image, "selected image path");
//   const [selectedImage] = useImage(image);
//   const [texts, setTexts] = useState([]);
//   const [images, setImages] = useState([]);
//   const [newText, setNewText] = useState("");
//   const [fontFamily, setFontFamily] = useState(fonts[0]);
//   const [fontSize, setFontSize] = useState(20);
//   const [textColor, setTextColor] = useState("#000000");
//   const stageRef = useRef();
//   const [selectedShape, setSelectedShape] = useState(null);
//   const trRef = useRef();

//   useEffect(() => {
//     WebFont.load({
//       google: {
//         families: fonts.map((font) => font.value),
//       },
//     });
//   }, []);

//   const addText = () => {
//     const stageWidth = stageRef.current.width();
//     const stageHeight = stageRef.current.height();
//     setTexts([
//       ...texts,
//       {
//         id: texts.length,
//         text: newText,
//         x: stageWidth / 2,
//         y: stageHeight / 2,
//         fontFamily: fontFamily.value,
//         fontSize,
//         fill: textColor,
//         draggable: true,
//       },
//     ]);
//     setNewText("");
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       setImages([
//         ...images,
//         { id: images.length, src: reader.result, x: 50, y: 50 },
//       ]);
//     };
//     reader.readAsDataURL(file);
//   };

//   useEffect(() => {
//     const loadImages = async () => {
//       const loadedImages = await Promise.all(
//         images.map(async (img) => {
//           const [image] = await useImage(img.src);
//           return { ...img, image };
//         })
//       );
//       setImages(loadedImages);
//     };

//     loadImages();
//   }, [images]);

//   useEffect(() => {
//     if (selectedShape && trRef.current) {
//       trRef.current.nodes([selectedShape]);
//       trRef.current.getLayer().batchDraw();
//     }
//   }, [selectedShape]);

//   return (
//     <>
//       <div className="border-b shadow py-4 flex justify-between items-center px-14">
//         <h1 className="text-3xl font-bold">Editor</h1>
//         <ul>
//           <li className="relative pr-2 hover:cursor-pointer hover:text-[#5F16B9]">
//             <CiShoppingCart className="text-2xl" />
//             <span className="absolute -top-1 right-0 bg-[#5F16B9] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//               0
//             </span>
//           </li>
//         </ul>
//       </div>
//       <div className="py-3 flex">
//         <div className="border border-red-500 min-h-screen w-1/4 px-12">
//           <div className="py-5 rounded shadow px-4">
//             <CiText className="text-gray-500 text-3xl mx-auto" />
//             <h1 className="text-xl font-bold text-gray-600 text-center mt-2">
//               Edit Text
//             </h1>
//             <input
//               type="text"
//               value={newText}
//               onChange={(e) => setNewText(e.target.value)}
//               className="mt-2 p-2 border rounded w-full"
//             />
//             <div className="mt-2">
//               <label className="block">Font Family:</label>
//               <Select
//                 value={fontFamily}
//                 onChange={setFontFamily}
//                 options={fonts}
//                 className="mt-2"
//               />
//             </div>
//             <div className="mt-2">
//               <label className="block">Font Size:</label>
//               <input
//                 type="number"
//                 value={fontSize}
//                 onChange={(e) => setFontSize(Number(e.target.value))}
//                 className="mt-2 p-2 border rounded w-full"
//               />
//             </div>
//             <div className="mt-2">
//               <label className="block">Text Color:</label>
//               <input
//                 type="color"
//                 value={textColor}
//                 onChange={(e) => setTextColor(e.target.value)}
//                 className="mt-2 p-2 border rounded w-full"
//               />
//             </div>
//             <button
//               onClick={addText}
//               className="mt-2 p-2 bg-blue-500 text-white rounded w-full"
//             >
//               Add Text
//             </button>
//           </div>
//           {/* <div className="py-5 mt-5 shadow">
//             <h1 className="text-gray-500 text-center font-medium">
//               Select Shirts
//             </h1>
//           </div> */}

//           <div className="py-5 rounded shadow px-4 mt-5">
//             <CiImageOn className="text-gray-500 text-3xl mx-auto" />
//             <h1 className="text-xl font-bold text-gray-600 text-center mt-2">
//               Add Image
//             </h1>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="mt-2 p-2 border rounded w-full"
//             />
//           </div>
//         </div>
//         <div className="border border-red-500 w-3/4 flex justify-center items-center">
//           <Stage
//             width={700}
//             height={500}
//             ref={stageRef}
//             onMouseDown={(e) => {
//               // deselect when clicked on empty area
//               if (e.target === e.target.getStage()) {
//                 setSelectedShape(null);
//                 return;
//               }
//               // select shape
//               const clickedOn = e.target;
//               setSelectedShape(clickedOn);
//             }}
//           >
//             <Layer>
//               {selectedImage && (
//                 <KonvaImage
//                   image={selectedImage}
//                   x={0}
//                   y={0}
//                   width={500}
//                   height={500}
//                 />
//               )}
//               {texts.map((textObj) => (
//                 <Text
//                   key={textObj.id}
//                   text={textObj.text}
//                   x={textObj.x}
//                   y={textObj.y}
//                   fontFamily={textObj.fontFamily}
//                   fontSize={textObj.fontSize}
//                   fill={textObj.fill}
//                   draggable
//                 />
//               ))}
//               {images.map((imgObj) => (
//                 <KonvaImage
//                   key={imgObj.id}
//                   image={imgObj.image}
//                   x={imgObj.x}
//                   y={imgObj.y}
//                   draggable
//                 />
//               ))}
//               {selectedShape && (
//                 <Transformer
//                   ref={trRef}
//                   boundBoxFunc={(oldBox, newBox) => {
//                     if (newBox.width < 20 || newBox.height < 20) {
//                       return oldBox;
//                     }
//                     return newBox;
//                   }}
//                 />
//               )}
//             </Layer>
//           </Stage>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ImageEditor;

