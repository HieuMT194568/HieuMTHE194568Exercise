import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PizzaCard({ pizza }) {
  return (
    <Card style={{ width: "17rem" }}>
      <Card.Img style={{ height: "300px" }} variant="top" src={pizza.image} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>{pizza.price}$</Card.Text>
        <Button variant="dark">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;
