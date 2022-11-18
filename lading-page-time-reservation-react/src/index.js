import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Collage from "./Collage";
import Footer from "./Footer";
import Body from "./Body";
import "./styles.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <body>
      <Navbar />
      <Collage />
      <Body/>
    </body>
    <Footer></Footer>
  </>
);
