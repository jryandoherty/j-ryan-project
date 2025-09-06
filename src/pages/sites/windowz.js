import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav"


const Windowz = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-sites'
    }}
    />
    <Seo title="Sites :: Windowz by Liberty" />
    <NavBar />

    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="legend">
            <h3>PROJECT</h3>
            <ul>
              <li><strong>Client:</strong> David Liberty</li>
              <li><strong>Date:</strong> July 2023</li>
              <li><strong>Platform:</strong> Wordpress</li>
              <li><strong>Theme:</strong> Teluro</li><li></li>
            </ul>
              <p>Logo and Wordpress site for the artwork of David Liberty.</p>
          </div>
        </div>

      <div class="col-lg-6 text-end">
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1747415413/logos/windowz-nqvtxg.svg" alt="logo for Windowz by Liberty" class="w-75" />
      </div>

      </div>{/* end row */}

    </div>{/* end container */}

  <div class="container-fluid">
      <div class="row">

        <div class="col-lg-12 webpage my-5">
          <object name="frame" data="https://windowzbyliberty.com" aria-label="live page"></object>
          <div class="stand"></div>
          <div class="base"></div>
        </div>

      </div>{/* end row */}

    </div>{/* end container */}

  </Layout>
)

export default Windowz
