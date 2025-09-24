import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from 'react-helmet'

import NavBar from "../components/port-nav";
import Conversion from "../components/conversion"

const PortfolioCon = () => (


  <Layout>
    <Helmet
      bodyAttributes={{
          class: 'secondary port-conversion'
      }}

      />
    <Seo title="Portfolio: Conversion Projects" />


    <NavBar />

    <div class="container my-5">
      <div class="col-lg-8">
    A conversion funnel is the step-by-step journey a visitor takes from first discovering a website to becoming a lead or paying client. The funnel is intentionally designed to guide prospects smoothly toward taking action (like scheduling a consultation, requesting a quote, or signing a contract).
      </div>
    </div>

    <Conversion/>

  </Layout>

)

export default PortfolioCon
