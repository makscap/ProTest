import "./App.css";
import Container from "./components/Container";
import { BrowserRouter } from "react-router-dom";
import Statefull from "./components/Statefull";

function App() {
  return (
    <Container>
      <BrowserRouter>
            <Statefull />
      </BrowserRouter>
    </Container>
  );
}

export default App;
