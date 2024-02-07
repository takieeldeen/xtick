import styled from "styled-components";

function User() {
  const StyledUser = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    img {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
    }
    p {
      font-size: 1rem;
      font-weight: 700;
    }
  `;
  return (
    <StyledUser>
      <img src="./leo.jpg" alt="Leo photo" />
      <p>Takie Eldeen</p>
    </StyledUser>
  );
}

export default User;
