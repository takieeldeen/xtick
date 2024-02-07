import styled from "styled-components";

const StyledTaskCard = styled.div`
  width: 100%;
  /* background-color: red; */
  border-radius: 0.3rem;
  padding: 1rem 2rem;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.08);
  position: relative;
  &::before {
    content: "";
    display: block;
    height: 60%;
    width: 0.3rem;
    border-radius: 999rem;
    background-color: rgb(var(--teal-600));
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .task__name {
    font-size: 1rem;
  }

  .task__project {
    font-size: 0.85rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
`;
function TaskCard() {
  return (
    <StyledTaskCard>
      <p className="task__name">Building Home page Part 1</p>
      <p className="task__project">xtick App</p>
      <p className="time__lap">11:00 AM - 12:00 PM</p>
    </StyledTaskCard>
  );
}

export default TaskCard;
