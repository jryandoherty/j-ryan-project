import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import Seo from "../components/seo"
import "../components/portfolio2.scss"
import ControlledTabsExample from "../components/tabs"



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

    <div class="container">
      <h2>Recent Work</h2>


    <div class="col-lg-12">
    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1688653154/ipad-home_qhunn9.png"
      width={400}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="me"
      style={{ marginBottom: `1.45rem` }}
    />
      <img src="/portfolio/2023/outerspace/phone-home.png" alt="mobile" />
      <img src="/portfolio/2023/outerspace/ipad-home.png" alt="tablet" />
      <img src="/portfolio/2023/outerspace/instagram.jpg" alt="instragram" />
      <img src="/portfolio/2023/outerspace/os-black.svg" alt="logo" />
      <img src="/portfolio/2023/outerspace/price-list.jpg" alt="pdf" />
    </div>

    </div>


    <p>
      <Link to="/portfolio/">Portfolio</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>



  </Layout>


)

export default IndexPage
