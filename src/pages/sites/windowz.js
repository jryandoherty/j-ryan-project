import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import { StaticImage } from "gatsby-plugin-image"


const Windowz = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary'
    }}
    />
    <Seo title="Sites :: Windowz by Liberty" />

    <div class="webpage-container">
    <div class="webpage">

      <div class="row">
        <div class="col-lg-6">
          <div class="legend">
            <h3>PROJECT</h3>
            <ul>
              <li><strong>Client:</strong> David Liberty</li>
              <li><strong>Date:</strong> July 2023</li>
              <li><strong>Platform:</strong> Wordpress</li>
              <li><strong>Theme:</strong> Teluro</li><li></li>
              <li><a href="https://www.windowzbyliberty.xyz" target="_blank" rel="noreferrer">Full Site</a></li>
            </ul>
              <p>Logo and Wordpress site for the artwork of David Liberty.</p>
          </div>
        </div>


      <div class="col-lg-6">

        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1692984539/windowz-black_bwspvs.svg"
          style={{ width:`520px`, maxWidth:`100%`}}
        alt="outer space logo"

        />

      </div>

      </div>


      <object name="frame" data="https://windowzbyliberty.com" aria-label="live page"></object>

    </div>
    </div>


  </Layout>
)

export default Windowz
