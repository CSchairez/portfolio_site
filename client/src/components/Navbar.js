import React from "react";
import Nav from 'react-bootstrap/Nav';
import '../App.css';

function Navbar() {
    return (

    <Nav className="navbar" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">HOME</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">ABOUT</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/projects">PROJECTS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/chess">CHESS ME</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">CONTACT</Nav.Link>
      </Nav.Item>

    </Nav>
    );
}
export default Navbar;