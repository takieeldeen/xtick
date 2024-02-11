import styled from "styled-components";
import Logo from "./Logo";
import User from "./User";
import Modal from "./Modal";
import Settings from "../features/settings/Settings";
import Login from "../features/Login/Login";
import SignupForm from "../features/signup/SignupForm";
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
    <Modal>
      <Nav>
        <Logo />
        <ul className="nav__menu">
          <li>
            <a href="#">Home</a>
          </li>
          <Modal.Open opens="settings">
            <li>
              <a href="#">Settings</a>
            </li>
          </Modal.Open>
          <Modal.Window name="settings">
            <Settings />
          </Modal.Window>
          <Modal.Open opens="login">
            <li>
              <a href="#">login</a>
            </li>
          </Modal.Open>
          <Modal.Window name="login">
            <Login />
          </Modal.Window>
          <Modal.Open opens="signup">
            <li>
              <a href="#">Sign up</a>
            </li>
          </Modal.Open>
          <Modal.Window name="signup">
            <SignupForm />
          </Modal.Window>
        </ul>
        <User />
      </Nav>
    </Modal>
  );
}

export default Navbar;
