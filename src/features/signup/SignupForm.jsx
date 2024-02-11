import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import { MdAlternateEmail, MdOutlinePassword } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;
function SignupForm() {
  return (
    <Form>
      <h2>
        <FaRegUserCircle /> Create new account.
      </h2>
      <Input
        type="email"
        placeholder="Email Address"
        id="email"
        icon={<MdAlternateEmail />}
      />
      <Input
        type="password"
        placeholder="Password"
        id="password"
        icon={<MdOutlinePassword />}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        id="password"
        icon={<MdOutlinePassword />}
      />
      <Button
        style={{
          maxWidth: "8rem",
          textAlign: "center",
          alignSelf: "flex-end",
          textTransform: "uppercase",
          padding: "0.5rem 1rem",
        }}
      >
        <IoMdPersonAdd />
        Sign Up
      </Button>
    </Form>
  );
}

export default SignupForm;
