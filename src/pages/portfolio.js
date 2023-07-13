import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState } from 'react';
import ControlledTabsExample from "../components/tabs"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Portfolio = () => (
  <Layout>
    <Seo title="Portfolio yes" />
      <ControlledTabsExample/>
  </Layout>
)

export default Portfolio
