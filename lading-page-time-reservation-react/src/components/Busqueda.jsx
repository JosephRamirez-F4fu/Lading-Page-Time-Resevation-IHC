function ButtonSearch(props) {
  return (
    <div class="contenedor">
      <a href="#" class="btn-2">
        <button>{props.name}</button>
      </a>
    </div>
  );
}

function Input(props) {
  return (
    <div className="contenedor">
      <input type="search" class="input" placeholder={props.text}></input>
    </div>
  );
}

function Busqueda() {
  return (
      <div class="buscador-box">
        <div class="contenedor">
          <h1>Full Time Reservation</h1>
        </div>
        <Input text="Buscar Restaurantes..."></Input>
        <ButtonSearch name="Haz tu reserva" />
      </div>
  );
}

export default Busqueda;

