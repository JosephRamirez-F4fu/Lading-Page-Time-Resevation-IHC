import imgRC1 from "./img/RESTAURANTES/1.jpg"
import imgRC2 from "./img/RESTAURANTES/2.jpg"
import imgRC3 from "./img/RESTAURANTES/3.jpg"

function CircleImage(props) {
  return (
    <div className="rest-img">
      <img className="circle" alt="img" src={props.img}></img>
      <h3>{props.text}</h3>
    </div>
  );
}

function CircleGallery() {
  return (
    <div className="circle-gallery">
      <CircleImage img={imgRC1} text="Astrig y Gastón" />
      <CircleImage img={imgRC2} text="La Picantería" />
      <CircleImage img={imgRC3} text="Central" />
    </div>
  );
}

function Visited() {
  return (
    <>
      <div className="Restaurantes-buscados">
        <h2 className="contenedor">
          Los Restaurantes más visitados en la semana
        </h2>
        <CircleGallery />
      </div>
      <div class="contenedor-line">
        <div class="line"></div>
      </div>
    </>
  );
}

export default Visited;
