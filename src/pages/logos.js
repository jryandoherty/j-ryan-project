import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from 'react-helmet'


import NavBar from "../components/port-nav";
import Logos from "../components/logos"

const PortfolioLogos = () => (


  <Layout>
    <Helmet
      bodyAttributes={{
          class: 'secondary port-logos'
      }}

      />
    <Seo title="Portfolio: Logos" />
    <NavBar />
    <Logos/>

  </Layout>

)

export default PortfolioLogos
