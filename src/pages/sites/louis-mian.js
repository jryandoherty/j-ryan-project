import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from "react-helmet"
import NavBar from "../../components/port-nav"

const LouisMian = () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        class: "secondary port-sites",
      }}
    />
    <Seo title="Sites :: Louis W. Mian, inc." />
    <NavBar />
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="legend">
            <h3>PROJECT</h3>
            <ul>
              <li>
                <strong>Client:</strong> Louis W. Mian, Inc.
              </li>
              <li>
                <strong>Platform:</strong> Wordpress
              </li>
              <li>
                <strong>Theme:</strong> Septera
              </li>
            </ul>
            <p class="mt-4">
              Wordpress site for natural stone fabricator Louis W. Mian, inc.
            </p>
          </div>
        </div>
      </div>
      {/* end row */}
    </div>
    {/* end container */}

    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col-lg-12 webpage mb-5">
          <p>homepage</p>
          <object
            name="frame"
            data="https://www.louismian.com"
            aria-label="live page"
          ></object>
          <div class="stand"></div>
          <div class="base"></div>
        </div>
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </Layout>
)

export default LouisMian
