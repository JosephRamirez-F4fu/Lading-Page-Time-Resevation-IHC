import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar"
import Collage from "./components/Collage";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Busqueda from "./components/Busqueda"
import Visited from "./components/Visited";
import "./styles.css";
import Testimonios from "./components/Testimonios";
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
