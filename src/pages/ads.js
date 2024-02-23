import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from 'react-helmet'


import NavBar from "../components/port-nav";
import Ads from "../components/ads"

const PortfolioAds = () => (


  <Layout>
    <Helmet
      bodyAttributes={{
          class: 'secondary port-ads'
      }}

      />
    <Seo title="Portfolio: Ads" />
    <NavBar />
    <Ads/>

  </Layout>

)

export default PortfolioAds
