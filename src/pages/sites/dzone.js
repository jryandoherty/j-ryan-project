import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from "react-helmet"
import NavBar from "../../components/port-nav"

const Dzone = () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        class: "secondary port-sites",
      }}
    />
    <Seo title="Sites :: Dzone.com" />
    <NavBar />

    <div class="container">
      <div class="row my-5 align-items-center">
        <div class="legend col-lg-6">
          <h3>PROJECT</h3>
          <ul>
            <li>
              <strong>Client:</strong> Dzone.com
            </li>

            <li>
              <strong>Software:</strong> Figma
            </li>
          </ul>
          <p class="mt-3">Figma prototypes for</p>
        </div>

        <div class="col-lg-6 text-center text-lg-end"></div>
      </div>
      <div class="row">
        <iframe
          width="800"
          height="450"
          src="https://embed.figma.com/design/9deYMAfKmBawDPA7bj1xUY/DZone-Parent?node-id=2-2&embed-host=share"
        ></iframe>
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </Layout>
)

export default Dzone
