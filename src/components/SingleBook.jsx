import { Button, Card } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.img} style={{ maxWidth: "200px", marginInline: "auto" }} className="p-2" />
      <Card.Body>
        <Card.Title className="d-flex align-items-center" style={{ height: "150px" }}>
          {props.title}
        </Card.Title>
        <Card.Text>Prezzo: {props.price} €</Card.Text>
        <Button variant="warning">Acquista</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
