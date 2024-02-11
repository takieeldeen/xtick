import { cloneElement } from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  border-radius: 0.2rem;
  font: inherit;
  transition: background-color 0.3s;
  &:disabled {
    color: rgb(var(--teal-950));
  }
  ${(props) => {
    if (props.type === "full") {
      return css`
        color: rgb(var(--teal-50));
        background-color: rgb(var(--teal-600));
        padding: 0.4rem 0.8rem;
        &:hover {
          background-color: rgb(var(--teal-700));
        }
      `;
    } else if (props.type === "tab") {
      return css`
        background-color: transparent;
      `;
    }
  }}
`;
function Button({ children, type = "full", className = "", ...options }) {
  return cloneElement(
    <StyledButton type={type} className={className}>
      {children}
    </StyledButton>,
    options
  );
  // return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
