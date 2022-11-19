function ButtonStyles(props) {
  return (
      <a href="#" class="btn-2">
        <button>{props.name}</button>
      </a>
  );
}
function ListButtonBody() {
  return (
    <div className="body-btn">
      <ButtonStyles name="Explorar" />
    </div>
  );
}

function Body() {
  return (
    <>
      <div class="contenedor">
        <h2>Ver más restaurantes</h2>
      </div>
      <div className="contenedor">
        <ListButtonBody />
      </div>
    </>
  );
}

export default Body;