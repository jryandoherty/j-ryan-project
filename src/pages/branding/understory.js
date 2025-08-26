import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav";
import Email from "../../components/emails/understory";
import outerSpace from '../../static/kp-ao.pdf'

const Understory = () => (

  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-logos'
    }}
    />

    <Seo title="Branding :: Understory exhibition featuring works by Lou Breininger and Erin M. Riley" />
    <NavBar />

    <div class="container">

        <div class="row mt-4 align-items-center">

          <div class="col-lg-6">
            <div class="legend">
            <h3>PROJECT</h3>
            <ul>
              <li><strong>Client:</strong> Outer Space Arts</li>
              <li><strong>Date:</strong> July 2024</li>
              <li><strong>Tyoeface:</strong> Tenby Eight</li>
              <li><strong>Software:</strong> InDesign, Illustrator, Photoshop</li>
            </ul>
              <p class="mt-3">Brand design for Understory exhibition featuring works by Lou Breininger and Erin M. Riley. </p>
            </div>
          </div>

            <div class="col-lg-6 text-center text-lg-end">
             <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1750178480/outer-space-arts/understory/headline-white2_i6vo7p.png"
             alt="Logo for an exhibition entitled Worlds" class="w-75" />
            </div>

         </div>{/* end row */}

         <div class="row mt-4 d-flex justify-content-center">

           <div class="col-lg-6 my-5">
           <p>mobile banner</p>
             <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1747929918/outer-space-arts/understory/email-ad-2_en6z28.jpg" alt="Logo for a gallery called Outer Space" class="w-100" style={{border: "1px solid #ccc"}} />
           </div>

           <div class="col-lg-12 my-5">
            <p>desktop banner</p>
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1747929889/outer-space-arts/understory/banner3_yurktp.jpg"
            alt="sign for an art gallery called Outer Space" class="w-100" style={{border: "1px solid #ccc"}} />
           </div>

         </div>{/* end row */}

        </div>{/* end container */}


    <div class="container-fluid">
        <div class="row mt-4">

            <div class="col-lg-12 webpage mb-5">
                <p>"preview" webpage for clients</p>
              <object name="frame" data="https://outerspacearts.xyz/exhibitions/breininger-riley/" aria-label="live page"></object>
              <div class="stand"></div>
              <div class="base"></div>
            </div>

         </div>{/* end row */}

         <Email></Email>

  <object name="frame" data={outerSpace} aria-label="live page" type="application/pdf"></object>

         </div>

  </Layout>
)

export default Understory
