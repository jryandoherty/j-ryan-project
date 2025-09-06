import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from 'react-helmet'

import NavBar from "../components/port-nav";

import Websites from "../components/websites"


const Portfolio = () => (

  <Layout>

  <Helmet
    bodyAttributes={{
        class: 'secondary port-sites'
    }}
    />

  <Seo title="Portfolio" />

  <NavBar />

  <Websites  />

  </Layout>

)

export default Portfolio
