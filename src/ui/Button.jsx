import styled from "styled-components";

const StyledButton = styled.button`
  background-color: rgb(var(--teal-600));
  padding: 0.4rem 0.8rem;
  color: rgb(var(--teal-50));
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  border-radius: 0.2rem;
  font: inherit;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(var(--teal-700));
  }
`;
function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
