import styled from "styled-components";
import Logo from "./Logo";
import User from "./User";
import Modal from "./Modal";
import Settings from "../features/settings/Settings";
import Login from "../features/Login/Login";
import SignupForm from "../features/signup/SignupForm";
import Button from "./Button";
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
  .authorizationBtns {
    display: flex;
    gap: 1rem;
  }
`;
function Navbar() {
  const signedIn = false;
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
        </ul>
        {signedIn ? (
          <User />
        ) : (
          <ul className="authorizationBtns">
            <Modal.Open opens="login">
              <Button
                style={{
                  backgroundColor: "transparent",
                  color: `rgb(var(--teal-800))`,
                  border: "2px solid rgb(var(--teal-800))",
                }}
              >
                Login
              </Button>
            </Modal.Open>
            <Modal.Window name="login">
              <Login />
            </Modal.Window>
            <Modal.Open opens="signup">
              <Button>Signup</Button>
            </Modal.Open>
            <Modal.Window name="signup">
              <SignupForm />
            </Modal.Window>
          </ul>
        )}
      </Nav>
    </Modal>
  );
}

export default Navbar;
