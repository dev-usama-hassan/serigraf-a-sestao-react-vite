import React, { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import AddingTextComp from "./AddingTextComp";
import { useRecoilState } from "recoil";
import { selectedImageState } from "../store/SeletedImage";

const TShirtDesigner = () => {
  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);
  const frontCanvasRef = useRef(null);
  const backCanvasRef = useRef(null);
  const [currentSide, setCurrentSide] = useState("front");
  const [frontCanvas, setFrontCanvas] = useState(null);
  const [backCanvas, setBackCanvas] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [addText, setAddText] = useState(false);

  useEffect(() => {
    const front = new fabric.Canvas(frontCanvasRef.current, {
      width: 500,
      height: 600,
      backgroundColor: "white",
      selection: true,
    });
    setFrontCanvas(front);

    const back = new fabric.Canvas(backCanvasRef.current, {
      width: 500,
      height: 600,
      backgroundColor: "white",
      selection: true,
    });
    setBackCanvas(back);

    // Initially hide the back canvas
    backCanvasRef.current.style.display = "none";

    return () => {
      front.dispose();
      back.dispose();
    };
  }, [currentSide]);

  useEffect(() => {
    if (frontCanvasRef.current && backCanvasRef.current) {
      frontCanvasRef.current.style.display =
        currentSide === "front" ? "block" : "none";
      backCanvasRef.current.style.display =
        currentSide === "back" ? "block" : "none";
    }
  }, [currentSide]);

  const handleImageClick = (index) => {
    setActiveImageIndex(index);
    setCurrentSide(index === 0 ? "front" : "back");
  };

  return (
    <div className="relative">
      {/* Thumbnail images for switching sides */}
      <div className="absolute right-14 top-28 flex flex-col gap-4">
        {selectedImage?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={index === 0 ? "Front" : "Back"}
            className={`w-[70px] h-[70px] border border-solid p-1 cursor-pointer ${
              activeImageIndex === index
                ? "border-blue-400 border"
                : "border-gray-300"
            }`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {/* Canvases for front and back */}
      <canvas
        ref={frontCanvasRef}
        style={{
          zIndex: currentSide === "front" ? 2 : 1,
          position: "absolute",
          border: "1px",
        }}
        className="top-20 mb-100"
        id="front-canvas"
      />
      <canvas
        ref={backCanvasRef}
        style={{ zIndex: currentSide === "back" ? 2 : 1, position: "absolute" }}
        id="back-canvas"
      />

      <div className="mt-40">
        <button onClick={() => setAddText(true)}>Add Text</button>
      </div>
      {addText && (
        // <div className=" mt-40">
        <AddingTextComp
          canvas={currentSide === "back" ? backCanvas : frontCanvas}
        />
        // </div>
      )}
    </div>
  );
};

export default TShirtDesigner;
