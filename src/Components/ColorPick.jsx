import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { addedtextState } from "../store/AddedTextState";
import { selectedImageState } from "../store/SeletedImage";
import { tshirtImages } from "../ImagesData";
import { ImageState } from "../store/ImageState";
import { ProdSelectedColor } from "../store/ProdSelectedColor";
import { ProdSelectedSize } from "../store/ProdSelectedSize";

const ColorPick = () => {
  const [addText, setAddText] = useRecoilState(addedtextState);
  // const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);
  const [imageState, setImageState] = useRecoilState(ImageState);
  // const [selectedColor, setSelectedColor] = useState("black");
  const [selectedColor,setSelectedColor]= useRecoilState(ProdSelectedColor)
    const [selectedSize,setselectedSize]= useRecoilState(ProdSelectedSize)

  console.log(imageState,"imgState in color comp")
  console.log(addText,"textstate in color comp")
  console.log(selectedSize,'size is here')
console.log(selectedColor,'color is here')

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

    if (currentColor) {
      setImageState(imageState.replace(currentColor, color));
      setSelectedColor(color.toLowerCase());
    } else {
      console.error("No valid color found in imageState.");
    }
  };

  console.log(imageState, "imagestate2");

  return (
    <>
      {addText === "" && (
        <div className="mb-4 bg-white px-8 py-8 w-full md:w-[320px] text-start flex flex-col gap-1 items-start rounded-md cursor-pointer">
          <h1 className="text-sm font-light flex">
            Size: <span className="font-semibold ml-1">{selectedSize}</span>
          </h1>
          <h1 className="text-sm font-light flex">
            Color: <span className="font-semibold ml-1">{selectedColor}</span>
          </h1>
          <div className="flex flex-wrap gap-3 mt-2">
            {["black", "red", "navy", "white", "grey"].map((color) => (
              <div
                key={color}
                className={`w-10 h-10 rounded-full cursor-pointer ${
                  selectedColor === color
                    ? "ring-2 ring-offset-2 ring-black"
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
                onClick={() => handleColorChange(color)}
              ></div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ColorPick;
