import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav";
import OuterSpace from '../../static/flyer-ce-II.pdf'

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
              <li><strong>Date:</strong> Summer 2025</li>
              <li><strong>Typeface:</strong> Acme Gothic Condensed</li>
              <li><strong>Software:</strong> InDesign, Illustrator, Photoshop</li>

            </ul>
              <p class="mt-3">Brand design for an exhibition featuring works from Creativity Explored, the celebrated nonprofit artist community and working studio where over 130 adult artists with developmental disabilities create, exhibit, and sell art. </p>
            </div>
          </div>

            <div class="col-lg-6 text-center text-lg-end">
             <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1756150722/outer-space-arts/ce/ce-ii_1_qz5ic5.svg"
             alt="Logo for an exhibition entitled Creativity Explored Outer Space" class="w-75" />
            </div>

         </div>{/* end row */}

         <div class="row mt-4 d-flex justify-content-center">

           <div class="col-lg-6 my-5">
           <p>mobile banner</p>
             <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1754505070/outer-space-arts/ce/banner-mobile-II_ag3zs2.png" alt="Logo for a gallery called Outer Space" class="w-75" style={{border: "1px solid #ccc"}} />
           </div>

           <div class="col-lg-12 my-5">
            <p>desktop banner</p>
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1754504780/outer-space-arts/ce/banner-32x9-part2_kstb70.jpg"
            alt="sign for an art gallery called Outer Space" class="w-100" style={{border: "1px solid #ccc"}} />
           </div>

         </div>{/* end row */}

        </div>{/* end container */}

        <div class="col-lg-12 webpage mb-5">
          <object name="frame" data={OuterSpace} aria-label="live page" style={{width:`612px`}}></object>
        </div>

    <div class="container-fluid">
        <div class="row mt-4">

            <div class="col-lg-12 webpage mb-5">
              <p>"preview" webpage for clients</p>
              <object name="frame" data="https://outerspacearts.xyz/exhibitions/creativity-explored-ii/" aria-label="live page"></object>
              <div class="stand"></div>
              <div class="base"></div>
            </div>

         </div>{/* end row */}


         </div>

  </Layout>
)

export default Understory
