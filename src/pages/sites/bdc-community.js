import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav"



const BDCCommunity = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary'
    }}
    />
    <Seo title="Sites :: BDC Community" />
    <NavBar />
    <div class="webpage-container">

    <div class="container screenshot">
    <div class="row">
    <div class="legend col-lg-6">
      <h3>PROJECT</h3>
      <ul>
        <li><strong>Category:</strong> Sites and mini-sites</li>
        <li><strong>Client:</strong> Business.com</li>
        <li><strong>Date:</strong> 2018</li>
      </ul>
      <p>Prototypes for a redesign of Business.com's community page.</p>
    </div>

    <div class="legend col-lg-6">

    </div>
    </div>

    <div class="row">
      <div id="carousel-port" class="carousel slide" data-ride="carousel" data-interval="3000">

        <div class="carousel-inner" role="listbox">

          <div class="item active">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1649446967/screens/image-1_lfsqhs.webp" alt="screen 1" />
          </div>
          <div class="item">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1649446967/screens/image-2_ojwvt4.webp" alt="screen 2" />
          </div>
          <div class="item">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1649446967/screens/image-3_l6n4v9.webp" alt="screen 3" />
          </div>


        </div>

        </div>
      </div>

    </div>

    </div>

  </Layout>
)

export default BDCCommunity
