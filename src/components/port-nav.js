import * as React from "react"
import { useState } from 'react';
import { useRef } from 'react';

import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Nav';

import { Link } from "gatsby"


function PortNav() {
  const [show, setShow] = React.useState();
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Link to="/portfolio/#sites" >websites</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/conversion/#conversion" >conversion</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/emails/#emails">emails</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/print/#brochures">print</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/ads/#ads">ads</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/logos/#logos">logos</Link>
      </Nav.Item>

    </Nav>
  );
}

export default PortNav;
