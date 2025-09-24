import * as React from "react"
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { Link } from "gatsby"


function PortNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div class="container-md mt-3 mb-lg-5 d-flex justify-content-between align-items-center flex-column-reverse flex-md-row mobile-nav">
    <h3 class="portname">websites</h3>
    <h3 class="portname">branding</h3>
    <h3 class="portname">conversion</h3>
    <h3 class="portname">print</h3>
    <h3 class="portname">email marketing</h3>
      <Button variant="primary" className="d-lg-none mb-4 mb-md-0" onClick={handleShow} aria-label="more projects">
        MORE PROJECTS +
      </Button>

      <Offcanvas show={show} onHide={handleClose} responsive="lg" aria-label="mobile menu">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>J. Ryan Doherty Projects</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav variant="pills" aria-label="projects menu">
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

export default PortNav;
