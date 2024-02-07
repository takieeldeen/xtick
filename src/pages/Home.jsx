import styled from "styled-components";
import TaskCard from "../ui/TaskCard";
import Button from "../ui/Button";
import { FaPause } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";
import { MdDone } from "react-icons/md";

const Main = styled.main`
  display: flex;
  .time__board {
    width: 75%;
    /* background-color: blue; */
    padding: 2rem;
    height: 100%;

    .date {
      font-size: 3rem;
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

        .tab {
          user-select: none;
          padding-bottom: 0.3rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .tab:hover {
          color: rgb(var(--teal-800));
          text-shadow: 0 0 1.5rem rgba(var(---teal-950), 1);
        }
        .tab--active {
          color: rgb(var(--teal-800));
          border-bottom: 2px solid rgb(var(--teal-800));
          cursor: default;
        }
      }
    }

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

    .session__details {
      h2 {
        text-transform: uppercase;
        font-size: 3rem;
        letter-spacing: 0.15rem;
        color: rgb(var(---teal-300));
      }
      .session__task {
        margin-bottom: 1rem;
      }
      .session__controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
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
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
function Home() {
  return (
    <Main>
      <div className="time__board">
        <p className="date">
          <span>Today</span> Wednesday 7th Feb. 2024
        </p>

        <div className="session__info">
          <div className="session__timer">
            <span>13:59</span>
          </div>
          <div className="tab__window tab__window--session">
            <ul className="tabs">
              <li className="tab tab--active">Session</li>
              <li className="tab">Short Break</li>
              <li className="tab">Long Break</li>
            </ul>
            <div className="session__details">
              <div>
                <h2>Session 2</h2>
                <p className="session__task">
                  Working on xtick app UI (Home Page)
                </p>
                <div className="session__controls">
                  <Button>
                    <FaPause />
                    Pause
                  </Button>
                  <Button>
                    <VscDebugRestart />
                    Restart
                  </Button>
                  <Button>
                    <MdDone />
                    Finish
                  </Button>
                </div>
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
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </Main>
  );
}

export default Home;
