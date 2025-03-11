import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav"


const Cryptids = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-sites'
    }}
    />
    <Seo title="Sites :: Cryptids Cannabis, LLC" />
    <NavBar />
    <div class="webpage-container">
      <div class="webpage">
        <div class="row">
          <div class="col-lg-6">
            <div class="legend">
              <h3>PROJECT</h3>
              <ul>
                <li><strong>Client:</strong> Cryptids Cannabis LLC</li>
                <li><strong>Date:</strong> June 2020</li>
                <li><strong>Platform:</strong> Wordpress</li>
              </ul>
                <p>Wordpress for Cryptids Cannabis of Bethel, ME. A dispensary serving the Sugarloaf Ski Resort area.</p>
            </div>
          </div>

        </div>


        <object data="https://cryptidscannabis.com/" aria-label="live page"></object>

        <div class="col-lg-6">
          <picture>
             <source srcSet="https://res.cloudinary.com/jryandoherty/image/upload/v1670535741/grabcad_fd6fki.webp" type="image/webp" class="three-screens" />
             <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1596128951/grabcad_ae6x58.jpg" alt="three screens" class="three-screens" />
          </picture>
        </div>


    </div>
    </div>


  </Layout>
)

export default Cryptids
