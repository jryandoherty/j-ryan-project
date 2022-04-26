import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Stickers from "../components/stickers"

const Portfolio = () => (
  <Layout>
    <Seo title="Portfolio" />
    <section className="brick">

    <div className="container-fluid">
        <div className="col-lg-6 intro">
            <h1>j. ryan doherty</h1>
            <h2>designer & developer</h2>
        </div>

        <div className="col-lg-6">
<Stickers></Stickers>
        </div>
    </div>

    </section>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Portfolio
