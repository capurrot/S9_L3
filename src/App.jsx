import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
{
  /* import AllTheBooks from "./components/AllTheBooks"; */
}
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

import fantasy from "./databooks/fantasy.json";
import SingleBook from "./components/SingleBook";

const books = [...fantasy];
console.log(books);

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <Container>
        <Row>
          {books.map((book) => (
            <Col key={books.asin} md={3}>
              <SingleBook img={book.img} title={book.title} price={book.price} />
            </Col>
          ))}
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
