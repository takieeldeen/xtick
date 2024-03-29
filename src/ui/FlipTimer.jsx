import styled from "styled-components";

const StyledFlipTimer = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: teal; */

  .flip-clock-container {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 50px;
    line-height: 0;
  }

  .flip-clock-container * {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;

    cursor: default;
  }

  .flip-clock {
    display: flex;

    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    perspective: 1000px;
  }

  .digit {
    position: relative;

    width: 90px;
    height: 160px;

    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
  }

  .digit-left {
    margin-right: 1px;
  }

  .digit-right {
    margin-left: 1px;
  }

  .digit::before,
  .digit::after {
    position: absolute;
    z-index: 0;

    display: flex;
    justify-content: center;

    width: 100%;
    height: 50%;
    overflow: hidden;
  }

  .digit::before {
    content: attr(data-digit-before);

    bottom: 0;
    align-items: flex-start;
  }

  .digit::after {
    content: attr(data-digit-after);

    top: 0;
    align-items: flex-end;
  }

  .card {
    position: relative;
    z-index: 1;

    width: 100%;
    height: 50%;

    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;

    -webkit-transform-origin: bottom;
    -moz-transform-origin: bottom;
    transform-origin: bottom;

    -webkit-transform: rotateX(0);
    -moz-transform: rotateX(0);
    transform: rotateX(0);

    -webkit-transition: transform 0.7s ease-in-out;
    -moz-transition: transform 0.7s ease-in-out;
    transition: transform 0.7s ease-in-out;
  }

  .card.flipped {
    transform: rotateX(-180deg);
  }

  .card-face {
    position: absolute;

    display: flex;
    justify-content: center;

    width: 100%;
    height: 100%;
    overflow: hidden;

    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .card-face-front {
    align-items: flex-end;
  }

  .card-face-back {
    align-items: flex-start;

    -webkit-transform: rotateX(-180deg);
    -moz-transform: rotateX(-180deg);
    transform: rotateX(-180deg);
  }

  .digit::before,
  .digit::after,
  .card-face-front,
  .card-face-back {
    background: white;
    color: black;
  }

  .digit,
  .digit::before,
  .digit::after,
  .card,
  .card-face {
    border-radius: 4px;
  }

  .digit::before,
  .card-face-back {
    background: linear-gradient(0, #aaa, #ccc 50%, #fafafa);
    color: #212121;

    border-top: 1px solid black;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .digit::after,
  .card-face-front {
    background: linear-gradient(0, #aaa, #bbb 50%, #f5f5f5);
    color: #212121;

    border-bottom: 1px solid black;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .digit-left,
  .digit-left::before,
  .digit-left::after,
  .digit-left .card,
  .digit-left .card-face {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .digit-right,
  .digit-right::before,
  .digit-right::after,
  .digit-right .card,
  .digit-right .card-face {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .colon {
    color: black;
    margin: 0 6px;
    padding-bottom: 9px;
  }
`;
function FlipTimer() {
  return (
    <StyledFlipTimer>
      <div className="flip-clock-container">
        <div className="flip-clock flip-clock-h">
          <div
            className="digit digit-left "
            data-digit-before="4"
            data-digit-after="5"
          >
            {/* <!-- ::before --> */}
            <div className="card">
              <div className="card-face card-face-front">4</div>
              <div className="card-face card-face-back">5</div>
            </div>
            {/* <!-- ::after --> */}
          </div>
          <div className="digit digit-right">
            {/* <!-- ::before --> */}
            <div className="card">
              <div className="card-face card-face-front"></div>
              <div className="card-face card-face-back"></div>
            </div>
            {/* <!-- ::after --> */}
          </div>
        </div>

        <div className="colon">:</div>

        <div className="flip-clock flip-clock-m">
          <div className="digit digit-left">
            {/* <!-- ::before --> */}
            <div className="card">
              <div className="card-face card-face-front"></div>
              <div className="card-face card-face-back"></div>
            </div>
            {/* <!-- ::after --> */}
          </div>
          <div className="digit digit-right">
            {/* <!-- ::before --> */}
            <div className="card">
              <div className="card-face card-face-front"></div>
              <div className="card-face card-face-back"></div>
            </div>
            {/* <!-- ::after --> */}
          </div>
        </div>
      </div>
    </StyledFlipTimer>
  );
}

export default FlipTimer;
