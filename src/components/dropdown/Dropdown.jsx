 import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarDarkExample({ arr }) {
  return (
    <NavDropdown
    style={{fontSize:"14px",fontFamily:"Poppins"}}
      id="nav-dropdown-dark-example"
      title="English"
      menuVariant="dark"
    >
      {arr.map((item) => (
        <NavDropdown.Item href="#action/3.1" key={"key"}>{item}</NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default NavbarDarkExample;
