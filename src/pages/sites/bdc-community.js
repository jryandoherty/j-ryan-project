import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from "react-helmet"
import NavBar from "../../components/port-nav"

const BDCCommunity = () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        class: "secondary port-sites",
      }}
    />
    <Seo title="Sites :: BDC Community" />
    <NavBar />

    <div class="container">
      <div class="row my-5 align-items-center">
        <div class="legend col-lg-6">
          <h3>PROJECT</h3>
          <ul>
            <li>
              <strong>Client:</strong> Business.com
            </li>
          </ul>
          <p>Prototypes for a redesign of Business.com's community page.</p>
        </div>
      </div>
      {/* end row */}

      <div class="row">
        <div class="item mb-5">
          <img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1649446967/screens/image-1_lfsqhs.webp"
            class="w-75"
            alt="screen 1"
          />
        </div>
        <div class="item mb-5">
          <img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1649446967/screens/image-2_ojwvt4.webp"
            class="w-75"
            alt="screen 2"
          />
        </div>
        <div class="item mb-5">
          <img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1649446967/screens/image-3_l6n4v9.webp"
            class="w-75"
            alt="screen 3"
          />
        </div>
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </Layout>
)

export default BDCCommunity
