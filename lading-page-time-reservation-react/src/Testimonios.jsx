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
          <TokenList name="Haz tu reserva" />
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