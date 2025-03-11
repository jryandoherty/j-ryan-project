import * as React from "react"

import Nav from 'react-bootstrap/Nav';

import { Link } from "gatsby"


function PortNav() {
  const [show, setShow] = React.useState();
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Link to="/portfolio/">websites</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/conversion/">conversion</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/print/">print</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/emails/">email marketing</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/ads/">ads</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/logos/">logos</Link>
      </Nav.Item>
    </Nav>
  );
}

export default PortNav;
