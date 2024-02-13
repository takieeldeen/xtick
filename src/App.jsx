import styled from "styled-components";
import Home from "./pages/Home.JSX";
import Navbar from "./ui/Navbar";
import toast, { Toaster } from "react-hot-toast";

const AppLayout = styled.div`
  display: grid;
  height: 100dvh;
  min-height: 36rem;
  grid-template-rows: 4rem 1fr;
`;

function App() {
  return (
    <AppLayout>
      <Toaster />
      <Navbar />
      <Home />
      {/* <FlipTimer /> */}
    </AppLayout>
  );
}

export default App;
