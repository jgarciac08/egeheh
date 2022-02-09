import React from 'react';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';
import './header.css';
import { MenuItems } from '../data/MenuItems';
import { Link } from 'react-router-dom';

class BarraNavegacion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            {MenuItems.map((item) => {
                return (
                  <Nav.Link as={Link} to={item.path}>
                    {item.title}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default BarraNavegacion;
