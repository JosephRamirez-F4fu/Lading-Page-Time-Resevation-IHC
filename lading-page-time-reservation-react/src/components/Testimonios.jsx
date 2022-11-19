import client from "../img/Clientes/1.jpg"
import  propietor from "../img/Dueños/1.jpg"

function Testimonio(props) {
  return (
    <div className="Testimonio">
      <h1 className="test-client">{props.client} </h1>
      <div className="cont-test-img-text">
        <img alt="img-test" src={props.img}></img>
        <p>{props.comentary}</p>
      </div>
    </div>
  );
}

function TestimonioRow(props) {
  return (
    <div className="test-row">
      <Testimonio client="Cliente" img={client} comentary="Me encanta su página web, así puedo realizar mis reservas rápidamente y saber cual me convendría"/>
      <Testimonio client="Dueño" img={propietor} comentary="Gracias a su página web logré promocionar mi restaurante y conseguir mayor cantidad de clientes para mi local"/>
    </div>
  );
}

function Testimonios() {
  return (
    <div className="Testimonios">
      <div className="test-title">
        <h3> Testimonios</h3>
        <p>Conoce las opiniones de nuestros usuarios</p>
      </div>
      <TestimonioRow/>
    </div>
  );
}

export default Testimonios;
