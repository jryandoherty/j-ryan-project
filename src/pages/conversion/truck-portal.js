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
    <div class="webpage-container">
      <div class="webpage">

        <div class="row">
          <div class="col-lg-4">
            <div class="legend">
            <h3>PROJECT</h3>
            <ul>
              <li><strong>Client:</strong> Buyerzone.com</li>
              <li><strong>Date:</strong> September 2016</li>
              <li><strong>Platform:</strong> FreeMarker</li>
              <p class="mt-4">Trucking themed conversion page.</p>
            </ul>
            </div>
          </div>

        </div>


        <object data="https://epicsea.com/portfolio/2016/trucks/trucks.html" aria-label="live page"></object>


        <div class="col-lg-8">
          <picture>
             <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1673483637/trucks_elz1ig.webp" type="image/webp" class="project-flow-img" />
             <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1673483637/trucks_a1mblg.jpg" alt="project flow" class="project-flow-img" />
          </picture>

          <div class="project-flow">
              <div class="item"><p>Promotional email</p></div>
              <div class="item"><p>Portal page</p></div>
              <div class="item"><p>Conversion page</p></div>
          </div>
        </div>

<object data="https://epicsea.com/portfolio/2016/hornet/box-trucks/boxtrucks.html" aria-label="live page"></object>

      </div>
    </div>

    <div class="emails-container">

    <div class="emails">
      <div class="desktop">
        <object data="https://epicsea.com/portfolio/2016/emails/may/may_25.html">
        </object>
      </div>

      <div class="mobile">
        <object data="https://epicsea.com/portfolio/2016/emails/may/may_25.html">
        </object>
      </div>

    </div>

    </div>

  </Layout>
)

export default Trucks
