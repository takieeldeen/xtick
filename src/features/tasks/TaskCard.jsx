import { IoIosTimer } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";

import styled, { css } from "styled-components";
const StyledTaskCard = styled.div`
  ${(props) => {
    return css`
      background-color: rgb(var(--${props.color}-300)); //300
      border-radius: 9px;
      padding: 1rem;
      user-select: none;
      position: relative;
      box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.1);
      ${(props) => {
        if (props.taskState === "done")
          return css`
            box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0);
            background-color: rgb(var(--neutral-200));
          `;
      }}
      &::before {
        content: "";
        display: block;
        height: 2rem;
        width: 2rem;
        background-color: #1e40af;
        position: absolute;
        z-index: -1;
      }
      .task__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
      }

      .task__classification {
        display: flex;
        gap: 0.5rem;

        .task__project {
          background-color: rgb(var(--${props.color}-700));
          padding: 0.2rem 0.6rem;
          font: inherit;
          font-weight: 700;
          border-radius: 99rem;
          font-size: 0.7rem;
          border: 3px solid rgb(var(--${props.color}-200));
          color: #fff;
        }

        .task__category {
          font-weight: 700;
          border-radius: 99rem;
          padding: 0.2rem 0.6rem;
          font-size: 0.7rem;
          border: 3px solid rgb(var(--${props.color}-200));
        }
      }
      .task__title {
        font-weight: 700;
        margin-bottom: 0.1rem;
        ${(props) => {
          if (props.taskState === "done")
            return css`
              text-decoration: line-through;
              text-decoration-color: rgb(var(--neutral-700));
              color: rgb(var(--neutral-400));
            `;
        }}
      }
      .task__description {
        font-size: 0.8rem;
        /* font-weight: 700; */
        color: rgb(var(--neutral-700));
        margin-bottom: 0.5rem;
        ${(props) => {
          if (props.taskState === "done")
            return css`
              text-decoration: line-through;
              color: rgb(var(--neutral-400));
            `;
        }}
      }
      .task__options {
        display: flex;
        justify-content: space-between;
      }
      .task__done {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(var(--${props.color}-700));
        color: #fff;
        border: none;
        font-size: 1.1rem;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.1);
        text-transform: uppercase;
        font-weight: 700;
        transition: all 0.3s;
        &:hover {
          transform: translateY(-0.1rem);
        }
      }
      .task__duration {
        display: flex;
        align-items: center;
        color: rgb(var(--neutral-800));
        font-weight: 700;
        gap: 0.1rem;
      }
      .task__settings {
        background-color: transparent;
        border: none;
        font-size: 1.4rem;
        cursor: pointer;
      }
    `;
  }}
`;
function TaskCard({ task }) {
  return (
    <StyledTaskCard color={task.color || "blue"} taskState={task.state}>
      <div className="task__header">
        <div className="task__classification">
          <p className="task__project">{task.project}</p>
          <p className="task__category">{task.category}</p>
        </div>
        <button className="task__settings">
          <CiMenuKebab />
        </button>
      </div>
      <div className="task__info">
        <p className="task__title ">{task.title}</p>
        <p className="task__description">{task.description}</p>
      </div>
      <div className="task__options">
        <p className="task__duration">
          {task.duration}
          <IoIosTimer />
        </p>
        {task.state !== "done" && (
          <button className="task__done">
            <FaCheck />
          </button>
        )}
      </div>
    </StyledTaskCard>
  );
}

export default TaskCard;
