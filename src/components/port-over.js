import * as React from "react"
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { Link } from "gatsby"

function ResponsiveExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div class="container-md">
      <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Launch
      </Button>


      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
        </Offcanvas.Body>
      </Offcanvas>
      </div>
    </>
  );
}

export default ResponsiveExample;
