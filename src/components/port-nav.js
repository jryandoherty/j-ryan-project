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
    <div class="container-md mt-3 mb-5 d-flex justify-content-between  align-items-center mobile-nav">
    <div class="portname">websites</div>
    <div class="portname">branding</div>
    <div class="portname">conversion</div>
    <div class="portname">print</div>
    <div class="portname">email marketing</div>
      <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        MORE PROJECTS +
      </Button>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>J. Ryan Doherty Projects</Offcanvas.Title>
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

export default PortNav;
