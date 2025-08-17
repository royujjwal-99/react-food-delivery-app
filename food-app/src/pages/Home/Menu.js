import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import "../../styles/MenuStyle.css";

// Dummy menu items (you can replace with API / backend later)
const menuItems = [
  { id: 1, name: "Margherita Pizza", category: "Pizza", price: "₹199", img: require("../../assets/menu/burger-11.jpg") },
  { id: 2, name: "Cheese Burst Pizza", category: "Pizza", price: "₹299", img: require("../../assets/menu/burger-12.jpg") },
  { id: 3, name: "Veggie Burger", category: "Burger", price: "₹149", img: require("../../assets/menu/burger-13.jpg") },
  { id: 4, name: "Paneer Burger", category: "Burger", price: "₹169", img: require("../../assets/menu/burger-14.jpg") },
  { id: 5, name: "Cold Drink", category: "Drinks", price: "₹49", img: require("../../assets/menu/burger-15.jpg") },
  { id: 6, name: "Chocolate Shake", category: "Drinks", price: "₹99", img: require("../../assets/menu/burger-16.jpg") },
];

const Menu = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Filter + Search Logic
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = filter === "All" || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="menu-section py-5">
      <Container>
        {/* Title */}
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="menu-title">Our Menu</h2>
            <p className="menu-subtitle">
              Explore our delicious pizzas, burgers, and refreshing drinks 🍕🍔🥤
            </p>
          </Col>
        </Row>

        {/* Search + Filter */}
        <Row className="mb-4">
          <Col md={6} className="mb-2">
            <Form.Control
              type="text"
              placeholder="Search for pizza, burger..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Pizza">Pizza</option>
              <option value="Burger">Burger</option>
              <option value="Drinks">Drinks</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Menu Grid */}
        <Row>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <Col md={4} className="mb-4" key={item.id}>
                <Card className="menu-card">
                  <Card.Img variant="top" src={item.img} className="menu-img" />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.price}</Card.Text>
                    <button className="btn btn-warning">Order Now</button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col className="text-center">
              <p className="no-result">No items found 😔</p>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
