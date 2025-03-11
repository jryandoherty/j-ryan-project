import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="DEV + DESIGN" />
<section>
    <div className="brick d-flex align-items-center mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 new-bio text-start">
          Digital design exists somewhere at the intersection of technology and creativity. That seems easy, but devices and screens are more complicated than they look.
          I can help you navigate this complex world and provide a solution to your digital conundrum.
          </div>

          <p className="mt-3"><Link to="/portfolio" className="btn btn-primary">Portfolio</Link> <Link to="/about" className="btn btn-secondary">Get in touch</Link></p>
          </div>
    </div>
    </div>
</section>
<section>
<div className="container mt-5">
<div class="row">
  <div class="col-lg-3 col-md-4 mb-4 mb-lg-0">
    <Link to="/portfolio" className="btn-alert"><img
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1648573273/thumbs_conversion/hornet_gmpndj.jpg"
      class="w-100 rounded mb-4"
      alt="constructiom conversion page"
    /></Link>

    <img
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1688761893/logos/os-black_huspum.svg"
      class="w-75 shadow-1-strong rounded mb-4"
      alt="outer space arts"
    />
  </div>

  <div class="col-lg-2 mb-4 mb-lg-0">
    <img
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1731006748/grabcad_qqapdf.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="grabcad iphone"
    />
  </div>

  <div class="col-lg-3 mb-4 mb-lg-0">
    <img
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1693249428/partner-page/cta_mjklsl.svg"
      class="w-100 shadow-1-strong rounded mb-5"
      alt="BDC Partner"
    />

    <img
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1648573397/thumbs_email/box_trucks2_c9bife.jpg"
      class="w-100 shadow-1-strong rounded mb-5"
      alt="Box Trucks"
    />

    <img
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1731021732/portArtboard_1_zrfe4a.svg"
      class="w-100 shadow-1-strong rounded"
      alt="Windowz"
    />
  </div>

  <div class="col-lg-2 mb-4 mb-lg-0">
    <img
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1731002044/molecule-gray-n_a00joc.png"
      class="w-100 shadow-1-strong rounded mb-5"
      alt="US Chamber molecule graphic"
    />

    <img
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1729274751/digital_copiers_vddc6b.jpg"

      class="w-100 shadow-1-strong rounded "
      alt="Yosemite National Park"
    />
  </div>

  <div class="col-lg-2 mb-4 mb-lg-0">
    <img
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1727458023/image-2_mkbsso.jpg"
      class="w-100 shadow-1-strong rounded mb-5"
      alt="Waves at Sea"
    />

    <img
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1729274904/vertibid_white_jtribv.svg"
      class="w-100 shadow-1-strong rounded mb-5"
      
      alt="Vertibid"
    />

    <img
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1731004949/logo_panel_fzgbsf.png"
      class="w-100 shadow-1-strong rounded"
      alt="Massachusetts Avian Records"
    />
  </div>
</div>

  </div>{/* end container */}

  </section>

  <section>

    <div className="container">

    <h1 style={{marginBottom:`0`}} >dev + design</h1>
    <p style={{textAlign:`center`,fontSize:`1.5rem`}}>Affordable design solutions and web development. </p>

    <div className="row" style={{marginTop:`5rem`}}>
          <div className="col-lg-7" style={{border:`2px solid #524d21`, padding:`30px`, borderRight:`0`}}>
            <h2>For Companies</h2>
            <p>I'm available for contract, temp and even full-time work. I offer reasonable hourly pricing and flat rates based on project type.</p>
          </div>
          <div className="col-lg-5" style={{background:`#524d21`, color:`#fff`, padding:`30px`}}>
            <h2>For Individuals</h2>
              <p>Want to take your side hustle online? Or maybe you've always wanted to have a blog but don't know where to start. Whether you just need a logo or a full website, I can help you get there.</p>
          </div>

      </div>{/* end row */}

      <div className="d-flex justify-content-center row"  style={{marginBottom:`5rem`}}>
        <div class="col-lg-4" style={{background:`#fec800`, color:`#111`, padding:`30px`}}>
          <h2>Nonprofits</h2>
            <p>If you have a nonprofit organization with a limited or nonexistent budget, I can offer highly discounted rates and even pro bono work.</p>
        </div>
      </div>{/* end row */}


  </div>{/* end container */}
</section>

</Layout>

)

export default IndexPage
