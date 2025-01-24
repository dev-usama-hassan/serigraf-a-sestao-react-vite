import React, { useState, useRef } from "react";

const CustomTextBox = ({
  text,
  fontSize,
  fontFamily,
  onTextChange,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const textRef = useRef(null);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    onTextChange(e.target.value);
  };

  return (
    <div
      style={{
        fontSize: fontSize + "px",
        fontFamily: fontFamily,
        border: "1px solid #000",
        padding: "10px",
        position: "absolute",
        left: "50px",
        top: "50px",
        cursor: "text",
      }}
      onDoubleClick={handleDoubleClick}
      onClick={() => {
        // Handle delete icon click if needed
        onDelete();
      }}
    >
      {isEditing ? (
        <input
          ref={textRef}
          type="text"
          value={text}
          onBlur={handleBlur}
          onChange={handleChange}
          autoFocus
          style={{
            width: "100%",
            border: "none",
            fontSize: fontSize + "px",
            fontFamily: fontFamily,
          }}
        />
      ) : (
        text
      )}
    </div>
  );
};

export default CustomTextBox;
