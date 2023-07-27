import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import Seo from "../components/seo"
import "../components/portfolio2.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="DEV + DESIGN" />

    <div className="container">

    <h1 style={{textAlign:`center`,fontSize:`4rem`}}>DEV + DESIGN</h1>
    <p style={{textAlign:`center`,fontSize:`1.5rem`}}>Affordable design solutions and web development. </p>
    <p style={{textAlign:`center`,fontSize:`1.1rem`}}><Link to="#recent-projects">Recent Work</Link></p>

    <div class="row">
          <div class="col-md-4 p-4">
            <h2><span class="glyphicon glyphicon-briefcase"></span>Companies</h2>
            <p>Your business need a website that "pops". Ok, I hate that term. It's meaningless. What you really need is a custom design approach based on research and data-driven analysis.  I offer reasonable hourly pricing and flat rates based on project type.</p>
          </div>
          <div class="col-md-4 p-4">
            <h2><span class="glyphicon glyphicon-user"></span>Individuals</h2>
              <p>Want to take your side hustle online? Or maybe you've always wanted to have a blog but don't know where to start. Whether you just need a logo or a full website, I can help you get there.</p>
          </div>
          <div class="col-md-4 p-4">
            <h2><span class="glyphicon glyphicon-education"></span>Nonprofits</h2>
              <p>If you have a nonprofit organization with a limited or nonexistent budget, I can offer highly discounted rates and even pro bono work.</p>
          </div>
      </div>{/* end row */}

      <h2 style={{textAlign:`center`,fontSize:`3rem`}} id="recent-projects">Recent Work</h2>
      <div class="row" style={{marginTop:`6rem`}}>
          <div class="col-lg-6">
            <h3>PROJECT</h3>
              <ul>
                <li><strong>Website & Branding</strong></li>
                <li><strong>Client:</strong> Outer Space</li>
                <li><strong>Date:</strong> April 2023</li>
                <li><strong>Platform:</strong> <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap 5.3</a></li>
                <li><a href="https://outerspacearts.xyz" target="_blank" rel="noreferrer">Website</a></li>
              </ul>
            <p>Website, logo, and promotional materials for Outer Space, an art gallery based in Concord NH. </p>
          </div>

          <div class="col-lg-6" style={{textAlign:`center`}}>
              <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688761893/logos/os-black_huspum.svg"
                style={{ marginBottom: `1.45rem`, marginRight:`1rem`, maxWidth: `90%`}}
              alt="outer space logo"
              />

          </div>
        </div>

<div class="col-lg-12 recent-images">

    <StaticImage
      src="../images/outer-space-desktop.png"
      width={580}
      quality={95}
      formats={["auto", "webp"]}
      alt="website desktop"
      placeholder="blurred"
      style={{boxShadow:`2px 1px 1px #333`}}
    />

    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1688653154/phone-home_gwpywb.png"
      width={180}
      quality={95}
      formats={["auto", "webp"]}
      alt="website iphone"
      placeholder="blurred"
    />

    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1688653154/ipad-home_qhunn9.png"
      width={400}
      quality={95}
      formats={["auto", "webp"]}
      alt="website ipad"
      placeholder="blurred"
    />

    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1688653154/price-list_kg1r59.jpg"
      width={580}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="pdf price list"
      placeholder="blurred"
    />

    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1689353067/instagram_oroxn5.jpg"
      width={380}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="instagram post"
      placeholder="blurred"
    />

  </div>{/* end col-12 */}


<div class="row" style={{marginTop: `8rem`}}>

    <div class="col-lg-4">
      <h3>PROJECT</h3>
      <ul>
        <li><strong>All access passes</strong></li>
        <li><strong>Client:</strong> II IIII Productions</li>
        <li><strong>Date:</strong> May 2023</li>
      </ul>
      <p>All access two-sided passes for the Grippo Funk Band performance of 5/27/23. Printed by <a href="https://www.accesseventsolutions.com/">Access Event Solutions</a></p>
    </div>

    <div class="col-lg-4">
        <p>front</p>
          <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593985/blArtboard_1_y9hh5i.svg" alt="front of pass" style={{borderRadius:`30px`}} />
    </div>

    <div class="col-lg-4">
          <p>back</p>
          <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593986/blArtboard_2_db76tt.svg" alt="back of pass" style={{borderRadius:`30px`}} />

    </div>

  </div>{/* end row */}


  <div class="row" style={{marginTop: `8rem`}}>

      <div class="col-lg-4">
        <h3>PROJECT</h3>
        <ul>
          <li><strong>Website</strong></li>
          <li><strong>Client:</strong> Min and the Dancing Cactus</li>
          <li><strong>Date:</strong> March 2023</li>
          <li><strong>Platform:</strong> <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby Cloud</a></li>
          <li><a href="https://minandchula.com" target="_blank" rel="noreferrer">Website</a></li>
        </ul>
        <p>Website for the children's book Min and the Dancing Cactus by Nahyon Lee and Marshall Illif. Illustrated by Lucy Shin.</p>
      </div>

      <div class="col-lg-8">

        <StaticImage
          src="https://res.cloudinary.com/jryandoherty/image/upload/v1689555178/min-desktop_zhqhse.png"
          quality={95}
          formats={["auto", "webp"]}
          alt="min and chula"
          placeholder="blurred"
          style={{boxShadow:`2px 1px 1px #333`}}
        />

      </div>



    </div>{/* end row */}

<div className="row" style={{marginTop: `4rem`}}>
    <div class="col-lg-4">

      <StaticImage
        src="https://res.cloudinary.com/jryandoherty/image/upload/v1689642668/min-browser-top_ps0joe.png"
        quality={95}
        width={440}
        formats={["auto", "webp"]}
        alt="min and chula"
        placeholder="blurred"

      />
    </div>
    <div class="col-lg-4">
      <StaticImage
        src="https://res.cloudinary.com/jryandoherty/image/upload/v1689642667/min-browser-mid_lsbqk0.png"
        quality={95}
        width={440}
        formats={["auto", "webp"]}
        alt="min and chula"
        placeholder="blurred"

      />
    </div>
    <div class="col-lg-4">
      <StaticImage
        src="https://res.cloudinary.com/jryandoherty/image/upload/v1689642663/min-browser-bottom_tzb5hy.png"
        quality={95}
        width={440}
        formats={["auto", "webp"]}
        alt="min and chula"
        placeholder="blurred"

      />

      </div>

  </div>{/* end row */}

  <div class="row" style={{marginTop: `4rem`}}>
  <div class="col-lg-6" style={{textAlign:`center`}}>

    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1689556633/min-ipad_vhhyja.png"
      quality={95}
      formats={["auto", "webp"]}
      alt="min and chula"
      placeholder="blurred"
      width={400}

    />
  </div>

  <div class="col-lg-6" style={{display:`flex`, alignItems:`center`, justifyContent:`center`}}>

    <StaticImage
      src="../images/min-phone.png"
      quality={95}
      formats={["auto", "webp"]}
      alt="min and chula"
      placeholder="blurred"
      width={220}

    />
  </div>

  </div>

</div>{/* end container */}


  </Layout>

)

export default IndexPage
