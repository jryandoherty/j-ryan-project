import * as React from "react"

import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav"

const Leads2016 = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-sites'
    }}
    />
    <Seo title="Sites :: BuyerZone Leads 2016" />
    <NavBar />

    <div class="container">

    <div class="row">
      <div class="col-lg-8">
      <div class="legend">
        <h3>PROJECT</h3>
        <ul>
          <li><strong>Client:</strong> Buyerzone.com</li>
          <li><strong>Date:</strong> September 2016</li>
          <li><strong>Software:</strong> Photoshop, Illustrator</li>
          <li><strong>Technology:</strong> Bootstrap 3.0, FreeMarker(Java), JQuery, SCSS, HTML5</li>
          <li><a href="https://github.com/jryandoherty/leads_2016" target="_blank" rel="noreferrer" aria-label="GitHub"><svg viewBox="0 0 32 32" class="github">
            <path id="github" d="M28,16.297a12.00154,12.00154,0,0,1-8.19942,11.38223c-.609.11718-.82514-.25609-.82514-.57691,0-.39338.01473-1.68736.01473-3.29126a2.86307,2.86307,0,0,0-.81468-2.22177c2.6733-.297,5.479-1.31121,5.479-5.92017A4.629,4.629,0,0,0,22.421,12.44971a4.30829,4.30829,0,0,0-.11941-3.17511s-1.0057-.3226-3.29666,1.2299a11.37652,11.37652,0,0,0-6.00842,0C10.70412,8.952,9.69658,9.2746,9.69658,9.2746a4.3144,4.3144,0,0,0-.11764,3.17511,4.6369,4.6369,0,0,0-1.23517,3.21937c0,4.59747,2.80132,5.62674,5.466,5.92952a2.56331,2.56331,0,0,0-.76186,1.60391,2.55528,2.55528,0,0,1-3.49232-.99687,2.52064,2.52064,0,0,0-1.83807-1.23639s-1.172-.01509-.08243.7293a3.1772,3.1772,0,0,1,1.33234,1.755s.70433,2.33328,4.04232,1.60826c.00582,1.00121.01621,1.7557.01621,2.04051,0,.31795-.219.68834-.819.57831A11.99877,11.99877,0,1,1,28,16.297Z" fill-rule="evenodd"/>
          </svg></a></li>
          <li>Partnership landing page for Buyerzone.com. Working closly with the VP of Marketing and a senior associate of marketing, my role was to design a page that could be utilized by the sales department to recruit new partners and associates to a lead generation program. This fully responsive page was built with the Bootstrap framework and features embedded SVGs created in Illustrator and multiple animations triggered on scroll. Background graphics made in Photoshop. I then adapted the code to work in the website's Java framework called Freemarker. After BuyerZone was aquired by Purch, the page was reimagined under a new brand, <Link to="/sites/bdc-partner/">business.com</Link></li>
        </ul>
      </div>
    </div>

    </div>{/* end row */}

    </div>{/* end conainer */}

  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-lg-12 webpage">

      <object data="https://master--verdant-kringle-235340.netlify.app/portfolio/2016/leads/indexnew/" aria-label="live page"></object>
        <div class="stand"></div>
        <div class="base"></div>

      </div>

  </div>{/* end row */}

  </div>{/* end conainer */}

  </Layout>
)

export default Leads2016
