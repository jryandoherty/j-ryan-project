import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'



const Office = () => (

  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary'
    }}
    />
    <Seo title="Email :: Setting Your Office Up For Success" />

    <div class="container">

    <div class="row justify-content-md-center">
      <div class="col-lg-6">
        <div class="legend text-center">
          <h3>PROJECT</h3>
          <ul>
            <li><strong>Client:</strong> Buyerzone.com</li>

          </ul>
            <p>Promotional email for customers looking for price quotes on office cubicles.</p>
        </div>
      </div>

      </div>

     </div>
    <div class="emails-container">

      <div class="emails">
        <div class="desktop">
          <object data="https://master--verdant-kringle-235340.netlify.app/portfolio/2015/emails/dec/dec_10.html">
          </object>
        </div>

        <div class="mobile">
          <object data="https://master--verdant-kringle-235340.netlify.app/portfolio/2015/emails/dec/dec_10.html">
          </object>
        </div>
      </div>
    </div>

  </Layout>
)

export default Office
