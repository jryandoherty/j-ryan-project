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
          <div className="col-lg-5" style={{background:`#524d21`, color:`#fff`, padding:`30px`}}>
            <h2>For  Individuals</h2>
              <p>Want to take your side hustle online? Or maybe you've always wanted to have a blog but don't know where to start. Whether you just need a logo or a full website, I can help you get there.</p>
          </div>

            </div>{/* end row */}
      <div className="d-flex justify-content-center row">
                <div class="col-lg-4" style={{background:`#fec800`, color:`#111`, padding:`30px`}}>
                  <h2>Nonprofits</h2>
                    <p>If you have a nonprofit organization with a limited or nonexistent budget, I can offer highly discounted rates and even pro bono work.</p>
                </div>
      </div>


      <div className="row" style={{marginTop:`6rem`}} >

      <h2 style={{fontSize:`3rem`, marginBottom:`6rem`, textAlign:`center`}}id="recent-projects">Recent Work</h2>
          <div className="col-lg-6">
            <h3>PROJECT</h3>
              <ul>
                <li><strong>Client:</strong> Windowz by Liberty</li>
                <li><strong>Date:</strong> July 2023</li>
                <li><strong>Platform:</strong> Wordpress</li>
                <li><a href="https://windowzbyliberty.com" target="_blank" rel="noreferrer">Website</a></li>
              </ul>
            <p>Website and logo for Brighton artist David Liberty.</p>
          </div>

          <div className="col-lg-6 recent-work-home">
          <Link to="/sites/windowz/"><StaticImage
            src="../images/windowz-home.png"
            width={580}
            quality={95}
            formats={["auto", "webp"]}
            alt="website desktop"
            placeholder="blurred"

          /></Link>

          </div>
        </div>

<div className="col-lg-12 d-flex justify-content-between align-items-center my-5 recent-work">

  <Link to="/sites/windowz/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1692984539/windowz-black_bwspvs.svg"
    style={{ width:`320px`, maxWidth:`100%`}}
    alt="outer space logo"

  /></Link>


    <Link to="/sites/windowz/"><StaticImage
      src="../images/windowz-hub.png"
      width={380}
      quality={95}
      formats={["auto", "webp"]}
      alt="website ipad"
      placeholder="blurred"

    /></Link>

    <Link to="/sites/windowz/"><StaticImage
      src="../images/windowz-product.png"
      width={380}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="pdf price list"
      placeholder="blurred"

    /></Link>

  </div>{/* end col-12 */}

  <StaticImage
    src="../images/border.png"
    width={380}
    quality={95}
    formats={["auto"]}
    alt="section divider"
    style={{display:`flex`,margin:`6rem auto`}}
  />

  <div className="row" style={{marginTop:`4rem`}} >
      <div className="col-lg-6">
        <h3>PROJECT</h3>
          <ul>
            <li><strong>Client:</strong> Outer Space</li>
            <li><strong>Date:</strong> April 2023</li>
            <li><strong>Platform:</strong> <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap 5.3</a></li>
            <li><a href="https://outerspacearts.xyz" target="_blank" rel="noreferrer">Website</a></li>
          </ul>
        <p>Website, logo, and promotional materials for Outer Space, an art gallery based in Concord NH. </p>
      </div>

      <div className="col-lg-6 recent-work-home">
        <Link to="/sites/outer-space/"><StaticImage
          src="../images/outer-space-desktop.png"
          width={580}
          quality={95}
          formats={["auto", "webp"]}
          alt="website desktop"
          placeholder="blurred"
          style={{boxShadow:`2px 1px 1px #333`}}
        /></Link>

      </div>
    </div>{/* end row */}

  <div className="col-lg-12 d-flex justify-content-between align-items-center my-5 recent-work">

  <Link to="/sites/outer-space/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688761893/logos/os-black_huspum.svg"
  style={{ width:`320px`, maxWidth:`100%`}}
  alt="outer space logo"/></Link>

  <Link to="/sites/outer-space/"><StaticImage
    src="../images/ipad-home.png"
    width={300}
    quality={95}
    formats={["auto", "webp"]}
    alt="website ipad"
    placeholder="blurred"

  /></Link>

  <Link to="/sites/outer-space/"><StaticImage
    src="../images/price-list.jpg"
    width={380}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt="pdf price list"
    style={{boxShadow:`2px 1px 1px #333`}}
    placeholder="blurred"

  /></Link>


  </div>{/* end col-12 */}

  <StaticImage
  src="../images/border.png"
  width={380}
  quality={95}
  formats={["auto"]}
  alt="section divider"
  style={{display:`flex`,margin:`6rem auto`}}
  />

  <div className="row" style={{marginTop: `4rem`, marginBottom:`4rem`}}>

      <div class="col-lg-4">
        <h3>PROJECT</h3>
        <ul>
          <li><strong>All access passes</strong></li>
          <li><strong>Client:</strong> II IIII Productions</li>
          <li><strong>Date:</strong> May 2023</li>
        </ul>
        <p>All access two-sided passes for the Grippo Funk Band performance of 5/27/23. Printed by <a href="https://www.accesseventsolutions.com/">Access Event Solutions</a></p>
      </div>

      <div className="col-lg-4">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593985/blArtboard_1_y9hh5i.svg" alt="front of pass" style={{width:`100%`, borderRadius:`30px`,marginBottom:`1rem`}} />
      </div>

      <div className="col-lg-4">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593986/blArtboard_2_db76tt.svg" alt="back of pass" style={{width:`100%`, borderRadius:`30px`}} />
      </div>

    </div>{/* end row */}

  </div>{/* end container */}


  </Layout>

)

export default IndexPage
