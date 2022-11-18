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
        <ul className="Foot-list">
          <TokenList name="Centro de ayuda" />
          <TokenList name="Política de privacidad" />
          <TokenList name="Terminos de uso" />
        </ul>
      </>
    );
  }
  
 
  function Footer() {
    return <>
    <List/>
    </>;
  }
  
  export default Footer;
  
  