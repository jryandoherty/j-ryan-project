import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav";


const Caterpillar = () => (

  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-logos'
    }}
    />
    <Seo title="Branding :: Caterpillar exhibition featuring works by Emma CC Cook and Em Kettner " />
    <NavBar />

    <div class="container">

        <div class="row mt-4 align-items-center">

          <div class="col-lg-6">
            <div class="legend">
              <h3>project</h3>
              <ul>
                <li><strong>Client:</strong> Outer Space Arts</li>
                <li><strong>Date:</strong> November 2024</li>
                <li><strong>Typeface:</strong> <a href="https://fonts.adobe.com/fonts/abril" target="_blank" rel="noreferrer">Abril Fatface</a>, <a href="https://fonts.adobe.com/fonts/josefin-sans" target="_blank" rel="noreferrer">Josefin Sans Thin</a></li>
                <li><strong>Software:</strong> InDesign, Illustrator, Photoshop</li>
              </ul>
              <p class="mt-4">Branding for Caterpillar exhibition featuring works by Emma cc Cook and Em Kettner.</p>
            </div>
          </div>

            <div class="col-lg-6 text-center text-lg-end">
             <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1747415961/logos/logoArtboard_1_vs32zi.svg"
             alt="Logo for an exhibition entitled Worlds" class="w-75" />
            </div>

         </div>{/* end row */}

         <div class="row mt-4 d-flex justify-content-center">

           <div class="col-lg-6 my-5">
            <p>mobile banner</p>
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1747930063/outer-space-arts/caterpillar/banner-mobile_potnux.jpg" alt="Logo for a gallery called Outer Space" class="w-100"/>
           </div>

           <div class="col-lg-12 my-5">
            <p>desktop banner</p>
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1747930068/outer-space-arts/caterpillar/banner-RED_gboxnm.jpg" alt="sign for an art gallery called Outer Space" class="w-100"/>
           </div>

           <div class="col-lg-6 my-5">
           <p>opening flyer</p>
             <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1758296960/outer-space-arts/caterpillar/flyer-cook-kettner_bthqvs.webp" alt="flyer for an exhibition opening" class="w-100"/>
           </div>

         </div>{/* end row */}

    </div>{/* end container */}

<div class="container-fluid">
    <div class="row mt-4">

        <div class="col-lg-12 webpage mb-5">
          <p>"preview" webpage for clients</p>
          <object name="frame" data="https://outerspacearts.xyz/exhibitions/cook-kettner/" aria-label="live page"></object>
          <div class="stand"></div>
          <div class="base"></div>
        </div>

     </div>{/* end row */}

    </div>{/* end container */}

    <div class="container">
        <div class="row">
        <p class="text-center text-xl-start">promotional email</p>
          <div class="col-lg-8">
            <div class="desktop">
              <object data="https://epicsea.com/portfolio/2023/outerspace/caterpillar.html" aria-label="email desktop">
              </object>
            </div>
            </div>
            <div class="d-flex d-lg-block justify-content-center col-lg-4">
            <div class="mobile">
              <object data="https://epicsea.com/portfolio/2023/outerspace/caterpillar.html" aria-label="email mobile">
              </object>
            </div>
          </div>
      </div>{/* end row */}

     </div>{/* end container */}

  </Layout>

)

export default Caterpillar
