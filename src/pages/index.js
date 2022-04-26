import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="J. Ryan Doherty :: DEV + DESIGN" />
    <h1>Hi MEEPle</h1>
    <h2>ZEET</h2>
    <p>WeHOWour new Gatsby site.</p>
    <p>Now go build something great.</p>this
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="me"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/portfolio/">Portfolio</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
