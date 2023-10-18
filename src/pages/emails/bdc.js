import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'


const BDC = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary'
    }}
    />
    <Seo title="Email :: BDC Question Alert" />

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
