import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const Booklist = (props) => {
  return (
    <Row>
      {props.books.map((book) => (
        <Col key={book.asin} md={3}>
          <SingleBook img={book.img} title={book.title} price={book.price} />
        </Col>
      ))}
    </Row>
  );
};
export default Booklist;
