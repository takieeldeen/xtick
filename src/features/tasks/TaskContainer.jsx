import { IoMdAddCircleOutline } from "react-icons/io";
import styled from "styled-components";
import TaskCard from "./TaskCard";
import Message from "../../ui/Message";
import { useState } from "react";
import TaskForm from "./TaskForm";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
const StyledTaskContainer = styled.aside`
  .task__board {
    width: 100%;
    min-width: 20rem;
    /* background-color: red; */
    height: 100%;
    max-height: 30rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-right: 0.5rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0.8rem;
    }
    &::-webkit-scrollbar-track {
      background-color: rgb(var(--neutral-300));
      border-radius: 999rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgb(var(--teal-800));
      border-radius: 999rem;
    }
  }

  .task__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 1.5rem;
      font-weight: 900;
      color: rgb(var(--teal-950));
    }
  }
  @media (max-width: 700px) {
    .task__board {
      min-width: 3rem;
    }
  }
`;
function TaskContainer() {
  const [createTask, setCreateTask] = useState(false);
  const tasks = useSelector((state) => state.tasks.tasks);
  return (
    <StyledTaskContainer>
      <div className="task__board">
        <div className="task__heading">
          <p>Activities</p>
          <Button
            type="iconButton"
            className="task__new"
            onClick={() => setCreateTask(!createTask)}
          >
            <div className="icon">
              <IoMdAddCircleOutline />
            </div>
            New Activity
          </Button>
        </div>
        {createTask && <TaskForm />}
        {tasks.length === 0 ? <Message /> : ""}
        {tasks.map((task, index) => (
          <TaskCard task={task} key={index} />
        ))}
      </div>
    </StyledTaskContainer>
  );
}

export default TaskContainer;
