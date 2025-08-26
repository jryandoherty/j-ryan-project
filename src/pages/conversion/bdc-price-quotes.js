import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav";

const BDCPrice = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-conversion'
    }}
    />
    <Seo title="Conversion :: BDC Price Quotes" />
    <NavBar />

    <div class="container">

    <div class="row my-5">
      <div class="col-lg-5 legend">
        <h3>PROJECT</h3>
        <ul>
          <li><strong>Category:</strong> Conversion pages</li>
          <li><strong>Client:</strong> Business.com</li>
          <li><strong>Date:</strong> 2018</li>
        </ul>
        <p class="mt-4">Prototype for Business.com's B2B conversion pages.</p>
      </div>

      <div class="col-lg-7">

      </div>
    </div>{/* end row */}

      <div class="row d-flex">

            <div class="col-lg-12 mb-5 text-center">
                <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1671223067/screens/radio_buttons_c8joko.jpg" alt="question screen" class="w-75"/>
            </div>

            <div class="col-lg-12 mb-5 text-center">
                <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1671223073/screens/reg_field_owvtjf.jpg" alt="question screen" class="w-75"/>
            </div>

            <div class="col-lg-12 mb-5 text-center">
                <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1671223059/screens/email_flkmir.jpg" alt="email screen" class="w-75" />
            </div>

            <div class="col-lg-12 mb-5 text-center">
                <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1671223059/screens/optional_uy3yxg.jpg" alt="optional screen" class="w-75"/>
            </div>

      </div>{/* end row */}

    </div>{/* end container */}

  </Layout>
)

export default BDCPrice
