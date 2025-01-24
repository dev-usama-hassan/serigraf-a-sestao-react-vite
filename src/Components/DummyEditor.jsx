import React, { useEffect, useRef, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { RxDownload } from "react-icons/rx";
import { useRecoilState, useRecoilValue } from "recoil";
import { addedtextState } from "../store/AddedTextState";
import { selectedImageState } from "../store/SeletedImage";
import AddText from "./AddText";
import AddImage from "./AddImage";
import AddingTextComp from "./AddingTextComp";
import AddingImageComp from "./AddingImageComp";
import ColorPick from "./ColorPick";
import SizeModal from "../modal/sizeModal";
import * as fabric from "fabric";
import jsPDF from "jspdf";
import axios from "axios";
import SubNav from "./SubNav";
import { ImageState } from "../store/ImageState";
import { useNavigate } from "react-router-dom";
import { selectedCategoryState } from "../store/SelectedCategory";

const DummyEditor = () => {
  const navigate = useNavigate();
  // const imageState = useRecoilValue(ImageState);
  const imageState = localStorage.getItem("imageState");
  const selectedCat = localStorage.getItem("selectedCat")
  console.log(selectedCat, "selectedCat")

  const [addText, setAddText] = useRecoilState(addedtextState);
  const [previewUrl, setPreviewUrl] = useState("");
  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);
  const frontCanvasRef = useRef(null);
  const backCanvasRef = useRef(null);
  const [currentSide, setCurrentSide] = useState("front");
  const [frontCanvas, setFrontCanvas] = useState(null);
  const [backCanvas, setBackCanvas] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [flag, setFlag] = useState(false);
  const [modal, setModal] = useState(false);

  const SelectedCat = useRecoilValue(selectedCategoryState);
  console.log(SelectedCat, "selected Category is here");
  // useEffect(() => {
  //   if (!imageState) {
  //     navigate("/");
  //   }
  // }, [imageState]);

  const shirtDimensions = {
    hoodie: { width: 190, height: 290 },
    sleeveless: { width: 180, height: 300 },
    tshirt: { width: 220, height: 300 },
    cap: { width: 400, height: 110 },
    bag: { width: 200, height: 200 },
  };

  const getCanvasDimensions = () => {
    if (imageState?.includes("sweatshirt")) {
      return shirtDimensions.hoodie;
    } else if (imageState?.includes("slevless")) {
      return shirtDimensions.sleeveless;
    } else if (imageState?.includes("tshirt")) {
      return shirtDimensions.tshirt;
    } else if (imageState?.includes("Cap")) {
      return shirtDimensions.cap;
    } else if (imageState?.includes("bag")) {
      return shirtDimensions.bag;
    } else {
      return shirtDimensions.tshirt;
    }
  };
  const { width, height } = getCanvasDimensions();

  const getCatagoryText = () => {
    const state = imageState?.toLowerCase() || "";

    if (state.includes("men") && state.includes("sweatshirt")) {
      return "Men's Sweatshirt";
    } else if (state.includes("men") && state.includes("slevless")) {
      return "Men's Sleeveless";
    } else if (state.includes("men") && state.includes("tshirt")) {
      return "Men's T-shirt";
    } else if (state.includes("ladies") && state.includes("sweatshirt")) {
      return "Women's Sweatshirt";
    } else if (state.includes("ladies") && state.includes("slevless")) {
      return "Women's Sleeveless";
    } else if (state.includes("ladies") && state.includes("tshirt")) {
      return "Women's T-shirt";
    } else if (state.includes("kid") && state.includes("sweatshirt")) {
      return "Kid's Sweatshirt";
    } else if (state.includes("kid") && state.includes("tshirt")) {
      return "Kid's T-shirt";
    }
    else if (state.includes("cap")) {
      return "Premium Cap";
    } else if (state.includes("bag")) {
      return "Premium Bag";
    }
    return "Unknown Category";
  };




  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth, "size is hereeeeee ");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  useEffect(() => {
    const front = new fabric.Canvas(frontCanvasRef.current, {
      preserveObjectStacking: true,
    }, []);
    setFrontCanvas(front);
    // Initialize the back canvas
    const back = new fabric.Canvas(backCanvasRef.current, {
      preserveObjectStacking: true,
    });
    setBackCanvas(back);
    return () => {
      front.dispose();
      back.dispose();
    };
  }, []);

  const handleImageClick = (index) => {
    console.log("clickd");
    setActiveImageIndex(index);
    if (index === 0) {
      setCurrentSide("front");
      frontCanvasRef.current.style.display = "block";
      backCanvasRef.current.style.display = "none";
    } else {
      setCurrentSide("back");
      frontCanvasRef.current.style.display = "none";
      backCanvasRef.current.style.display = "block";
    }
  };

  const handleDownloadAsPDF = () => {
    const activeCanvas = currentSide === "front" ? frontCanvas : backCanvas;
    if (activeCanvas) {
      const dpi = 300;
      const pdfWidthInInches = 8.5;
      const pdfHeightInInches = 13;
      const pdfWidthInPixels = pdfWidthInInches * dpi;
      const pdfHeightInPixels = pdfHeightInInches * dpi;
      const offscreenCanvas = document.createElement("canvas");
      offscreenCanvas.width = pdfWidthInPixels;
      offscreenCanvas.height = pdfHeightInPixels;
      const ctx = offscreenCanvas.getContext("2d");
      const scaleFactor = 4;
      const originalWidth = activeCanvas.getWidth();
      const originalHeight = activeCanvas.getHeight();
      activeCanvas.setWidth(originalWidth * scaleFactor);
      activeCanvas.setHeight(originalHeight * scaleFactor);
      activeCanvas.getObjects().forEach((obj) => {
        obj.scaleX *= scaleFactor;
        obj.scaleY *= scaleFactor;
        obj.left *= scaleFactor;
        obj.top *= scaleFactor;
        obj.setCoords();
      });
      activeCanvas.renderAll();
      const img = new Image();
      img.src = activeCanvas.toDataURL({
        format: "png",
        quality: 1,
      });

      img.onload = () => {
        ctx.drawImage(img, 0, 0, offscreenCanvas.width, offscreenCanvas.height);
        const pdf = new jsPDF({
          unit: "pt",
          format: [pdfWidthInInches * 72, pdfHeightInInches * 72],
          orientation: "portrait",
        });
        const imageData = offscreenCanvas.toDataURL("image/png", 1.0);
        pdf.addImage(
          imageData,
          "PNG",
          0,
          0,
          pdfWidthInInches * 72,
          pdfHeightInInches * 72
        );
        pdf.save(`${currentSide}-canvas-content-highres.pdf`);
      };
      activeCanvas.setWidth(originalWidth);
      activeCanvas.setHeight(originalHeight);
      activeCanvas.getObjects().forEach((obj) => {
        obj.scaleX /= scaleFactor;
        obj.scaleY /= scaleFactor;
        obj.left /= scaleFactor;
        obj.top /= scaleFactor;
        obj.setCoords();
      });
      activeCanvas.renderAll();
    }
  };

  const handleOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const MAX_PDF_SIZE_MB = 50;

  const handleSendEmail = async (email) => {
    const pdfWidthInInches = 8.5; // Define PDF width
    const pdfHeightInInches = 11; // Define PDF height

    const activeCanvas = currentSide === "front" ? frontCanvas : backCanvas;
    if (activeCanvas) {
      // Create a new jsPDF instance
      const pdf = new jsPDF({
        unit: "pt",
        format: [pdfWidthInInches * 72, pdfHeightInInches * 72],
        orientation: "portrait",
      });

      // Get the image data from the active canvas
      const imageData = activeCanvas.toDataURL("image/png", 1.0);

      // Create a new image element
      const img = new Image();
      img.src = imageData;

      img.onload = () => {
        // When the image is loaded, draw it on the PDF
        pdf.addImage(
          img,
          "PNG",
          0,
          0,
          pdfWidthInInches * 72,
          pdfHeightInInches * 72
        );

        const pdfData = pdf.output("datauristring").split(",")[1]; // Get the base64 string

        const pdfSizeInMB = (pdfData.length * (3 / 4)) / (1024 * 1024); // Estimate size in MB
        if (pdfSizeInMB > MAX_PDF_SIZE_MB) {
          alert(
            `The PDF size is too large (${pdfSizeInMB.toFixed(
              2
            )} MB). Please reduce the content and try again.`
          );
          return;
        }

        // Send the email
        axios
          .post("http://localhost:5000/send-email", {
            email,
            pdfData,
          })
          .then((response) => {
            console.log(response.data);
            alert("Email sent successfully!");
          })
          .catch((error) => {
            console.error("Error sending email: ", error);
            alert("Failed to send email.");
          });
      };

      img.onerror = (error) => {
        console.error("Error loading image: ", error);
        alert("Failed to load the image for PDF.");
      };
    }
  };

  // Call this function on the size selection
  const handleChooseSize = () => {
    // const email = prompt("Enter your email address:"); // You may want to replace this with a better input method
    // if (email) {
    //   handleSendEmail(email);
    handleOpen();
    // }
  };

  console.log(width, height, "height/width");
  return (
    <>
      <SubNav />
      {/* <div className="bg-gray-100  "></div> */}
      {/* <div className="py-4 flex justify-between items-center px-14 bg-[#5F16B9] mt-14 ">
        <h1 className="text-3xl font-bold text-white">Editor</h1>
        <ul>
          <li className="relative pr-2 hover:cursor-pointer hover:text-[#5F16B9]">
            <CiShoppingCart className="text-2xl text-white" />
            <span className="absolute -top-1 right-0  text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </li>
        </ul>
      </div> */}
      <div className="  flex flex-col md:flex-row w-full relative mt-16 bg-gray-100">
        <div className="p-4 mt-28">
          <AddText
            canvas={currentSide === "front" ? frontCanvas : backCanvas}
            addText={addText}
            setFlag={setFlag}
          />
          <AddImage
            canvas={currentSide === "front" ? frontCanvas : backCanvas}
          />
          {imageState?.includes("CAP") || imageState?.includes("BAG") ? (
            ""
          ) : (
            <ColorPick
              canvas={currentSide === "front" ? frontCanvas : backCanvas}
            />
          )}
          {/* <button onClick={handleClick}>Test mee please </button> */}
        </div>
        <div className={`p-4 mt-4 md:mt-20 ${addText && "xl:w-[440px]"}`}>
          {addText === "text" && (
            <AddingTextComp
              canvas={activeImageIndex === 0 ? frontCanvas : backCanvas}
              flag={flag}
              setFlag={setFlag}
            />
          )}
          {addText === "image" && (
            <AddingImageComp
              canvas={currentSide === "front" ? frontCanvas : backCanvas}
              handleImageClick={handleImageClick}
            />
          )}
          <RxDownload
            className="absolute right-16 top-12 cursor-pointer"
            size={30}
            onClick={handleDownloadAsPDF}
          />
          {/* am here */}
          <div className="absolute right-32  md:right-14 top-4 md:top-28 flex flex-row md:flex-col gap-4">
            {/* {selectedImage?.map((img, index) => ( */}
            {/* {console.log(imageState, "imageSTate")} */}
            {/* sdfdsfdsf dsfds fdsf ds fds f ds */}
            {imageState && (
              <>
                {["Front", "Back"].map((type, index) => {
                  const src =
                    type === "Front"
                      ? imageState
                      : imageState.replace("1", "2"); // Adjust this logic as needed

                  return (
                    <img
                      key={type} // Use a unique key for each image
                      src={src}
                      alt={type}
                      className={`w-[70px] h-[70px] border border-solid p-1 cursor-pointer ${activeImageIndex === index
                          ? "border-blue-400"
                          : "border-gray-300"
                        }`}
                      onClick={() => handleImageClick(index)}
                    />
                  );
                })}
              </>
            )}

            {/* {imageState && (
              <img
                // key={index}
                src={imageState}
                alt={"Back"}
                className={`w-[70px] h-[70px] border border-solid p-1 cursor-pointer`}
                // activeImageIndex === index
                // ? "border-blue-400 border"
                // : "border-gray-300"
                // }`}
                onClick={() => handleImageClick(index)}
              />
            )}
            {imageState && (
              <img
                // key={index}
                src={imageState.replace("1", "2")}
                alt={"Back"}
                className={`w-[70px] h-[70px] border border-solid p-1 cursor-pointer`}
                // activeImageIndex === index
                // ? "border-blue-400 border"
                // : "border-gray-300"
                // }`}
                onClick={() => handleImageClick(index)}
              />
            )} */}

            {/* ))} */}
          </div>
        </div>
        <div className="flex flex-grow relative justify-center items-center h-screen md:mr-[8%] xl:mr-[15%]">
          <div className={`relative ${!addText ? "animate-slideSlowly" : ""} `}>
            {/* <img
              src={selectedImage[activeImageIndex]}
              alt=""
              className=" w-full h-full md:w-[550px] md:h-[500px] flex items-center justify-center"
            /> */}
            {console.log(imageState, "imgstate is here come")}
            {/* {imageState && (
              <img
                src={imageState}
                alt="imageState"
                className=" w-full h-full md:w-[550px] md:h-[500px] flex items-center justify-center"
              />
            )} */}
            {activeImageIndex === 0 ? (
              <>
                {" "}
                <img
                  src={imageState}
                  alt="imageState"
                  className=" w-full h-full md:w-[550px] md:h-[500px] flex items-center justify-center"
                />
              </>
            ) : (
              <>
                <img
                  src={imageState.replace("1", "2")}
                  alt="imageState"
                  className=" w-full h-full md:w-[550px] md:h-[500px] flex items-center justify-center"
                />
              </>
            )}
            <div
              className={`canvas-container2 ${imageState?.includes("bag") ? "mt-24 ml-1" : "mt-0"
                }`}
            >
              <div
                style={{ display: currentSide === "front" ? "block" : "none" }}
              >
                {/* <canvas
                  ref={frontCanvasRef}
                  style={{ zIndex: currentSide === "front" ? 2 : 1 }}
                  className="absolute   border border-black   "
                  width={window.innerWidth >= 768 ? "210" : "150"}
                  height={window.innerWidth >= 768 ? "310" : "230"}
                  id="front-canvas"
                /> */}
                <canvas
                  ref={frontCanvasRef}
                  style={{ zIndex: currentSide === "front" ? 2 : 1 }}
                  className="absolute border border-black"
                  width={window.innerWidth >= 768 ? width : width - 60}
                  height={window.innerWidth >= 768 ? height : height - 80}
                  id="front-canvas"
                />
              </div>
              <div
                style={{ display: currentSide === "front" ? "none" : "block" }}
              >
                {/* <canvas
                  ref={backCanvasRef}
                  className="absolute border border-black "
                  width={window.innerWidth >= 768 ? "210" : "150"}
                  height={window.innerWidth >= 768 ? "310" : "230"}
                  id="back-canvas" 
                /> */}
                <canvas
                  ref={backCanvasRef}
                  className="absolute border border-black"
                  width={window.innerWidth >= 768 ? width : width - 60}
                  height={window.innerWidth >= 768 ? height : height - 80}
                  id="back-canvas"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {previewUrl && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="relative p-4 bg-white min-w-[980px] flex">
            <div className="relative flex w-full justify-center">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-[450px] h-[400px] flex items-center justify-center"
              />
              <button
                className="absolute top-0 right-0 p-2 text-red-500"
                onClick={() => setPreviewUrl("")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white flex justify-between items-center sticky bottom-0 py-2 px-20">
        <div className="flex justify-center items-center content gap-3">
          <h1> {getCatagoryText()}</h1>
          <div className="border-r border-gray-400 px-1 py-3"></div>
          <h1>$16.00</h1>
        </div>
        <div className="flex justify-center items-center btns gap-3">
          {/* <button onClick={()=>alert("Changes saved")} className="border border-black rounded-md p-2">Save</button> */}
          <button
            className="bg-yellow-500 p-2 rounded-md"
            onClick={() => handleChooseSize()}
          >
            &#128722; Choose Size
          </button>
        </div>
      </div>
      {/* am here ,am grab mee */}
      {modal && <SizeModal handleClose={handleClose} />}
    </>
  );
};
export default DummyEditor;
