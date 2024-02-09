import styled from "styled-components";

const StyledTimer = styled.div`
  .session__timer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    font-weight: 300;
    height: 18rem;
    width: 18rem;
    border: 3px solid rgb(var(--teal-600));
    border-radius: 50%;
  }
`;

function Timer() {
  return (
    <StyledTimer className="session__timer">
      <span>50:00</span>
    </StyledTimer>
  );
}

export default Timer;
