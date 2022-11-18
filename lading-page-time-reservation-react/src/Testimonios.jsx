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