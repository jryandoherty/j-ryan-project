import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'



const Cloud = () => (

  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary'
    }}
    />
    <Seo title="Email :: Take Documents to the Cloud" />

    <div class="emails-container">

    <div class="emails">
    <div class="desktop">
      <object data="https://master--verdant-kringle-235340.netlify.app/portfolio/2016/emails/may/may12.html">
      </object>
    </div>

    <div class="mobile">
      <object data="https://master--verdant-kringle-235340.netlify.app/portfolio/2016/emails/may/may12.html">
      </object>
    </div>

    </div>
    </div>

  </Layout>
)

export default Cloud
