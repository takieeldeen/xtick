import styled from "styled-components";
import Logo from "./Logo";
import User from "./User";
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 1rem;
  .nav__menu {
    list-style: none;
    display: flex;
    gap: 1.9rem;
    a {
      text-decoration: none;
      font-size: 0.9rem;
      text-transform: capitalize;
      font-weight: 700;
      color: #333;
    }
  }
`;
function Navbar() {
  return (
    <Nav>
      <Logo />
      <ul className="nav__menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">login</a>
        </li>
        <li>
          <a href="#">Sign up</a>
        </li>
      </ul>
      <User />
    </Nav>
  );
}

export default Navbar;
