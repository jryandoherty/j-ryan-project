import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Websites from "../components/websites"

import Seo from "../components/seo"
import "../components/portfolio2.scss"



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

    <section className="portfolio" id="portfolio">


      <div class="tab-content">

        <div class="scroll tabs nav-tabs" role="tablist" id="myTabs">
            <a href="#sites" class="btn active" aria-controls="sites" role="tab" data-toggle="tab">Sites</a>
            <a href="#conversion" class="btn" aria-controls="conversion" role="tab" data-toggle="tab">Conversion</a>
            <a href="#emails" class="btn" aria-controls="emails" role="tab" data-toggle="tab">Emails</a>
            <a href="#brochures" class="btn" aria-controls="brochures" role="tab" data-toggle="tab">Brochures</a>
            <a href="#ads" class="btn" aria-controls="ads" role="tab" data-toggle="tab">Ads</a>
            <a href="#logos" class="btn" aria-controls="logos" role="tab" data-toggle="tab">Logos</a>
        </div>


      </div>

    

  <Websites/>

    </section>





  </Layout>


)

export default IndexPage
