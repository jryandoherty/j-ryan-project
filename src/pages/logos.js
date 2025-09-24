import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from 'react-helmet'


import NavBar from "../components/port-nav";
import Logos from "../components/logos"

const PortfolioLogos = () => (


  <Layout>
    <Helmet
      bodyAttributes={{
          class: 'secondary port-logos'
      }}

      />
    <Seo title="Projects: Branding" />
    <NavBar />
    <div class="container my-5">
      <div class="col-lg-8">
       Branding is more than just a logo: it's the complete visual system that gives your brand a recognizable presence online. From typefaces and color palettes to icons, motion, and layouts, every element is designed to work seamlessly across websites, apps, and digital campaigns. The result is a cohesive identity that feels professional, consistent, and memorable wherever people encounter your brand.
      </div>
    </div>
    <Logos/>

  </Layout>

)

export default PortfolioLogos
