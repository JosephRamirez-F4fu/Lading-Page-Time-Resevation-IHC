function TokenList(props) {
    return (
      <li>
        <a href="#">{props.name}</a>
      </li>
    );
  }
  
  function List() {
    return (
      <>
        <ul className="nav-list">
          <TokenList name="Cliente" />
          <TokenList name="Dueño" />
        </ul>
      </>
    );
  }
  
  
  function Testimonios() {
    return <>
    <List/>
    </>;
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