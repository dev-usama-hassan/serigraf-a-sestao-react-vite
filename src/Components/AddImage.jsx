import React, { useState } from "react";
import { FaRegImage } from "react-icons/fa";
import * as fabric from "fabric";
import { useRecoilState } from "recoil";
import { addedImageState } from "../store/AddedImageState";
import { addedtextState } from "../store/AddedTextState";

const AddImage = ({ canvas }) => {
  const [addText, setAddText] = useRecoilState(addedtextState);
  const [addImageObject, setAddImageObject] = useState(null);
  // const [addImage, setaddImage] = useRecoilState(addedImageState);

  console.log(addText, "check ");
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // set;
    if (file) {
      setAddText("image");
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgElement = new Image();
        imgElement.src = event.target.result;
        imgElement.onload = () => {
          // Create fabric image instance
          const imgInstance = new fabric.Image(imgElement, {
            left: 0,
            top: 0,
            angle: 0,
            opacity: 1,
          });
          // imgInstance.setControlsVisibility({
          //   mtr: false,
          // });
          // Calculate scale to fit image within the canvas
          const canvasWidth = canvas.getWidth();
          const canvasHeight = canvas.getHeight() / 2;
          const imgWidth = imgInstance.width;
          const imgHeight = imgInstance.height;

          const scaleX = canvasWidth / imgWidth;
          const scaleY = canvasHeight / imgHeight;
          const scale = Math.min(scaleX, scaleY); // Scale to fit within canvas

          imgInstance.set({
            scaleX: scale,
            scaleY: scale,
          });

          // Create custom delete icon
          const customImageIcon = document.createElement("div");
          customImageIcon.innerHTML = "x";
          customImageIcon.style.position = "absolute";
          customImageIcon.style.display = "none"; // Hide initially
          customImageIcon.style.cursor = "pointer";
          customImageIcon.style.fontSize = "20px";
          // customImageIcon.style.color = "red";
          customImageIcon.style.zIndex = 1000; // Ensure it appears on top
          document.body.appendChild(customImageIcon);

          // Function to update the position of the delete icon
          const updateIconPosition = () => {
            const obj = canvas.getActiveObject();
            if (obj && obj === imgInstance) {
              const imageBox = obj.getBoundingRect();
              const canvasCoords = canvas.calcOffset();
              customImageIcon.style.left = `${
                canvasCoords.left + imageBox.left + imageBox.width + 10
              }px`;
              customImageIcon.style.top = `${
                canvasCoords.top + imageBox.top - 30
              }px`;
              customImageIcon.style.display = "block";
            }
            setAddText("image");
          };

          // Event listeners to synchronize delete icon with image
          imgInstance.on("selected", updateIconPosition);
          imgInstance.on("moving", updateIconPosition);
          imgInstance.on("scaling", updateIconPosition);

          canvas.on("selection:cleared", () => {
            customImageIcon.style.display = "none";
          });

          customImageIcon.addEventListener("click", () => {
            canvas.remove(imgInstance);
            canvas.discardActiveObject();
            canvas.renderAll();
            customImageIcon.style.display = "none";
          });
          // imgInstance.on("selected", () => {
          //   setAddText("image");
          // });

          canvas.add(imgInstance);
          canvas.centerObject(imgInstance);
          // canvas.discardActiveObject(imgInstance);
          canvas.setActiveObject(imgInstance);
          setAddImageObject(imgInstance);
          canvas.renderAll();
        };
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      {addText !== "" ? (
        <div
          className={`mb-4 ${
            addText === "image" &&
            "border-r-4  border-[#ff9c97] text-[#ff9c97] "
          } bg-white py-4   px-5 flex flex-col gap-1  items-center rounded-md cursor-pointer`}
          // onChange={handleImageUpload}
          onClick={() => setAddText("")}
        >
          {/* asdas */}
          <FaRegImage size={30} />
          Upload
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-1 hidden "
          />
        </div>
      ) : (
        <div
          className="mb-4 bg-white px-10 py-8 w-full md:w-[320px]  text-start  hover:text-[#ff9c97]  items-center rounded-md cursor-pointer"
          // onClick={() => {
          //   handleImageUpload, console.log("meee");
          // }}
          // onChange={handleImageUpload}
        >
          <label className="mr-2 cursor-pointer flex gap-4 items-center transition-all duration-500 text-2xl font-thin">
            {/* size={addText ? 50 : 40} */}
            <FaRegImage size={40} />
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="border p-1 hidden "
            />
          </label>
        </div>
      )}
    </>
  );
};

export default AddImage;
