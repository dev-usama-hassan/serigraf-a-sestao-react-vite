import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedImageState } from "../store/SeletedImage";
import * as fabric from "fabric";
import { activeImageState } from "../store/ActiveImageIndex";

const FrontImageComp = ({ frontCanvas, setFrontCanvas, canvasFrontRef }) => {
  //   const canvasFrontRef = useRef(null);
  //   const [frontCanvas, setFrontCanvas] = useState(null);
  //   const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImageIndex = useRecoilValue(activeImageState);
  console.log(activeImageIndex, "meeee");

  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);

  useEffect(() => {
    // const canvasElement =
    //   activeImageIndex === 0 ? canvasFrontRef.current : canvasBackRef.current;
    const initCanvas = new fabric.Canvas(canvasFrontRef.current, {
      preserveObjectStacking: true,
      enableRetinaScaling: true,
      renderOnAddRemove: true,
    });

    setFrontCanvas(initCanvas);

    // const savedFrontCanvas = localStorage.getItem("frontCanvasState");
    // if (savedFrontCanvas) {
    //   initCanvas.loadFromJSON(
    //     JSON.parse(savedFrontCanvas),
    //     initCanvas.renderAll.bind(initCanvas)
    //   );
    // }

    // if (frontCanvas) {
    //   initCanvas.loadFromJSON(
    //     frontCanvas.toJSON(),
    //     initCanvas.renderAll.bind(initCanvas)
    //   );
    // }

    return () => {
      initCanvas.dispose();
    };
  }, [activeImageIndex]);

  return (
    <>
      <div className="flex flex-grow relative justify-center items-center h-screen mr-[15%]">
        <div className="relative">
          <img
            src={selectedImage[activeImageIndex]}
            alt=""
            className="w-[550px] h-[500px] flex items-center justify-center"
          />
          <div className="canvas-container2">
            <canvas ref={canvasFrontRef} width="210" height="310" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontImageComp;
