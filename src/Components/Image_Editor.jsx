import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Stage,
  Layer,
  Text,
  Image as KonvaImage,
  Transformer,
} from "react-konva";
import useImage from "use-image";
import Select from "react-select";
import WebFont from "webfontloader";
import { CiShoppingCart, CiText, CiImageOn } from "react-icons/ci";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  // MdFormatAlignLeft,
  // MdFormatAlignCenter,
  // MdFormatAlignRight,
} from "react-icons/md";

const fonts = [
  { value: "Arial", label: "Arial" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Courier New", label: "Courier New" },
  { value: "Roboto", label: "Roboto" },
  { value: "Open Sans", label: "Open Sans" },
  { value: "Lato", label: "Lato" },
  { value: "Montserrat", label: "Montserrat" },
  { value: "Oswald", label: "Oswald" },
  { value: "Raleway", label: "Raleway" },
];

const MIN_WIDTH = 20;

const ImageEditor = () => {
  const location = useLocation();
  const image = location.state?.image;
  const [selectedImage] = useImage(image);

  const [texts, setTexts] = useState([]);
  const [images, setImages] = useState([]);
  const [newText, setNewText] = useState("");
  const [fontFamily, setFontFamily] = useState(fonts[0]);
  const [fontSize, setFontSize] = useState(20);
  const [textColor, setTextColor] = useState("#000000");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  // const [textAlign, setTextAlign] = useState("left");
  const stageRef = useRef();
  const [selectedShapeId, setSelectedShapeId] = useState(null);
  const trRef = useRef();

  useEffect(() => {
    WebFont.load({
      google: {
        families: fonts.map((font) => font.value),
      },
    });
  }, []);

  const addText = () => {
    const stageWidth = stageRef.current.width();
    const stageHeight = stageRef.current.height();
    const newTextObj = {
      id: `text-${texts.length}`,
      text: newText,
      x: stageWidth / 2,
      y: stageHeight / 2,
      fontFamily: fontFamily.value,
      fontSize,
      fill: textColor,
      fontStyle: isBold ? "bold" : "normal",
      textDecoration: isUnderline ? "underline" : "none",
      // align: textAlign,
      draggable: true,
    };
    setTexts([...texts, newTextObj]);
    setNewText("");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img = new window.Image();
      img.src = reader.result;
      img.onload = () => {
        setImages([
          ...images,
          {
            id: `image-${images.length}`,
            src: img.src,
            x: stageRef.current.width() / 2 - img.width / 2,
            y: stageRef.current.height() / 2 - img.height / 2,
            image: img,
            draggable: true,
          },
        ]);
      };
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (selectedShapeId && trRef.current) {
      const selectedNode = stageRef.current.findOne(`#${selectedShapeId}`);
      if (selectedNode) {
        trRef.current.nodes([selectedNode]);
        trRef.current.getLayer().batchDraw();
      } else {
        trRef.current.nodes([]);
        trRef.current.getLayer().batchDraw();
      }
    } else {
      trRef.current.nodes([]);
      trRef.current.getLayer().batchDraw();
    }
  }, [selectedShapeId]);

  useEffect(() => {
    if (trRef.current) {
      trRef.current.getLayer().batchDraw();
    }
  }, [texts, selectedShapeId]);

  const handleClick = (e) => {
    if (e.target === e.target.getStage()) {
      setSelectedShapeId(null);
      return;
    }
    const clickedOn = e.target;
    setSelectedShapeId(clickedOn.id());
  };

  const boundBoxFunc = (oldBox, newBox) => {
    if (Math.abs(newBox.width) < MIN_WIDTH) {
      return oldBox;
    }
    return newBox;
  };

  const handleTransform = (e) => {
    const node = e.target;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();
    if (node.getClassName() === "Image") {
      node.width(node.width() * scaleX);
      node.height(node.height() * scaleY);
      node.scaleX(1);
      node.scaleY(1);
    } else if (node.getClassName() === "Text") {
      node.fontSize(fontSize * Math.max(scaleX, scaleY));
      node.scaleX(1);
      node.scaleY(1);
    }

    trRef.current.getLayer().batchDraw();
  };

  return (
    <>
      <div className="border-b shadow py-4 flex justify-between items-center px-14">
        <h1 className="text-3xl font-bold">Editor</h1>
        <ul>
          <li className="relative pr-2 hover:cursor-pointer hover:text-[#5F16B9]">
            <CiShoppingCart className="text-2xl" />
            <span className="absolute -top-1 right-0 bg-[#5F16B9] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </li>
        </ul>
      </div>
      <div className="flex">
        <div className="border-r shadow min-h-screen w-1/4 px-12">
          <div className="py-5 rounded shadow px-4">
            <CiText className="text-gray-500 text-3xl mx-auto" />
            <h1 className="text-xl font-bold text-gray-600 text-center mt-2">
              Edit Text
            </h1>
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="mt-2 p-2 border rounded w-full"
            />
            <div className="mt-2">
              <label className="block">Font Family:</label>
              <Select
                value={fontFamily}
                onChange={setFontFamily}
                options={fonts}
                className="mt-2"
              />
            </div>
            <div className="mt-2">
              <label className="block">Font Size:</label>
              <input
                type="number"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="mt-2 p-2 border rounded w-full"
              />
            </div>
            <div className="mt-2">
              <label className="block">Text Color:</label>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="mt-2 p-2 border rounded w-full"
              />
            </div>
            <div className="mt-2">
              <label className="block">Bold:</label>
              <button
                onClick={() => setIsBold(!isBold)}
                className={`mt-2 p-2 w-full ${
                  isBold ? "bg-blue-500 text-white" : "bg-gray-200"
                } rounded`}
              >
                <MdFormatBold />
              </button>
            </div>
            <div className="mt-2">
              <label className="block">Italic:</label>
              <button
                onClick={() => setIsItalic(!isItalic)}
                className={`mt-2 p-2 w-full ${
                  isItalic ? "bg-blue-500 text-white" : "bg-gray-200"
                } rounded`}
              >
                <MdFormatItalic />
              </button>
            </div>
            <div className="mt-2">
              <label className="block">Underline:</label>
              <button
                onClick={() => setIsUnderline(!isUnderline)}
                className={`mt-2 p-2 w-full ${
                  isUnderline ? "bg-blue-500 text-white" : "bg-gray-200"
                } rounded`}
              >
                <MdFormatUnderlined />
              </button>
            </div>
            {/* <div className="mt-2">
              <label className="block">Text Align:</label>
              <div className="flex justify-between mt-2">
                <button
                  onClick={() => setTextAlign("left")}
                  className={`p-2 ${
                    textAlign === "left"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  } rounded`}
                >
                  <MdFormatAlignLeft />
                </button>
                <button
                  onClick={() => setTextAlign("center")}
                  className={`p-2 ${
                    textAlign === "center"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  } rounded`}
                >
                  <MdFormatAlignCenter />
                </button>
                <button
                  onClick={() => setTextAlign("right")}
                  className={`p-2 ${
                    textAlign === "right"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  } rounded`}
                >
                  <MdFormatAlignRight />
                </button>
              </div>
            </div> */}
            <button
              onClick={addText}
              className="mt-4 p-2 w-full bg-blue-500 text-white rounded"
            >
              Add Text
            </button>
          </div>
          <div className="py-5 rounded shadow px-4 mt-4">
            <CiImageOn className="text-gray-500 text-3xl mx-auto" />
            <h1 className="text-xl font-bold text-gray-600 text-center mt-2">
              Add Image
            </h1>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-2 p-2 border rounded w-full"
            />
          </div>
        </div>
        <div className="min-h-screen w-3/4 flex justify-center items-center">
          <Stage
            width={window.innerWidth * 0.5}
            height={window.innerHeight}
            ref={stageRef}
            onClick={handleClick}
          >
            <Layer>
              {selectedImage && (
                <KonvaImage
                  image={selectedImage}
                  width={window.innerWidth * 0.25}
                  height={window.innerHeight * 0.5}
                />
              )}
              {images.map((img) => (
                <KonvaImage
                  key={img.id}
                  image={img.image}
                  x={img.x}
                  y={img.y}
                  width={img.width}
                  height={img.height}
                  draggable={img.draggable}
                  onClick={() => setSelectedShapeId(img.id)}
                  id={img.id}
                />
              ))}
              {texts.map((text, i) => (
                <Text
                  key={i}
                  id={text.id}
                  text={text.text}
                  x={text.x}
                  y={text.y}
                  fontFamily={text.fontFamily}
                  fontSize={text.fontSize}
                  fill={text.fill}
                  fontStyle={text.fontStyle}
                  textDecoration={text.textDecoration}
                  align={text.align}
                  draggable={text.draggable}
                  onTransformEnd={handleTransform}
                  onClick={() => {
                    setSelectedShapeId(text.id);
                    trRef.current.nodes([textNode]);
                  }}
                />
              ))}
              <Transformer
                ref={trRef}
                boundBoxFunc={boundBoxFunc}
                enabledAnchors={[
                  "top-left",
                  "top-right",
                  "bottom-left",
                  "bottom-right",
                ]}
                keepRatio={false}
                resizeEnabled
                rotateEnabled
                borderEnabled
              />
            </Layer>
          </Stage>
        </div>
      </div>
    </>
  );
};

export default ImageEditor;

// import React, { useState, useRef, useEffect } from "react";
// import { useLocation } from "react-router-dom";
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
// import { CiShoppingCart, CiText, CiImageOn } from "react-icons/ci";
// import {
//   MdFormatBold,
//   MdFormatItalic,
//   MdFormatUnderlined,
//   // MdFormatAlignLeft,
//   // MdFormatAlignCenter,
//   // MdFormatAlignRight,
// } from "react-icons/md";

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

// const MIN_WIDTH = 20;

// const ImageEditor = () => {
//   const location = useLocation();
//   const image = location.state?.image;
//   const [selectedImage] = useImage(image);

//   const [texts, setTexts] = useState([]);
//   const [images, setImages] = useState([]);
//   const [newText, setNewText] = useState("");
//   const [fontFamily, setFontFamily] = useState(fonts[0]);
//   const [fontSize, setFontSize] = useState(20);
//   const [textColor, setTextColor] = useState("#000000");
//   const [isBold, setIsBold] = useState(false);
//   const [isItalic, setIsItalic] = useState(false);
//   const [isUnderline, setIsUnderline] = useState(false);
//   // const [textAlign, setTextAlign] = useState("left");
//   const stageRef = useRef();
//   const [selectedShapeId, setSelectedShapeId] = useState(null);
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
//     const newTextObj = {
//       id: `text-${texts.length}`,
//       text: newText,
//       x: stageWidth / 2,
//       y: stageHeight / 2,
//       fontFamily: fontFamily.value,
//       fontSize,
//       fill: textColor,
//       fontStyle: isBold ? "bold" : "normal",
//       textDecoration: isUnderline ? "underline" : "none",
//       // align: textAlign,
//       draggable: true,
//     };
//     setTexts([...texts, newTextObj]);
//     setNewText("");
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       const img = new window.Image();
//       img.src = reader.result;
//       img.onload = () => {
//         setImages([
//           ...images,
//           {
//             id: `image-${images.length}`,
//             src: img.src,
//             x: stageRef.current.width() / 2 - img.width / 2,
//             y: stageRef.current.height() / 2 - img.height / 2,
//             image: img,
//             draggable: true,
//           },
//         ]);
//       };
//     };
//     reader.readAsDataURL(file);
//   };

//   useEffect(() => {
//     if (selectedShapeId && trRef.current) {
//       const selectedNode = stageRef.current.findOne(`#${selectedShapeId}`);
//       if (selectedNode) {
//         trRef.current.nodes([selectedNode]);
//         trRef.current.getLayer().batchDraw();
//       } else {
//         trRef.current.nodes([]);
//         trRef.current.getLayer().batchDraw();
//       }
//     } else {
//       trRef.current.nodes([]);
//       trRef.current.getLayer().batchDraw();
//     }
//   }, [selectedShapeId]);

//   useEffect(() => {
//     if (trRef.current) {
//       trRef.current.getLayer().batchDraw();
//     }
//   }, [texts, selectedShapeId]);

//   const handleClick = (e) => {
//     if (e.target === e.target.getStage()) {
//       setSelectedShapeId(null);
//       return;
//     }
//     const clickedOn = e.target;
//     setSelectedShapeId(clickedOn.id());
//   };

//   const boundBoxFunc = (oldBox, newBox) => {
//     if (Math.abs(newBox.width) < MIN_WIDTH) {
//       return oldBox;
//     }
//     return newBox;
//   };

//   const handleTransform = (e) => {
//     const node = e.target;
//     const scaleX = node.scaleX();
//     const scaleY = node.scaleY();
//     if (node.getClassName() === "Image") {
//       node.width(node.width() * scaleX);
//       node.height(node.height() * scaleY);
//       node.scaleX(1);
//       node.scaleY(1);
//     } else if (node.getClassName() === "Text") {
//       node.fontSize(fontSize * Math.max(scaleX, scaleY));
//       node.scaleX(1);
//       node.scaleY(1);
//     }

//     trRef.current.getLayer().batchDraw();
//   };

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
//       <div className="flex ">
//         <div className="border-r shadow min-h-screen w-1/4 px-12">
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
//             <div className="mt-2">
//               <label className="block">Bold:</label>
//               <button
//                 onClick={() => setIsBold(!isBold)}
//                 className={`mt-2 p-2 w-full ${
//                   isBold ? "bg-blue-500 text-white" : "bg-gray-200"
//                 } rounded`}
//               >
//                 <MdFormatBold />
//               </button>
//             </div>
//             <div className="mt-2">
//               <label className="block">Italic:</label>
//               <button
//                 onClick={() => setIsItalic(!isItalic)}
//                 className={`mt-2 p-2 w-full ${
//                   isItalic ? "bg-blue-500 text-white" : "bg-gray-200"
//                 } rounded`}
//               >
//                 <MdFormatItalic />
//               </button>
//             </div>
//             <div className="mt-2">
//               <label className="block">Underline:</label>
//               <button
//                 onClick={() => setIsUnderline(!isUnderline)}
//                 className={`mt-2 p-2 w-full ${
//                   isUnderline ? "bg-blue-500 text-white" : "bg-gray-200"
//                 } rounded`}
//               >
//                 <MdFormatUnderlined />
//               </button>
//             </div>
//             {/* <div className="mt-2">
//               <label className="block">Text Align:</label>
//               <div className="flex justify-between mt-2">
//                 <button
//                   onClick={() => setTextAlign("left")}
//                   className={`p-2 ${
//                     textAlign === "left"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200"
//                   } rounded`}
//                 >
//                   <MdFormatAlignLeft />
//                 </button>
//                 <button
//                   onClick={() => setTextAlign("center")}
//                   className={`p-2 ${
//                     textAlign === "center"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200"
//                   } rounded`}
//                 >
//                   <MdFormatAlignCenter />
//                 </button>
//                 <button
//                   onClick={() => setTextAlign("right")}
//                   className={`p-2 ${
//                     textAlign === "right"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200"
//                   } rounded`}
//                 >
//                   <MdFormatAlignRight />
//                 </button>
//               </div>
//             </div> */}
//             <button
//               onClick={addText}
//               className="mt-4 p-2 w-full bg-blue-500 text-white rounded"
//             >
//               Add Text
//             </button>
//           </div>
//           <div className="py-5 rounded shadow px-4 mt-4">
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
//         <div className="flex justify-center  items-center w-full relative">
//           <img
//             // className=" flex justify-center  items-center "
//             src="https://media.istockphoto.com/id/1142212002/photo/front-of-men-cut-black-t-shirt-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=VZARRRO1PwMYKV9cHquulb69QwbxSEFA5S76-axY27c="
//             alt=""
//           />
//           <div className="w-3/4  flex justify-center mt-24 items-center absolute left-1/2 transform -translate-x-1/2">
//             <Stage
//               width={window.innerWidth * 0.091115}
//               height={window.innerHeight * 0.244}
//               ref={stageRef}
//               onClick={handleClick}
//             >
//               <Layer>
//                 {selectedImage && (
//                   <KonvaImage
//                     image={selectedImage}
//                     width={window.innerWidth * 0.25}
//                     height={window.innerHeight * 0.5}
//                   />
//                 )}
//                 {images.map((img) => (
//                   <KonvaImage
//                     key={img.id}
//                     image={img.image}
//                     x={img.x}
//                     y={img.y}
//                     width={img.width}
//                     height={img.height}
//                     draggable={img.draggable}
//                     onClick={() => setSelectedShapeId(img.id)}
//                     id={img.id}
//                   />
//                 ))}
//                 {texts.map((text, i) => (
//                   <Text
//                     key={i}
//                     id={text.id}
//                     text={text.text}
//                     x={text.x}
//                     y={text.y}
//                     fontFamily={text.fontFamily}
//                     fontSize={text.fontSize}
//                     fill={text.fill}
//                     fontStyle={text.fontStyle}
//                     textDecoration={text.textDecoration}
//                     align={text.align}
//                     draggable={text.draggable}
//                     onTransformEnd={handleTransform}
//                     onClick={() => {
//                       setSelectedShapeId(text.id);
//                       trRef.current.nodes([textNode]);
//                     }}
//                   />
//                 ))}
//                 <Transformer
//                   ref={trRef}
//                   boundBoxFunc={boundBoxFunc}
//                   enabledAnchors={[
//                     "top-left",
//                     "top-right",
//                     "bottom-left",
//                     "bottom-right",
//                   ]}
//                   keepRatio={false}
//                   resizeEnabled
//                   rotateEnabled
//                   borderEnabled
//                 />
//               </Layer>
//             </Stage>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ImageEditor;
