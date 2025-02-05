import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card style={this.state.selected ? { border: "2px solid red" } : {}}>
        <Card.Img
          onClick={() => {
            this.setState({ selected: true });
          }}
          variant="top"
          src={this.props.img}
          style={{ maxWidth: "200px", marginInline: "auto" }}
          className="p-2"
        />
        <Card.Body>
          <Card.Title className="d-flex align-items-center" style={{ height: "150px" }}>
            {this.props.title}
          </Card.Title>
          <Card.Text>Prezzo: {this.props.price} €</Card.Text>
          <Button variant="warning">Acquista</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
