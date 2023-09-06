import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from 'react-helmet'
import "../components/portfolio2.scss"

import ControlledTabsExample from "../components/tabs"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Portfolio = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary'
    }}
    />
    <Seo title="Portfolio" />
      <ControlledTabsExample/>
  </Layout>

)

export default Portfolio
