import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


const BDCCommunity = () => (
  <Layout>
    <Seo title="Sites :: BDC Community" />

    <div class="webpage-container">

    <div class="container screenshot">

    <div class="legend col-lg-6">
      <h2>PROJECT</h2>
      <ul>
        <li><strong>Category:</strong> Sites and mini-sites</li>
        <li><strong>Client:</strong> Business.com</li>
        <li><strong>Date:</strong> 2018</li>
      </ul>
      <p>Prototypes for a redesign of Business.com's community page.</p>
    </div>

    <div class="row">
      <div id="carousel-port" class="carousel slide" data-ride="carousel" data-interval="3000">


        <div class="carousel-inner" role="listbox">

          <div class="item active">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1649446967/screens/image-1_lfsqhs.webp" alt="image 1" />
          </div>
          <div class="item">
          < img src="https://res.cloudinary.com/jryandoherty/image/upload/v1649446967/screens/image-2_ojwvt4.webp" alt="image 2" />
          </div>
          <div class="item">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1649446967/screens/image-3_l6n4v9.webp" alt="image 3" />
          </div>

          
        </div>

        </div>
      </div>

    </div>

    </div>

  </Layout>
)

export default BDCCommunity
