
  function ButtonSearch(props){
      return <>
          <a href="#" class="btn"><button>{props.name}</button></a>
      </>
  }
  function ListButtonSearch(){
      return (
      <div className="list-btn">
          <ButtonSearch name="Haz tu reserva"/>
      </div>)
  }
  
  function Busqueda() {
    return <>
    <ListButtonSearch/>
    </>;
  }
  
  export default Busqueda;
  
  