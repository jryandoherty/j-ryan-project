import * as React from "react"
import { Link } from "gatsby"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import { useHistory } from "react-router-dom";


const handleSubmit = () => {
  console.log("doing something");
  var triggerEl = document.querySelector('#myTab button[data-bs-target="#profile"]').Tab.getInstance(triggerEl).show()
  window.open("/portfolio", "_blank");
}

const goTab = () => {
  var triggerEl = document.querySelector('#myTab button[data-bs-target="#profile"]').Tab.getInstance(triggerEl).show()

  var triggerFirstTabEl = document.querySelector('#myTab li:first-child button').Tab.getInstance(triggerFirstTabEl).show()

}


const BDC = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary'
    }}
    />
    <Seo title="Email :: BDC Question Alert" />


<div class="container">

<div class="row justify-content-md-center">
  <div class="col-lg-6">
    <div class="legend text-center">
      <h3>PROJECT</h3>
      <ul>
        <li><strong>Client:</strong> Business.com</li>

      </ul>
        <p>Customer-facing emails for Business.com's expert platform.</p>
    </div>
  </div>

  </div>

 </div>

    <div class="emails-container">

      <div class="emails">
        <div class="desktop">
          <object data="https://master--verdant-kringle-235340.netlify.app/portfolio/2017/emails_bdc/template_Nov.html" aria-label="live email">
          </object>
        </div>

        <div class="mobile">
          <object data="https://master--verdant-kringle-235340.netlify.app//portfolio/2017/emails_bdc/template_Nov.html" aria-label="live email">
          </object>
        </div>

      </div>
    </div>

  </Layout>
)

export default BDC
