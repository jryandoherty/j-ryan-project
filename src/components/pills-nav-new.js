import * as React from "react"
import { useState } from 'react';
import { useRef } from 'react';

import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Nav';

import { Link } from "gatsby"


function PillsExample() {
  const [show, setShow] = React.useState();
  return (
    <Nav variant="pills">
      <Nav.Item>
        <button onClick={() => setShow(true)}>websites</button>
      </Nav.Item>
      <Nav.Item className={`nav ${show ? "brick" : ""}`}>
        <Link to="/conversion" >conversion</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/emails/#emails" onClick={() => setShow(true)}>emails</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/prints">print</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/emails">ads</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/emails">logos</Link>
      </Nav.Item>

    </Nav>
  );
}

export default PillsExample;
