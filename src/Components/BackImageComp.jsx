import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedImageState } from "../store/SeletedImage";
import * as fabric from "fabric";
import { activeImageState } from "../store/ActiveImageIndex";

const BackImageComp = ({ backCanvas, setBackCanvas, canvasBackRef }) => {
  //   const canvasBackRef = useRef(null);

  //   const [frontCanvas, setFrontCanvas] = useState(null);
  //   const [backCanvas, setBackCanvas] = useState(null);

  const activeImageIndex = useRecoilValue(activeImageState);
  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);

  useEffect(() => {
    // const canvasElement =
    //   activeImageIndex === 0 ? canvasFrontRef.current : canvasBackRef.current;
    const initCanvas = new fabric.Canvas(canvasBackRef.current, {
      preserveObjectStacking: true,
    });

    setBackCanvas(initCanvas);

    // if (backCanvas) {
    //   initCanvas.loadFromJSON(
    //     backCanvas.toJSON(),
    //     initCanvas.renderAll.bind(initCanvas)
    //   );
    // }
    // backCanvas.requestRenderAll();

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
            <canvas ref={canvasBackRef} width="210" height="310" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BackImageComp;
