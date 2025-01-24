import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ImageEditor from "./Components/Image_Editor";
import Aboutus from "./Components/Aboutus";
import Contact from "./Components/Contact";
import DummyEditor from "./Components/DummyEditor";
import TestingCanvas from "./Components/TestingCanvas";
import Checkout from "./Components/Checkout";
import LoginModal from "./modal/LoginModal";
import SignUpModal from "./modal/SignUpModal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/image_editor" element={<ImageEditor />} />
        <Route path="/dummy_work" element={<DummyEditor />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/testing" element={<TestingCanvas />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/sign-up" element={<SignUpModal />} />
      </Routes>
    </>
  );
}

export default App;
