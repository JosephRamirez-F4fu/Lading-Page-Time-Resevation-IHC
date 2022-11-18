
  function ButtonStyles(props){
      return <>
          <a href="#" class="btn"><button>{props.name}</button></a>
      </>
  }
  function ListButtonBody(){
      return (
      <div className="body-btn">
          <ButtonStyles name="Explorar"/>
      </div>)
  }
  
  function Body() {
    return <>
    <ListButtonBody/>
    </>;
  }
  
  export default Body;
  
  /*
        <div class="contenedor">
            <h2>Ver más restaurantes</h2>
        </div>
        <div class="contenedor">
            <a href="#"  class="btn-2" ><button>Explorar</button></a>
        </div>
  */