import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav";

const Construction = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-conversion'
    }}
    />
    <Seo title="Conversion :: BuyerZone Construction Portal" />
    <NavBar />

    <div class="webpage-container">
      <div class="webpage">

      <div class="row">

        <div class="col-lg-4">
          <div class="legend">
            <h3>PROJECT</h3>
            <ul>
              <li>Category: Conversion projects</li>
              <li>Client: Buyerzone.com</li>
              <li>Date: April 2016</li>
              <li><strong>Platform:</strong> FreeMarker</li>
            </ul>
            <p class="mt-4">Portal page for Buyerzone.com's construction category conversion pages.</p>
          </div>
        </div>

      </div>


        <object name="frame" data="https://master--verdant-kringle-235340.netlify.app/portfolio/2016/construction/construction.html" aria-label="live page"></object>


        <div class="col-lg-8">
            <picture>
               <source srcSet="https://res.cloudinary.com/jryandoherty/image/upload/v1674058071/construction_igsuw6.webp" type="image/webp" class="project-flow-img" />
               <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1674058083/construction2_r7gr1f.jpg" alt="project flow" class="project-flow-img" />
            </picture>

            <div class="project-flow">
              <div class="item"><p>Promotional email</p></div>
              <div class="item"><p>Portal page</p></div>
              <div class="item"><p>Conversion page</p></div>
            </div>

        </div>

      </div>
    </div>

  </Layout>
)

export default Construction
