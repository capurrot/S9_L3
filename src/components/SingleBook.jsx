import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card className="mb-4" style={this.state.selected ? { border: "2px solid red" } : {}}>
        <Card.Img
          onClick={() => {
            this.state.selected ? this.setState({ selected: false }) : this.setState({ selected: true });
          }}
          variant="top"
          src={this.props.img}
          style={{ aspectRatio: "9/13", marginInline: "auto", cursor: "pointer" }}
          className="p-2"
        />
        <Card.Body>
          <Card.Title className="d-flex align-items-center" style={{ height: "80px" }}>
            {this.props.title}
          </Card.Title>
          <Card.Text>
            Prezzo: <span className="badge bg-dark rounded-pill">{this.props.price} €</span>
          </Card.Text>
          <Button variant="warning">Aggiungi al carrello</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
