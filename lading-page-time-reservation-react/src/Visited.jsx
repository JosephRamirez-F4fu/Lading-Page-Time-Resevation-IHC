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
      <CircleImage img="" text="hola" />
      <CircleImage img="" text="gola" />
      <CircleImage img="" text="tea" />
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
