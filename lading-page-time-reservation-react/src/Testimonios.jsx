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
      <Testimonio />
      <Testimonio />
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

/*
  <div class="Testimonios">
        
        
        <div class="test-title">
            <h3> Testimonios</h3>
            <p>Conoce las opiniones de nuestros usuarios</p>
        </div>  
        
        <div class="test-row">
            <div class="Testimonio">
                <h1 class="test-client">Cliente </h1>
                <div class="cont-test-img-text">
                    <img alt="img-test" src="/img/Clientes/1.jpg">
                    <p>"Me encanta su página web, así puedo realizar mis reservas rápidamente y saber cual me convendría"</p>
                </div>
            </div>

            <div class="Testimonio">
                <h1 class="test-client" >Dueño </h1>
                <div class="cont-test-img-text">
                    <img alt="img-test" src="/img/Dueños/1.jpg">
                    <p>"Gracias a su página web logré promocionar mi restaurante y conseguir mayor cantidad de clientes para mi local"</p>
                </div>
            </div>    
        </div>
  */
