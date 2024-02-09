import styled, { css } from "styled-components";

const StyledPrompt = styled.div`
  .btnContainer {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
  }
  p {
    font-weight: 300;
    margin-bottom: 0.8rem;
  }
`;
const Button = styled.button`
  width: 50%;
  max-width: 10rem;
  font: inherit;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03rem;
  padding: 1rem 1rem;
  cursor: pointer;
  transition: all 0.3s;
  ${(props) => {
    if (props.type === "confirm")
      return css`
        color: rgb(var(--teal-50));
        background-color: rgb(var(--teal-500));
        &:hover {
          background-color: rgb(var(--teal-600));
        }
      `;
    if (props.type === "cancel")
      return css`
        color: rgb(var(--teal-500));
        background-color: rgb(var(--teal-50));
        &:hover {
          color: rgb(var(--teal-50));
          background-color: rgb(var(--teal-600));
        }
      `;
  }}
`;
const ButtonCancel = styled.button``;
const optionsEx = {
  title: "Pause prompt",
  text: "Are you sure you want to pause the session. This will lead to a pause in the whole system.",
  btnConfirm: "Pause",
  btnCancel: "Cancel",
};
function Prompt({ options, onCloseModal }) {
  return (
    <StyledPrompt>
      <h4>{options.title}</h4>
      <p>{options.text}</p>
      <div className="btnContainer">
        {options.btnCancel && (
          <Button onClick={onCloseModal} type="cancel">
            {options.btnCancel}
          </Button>
        )}
        {options.btnConfirm && (
          <Button type="confirm">{options.btnConfirm}</Button>
        )}
      </div>
    </StyledPrompt>
  );
}

export default Prompt;
