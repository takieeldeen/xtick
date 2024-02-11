import styled from "styled-components";
import { CiUser } from "react-icons/ci";
import Input from "../../ui/Input";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import Button from "../../ui/Button";
import { CiLogin } from "react-icons/ci";

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
function Login() {
  return (
    <Form>
      <h2>
        <CiUser /> Login to your account
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
      <Button
        style={{
          maxWidth: "8rem",
          textAlign: "center",
          alignSelf: "flex-end",
          textTransform: "uppercase",
          padding: "0.5rem 1rem",
        }}
      >
        <CiLogin />
        Log In
      </Button>
    </Form>
  );
}

export default Login;
