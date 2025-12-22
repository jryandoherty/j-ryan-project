import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from "react-helmet"
import NavBar from "../../components/port-nav"

const MinChula = () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        class: "secondary port-sites",
      }}
    />
    <Seo title="Sites :: Min and the Dancing Cactus" />
    <NavBar />

    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="legend">
            <h3>PROJECT</h3>
            <ul>
              <li>
                <strong>Client:</strong> Min and the Dancing Cactus
              </li>
              <li>
                <strong>Platform:</strong> Gatsby/Netlify
              </li>
              <li>
                <a
                  href="https://github.com/jryandoherty/min-and-chula"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  Code on GitHub
                </a>
              </li>
            </ul>
            <p class="mt-4">
              Designed and developed the website and logo for{" "}
              <em>Min and the Dancing Cactus</em> by authors Marshall Illif and
              Nahyon Lee. The goal was a fast-loading, single-page site to
              promote their book, which I built using Gatsby—a React-based
              framework—to ensure speed, responsiveness, and smooth user
              experience.
            </p>
          </div>
        </div>

        <div class="col-lg-6 text-center text-lg-end">
          <img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1747415027/logos/min-logo-orange_sfjanx.svg"
            alt="logo for Windowz by Liberty"
            class="w-75"
          />
        </div>
      </div>
      {/* end row */}
    </div>
    {/* end container */}

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 webpage my-5">
          <object
            name="frame"
            data="https://minandchula.com"
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

export default MinChula
