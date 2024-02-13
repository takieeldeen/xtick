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
    } else if (props.type === "iconButton") {
      return css`
        font: inherit;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background-color: transparent;
        border: none;
        font-size: 0.8rem;
        color: rgb(var(--teal-800));
        font-weight: 700;
        cursor: pointer;
        transition: all 0.1s;
        .icon {
          font-size: 1.3rem;
        }
        &:hover {
          gap: 0.5rem;
        }
      `;
    } else if (props.type === "menuButton") {
      return css`
        font: inherit;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        background-color: transparent;
        border: none;
        font-size: 0.8rem;
        color: rgb(var(--teal-800));
        font-weight: 700;
        width: 100%;
        /* min-width: 5rem; */
        padding: 0.5rem 0.5rem;
        cursor: pointer;
        transition: all 0.3s;
        .icon {
          font-size: 1.2rem;
          width: auto;
        }
        &:hover {
          background-color: rgb(var(--neutral-200));
          gap: 0.3rem;
        }
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
