import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from "react-helmet"
import NavBar from "../../components/port-nav"

const Copernicus = () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        class: "secondary port-conversion",
      }}
    />
    <Seo title="Conversion :: Digital Copiers" />

    <NavBar />

    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="legend">
            <h3>PROJECT</h3>
            <ul>
              <li>
                <strong>Category:</strong> Conversion projects
              </li>
              <li>
                <strong>Client:</strong> Buyerzone.com
              </li>
              <li>
                <strong>Date:</strong> 2015
              </li>
            </ul>
            <p class="mt-4">
              A conversion‐focused web project designed for digital copier
              shoppers. The goal was to direct users via a marketing email to a
              landing page optimized to convert site visitors who are looking
              for digital copiers into leads or sales.
            </p>
            <p>
              <strong>Target audience:</strong> People who are in the market for
              digital copiers: comparing cost, features, specs, and seeking
              quotes.
            </p>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <p class="text-center text-lg-start">promotional email</p>
        <div class="col-lg-8">
          <div class="desktop">
            <object data="https://epicsea.com/portfolio/2015/emails/june/june_9.html"></object>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="mobile">
            <object data="https://epicsea.com/portfolio/2015/emails/june/june_9.html"></object>
          </div>
        </div>
      </div>
      {/* row */}
    </div>
    {/* end container */}

    <div class="container-fluid">
      <div class="row">
        <div class="col-12-lg webpage">
          <p class="text-center text-lg-start">conversion page</p>
          <object
            name="frame"
            data="https://master--verdant-kringle-235340.netlify.app/portfolio/2015/copernicus/copernicus.html"
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

export default Copernicus
