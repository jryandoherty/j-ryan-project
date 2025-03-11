import React from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Seo from "../components/seo"

function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/portfolio/">
        Portfolio
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{document.title}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;
