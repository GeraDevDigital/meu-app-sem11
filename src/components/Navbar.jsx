import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    margin: "0 10px",
    textDecoration: "none",
    color: isActive ? "red" : "blue",
  });

  return (
    <nav style={{ marginBottom: "20px" }}>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/sobre" style={linkStyle}>
        Sobre
      </NavLink>
      <NavLink to="/contato" style={linkStyle}>
        Contato
      </NavLink>
      <NavLink to="/cadastro" style={linkStyle}>Cadastro</NavLink>

    </nav>
  );
};

export default Navbar;
