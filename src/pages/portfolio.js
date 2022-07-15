import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


const Portfolio = () => (
  <Layout>
    <Seo title="Portfolio" />
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Portfolio
