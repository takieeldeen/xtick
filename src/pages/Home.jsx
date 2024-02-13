import styled from "styled-components";
import TaskCard from "../features/tasks/TaskCard";
import Button from "../ui/Button";
import Timer from "../features/timer/Timer";
import { useDispatch, useSelector } from "react-redux";
import { switchSession } from "../features/timer/timerSlice";
import Controls from "../ui/Controls";
import { IoMdAddCircleOutline } from "react-icons/io";
import TaskContainer from "../features/tasks/TaskContainer";
import { getCurrentTask } from "../features/tasks/tasksSlice";

const Main = styled.main`
  display: flex;
  .time__board {
    width: 100%;
    /* background-color: blue; */
    padding: 2rem;
    height: 100%;

    .date {
      font-size: 3rem;
      color: rgb(var(--teal-950));
      span {
        font-weight: 300;
      }
    }

    .session__info {
      display: flex;
      align-items: flex-start;
      gap: 2rem;
      padding-top: 2rem;
      margin-bottom: 1rem;
      width: 100%;
      .tabs {
        list-style: none;
        display: flex;
        gap: 1rem;
        font-weight: 700;
        padding-bottom: 1rem;
        position: relative;
        transition: all 0.3s;

        .tab {
          user-select: none;
          padding-bottom: 0.3rem;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all 0.3s;
        }

        .tab:hover {
          color: rgb(var(--teal-800));
          text-shadow: 0 0 1.5rem rgba(var(---teal-950), 1);
        }

        .tab--active {
          cursor: default;
          border-bottom: 2px solid rgb(var(--teal-800));
          &:hover {
            color: rgb(var(--teal-800));
          }
        }
      }
    }

    .session__details {
      h2 {
        text-transform: uppercase;
        font-size: 3rem;
        letter-spacing: 0.15rem;
        color: rgb(var(--teal-950));
      }
      .session__task {
        margin-bottom: 1rem;
        font-weight: 700;
        color: rgb(var(--teal-900));
      }
    }
    .project__details {
      background-color: rgb(var(--teal-600));
      padding: 1rem;
      border-radius: 0.4rem;
      display: flex;
      color: rgb(var(--teal-100));
      gap: 2rem;
    }
    .project__name {
      min-width: 6rem;
      font-weight: 700;
    }
  }
  @media (max-width: 1140px) {
    .time__board {
      .date {
        font-size: 2.5rem;
      }
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 700px) {
    .time__board {
      .date {
        font-size: 1.8rem;
      }
      .session__info {
        flex-direction: column;
        align-items: center;
      }
    }
  }
  @media (max-width: 509px) {
    .time__board {
      .date {
        font-size: 1.5rem;
      }
    }
  }
`;
function Home() {
  const currentTask = useSelector(getCurrentTask);

  const { isTicking, sessionNo, session } = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  const task = {
    project: "Xtick",
    category: "Front-end",
    title: "Design the User form",
    description:
      "Design the sign up form using React-hook-forms library to connect it with the database",
    duration: 2,
    state: "done",
    finishingDate: new Date().toISOString(),
  };
  return (
    <Main>
      <div className="time__board">
        <p className="date">
          <span>Today</span>{" "}
          {new Date(Date.now()).toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="session__info">
          <Timer />
          <div className="tab__window tab__window--session">
            <ul className="tabs">
              <li
                className={`tab ${session === "pomodoro" ? "tab--active" : ""}`}
              >
                <Button
                  type="tab"
                  disabled={session === "pomodoro" ? true : false}
                  onClick={() => dispatch(switchSession("pomodoro"))}
                >
                  Session
                </Button>
              </li>
              <li
                className={`tab ${
                  session === "shortBreak" ? "tab--active" : ""
                }`}
              >
                <Button
                  type="tab"
                  disabled={session === "shortBreak" ? true : false}
                  onClick={() => dispatch(switchSession("shortBreak"))}
                >
                  Short break
                </Button>
              </li>
              <li
                className={`tab ${
                  session === "longBreak" ? "tab--active" : ""
                }`}
                onClick={() => dispatch(switchSession("longBreak"))}
              >
                <Button
                  type="tab"
                  disabled={session === "longBreak" ? true : false}
                  onClick={() => dispatch(switchSession("longBreak"))}
                >
                  Long break
                </Button>
              </li>
            </ul>
            <div className="session__details">
              <div>
                <h2>
                  {session === "pomodoro" ? `Session ${sessionNo}` : "Break"}
                </h2>
                <p className="session__task">
                  {currentTask?.title || `Curren't task isn't specified yet`}
                </p>
                <Controls />
              </div>
            </div>
          </div>
        </div>
        <div className="project__details">
          <div className="project__name">
            {currentTask?.project ||
              `Current task's project hasn't been specified yet`}{" "}
            Project
          </div>
          {currentTask?.project && (
            <div className="project__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              voluptatem, tempora laudantium nisi exercitationem magnam neque
              minus doloremque possimus labore dolorem minima. Reiciendis
              commodi molestiae sed sapiente tenetur excepturi ea pariatur quam
              corporis modi quos.
            </div>
          )}
        </div>
      </div>
      <TaskContainer />
    </Main>
  );
}

export default Home;
