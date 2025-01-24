import React, { useState } from "react";
import { CiText } from "react-icons/ci";
import * as fabric from "fabric";
import { useRecoilState } from "recoil";
import { textState } from "../store/TextState";
import { addedtextState } from "../store/AddedTextState";

const AddText = ({ canvas, setFlag }) => {
  const [fontSize, setFontSize] = useState(20);
  const [textObject, setTextObject] = useState(null);
  const [text, setText] = useRecoilState(textState);

  const [fontFamily, setFontFamily] = useState("Arial");
  const [addText, setAddText] = useRecoilState(addedtextState);
  console.log(addText, "check meeeee brohhh ");
  return (
    <>
      {addText !== "" ? (
        <div
          className={`mb-4 ${addText === "text" && "border-r-4  border-[#ff9c97] text-[#ff9c97] "
            } bg-white  py-4 flex    flex-col gap-1 items-center rounded-md cursor-pointer`}
          // onChange={handleImageUpload}
          onClick={() => { setAddText(""); setFlag(false) }}
        >
          <CiText
            size={addText ? 30 : 20}
            className="transition-all duration-500"
          />
          <h1 className="transition-all duration-500">Text</h1>
        </div>
      ) : (
        <div
          className="mb-4 bg-white px-10 py-8 w-full md:w-[320px]  text-start flex gap-4 hover:text-[#ff9c97]  items-center rounded-md cursor-pointer"
          onClick={() => setAddText("text")}
        >
          <CiText
            size={addText ? 50 : 40}
            className="transition-all duration-500"
          />
          <h1 className="transition-all duration-500 text-2xl font-thin  ">
            Add Text
          </h1>
        </div>
      )}

      {/* {addText && (
        <>
          <div className=" bg-white p-3 mb-4 rounded-md ">
            <div className="mb-4 relative">
              <label className="mr-2 text-base font-medium">Text:</label>
              <input
                type="text"
                value={text}
                onChange={handleTextChange}
                className="border p-2 rounded-md border-solid outline-none w-full "
                placeholder="Enter Text here"
              />
            </div>
            <div className="mb-4">
              <label className="mr-2 text-base font-medium">Font Size:</label>
              <input
                type="number"
                value={fontSize}
                onChange={handleFontSizeChange}
                className="border p-2 rounded-md border-solid w-full outline-none"
                placeholder="Enter font Size"
              />
            </div>
            <div className="mb-4">
              <label className="mr-2 text-base font-medium">Font Family:</label>
              <select
                value={fontFamily}
                onChange={handleFontFamilyChange}
                className="border p-2 rounded-md w-full"
              >
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Verdana">Verdana</option>
                <option value="Tahoma">Tahoma</option>
                <option value="Trebuchet MS">Trebuchet MS</option>
              </select>
            </div>
            <div className="">
              <button
                onClick={initializeText}
                className="bg-blue-500 w-full text-white py-2 px-4 rounded cursor-pointer"
                disabled={textObject}
              >
                Add Text
              </button>
            </div>
          </div>
        </>
      )} */}
    </>
  );
};

export default AddText;
