import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav";
import Skid  from "../../components/emails/skid";

const Construction = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-conversion'
    }}
    />
    <Seo title="Conversion :: BuyerZone Construction Portal" />
    <NavBar />

    <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="legend legend-thumbnails">
              <h3>PROJECT</h3>
              <ul>
                <li>Client: Buyerzone.com</li>
                <li>Date: April 2016</li>
                <li>Typefaces: Industry Inc, Neuzeit Grotesk </li>
              </ul>
              <p>Construction themed conversion page. This page was the final step in a marketing campaign starting with a promotional email sent to potential customers in the construction business. The email would direct users either to a portal page, or directly to the conversion page.</p>

            </div>
          </div>
          <div class="col-lg-6 text-end"><img src="https://master--verdant-kringle-235340.netlify.app/portfolio/2016/construction/img/headline_construction.svg" alt="business" class="w-75" /></div>
      </div>{/* end row */}
<div class="row ">
    <Skid />
</div>
    </div>{/* end container */}


<div class="container-fluid">
    <div class="row">

        <div class="col-lg-12 webpage">
        <p>portal page</p>
          <object name="frame" data="https://master--verdant-kringle-235340.netlify.app/portfolio/2016/construction/construction.html" aria-label="live page"></object>
          <div class="stand"></div>
          <div class="base"></div>
        </div>

        <div class="col-lg-12 webpage">
        <p>thumbs_conversion page</p>
          <object name="frame" data="https://epicsea.com/portfolio/2016/hornet/skidSteer.html" aria-label="live page"></object>
          <div class="stand"></div>
          <div class="base"></div></div>

https://res.cloudinary.com/jryandoherty/image/upload/v1754070081/thumbs_conversion/screencapture-buyerzone-industrial-air-compressors-rfqz-1485548624165_fir7oe.webp
    </div>{/* end row */}
    </div>{/* end container */}


  </Layout>
)

export default Construction
