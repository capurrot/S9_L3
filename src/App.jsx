import "./App.css";
{
  /* import AllTheBooks from "./components/AllTheBooks"; */
}
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import Booklist from "./components/Booklist";

import fantasy from "./databooks/fantasy.json";
import history from "./databooks/history.json";
import horror from "./databooks/horror.json";
import romance from "./databooks/romance.json";
import scifi from "./databooks/scifi.json";

const books = [...fantasy, ...history, ...horror, ...romance, ...scifi];

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <Booklist books={books} />
      <MyFooter />
    </>
  );
}

export default App;
