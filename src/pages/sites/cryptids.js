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

    <div class="container">
        <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="legend legend-thumbnails">
          <h3>PROJECT</h3>
          <ul>
            <li><strong>Client:</strong> Cryptids Cannabis LLC</li>
            <li><strong>Date:</strong> June 2020</li>
            <li><strong>Platform:</strong> Wordpress</li>
          </ul>
            <p>Wordpress for Cryptids Cannabis of Bethel, ME. A dispensary serving the Sugarloaf Ski Resort area.</p>
          </div>
        </div>
      <div class="col-lg-6 text-end"><img src="https://www.cryptidscannabis.com/wp-content/uploads/2021/06/cropped-cropped-logo-white.png" alt="business" class="w-50" /></div>
      </div>{/* end row */}

    </div>{/* end container */}


``  <div class="container-fluid">
    ``<div class="row">
      `<div class="col-lg-12 webpage my-5">
          <object data="https://cryptidscannabis.com/" aria-label="live page"></object>
            <div class="stand"></div>
            <div class="base"></div>
      ``</div>`

    </div>{/* end row */}

    </div>{/* end container */}

  </Layout>
)

export default Cryptids
