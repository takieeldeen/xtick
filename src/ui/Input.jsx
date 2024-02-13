import { cloneElement } from "react";
import styled from "styled-components";

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CheckInput = styled.input`
  position: relative;
  width: 0;
  height: 0;
  cursor: pointer;
  &:checked&::before {
    background-color: rgb(var(--teal-50));
  }
  &:checked&::after {
    transform: translate(0, -50%);
    background-color: rgb(var(--teal-700));
  }
  &::before {
    content: "";
    display: block;
    height: 1.5rem;
    width: 3rem;
    border-radius: 99rem;
    background-color: rgb(var(--teal-900));
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s;
  }

  &::after {
    content: "";
    display: block;
    height: 1.1rem;
    width: 1.1rem;
    border-radius: 50%;
    background-color: rgb(var(--teal-50));
    position: absolute;
    top: 50%;
    right: 0.2rem;
    transform: translate(-1.5rem, -50%);
    transition: all 0.3s;
  }
`;
CheckInput.defaultProps = {
  type: "checkbox",
};
const InputGroup = styled.div`
  position: relative;

  label {
    background-color: rgb(var(--teal-700));
    position: absolute;
    top: 0.3rem;
    left: 0.6rem;
    font-size: 0.7rem;
    font-weight: 700;
    color: rgb(var(--teal-100));
  }
  .icon {
    position: absolute;
    right: 0.4rem;
    font-size: 1.6rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgb(var(--neutral-100));
  }
`;

const StyledInput = styled.input`
  font: inherit;
  font-weight: 400;
  font-size: 1.1rem;
  padding: 1.2rem 2.5rem 0.6rem 0.5rem;
  border: none;
  border-radius: 6px;
  background-color: rgb(var(--teal-700));
  color: rgb(var(--teal-50));
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgb(var(--teal-100));
  }

  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
const StyledTextArea = styled.textarea`
  font: inherit;
  border-radius: 0.6rem;
  background-color: rgb(var(--teal-700));
  font-weight: 400;
  font-size: 1.1rem;
  padding: 1.2rem 2.5rem 0.6rem 0.5rem;
  border: none;
  width: 100%;
  color: rgb(var(--teal-50));
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgb(var(--teal-50));
  }
`;
function Input({
  id = "",
  placeholder = "",
  icon,
  innerRef = undefined,
  ...options
}) {
  if (options.type === "textarea")
    return (
      <InputGroup>
        <label htmlFor={id}>{placeholder}</label>
        {cloneElement(
          <StyledTextArea
            placeholder={placeholder}
            id={id}
            ref={innerRef ? innerRef : null}
          ></StyledTextArea>,
          options
        )}
      </InputGroup>
    );
  if (options.type === "checkbox")
    return (
      <CheckboxGroup>
        <label htmlFor={id}>{placeholder}</label>
        <CheckInput />
      </CheckboxGroup>
    );
  return (
    <InputGroup>
      <div className="icon">{icon}</div>
      <label htmlFor={id}>{placeholder}</label>
      {cloneElement(
        <StyledInput
          id={id}
          placeholder={placeholder}
          ref={innerRef ? innerRef : null}
        />,
        options
      )}
    </InputGroup>
  );
}

export default Input;
