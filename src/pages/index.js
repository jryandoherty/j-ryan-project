import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import Seo from "../components/seo"
import "../components/portfolio2.scss"


const IndexPage = () => (
  <Layout>
    <Seo title="J. Ryan Doherty :: DEV + DESIGN" />
  
    <div class="container" style={{

      textAlign: `center`,
      fontFamily:`Nova Round, cursive`,
    }}>
  <h1>DEV + DESIGN</h1>

  <p>Web design and development</p>

      <h2>Recent Work</h2>



      <div class="legend col-lg-6">
        <h2>PROJECT</h2>
        <ul>
          <li><strong>Category:</strong> Sites and mini-sites</li>
          <li><strong>Client:</strong> Outer Space</li>
          <li><strong>Date:</strong> 2023</li>
        </ul>
        <p>Website, logo, and promotional materials for the Outer Space, an art gallery based in Concord NH. </p>
      </div>
    <div class="col-lg-12 thumbnails">
    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1688653154/phone-home_gwpywb.png"
      width={200}
      quality={95}
      formats={["auto", "webp"]}
      alt="me"
      style={{ marginBottom: `1.45rem` }}

    />

    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1688653154/ipad-home_qhunn9.png"
      width={400}
      quality={95}
      formats={["auto", "webp"]}
      alt="me"
      style={{ marginBottom: `1.45rem` }}
    />

    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1688653154/price-list_kg1r59.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="me"
      style={{ marginBottom: `1.45rem` }}
    />

  <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688761893/logos/os-black_huspum.svg" alt="mobile" />


  </div>


<div class="row">
  <h3>All access passes</h3>
    <div class="col-lg-4">
          <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593985/blArtboard_1_y9hh5i.svg" alt="mobile" />
    </div>
    <div class="col-lg-4">
          <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593986/blArtboard_2_db76tt.svg" alt="tablet" />
    </div>

  </div>

</div>


  </Layout>

)

export default IndexPage
