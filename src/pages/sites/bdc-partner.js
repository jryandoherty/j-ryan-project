import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from "react-helmet"
import NavBar from "../../components/port-nav"

const BDCPartner = () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        class: "secondary port-sites",
      }}
    />
    <Seo title="Sites :: BDC Partner" />
    <NavBar />

    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-9">
          <div class="legend legend-thumbnails">
            <h3>PROJECT</h3>
            <ul>
              <li>
                <strong>Client:</strong> Business.com
              </li>
              <li>
                <strong>Typefaces:</strong> Abril, Proxima Nova, Titillium
              </li>
              <li>
                <strong>Software:</strong> Illustrator, Photoshop
              </li>
              <li>
                <a
                  href="https://github.com/jryandoherty/bdc_partner"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  Code on Github
                </a>
              </li>
              <li>
                <p class="mt-4">
                  This branded mini-site was created to support Business.com’s
                  partner marketing initiatives. The hero section sets the tone
                  with a bold, customer-focused message — "You need customers.
                  We know how to find them." — layered over a grayscale
                  storefront image with a bright orange gradient overlay. The
                  strong visual contrast immediately draws the eye to the
                  central call-to-action button, "See how."
                </p>

                <p>
                  The overall design balances clarity and urgency, using a
                  modern single-page layout optimized for fast loading and high
                  engagement.
                </p>

                <p>
                  This project demonstrates the use of targeted messaging and
                  clean design to create a professional, results-driven
                  microsite that partners could leverage to connect with B2B
                  audiences and drive lead generation.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* end row */}
    </div>
    {/* end container */}

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 webpage my-5">
          <p>homepage</p>
          <object
            name="frame"
            data="https://epicsea.com/portfolio/2018/partner/home.html"
            aria-label="live page"
          ></object>
          <div class="stand"></div>
          <div class="base"></div>
        </div>
        <div class="col-lg-12 webpage mb-5">
          <p>content page</p>
          <object
            name="frame"
            data="https://epicsea.com/portfolio/2018/partner/leadgen"
            aria-label="live page"
          ></object>
          <div class="stand"></div>
          <div class="base"></div>
        </div>
      </div>
      {/* end row */}

      <div class="container">
        <div class="row">
          <p class="text-center">custom badges</p>
          <div class="col-lg-3 p-4">
            <img
              src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_appointment.svg"
              alt="business"
            />
          </div>

          <div class="col-lg-3 p-4">
            <img
              src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_quote_com.svg"
              alt="badge"
            />
          </div>

          <div class="col-lg-3 p-4">
            <img
              src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_call_connect.svg"
              alt="badge"
            />
          </div>

          <div class="col-lg-3 p-4">
            <img
              src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_featured.svg"
              alt="badge"
            />
          </div>

          <div class="d-none d-lg-block col-lg-3 p-4">
            <img
              src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_optimized.svg"
              alt="badge"
            />
          </div>

          <div class="d-none d-lg-block col-lg-3 p-4">
            <img
              src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_business.svg"
              alt="badge"
            />
          </div>

          <div class="d-none d-lg-block col-lg-3 p-4">
            <img
              src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_mrl.svg"
              alt="badge"
            />
          </div>

          <div class="d-none d-lg-block col-lg-3 p-4">
            <img
              src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_email_marketing.svg"
              alt="badge"
            />
          </div>
        </div>
        {/* end row */}
      </div>
    </div>
    {/* end container */}
  </Layout>
)

export default BDCPartner
