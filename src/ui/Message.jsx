import styled from "styled-components";

const StyledMessage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .messageImg {
    width: 10rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .messageText {
    color: rgb(var(--teal-900));
    font-weight: 700;
  }
`;

function Message() {
  return (
    <StyledMessage>
      <div className="messageImg">
        <img src="./messages/empty.svg" />
      </div>
      <p className="messageText">It seems you dont have any tasks.</p>
    </StyledMessage>
  );
}

export default Message;
