import React from "react";
import {
  MdDeleteForever,
  MdMoveDown,
  MdMoveUp,
  MdOutlineAlignHorizontalCenter,
  MdOutlineAlignVerticalCenter,
} from "react-icons/md";
import shirtIcon from "../assets/shirtIcon.svg";
import shirtbackIcon from "../assets/shirtbackIcon.svg";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedImageState } from "../store/SeletedImage";
import { addedtextState } from "../store/AddedTextState";

const AddingImageComp = ({ canvas, activeImageIndex, handleImageClick }) => {
  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);
  const setAddText = useSetRecoilState(addedtextState);

  console.log(selectedImage, "image is here ");

  const getActiveImage = () => {
    const activeObject = canvas.getActiveObject();
    console.log(activeObject, "Active Object");
    if (activeObject) {
      return activeObject;
    }
    return null;
  };
  const handleCenterHorizontal = () => {
    const imageObject = getActiveImage();
    if (imageObject) {
      imageObject.set({
        left: canvas.getWidth() / 2 - imageObject.getScaledWidth() / 2,
      });
      imageObject.setCoords();
      canvas.renderAll();
    }
  };

  const handleCenterVertical = () => {
    const imageObject = getActiveImage();
    if (imageObject) {
      imageObject.set({
        top: canvas.getHeight() / 2 - imageObject.getScaledHeight() / 2,
      });
      imageObject.setCoords();
      canvas.renderAll();
    }
  };
  const activeObject = canvas.getActiveObject();
  console.log(activeObject);
  const bringToFront = () => {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.bringObjectForward(activeObject);
      // canvas.bringObjectToFront(activeObject);
      canvas.renderAll();
    } else {
      console.error("No active object to bring to front");
    }
  };

  const sendToBack = () => {
    const activeObject = canvas.getActiveObject();
    const allObjects = canvas.getObjects();
    console.log("ACTIVE____OBJECTS", allObjects);
    if (activeObject) {
      console.log("SEND___BACK___CALLED___INNER", activeObject);

      console.log(activeObject, "activeeeee");

      canvas.sendObjectBackwards(activeObject);
      // canvas.sendObjectToBack(activeObject);

      // canvas.renderAll();
    } else {
      console.error("No active object to send to back");
    }
  };
  const handleDelete = () => {
    const imageObject = getActiveImage();
    if (imageObject) {
      canvas.remove(imageObject);
      setAddText("");
      canvas.renderAll();
    }
  };

  return (
    <>
      <div className="bg-white rounded-md">
        <div className="flex justify-between px-6 py-2 text-2xl items-center">
          <h1>Edit Image</h1>
          <p>x</p>
        </div>
        <div className="py-4 px-6 flex flex-wrap gap-8 pb-20">
          {/* Center Horizontal */}
          <div
            className="flex flex-col gap-2 text-center max-w-[70px] cursor-pointer items-center"
            onClick={handleCenterHorizontal}
          >
            <MdOutlineAlignHorizontalCenter size={25} />
            <p className="text-xs">Center Horizontal</p>
          </div>

          {/* Center Vertical */}
          <div
            className="flex flex-col gap-2 text-center max-w-[70px] cursor-pointer items-center"
            onClick={handleCenterVertical}
          >
            <MdOutlineAlignVerticalCenter size={25} />
            <p className="text-xs">Center Vertical</p>
          </div>

          {/* Move Back */}
          <div
            className="flex flex-col gap-2 text-center max-w-[50px] cursor-pointer items-center"
            onClick={sendToBack}
          >
            <MdMoveDown size={25} />
            <p className="text-xs">Move Back</p>
          </div>

          {/* Move Front */}
          <div
            className="flex flex-col gap-2 text-center max-w-[50px] cursor-pointer items-center"
            onClick={bringToFront}
          >
            <MdMoveUp size={25} />
            <p className="text-xs">Move Front</p>
          </div>

          {/* Image Front Side */}
          <div
            className="flex flex-col gap-2 text-center max-w-[70px] cursor-pointer items-center"
            onClick={() => handleImageClick(1)}
          >
            <img src={shirtIcon} alt="shirt front" />
            <p className="text-xs">Image back Side</p>
          </div>

          {/* Image Back Side */}
          <div
            className="flex flex-col gap-2 text-center max-w-[70px] cursor-pointer items-center"
            onClick={() => handleImageClick(0)}
          >
            <img src={shirtbackIcon} alt="shirt back" />
            <p className="text-xs">Image front Side</p>
          </div>

          {/* Delete Image */}
          <div
            className="flex flex-col gap-2 text-center min-w-[70px] cursor-pointer items-center"
            onClick={handleDelete}
          >
            <MdDeleteForever size={25} />
            <p className="text-xs">Delete</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddingImageComp;
