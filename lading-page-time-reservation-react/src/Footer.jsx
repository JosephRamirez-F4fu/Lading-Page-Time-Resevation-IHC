import imgFB from "./img/Redes/Facebook.png";
import imgINS from "./img/Redes/Instagram.png";
import imgTWTT from "./img/Redes/Twitter.png";
import imgYT from "./img/Redes/Youtube.png";

function TokenListFoot(props) {
  return (
    <li>
      <a href="#">{props.name}</a>
    </li>
  );
}

function ListFoot() {
  return (
    <>
      <ul className="informacion">
        <TokenListFoot name="Centro de ayuda" />
        <TokenListFoot name="Política de privacidad" />
        <TokenListFoot name="Terminos de uso" />
      </ul>
    </>
  );
}

function LogosElements(props) {
  return (
    <li>
      <a href={props.enlace} target="_blank">
        <img src={props.img} alt={props.alter}></img>
      </a>
    </li>
  );
}

function LogosRow() {
  return (
    <div className="logos">
      <ul className="logos-list">
        <LogosElements
          enlace="https://www.facebook.com/profile.php?id=100086850648895"
          img={imgFB}
          alter="Facebook"
        ></LogosElements>
        <LogosElements
          enlace="https://www.instagram.com/fulltimereservation/"
          img={imgINS}
          alter="Instagram"
        ></LogosElements>
        <LogosElements
          enlace="https://twitter.com/F_T_Reservation"
          img={imgTWTT}
          alter="Twitter"
        ></LogosElements>
        <LogosElements
          enlace="https://www.youtube.com/channel/UCqceQyuNUH0xzB8IQtCYSDA/"
          img={imgYT}
          alter="Youtube"
        ></LogosElements>
      </ul>
    </div>
  );
}

function LastMessage() {
  return (
    <div className="cont-mensaje">
      <div className="mensaje">
        <h1>Reserva con nosotros</h1>
      </div>
      <div className="mensaje">
        <p>Se parte de nuestra familia</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <LastMessage />
      <LogosRow />
      <ListFoot />
    </footer>
  );
}

export default Footer;
