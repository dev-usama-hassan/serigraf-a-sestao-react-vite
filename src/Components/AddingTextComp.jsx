import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { textState } from "../store/TextState";
import { HexColorPicker } from "react-colorful";
import { colorselectstate } from "../store/ColorSelectState";
import { MdDeleteForever, MdOutlineAlignHorizontalCenter, MdOutlineAlignVerticalCenter } from "react-icons/md";
import * as fabric from "fabric";

const availableFonts = [
  "Arial", "Times New Roman", "Courier New", "Georgia", "Verdana", "Tahoma", "Barrio",
  "Alba", "Trebuchet MS", "Helvetica", "Comic Sans MS", "Impact", "Lucida Console",
  "Palatino Linotype", "Arial Black", "Century Gothic", "Frank Ruhl", "Segoe UI", "Roboto"
];

const AddingTextComp = ({ canvas, flag, setFlag }) => {
  const [fontSize, setFontSize] = useState(20);
  const [text, setText] = useRecoilState(textState);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [colorselect, setColorSelect] = useRecoilState(colorselectstate);
  const [color, setColor] = useState("#000000");

  const [textObjects, setTextObjects] = useState([]);
  const [activeTextObject, setActiveTextObject] = useState(null);

  // Ensure that the correct text object is selected when clicked on the canvas
  useEffect(() => {
    if (canvas) {
      // When a text object is selected on the canvas, update the activeTextObject
      canvas.on("selection:created", (event) => {
        const selectedObject = event.selected[0];
        if (selectedObject && selectedObject.type === "i-text") {
          setActiveTextObject(selectedObject);
          setText(selectedObject.text);
          setFontSize(selectedObject.fontSize);
          setFontFamily(selectedObject.fontFamily);
          setColor(selectedObject.fill);
          setFlag(true);
        }
      });

      // Handle updates when switching between selected objects
      canvas.on("selection:updated", (event) => {
        const selectedObject = event.selected[0];
        if (selectedObject && selectedObject.type === "i-text") {
          setActiveTextObject(selectedObject);
          setText(selectedObject.text);
          setFontSize(selectedObject.fontSize);
          setFontFamily(selectedObject.fontFamily);
          setColor(selectedObject.fill);
        }
      });

      // Handle deselection to clear active object
      canvas.on("selection:cleared", () => {
        setActiveTextObject(null);
        setFlag(false);
      });
    }
  }, [canvas]);

  const initializeText = () => {
    if (!canvas) return;
    setFlag(true);

    const newTextObject = new fabric.IText(text, {
      left: 50,
      top: 50,
      fontSize: fontSize,
      fontFamily: fontFamily,
      fill: color,
      cornerSize: 5,
      transparentCorners: true,
      cornerColor: "blue",
      cornerStyle: "circle",
      padding: 3,
    });

    canvas.add(newTextObject);
    canvas.setActiveObject(newTextObject);
    setTextObjects([...textObjects, newTextObject]); // Add to the array of text objects
    setActiveTextObject(newTextObject); // Set it as the active object
    newTextObject.set({
      width: canvas.getWidth() - 20,
      textAlign: "center",
    });
    canvas.renderAll();
  };

  const updateText = (property, value) => {
    if (activeTextObject) {
      activeTextObject.set(property, value);
      canvas.renderAll();
    }
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    updateText("text", newText);
  };

  const handleFontFamilyChange = (font) => {
    setFontFamily(font);
    updateText("fontFamily", font);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    updateText("fill", newColor);
  };

  const incrementFontSize = () => {
    const newSize = fontSize + 1;
    setFontSize(newSize);
    updateText("fontSize", newSize);
  };

  const decrementFontSize = () => {
    const newSize = fontSize - 1;
    if (newSize > 0) {
      setFontSize(newSize);
      updateText("fontSize", newSize);
    }
  };

  const handleCenterHorizontal = () => {
    if (activeTextObject && canvas) {
      const canvasCenterX = canvas.getWidth() / 2;
      activeTextObject.set({
        left: canvasCenterX - activeTextObject.getScaledWidth() / 2,
      });
      activeTextObject.setCoords();
      canvas.renderAll();
    }
  };

  const handleCenterVertical = () => {
    if (activeTextObject && canvas) {
      const canvasCenterY = canvas.getHeight() / 2;
      activeTextObject.set({
        top: canvasCenterY - activeTextObject.getScaledHeight() / 2,
      });
      activeTextObject.setCoords();
      canvas.renderAll();
    }
  };

  const handleDelete = () => {
    if (activeTextObject && canvas) {
      canvas.remove(activeTextObject);
      setTextObjects(textObjects.filter(obj => obj !== activeTextObject)); // Remove from state
      setActiveTextObject(null);
      setText("");
    }
  };

  return (
    <div className="bg-white rounded-md">
      <div className="mb-4 relative p-3">
        <label className="mr-2 text-base font-medium">Text: </label>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          className="border p-2 rounded-md border-solid outline-none w-full"
          placeholder="Enter Text here"
        />
      </div>
      {/* Display font options */}
      {text && !activeTextObject && (
        <div className="mb-4 max-h-[40vh] overflow-y-auto">
          <label className="ml-2 text-base font-medium">Select Font Family:</label>
          <div className="flex flex-col items-center mt-4">
            {availableFonts.map((font) => (
              <div
                key={font}
                className={`border-b w-full py-2 px-4 hover:bg-gray-200 rounded-md cursor-pointer flex justify-between items-center ${fontFamily === font ? "bg-gray-300" : "bg-white"}`}
                onClick={() => handleFontFamilyChange(font)}
              >
                <span className="flex flex-col justify-center items-center text-center w-full">
                  <span className="font-bold">{font}</span>
                  <span style={{ fontFamily: font }}>{text || font}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Controls for active text object */}
      {flag ? (
        <>
          <div className="border-t py-4 px-6 flex justify-between items-center cursor-pointer" onClick={() => setColorSelect(!colorselect)}>
            <h1>Color Selector</h1>
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-full" style={{ backgroundColor: color }}></div>
              <span className="cursor-pointer">{color}</span>
            </div>
          </div>
          {colorselect && (
            <div className="flex justify-center w-full border-b py-2">
              <HexColorPicker color={color} onChange={handleColorChange} />
            </div>
          )}
          <div className="border-t py-4 px-6 flex justify-between">
            <h1>Font Size</h1>
            <div className="border border-solid flex gap-2">
              <button className="border-r px-1.5" onClick={decrementFontSize} disabled={fontSize <= 10}>-</button>
              <span className="px-2">{fontSize}</span>
              <button className="border-l px-1.5" onClick={incrementFontSize}>+</button>
            </div>
          </div>
          <div className="border-t py-4 px-6 flex flex-wrap gap-8 pb-20">
            <div className="flex flex-col gap-2 text-center max-w-[70px] cursor-pointer items-center" onClick={handleCenterHorizontal}>
              <MdOutlineAlignHorizontalCenter size={25} />
              <p className="text-xs">Align Horizontal</p>
            </div>
            <div className="flex flex-col gap-2 text-center max-w-[70px] cursor-pointer items-center" onClick={handleCenterVertical}>
              <MdOutlineAlignVerticalCenter size={25} />
              <p className="text-xs">Align Vertical</p>
            </div>
            <div className="flex flex-col gap-2 text-center max-w-[70px] cursor-pointer items-center" onClick={handleDelete}>
              <MdDeleteForever size={25} />
              <p className="text-xs">Delete</p>
            </div>
          </div>
        </>
      ) : (
        <button className="bg-black text-white px-5 py-3 w-full rounded-b-lg mt-2" onClick={initializeText}>
          Add Text
        </button>
      )}
    </div>
  );
};
export default AddingTextComp;
