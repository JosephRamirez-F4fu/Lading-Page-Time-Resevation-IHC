import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Collage from "./Collage";
import Footer from "./Footer";
import Body from "./Body";
import Busqueda from "./Busqueda"
import Visited from "./Visited";
import "./styles.css";
import Testimonios from "./Testimonios";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <body>
      <Navbar />
      <Busqueda/>
      <Visited/>
      <Collage />
      <Body/>
      <Testimonios/>
    </body>
    <Footer/>
  </>
);
