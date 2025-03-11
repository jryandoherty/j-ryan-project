import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from 'react-helmet'

import NavBar from "../components/port-nav"
import Bucket from "../components/emails/bucket"
import Cloud from "../components/emails/cloud"
import BDC from "../components/emails/bdc"
import Understory from "../components/emails/understory"

const PortfolioEmail = () => (


  <Layout>
    <Helmet
      bodyAttributes={{
          class: 'secondary port-email'
      }}

      />
    <Seo title="Portfolio: Emails" />

    <NavBar />
    <Understory />
    <Bucket />
    <BDC />
    <Cloud />


  </Layout>

)

export default PortfolioEmail
