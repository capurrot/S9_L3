import { Container } from "react-bootstrap";
import "./App.css";
{
  /* import AllTheBooks from "./components/AllTheBooks"; */
}
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import Booklist from "./components/Booklist";

import fantasy from "./databooks/fantasy.json";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <Container>
        <Booklist books={fantasy} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
