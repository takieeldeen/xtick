import styled from "styled-components";

const StyledLogo = styled.img`
  height: 4rem;
`;
function Logo() {
  return <StyledLogo src="./logo.png" alt="Xtick Logo" className="logo" />;
}

export default Logo;
