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

    <div class="webpage-container">
    <div class="container screenshot">

    <div class="row">
        <div class="col-lg-6">
          <div class="legend">

          <h3>PROJECT</h3>
          <ul>
            <li><strong>Category:</strong> Conversion pages</li>
            <li><strong>Client:</strong> Business.com</li>
            <li><strong>Date:</strong> 2018</li>
          </ul>
          <p class="mt-4">Prototype for Business.com's B2B conversion pages.</p>
          </div>
        </div>

    </div>


    <div class="row">
      <div id="carousel-port" class="carousel slide" data-ride="carousel" data-interval="3000">

        <div class="carousel-inner" role="listbox">

          <div class="item active">
              <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1671223067/screens/radio_buttons_c8joko.jpg" alt="question screen" />
          </div>

          <div class="item">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1671223059/screens/email_flkmir.jpg" alt="email screen" />
          </div>

          <div class="item">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1671223059/screens/optional_uy3yxg.jpg" alt="optional screen" />
          </div>


        </div>

      </div>
    </div>

    </div>
    </div>

  </Layout>
)

export default BDCPrice
