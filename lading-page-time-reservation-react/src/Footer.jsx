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
  <div className="logos">
    <ul className="logos-list">
      <LogosElements
        enlace="https://www.facebook.com/profile.php?id=100086850648895"
        img=""
        alter="Facebook"
      ></LogosElements>
      <LogosElements
        enlace="https://www.instagram.com/fulltimereservation/"
        img=""
        alter="Instagram"
      ></LogosElements>
      <LogosElements
        enlace="https://www.youtube.com/channel/UCqceQyuNUH0xzB8IQtCYSDA/"
        img=""
        alter="Youtube"
      ></LogosElements>
    </ul>
  </div>;
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
      <LastMessage/>
      <LogosRow />
      <ListFoot />
    </footer>
  );
}

export default Footer;
