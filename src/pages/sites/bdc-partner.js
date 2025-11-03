import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav"

const BDCPartner = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-sites'
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
                <li><strong>Client:</strong> Business.com</li>
                <li><strong>Date:</strong> August 2018</li>
                <li><strong>Typefaces:</strong> Abril, Proxima
                Nova, Titillium</li>
                <li><strong>Software:</strong> Illustrator, Photoshop</li>
                <li><a href="https://github.com/jryandoherty/bdc_partner" target="_blank" rel="noreferrer" aria-label="github"><svg viewBox="0 0 32 32" class="github">
                    <path d="M28,16.297a12.00154,12.00154,0,0,1-8.19942,11.38223c-.609.11718-.82514-.25609-.82514-.57691,0-.39338.01473-1.68736.01473-3.29126a2.86307,2.86307,0,0,0-.81468-2.22177c2.6733-.297,5.479-1.31121,5.479-5.92017A4.629,4.629,0,0,0,22.421,12.44971a4.30829,4.30829,0,0,0-.11941-3.17511s-1.0057-.3226-3.29666,1.2299a11.37652,11.37652,0,0,0-6.00842,0C10.70412,8.952,9.69658,9.2746,9.69658,9.2746a4.3144,4.3144,0,0,0-.11764,3.17511,4.6369,4.6369,0,0,0-1.23517,3.21937c0,4.59747,2.80132,5.62674,5.466,5.92952a2.56331,2.56331,0,0,0-.76186,1.60391,2.55528,2.55528,0,0,1-3.49232-.99687,2.52064,2.52064,0,0,0-1.83807-1.23639s-1.172-.01509-.08243.7293a3.1772,3.1772,0,0,1,1.33234,1.755s.70433,2.33328,4.04232,1.60826c.00582,1.00121.01621,1.7557.01621,2.04051,0,.31795-.219.68834-.819.57831A11.99877,11.99877,0,1,1,28,16.297Z" fill-rule="evenodd"/>
                </svg></a></li>
                <li><p>This branded mini-site was created to support Business.com’s partner marketing initiatives. The hero section sets the tone with a bold, customer-focused message — "You need customers. We know how to find them." — layered over a grayscale storefront image with a bright orange gradient overlay. The strong visual contrast immediately draws the eye to the central call-to-action button, "See how."</p>

                <p>The overall design balances clarity and urgency, using a modern single-page layout optimized for fast loading and high engagement.</p>

                <p>This project demonstrates the use of targeted messaging and clean design to create a professional, results-driven microsite that partners could leverage to connect with B2B audiences and drive lead generation.</p></li>
              </ul>
            </div>
          </div>

        </div>{/* end row */}
  </div>{/* end container */}


  <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 webpage my-5">
        <p>homepage</p>
          <object name="frame" data="https://epicsea.com/portfolio/2018/partner/home.html" aria-label="live page"></object>
              <div class="stand"></div>
              <div class="base"></div>
              </div>
        <div class="col-lg-12 webpage mb-5">
        <p>content page</p>
          <object name="frame" data="https://epicsea.com/portfolio/2018/partner/leadgen" aria-label="live page"></object>
              <div class="stand"></div>
              <div class="base"></div>
          </div>

      </div>{/* end row */}

      <div class="container">
      <div class="row">
      <p class="text-center">custom badges</p>
        <div class="col-lg-3 p-4">
          <img src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_appointment.svg" alt="business" />
        </div>

        <div class="col-lg-3 p-4">
          <img src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_quote_com.svg" alt="badge" />
        </div>

        <div class="col-lg-3 p-4">
          <img src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_call_connect.svg" alt="badge" />
        </div>

        <div class="col-lg-3 p-4">
          <img src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_featured.svg" alt="badge" />
        </div>

        <div class="d-none d-lg-block col-lg-3 p-4">
          <img src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_optimized.svg" alt="badge" />
        </div>

        <div class="d-none d-lg-block col-lg-3 p-4">
          <img src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_business.svg" alt="badge" />
        </div>

        <div class="d-none d-lg-block col-lg-3 p-4">
          <img src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_mrl.svg" alt="badge" />
        </div>

        <div class="d-none d-lg-block col-lg-3 p-4">
          <img src="https://epicsea.com/portfolio/2018/partner/svgs/badges/badge_email_marketing.svg" alt="badge" />
        </div>

        </div>{/* end row */}
      </div>

    </div>{/* end container */}
  </Layout>
)

export default BDCPartner
