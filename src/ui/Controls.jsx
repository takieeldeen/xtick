import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { FaPause, FaPlay } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";
import { MdDone } from "react-icons/md";
import { nextSession, restart, toggle } from "../features/timer/timerSlice";
import styled from "styled-components";
const StyledControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
function Controls() {
  const dispatch = useDispatch();
  const { isTicking } = useSelector((state) => state.timer);
  return (
    <StyledControls className="session__controls">
      <Button onClick={() => dispatch(toggle())}>
        {isTicking ? (
          <>
            {" "}
            <FaPause />
            Pause
          </>
        ) : (
          <>
            {" "}
            <FaPlay />
            Play
          </>
        )}
      </Button>
      {/* <Modal>
<Modal.Open opens="pause_prompt">
  <Button onClick={() => dispatch(toggle())}>
    {isTicking ? (
      <>
        {" "}
        <FaPause />
        Pause
      </>
    ) : (
      <>
        {" "}
        <FaPlay />
        Play
      </>
    )}
  </Button>
</Modal.Open>
<Modal.Window name="pause_prompt">
  <Prompt
    options={{
      title: "Pause prompt",
      text: "Are you sure you want to pause the session. This will lead to a pause in the whole system.",
      btnConfirm: "Pause",
      btnCancel: "Cancel",
    }}
  ></Prompt>
</Modal.Window>
</Modal> */}

      <Button
        onClick={() => {
          dispatch(restart());
        }}
      >
        <VscDebugRestart />
        Restart
      </Button>
      <Button
        onClick={() => {
          dispatch(nextSession());
        }}
      >
        <MdDone />
        Finish
      </Button>
    </StyledControls>
  );
}

export default Controls;
