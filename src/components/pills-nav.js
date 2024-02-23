import * as React from "react"
import { useState } from 'react';
import { useRef } from 'react';

import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Nav';

import { Link } from "gatsby"


const PillsNav = () => {
const [key, setKey] = useState('link-1');
  return (
    <>
      <NavBar
        className="nav-pills"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        variant="pills"
      >
        <Nav.Item>
          <Link eventKey="home" to="/portfolio">Default</Link>
        </Nav.Item>
        <Nav.Item>
          <Link eventKey="link-1" to="/emails">Link 1</Link>

        </Nav.Item>
        <Nav.Item>
          <Link eventKey="link-2">Link 2</Link>
        </Nav.Item>
        <Nav.Item>
          <Link eventKey="link-3" >
            Disabled
          </Link>
        </Nav.Item>
      </NavBar>
    </>
  );
}
export default PillsNav
