import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Collage from "./Collage";
import Footer from "./Footer";
import Busqueda from "./Busqueda";
import "./styles.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <body>
      <Navbar />
      <Busqueda/>
      <Collage />
    
    </body>
    <Footer></Footer>
  </>
);
