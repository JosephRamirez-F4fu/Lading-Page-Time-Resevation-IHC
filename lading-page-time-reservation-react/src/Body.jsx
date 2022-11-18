
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
  