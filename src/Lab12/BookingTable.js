import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function BookingTable() {
  return (
    <>
      <Container className="mt-4">
        <Row className="g-3">
          <Col xs={12} md={4}>
            <Form.Control type="text" placeholder="Enter name" />
          </Col>

          <Col xs={12} md={4}>
            <Form.Control type="text" placeholder="Enter phone" />
          </Col>

          <Col xs={12} md={4}>
            <Form.Control type="text" placeholder="Enter address" />
          </Col>
        </Row>
        <Form.Group
          className="mb-3 mt-4"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control as="textarea" rows={5} placeholder="Leave a message" />
        </Form.Group>
        <Button
          style={{ display: "flex", justifyContent: "flex-start" }}
          variant="warning"
        >
          Send
        </Button>
      </Container>
    </>
  );
}

export default BookingTable;
