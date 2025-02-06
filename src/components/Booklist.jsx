import { Alert, Col, Container, Form, FormSelect, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

import { Component } from "react";

class Booklist extends Component {
  state = {
    categorySelected: "fantasy",
    searchWords: "",
  };
  render() {
    return (
      <Container>
        <Row>
          <FormSelect className="mt-5 mb-1" onChange={(e) => this.setState({ categorySelected: e.target.value })}>
            <option value={"fantasy"}>Fantasy</option>
            <option value={"history"}>History</option>
            <option value={"horror"}>Horror</option>
            <option value={"romance"}>Romance</option>
            <option value={"scifi"}>Scifi</option>
          </FormSelect>
        </Row>
        <Row>
          <Form.Control
            type="text"
            placeholder="Cerca il titolo di un libro"
            className="mb-5 mr-sm-2"
            onChange={(e) => this.setState({ searchWords: e.target.value.toLocaleLowerCase() })}
          />
        </Row>
        <Row>
          {this.props.books
            .filter(
              (book) =>
                book.category === this.state.categorySelected &&
                book.title.toLocaleLowerCase().includes(this.state.searchWords)
            )
            .map((book) => (
              <Col xs={6} md={4} xl={3} key={book.asin}>
                <SingleBook img={book.img} title={book.title} price={book.price} />
              </Col>
            ))}
          {this.props.books.filter(
            (book) =>
              book.category === this.state.categorySelected &&
              book.title.toLocaleLowerCase().includes(this.state.searchWords)
          ).length === 0 && (
            <Alert variant="danger" className="mb-5">
              Nessun Libro trovato
            </Alert>
          )}
        </Row>
      </Container>
    );
  }
}

export default Booklist;
