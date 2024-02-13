import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import { tick } from "./timerSlice";
import { formatTime } from "../../utilis/helpers";

const StyledTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  font-weight: 300;
  height: 18rem;
  width: 18rem;
  border: 3px solid rgb(var(--teal-600));
  border-radius: 50%;
`;

function Timer() {
  const { minuets, seconds, isTicking } = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isTicking) {
      const timer = setInterval(() => dispatch(tick()), 1000);
      return () => clearInterval(timer);
    }
  }, [dispatch, isTicking]);
  return (
    <StyledTimer className="session__timer">
      <span>{formatTime(minuets, seconds)}</span>
    </StyledTimer>
  );
}

export default Timer;
