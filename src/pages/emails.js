import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from 'react-helmet'

import NavBar from "../components/port-nav"
import Bucket from "../components/emails/bucket"
import Cloud from "../components/emails/cloud"
import BDC from "../components/emails/bdc"
import Understory from "../components/emails/understory"
import CE from "../components/emails/ce"

const PortfolioEmail = () => (


  <Layout>
    <Helmet
      bodyAttributes={{
          class: 'secondary port-email'
      }}

      />
    <Seo title="Portfolio: Emails" />

    <NavBar />
    <div class="container">Email marketing is all about building relationships through the inbox. It’s a way for businesses, organizations, or creatives to stay connected with their audience by sending helpful updates, special offers, or inspiring stories directly to their subscribers. Instead of being a one-size-fits-all advertisement, good email marketing feels more like a conversation—it’s personal, timely, and tailored to what the recipient actually cares about. Done right, it’s one of the most cost-effective and authentic ways to nurture trust and grow a community.</div>
    <CE />
    <Understory />
    <Bucket />
    <BDC />

  </Layout>

)

export default PortfolioEmail
