import * as React from "react"


import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav";


const Trucks = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-conversion'
    }}
    />
    <Seo title="Conversion :: Trucking Portal" />
    <NavBar />

    <div class="container">

    <div class="row">
      <div class="col-lg-8">
        <div class="legend">
        <h3>PROJECT</h3>
        <ul>
          <li><strong>Client:</strong> Buyerzone.com</li>
          <li><strong>Date:</strong> September 2016</li>
          <li><strong>Project:</strong> Trucking themed conversion page</li>
          <li><strong>Typefaces:</strong> Neuzeit Grotesk</li>

          <p class="mt-4">A specialized conversion portal and promotional email campaign designed in September 2016 for Buyerzone.com. The project features a streamlined "portal page" that guides trucking-industry visitors toward key conversion actions. Assets included:  </p>

          <p><strong>Promotional email:</strong> Crafted to attract and engage the target audience.</p>

          <p><strong>Portal page:</strong> Tailored interface featuring trucking themed design elements.</p>

          <p><strong>Conversion page:</strong> Optimized layout aimed at driving visitor actions: registrations, leads, or inquiries. </p></ul>

        </div>
      </div>

    </div>{/* end row */}


    <div class="row mt-5">
<p class="text-center text-lg-start">promotional email</p>
      <div class="col-lg-8">
        <div class="desktop">
          <object data="https://epicsea.com/portfolio/2016/emails/may/may_25.html">
          </object>
        </div>
</div>
  <div class="d-flex d-lg-block justify-content-center col-lg-4">
        <div class="mobile">
          <object data="https://epicsea.com/portfolio/2016/emails/may/may_25.html">
          </object>
        </div>

      </div>

    </div>{/* end row */}

  </div>{/* end container */}

<div class="container-fluid">
    <div class="row">

      <div class="col-lg-12 webpage my-5">
      <p>portal page</p>
        <object data="https://epicsea.com/portfolio/2016/trucks/trucks.html" aria-label="live page"></object>
        <div class="stand"></div>
        <div class="base"></div>
      </div>


      <div class="col-lg-12 webpage mb-5">
        <p>conversion page</p>
        <object data="https://epicsea.com/portfolio/2016/hornet/box-trucks/boxtrucks.html" aria-label="live page"></object>
        <div class="stand"></div>
        <div class="base"></div>
      </div>

    </div>{/* end row */}
</div>{/* end container */}

  </Layout>
)

export default Trucks
