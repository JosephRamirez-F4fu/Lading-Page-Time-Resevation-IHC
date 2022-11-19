
import imglogo from '../img/logo/logo.png'


function Logo() {
  return (
    <div className="logo">
      <img
        src={imglogo}
        alt="Logo Full Time Reservation"
      ></img>
    </div>
  );
}


function TokenList(props) {
  return (
    <li>
      <a href="#">{props.name}</a>
    </li>
  );
}

function List() {
  return (
    <nav>
      <ul className="nav-list">
        <TokenList name="Inicio" />
        <TokenList name="Restaurantes" />
        <TokenList name="Promociones" />
      </ul>
    </nav>
  );
}

function ButtonNavbar(props) {
  return (
    <a href="#" className="btn">
      <button>{props.name}</button>
    </a>
  );
}
function ListButtonNavbar() {
  return (
    <div className="list-btn">
      <ButtonNavbar name="Iniciar Sesion" />
      <ButtonNavbar name="Registrarse" />
    </div>
  );
}

function Navbar() {
  return (
    <>
      <header className="header">
        <Logo />
        <List />
        <ListButtonNavbar />
      </header>
    </>
  );
}

export default Navbar;