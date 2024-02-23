import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from 'react-helmet'


import NavBar from "../components/port-nav";
import Print from "../components/print"

const PortfolioPrint = () => (


  <Layout>
    <Helmet
      bodyAttributes={{
          class: 'secondary port-print'
      }}

      />
    <Seo title="Portfolio: Print" />
    <NavBar />
    <Print/>

  </Layout>

)

export default PortfolioPrint
