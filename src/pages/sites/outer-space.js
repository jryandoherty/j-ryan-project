import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from "react-helmet"
import NavBar from "../../components/port-nav"

const OuterSpace = () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        class: "secondary port-sites",
      }}
    />
    <Seo title="Sites :: Outer Space Gallery" />
    <NavBar />

    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="legend">
            <h3>PROJECT</h3>
            <ul>
              <li>
                <strong>Client:</strong> Outer Space Arts, LLC
              </li>
              <li>
                <strong>Technology:</strong> Bootstrap 5.3 and Gulp
              </li>
              <li>
                <strong>Typefaces:</strong> BDR Mono and Bookmainia
              </li>
              <li>
                <a
                  href="https://github.com/jryandoherty/outerspacearts"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code on GitHub
                </a>
              </li>
            </ul>
            <p class="mt-4">
              Led the full brand rollout for a new business. Starting with
              designing the logo, I built the website, signage, and print
              collateral while providing creative direction and cohesive
              branding for each gallery exhibition, ensuring a consistent and
              memorable visual identity.
            </p>
          </div>
          {/* end legend */}
        </div>
        {/* end left column */}

        <div class="col-lg-6 text-center text-lg-end mt-5 mt-lg-0">
          <img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1755016912/outer-space-arts/galleryAsset_1_ggftpn.svg"
            alt="Logo for an a gallery named Outer Space"
            class="w-50"
          />
        </div>
      </div>
      {/* end row */}
    </div>
    {/* end container */}

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 webpage my-5">
          <p class="text-center text-lg-start">website</p>
          <object
            name="frame"
            data="https://outerspacearts.xyz"
            aria-label="live page"
          ></object>
          <div class="stand"></div>
          <div class="base"></div>
        </div>
      </div>
      {/* end row */}

      <div class="row mt-5">
        <p class="text-center">stickers</p>
        <div class="col-lg-6 text-center mb-4 mb-lg-0">
          <img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1688761893/logos/os-black_huspum.svg"
            style={{ width: `80%` }}
            alt="sticker Logo for a gallery called Outer Space"
          />
        </div>

        <div class="col-lg-6 text-center">
          <img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1688761893/logos/os-white_e1w0dn.svg"
            style={{ width: `80%` }}
            alt="sticker Logo for a gallery called Outer Space"
          />
        </div>
      </div>
      {/* end row */}

      <div class="row mt-5">
        <p class="text-center">outdoor sign</p>
        <div class="col-lg-12 text-center">
          <img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1750265854/outer-space-arts/yard-sign-new-5_fl8gih.png"
            style={{ width: `60%`, border: `2px solid #fff` }}
            alt="sign for an art gallery called Outer Space"
          />
        </div>
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </Layout>
)

export default OuterSpace
