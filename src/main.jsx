import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


import { registerLicense } from "@syncfusion/ej2-base";
import { RecoilRoot } from "recoil";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhAYVJ3WmFZfVpgd19FaFZVRmYuP1ZhSXxXdk1iW39acXxWRGZbVU0="
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
