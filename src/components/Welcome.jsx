import { Alert, Col, Row } from "react-bootstrap";

const Welcome = () => {
  return (
    <div className="container mt-4 text-center">
      <Row>
        <Col auto>
          <Alert variant="success">Benvenuto sul nostro sito</Alert>
          <h2>Scegli il tuo oggetto preferito</h2>
        </Col>
      </Row>
    </div>
  );
};
export default Welcome;
