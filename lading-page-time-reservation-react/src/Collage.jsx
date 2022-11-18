import imgC1 from "./img/RESTAURANTES/4.jpg";
import imgC2 from "./img/RESTAURANTES/5.jpg";
import imgC3 from "./img/RESTAURANTES/6.jpeg";

import imgC4 from "./img/RESTAURANTES/7.jpg";
import imgC5 from "./img/RESTAURANTES/8.jpg";
import imgC6 from "./img/RESTAURANTES/9.jpg";

import imgC7 from "./img/RESTAURANTES/10.jpg";
import imgC8 from "./img/RESTAURANTES/11.jpg";
import imgC9 from "./img/RESTAURANTES/12.png";


function Image(props) {
  return (
    <div className="img-cont">
      <img alt="image" src={props.img}></img>
    </div>
  );
}

function ImageRow(props) {
  return (
    <div className="fila-img">
      <div className="img">
        <Image img={props.img[0]}></Image>
        <Image img={props.img[1]}></Image>
        <Image img={props.img[2]}></Image>
      </div>
    </div>
  );
}

function Collage() {
  const matrix=[[imgC1,imgC2,imgC3],[imgC4,imgC5,imgC6],[imgC7,imgC8,imgC9]]
  return (
    <div className="Collage-Restaurantes">
      <h2 className="contenedor"> Conoce nuestros restaurantes </h2>
      <div className="Collage">
        <ImageRow img={matrix[0]}></ImageRow>
        <ImageRow img={matrix[1]}></ImageRow>
        <ImageRow img={matrix[2]}></ImageRow>
      </div>
    </div>
  );
}

export default Collage
