import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav";
import outerSpace from '../../static/kp-ao.pdf'


const Worlds = () => (

  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-logos'
    }}
    />
    <Seo title="Branding :: Worlds exhibition featuring the artwork of Julian Kent and Emma Kohlmann" />
    <NavBar />

<div class="container">
    <div class="row mt-4 align-items-center">

        <div class="col-lg-6">
          <div class="legend">
            <h3>PROJECT</h3>
            <ul>
              <li><strong>Client:</strong> Outer Space Arts</li>
              <li><strong>Date:</strong> May 2025</li>
              <li><strong>Typeface:</strong> Nove, Informa Pro</li>
              <li><strong>Software:</strong> Photoshop, Illustrator, InDesign</li>
              <li><strong>Code:</strong> Bootstrap v 5.3</li>
            </ul>
            <p class="mt-4">Branding for Worlds exhibition featuring works by Julian Kent and Emma Kohlmann.</p>
          </div>
        </div>

        <div class="col-lg-6 text-center text-lg-end">
         <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1750178099/outer-space-arts/logo-black_q0pr68.png"
         alt="Logo for an exhibition entitled Worlds" class="w-75" />
        </div>

     </div>{/* end row */}

     <div class="row mt-4 d-flex justify-content-center">

       <div class="col-lg-6 my-5">
       <p>mobile banner</p>
         <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1741712896/outer-space-arts/banner-mobile2_tw7gq4.webp" alt="Logo for a gallery called Outer Space" class="w-100"/>
       </div>

       <div class="col-lg-12 my-5">
        <p>desktop banner</p>
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1744230930/outer-space-arts/banner-32x9_cd4tkz.jpg" alt="sign for an art gallery called Outer Space" class="w-100"/>
       </div>

     </div>{/* end row */}

</div>{/* end container */}


<div class="container-fluid">
<div class="row mt-4">

    <div class="col-lg-12 webpage mb-5">
      <p>"preview" webpage for clients</p>
      <object name="frame" data="https://outerspacearts.xyz/exhibitions/worlds/" aria-label="live page"></object>
      <div class="stand"></div>
      <div class="base"></div>
    </div>

 </div>{/* end row */}
</div>{/* end container */}


</Layout>
)

export default Worlds
