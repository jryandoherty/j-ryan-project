import * as React from "react"
import ReactDOM from 'react-dom'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="DEV + DESIGN" />

    <div className="container">

    <h1 style={{marginBottom:`0`}}>DEV + DESIGN</h1>
    <p style={{textAlign:`center`,fontSize:`1.5rem`}}>Affordable design solutions and web development. </p>
    <p style={{textAlign:`center`}}><Link to="#recent-projects"><button class="btn btn-primary" style={{textAlign:`center`,fontSize:`1.5rem`, margin:`2rem`}}>Recent Work &#8681;</button></Link></p>

    <div className="row">
          <div className="col-lg-7" style={{border:`2px solid #524d21`, padding:`30px`, borderRight:`0`}}>
            <h2>For Companies</h2>
            <p>Your business need a website that "pops". Ok, I hate that term. It's meaningless. What you really need is a custom design approach based on research and data-driven analysis.  I offer reasonable hourly pricing and flat rates based on project type.</p>
          </div>
          <div class="col-lg-5" style={{background:`#524d21`, color:`#fff`, padding:`30px`}}>
            <h2>For  Individuals</h2>
              <p>Want to take your side hustle online? Or maybe you've always wanted to have a blog but don't know where to start. Whether you just need a logo or a full website, I can help you get there.</p>
          </div>

            </div>{/* end row */}
<div className="d-flex justify-content-center row">

          <div class="col-lg-4" style={{background:`#fec800`, color:`#111`, padding:`30px`}}>
            <h2>Nonprofits</h2>
              <p>If you have a nonprofit organization with a limited or nonexistent budget, I can offer highly discounted rates and even pro bono work.</p>
          </div>

          <StaticImage
            src="../images/border.png"
            width={380}
            quality={95}
            formats={["auto"]}
            alt="section divider"
            placeholder="blurred"
            style={{display:`flex`,margin:`2rem auto`}}
          />

</div>


      <div class="row" style={{marginTop:`4rem`}} >

      <h2 style={{fontSize:`3rem`, marginBottom:`3rem`, textAlign:`center`}}id="recent-projects">Recent Work</h2>
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

          <div class="col-lg-6" style={{textAlign:`right`}}>
          <StaticImage
            src="../images/outer-space-desktop.png"
            width={580}
            quality={95}
            formats={["auto", "webp"]}
            alt="website desktop"
            placeholder="blurred"
            style={{boxShadow:`2px 1px 1px #333`}}
          />

          </div>
        </div>

<div className="col-lg-12 d-flex justify-content-between align-items-center my-5">
<Link to="/sites/outer-space/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688761893/logos/os-black_huspum.svg"
  style={{ width:`320px`, maxWidth:`100%`}}
alt="outer space logo"

/></Link>


    <StaticImage
      src="../images/phone-home.png"
      width={180}
      quality={95}
      formats={["auto"]}
      alt="website iphone"


    />

    <StaticImage
      src="../images/ipad-home.png"
      width={300}
      quality={95}
      formats={["auto", "webp"]}
      alt="website ipad"
      placeholder="blurred"

    />

    <StaticImage
      src="../images/price-list.jpg"
      width={380}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="pdf price list"
      placeholder="blurred"

    />


  </div>{/* end col-12 */}

  <StaticImage
    src="../images/border.png"
    width={380}
    quality={95}
    formats={["auto"]}
    alt="section divider"
    style={{display:`flex`,margin:`0 auto`}}
  />

<div class="row" style={{marginTop: `4rem`, marginBottom:`4rem`}}>

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
          <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593985/blArtboard_1_y9hh5i.svg" alt="front of pass" style={{width:`100%`, borderRadius:`30px`,marginBottom:`1rem`}} />
    </div>

    <div class="col-lg-4">
          <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593986/blArtboard_2_db76tt.svg" alt="back of pass" style={{width:`100%`, borderRadius:`30px`}} />
    </div>

  </div>{/* end row */}

  <StaticImage
    src="../images/border.png"
    width={380}
    quality={95}
    formats={["auto"]}
    alt="section divider"
    placeholder="blurred"
    style={{display:`flex`,margin:`0 auto`}}
  />

  <div class="row" id="min" style={{marginTop: `4rem`}}>

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
          src="../images/min-desktop.png"
          quality={95}
          formats={["auto", "webp"]}
          alt="min and chula"
          style={{boxShadow:`2px 1px 1px #333`}}
        />

      </div>

    </div>{/* end row */}

<div className="row" style={{marginTop: `2rem`, textAlign:`center`}}>
    <div class="col-lg-4">

      <StaticImage
        src="../images/min-browser-top.png"
        quality={95}
        width={440}
        formats={["auto", "webp"]}
        alt="min and chula"
      />
    </div>
    <div class="col-lg-4">
      <StaticImage
        src="../images/min-browser-mid.png"
        quality={95}
        width={440}
        formats={["auto", "webp"]}
        alt="min and chula"
      />
    </div>
    <div class="col-lg-4">
      <StaticImage
        src="../images/min-browser-bottom.png"
        quality={95}
        width={440}
        formats={["auto", "webp"]}
        alt="min and chula"
      />

      </div>

  </div>{/* end row */}

  <div class="row" style={{marginTop: `2rem`}}>
  <div class="col-lg-6" style={{textAlign:`center`}}>

    <StaticImage
      src="../images/min-ipad.png"
      quality={95}
      formats={["auto", "webp"]}
      alt="min and chula"
      width={400}
    />
  </div>

  <div class="col-lg-6" style={{display:`flex`, alignItems:`center`, justifyContent:`center`, marginTop:`1rem`}}>

    <StaticImage
      src="../images/min-phone.png"
      quality={95}
      formats={["auto", "webp"]}
      alt="min and chula"
      width={220}
    />
  </div>

  </div>{/* end row */}

</div>{/* end container */}


  </Layout>

)

export default IndexPage
