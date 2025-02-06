import { Alert, Col, Container, Form, FormSelect, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

import { Component } from "react";

class Booklist extends Component {
  state = {
    categorySelected: "fantasy",
    searchWords: "",
  };
  render() {
    const filteredBooks = this.props.books.filter(
      (book) =>
        book.category === this.state.categorySelected && book.title.toLocaleLowerCase().includes(this.state.searchWords)
    );
    return (
      <Container>
        <Row>
          <Col auto>
            <FormSelect
              className="mt-5 mb-1"
              onChange={(e) => this.setState({ categorySelected: e.target.value.toLocaleLowerCase() })}
            >
              <option>Fantasy</option>
              <option>History</option>
              <option>Horror</option>
              <option>Romance</option>
              <option>Scifi</option>
            </FormSelect>
          </Col>
        </Row>
        <Row>
          <Col auto>
            <Form.Control
              type="text"
              placeholder="Cerca il titolo di un libro"
              className="mb-5 mr-sm-2"
              onChange={(e) => this.setState({ searchWords: e.target.value.toLocaleLowerCase() })}
            />
          </Col>
        </Row>
        <Row>
          {filteredBooks.map((book) => (
            <Col xs={6} md={4} xl={3} key={book.asin}>
              <SingleBook img={book.img} title={book.title} price={book.price} />
            </Col>
          ))}
          {filteredBooks.length === 0 && (
            <Col auto>
              <Alert variant="danger" className="mb-5">
                Nessun Libro con ricerca {'"' + this.state.searchWords + '"'} trovato
              </Alert>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

export default Booklist;
