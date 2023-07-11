import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


const BDCPrice = () => (
  <Layout>
    <Seo title="Conversion :: BDC Price Quotes" />

    <div class="webpage-container">
    <div class="container screenshot">

    <div class="row">
        <div class="col-lg-6 legend">
          <h2>PROJECT</h2>
          <ul>
            <li><strong>Category:</strong> Conversion pages</li>
            <li><strong>Client:</strong> Business.com</li>
            <li><strong>Date:</strong> 2018</li>
          </ul>
          <p>Prototype for Business.com's B2B conversion pages.</p>
        </div>

        <div class="col-lg-6">
          <picture>
             <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1673634183/bdc_price_utflcx.webp" type="image/webp" class="three-screens" />
             <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1673634184/bdc_price_p9qbp3.jpg" alt="three screens" class="three-screens" />
          </picture>
        </div>
    </div>


    <div class="row">
      <div id="carousel-port" class="carousel slide" data-ride="carousel" data-interval="3000">

        <div class="carousel-inner" role="listbox">

          <div class="item active">
              <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1671223067/screens/radio_buttons_c8joko.jpg" alt="image 1" />
          </div>

          <div class="item">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1671223059/screens/email_flkmir.jpg" alt="image 2" />
          </div>

          <div class="item">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1671223059/screens/optional_uy3yxg.jpg" alt="image 3" />
          </div>


        </div>

      </div>
    </div>

    </div>
    </div>

  </Layout>
)

export default BDCPrice