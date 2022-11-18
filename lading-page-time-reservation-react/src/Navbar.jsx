import "./styles.css";
import imglogo from './img/logo/logo.png'


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
    <body>
      <header className="header">
        <Logo />
        <List />
        <ListButtonNavbar />
      </header>
    </body>
  );
}

export default Navbar;

/*<header class="header">
    <div class="logo">
        <img src="img/Logo/logo.png" alt="Logo Full Time Reservation"></img>
    </div>
    <nav>
        <ul class="nav-list">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Restaurantes</a></li>
            <li><a href="#">Promociones</a></li>
        </ul>
    </nav>
    <div class="list-btn">
        <a href="#" class="btn"><button>Iniciar sesion</button></a>
        <a href="#" class="btn"><button>Registrarse</button></a>
    </div>
    </header>*/
