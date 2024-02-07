import styled from "styled-components";
import Home from "./pages/Home.JSX";
import Navbar from "./ui/Navbar";

const AppLayout = styled.div`
  display: grid;
  height: 100dvh;
  min-height: 36rem;
  grid-template-rows: 4rem 1fr;
`;

function App() {
  return (
    <AppLayout>
      <Navbar />
      <Home />
      {/* <FlipTimer /> */}
    </AppLayout>
  );
}

export default App;
