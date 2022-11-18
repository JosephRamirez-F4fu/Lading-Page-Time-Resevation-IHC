
  function ButtonStyles(props){
      return <>
          <a href="#" class="btn"><button>{props.name}</button></a>
      </>
  }
  
  function ListButtonStyles(){
      return (
      <div className="style-btn">
          <ButtonStyles name="Facebook"/>
          <ButtonStyles name="Instagram"/>
          <ButtonStyles name="Twitter"/>
          <ButtonStyles name="YouTube"/> 
      </div>)
  }
  
  function Styles() {
    return <>
    <ListButtonStyles/>
    </>;
  }
  
  export default Styles;
  