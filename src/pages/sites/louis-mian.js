import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav"

const LouisMian = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-sites'
    }}
    />
    <Seo title="Sites :: Louis W. Mian, inc." />
    <NavBar />
    <div class="webpage-container">
      <div class="webpage">
        <div class="row">
          <div class="col-lg-6">
            <div class="legend">
              <h3>PROJECT</h3>
              <ul>
                <li><strong>Client:</strong> Louis W. Mian, Inc.</li>
                <li><strong>Date:</strong> August 2020</li>
                <li><strong>Platform:</strong> Wordpress</li>
                <li><strong>Theme:</strong> Septera</li>
              </ul>
              <p class="mt-4">Wordpress site for natural stone fabricator Louis W. Mian, inc.</p>
            </div>
          </div>

        </div>

        <object name="frame" data="https://www.louismian.com" aria-label="live page"></object>

        <div class="col-lg-6">
          <picture>
             <source srcSet="https://res.cloudinary.com/jryandoherty/image/upload/v1670536205/mian_mohi6h.webp" type="image/webp" class="three-screens" />
             <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1597339298/mian_htv1gt.jpg" alt="three screens" class="three-screens" />
          </picture>
        </div>


      </div>
    </div>

  </Layout>
)

export default LouisMian
