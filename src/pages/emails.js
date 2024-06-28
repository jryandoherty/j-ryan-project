import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from 'react-helmet'


import NavBar from "../components/port-nav";
import Email from "../components/email"
import Bucket from "../components/emails/bucket"

const PortfolioEmail = () => (


  <Layout>
    <Helmet
      bodyAttributes={{
          class: 'secondary port-email'
      }}

      />
    <Seo title="Portfolio: Emails" />
    <NavBar setKey="link-1"/>
    <Email/>
      <Bucket/>

  </Layout>

)

export default PortfolioEmail
