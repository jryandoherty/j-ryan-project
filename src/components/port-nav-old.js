import * as React from "react"

import Nav from 'react-bootstrap/Nav';


import { Link } from "gatsby"


function PortNav() {

  return (

<div class="container-md">
    <Nav variant="pills">
      <Nav.Item>
        <Link to="/portfolio/">websites</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/logos/">branding</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/conversion/">conversion projects</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/print/">print</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/emails/">email marketing</Link>
      </Nav.Item>

    </Nav>
    </div>
  );
}

export default PortNav;
