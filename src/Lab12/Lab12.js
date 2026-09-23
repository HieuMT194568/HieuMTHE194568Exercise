import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import Banner from "./Banner";
import PizzaCard from "./Body";
import BookingTable from "./BookingTable";
import "./Lab12.css";

function Lab12() {
  const pizza = [
    { id: 1, name: "Margherita", price: 10, image: "/image/Margherita.jpg" },
    { id: 2, name: "Pepperoni", price: 12, image: "/image/Pepperoni.jpg" },
    { id: 3, name: "Hawaiian", price: 11, image: "/image/Hawaiian.avif" },
    { id: 4, name: "Mozzarella", price: 15, image: "/image/Mozzarella.jpg" },
  ];
  return (
    <div className="lab12">
      <NavBar />
      <Banner />
      <h1>Our menu</h1>
      <Container className="mt-4">
        <Row className="g-10">
          {pizza.map((pizza) => (
            <Col key={pizza.id} xs={12} md={3}>
              <PizzaCard pizza={pizza} />
            </Col>
          ))}
        </Row>
      </Container>
      <BookingTable />
    </div>
  );
}

export default Lab12;
