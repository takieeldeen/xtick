import styled from "styled-components";
import TaskCard from "../features/tasks/TaskCard";
import Button from "../ui/Button";
import Timer from "../features/tasks/Timer";
import { useDispatch, useSelector } from "react-redux";
import { switchSession } from "../features/timer/timerSlice";
import Controls from "../ui/Controls";
import { IoMdAddCircleOutline } from "react-icons/io";

const Main = styled.main`
  display: flex;
  .time__board {
    width: 75%;
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
  .task__board {
    width: 25%;
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
  .task__new {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    border: none;
    font-size: 0.8rem;
    color: rgb(var(--teal-800));
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    .icon {
      font-size: 1.3rem;
    }
    &:hover {
      gap: 0.6rem;
    }
  }
`;
function Home() {
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
          <span>Today</span> Wednesday 7th Feb. 2024
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
                  // className={`tab ${
                  //   session === "pomodoro" ? "tab--active" : ""
                  // }`}
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
                onClick={() => dispatch(switchSession("shortBreak"))}
              >
                <Button
                  type="tab"
                  // className={`tab ${
                  //   session === "shortBreak" ? "tab--active" : ""
                  // }`}
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
                onClick={() => dispatch(switchSession("pomodoro"))}
              >
                <Button
                  type="tab"
                  // className={`tab ${
                  //   session === "longBreak" ? "tab--active" : ""
                  // }`}
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
                  Working on xtick app UI (Home Page)
                </p>
                <Controls />
              </div>
            </div>
          </div>
        </div>
        <div className="project__details">
          <div className="project__name">Xtick Project</div>
          <div className="project__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            voluptatem, tempora laudantium nisi exercitationem magnam neque
            minus doloremque possimus labore dolorem minima. Reiciendis commodi
            molestiae sed sapiente tenetur excepturi ea pariatur quam corporis
            modi quos.
          </div>
        </div>
      </div>
      <div className="task__board">
        <div className="task__heading">
          <p>Activities</p>
          <button className="task__new">
            <div className="icon">
              <IoMdAddCircleOutline />
            </div>
            New Activity
          </button>
        </div>
        <TaskCard task={task} />
      </div>
    </Main>
  );
}

export default Home;
