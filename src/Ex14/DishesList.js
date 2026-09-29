import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import dishes from './dishes';
import { useCart } from './CartContext';

function DishesList() {
  const { addToCart, totalItems } = useCart();

  return (
    <div>
      <h3>Menu <span className="badge bg-primary">Cart: {totalItems}</span></h3>
      <Row className="g-3">
        {dishes.map((dish) => (
          <Col key={dish.id} xs={12} md={6} lg={3}>
            <Card className="h-100">
              <Card.Img variant="top" src={dish.image} alt={dish.name} style={{ height: 160, objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>
                  {dish.name} {dish.label && <span className="badge bg-danger">{dish.label}</span>}
                </Card.Title>
                <Card.Text className="small">{dish.description}</Card.Text>
                <p className="fw-bold mt-auto">${dish.price}</p>
                <Button onClick={() => addToCart(dish)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default DishesList;
