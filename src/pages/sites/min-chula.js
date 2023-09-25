import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'



const MinChula = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary'
    }}
    />
    <Seo title="Sites :: BDC Community" />

    <div class="webpage-container">

    <div class="container screenshot">
    <div class="row">
    <div class="legend col-lg-6">
      <h3>PROJECT</h3>
      <ul>
        <li><strong>Category:</strong> websites</li>
        <li><strong>Client:</strong> Min and the Dancing Cactus</li>
        <li><strong>Date:</strong> March 2023</li>
        <li><a href="https://www.minandchula.com" target="_blank" rel="noreferrer">Full site</a></li>
        <li><a href="https://github.com/jryandoherty/rogerbuttles" target="_blank" rel="noreferrer"><svg viewBox="0 0 32 32" class="github">
            <path id="github" d="M28,16.297a12.00154,12.00154,0,0,1-8.19942,11.38223c-.609.11718-.82514-.25609-.82514-.57691,0-.39338.01473-1.68736.01473-3.29126a2.86307,2.86307,0,0,0-.81468-2.22177c2.6733-.297,5.479-1.31121,5.479-5.92017A4.629,4.629,0,0,0,22.421,12.44971a4.30829,4.30829,0,0,0-.11941-3.17511s-1.0057-.3226-3.29666,1.2299a11.37652,11.37652,0,0,0-6.00842,0C10.70412,8.952,9.69658,9.2746,9.69658,9.2746a4.3144,4.3144,0,0,0-.11764,3.17511,4.6369,4.6369,0,0,0-1.23517,3.21937c0,4.59747,2.80132,5.62674,5.466,5.92952a2.56331,2.56331,0,0,0-.76186,1.60391,2.55528,2.55528,0,0,1-3.49232-.99687,2.52064,2.52064,0,0,0-1.83807-1.23639s-1.172-.01509-.08243.7293a3.1772,3.1772,0,0,1,1.33234,1.755s.70433,2.33328,4.04232,1.60826c.00582,1.00121.01621,1.7557.01621,2.04051,0,.31795-.219.68834-.819.57831A11.99877,11.99877,0,1,1,28,16.297Z" fill-rule="evenodd"/>
        </svg></a></li>
      </ul>
      <p>Website for a children's book by authors Marshall Illif and Nahyon Lee. </p>
    </div>

    <div class="legend col-lg-6">
<img src="https://res.cloudinary.com/jryandoherty/image/upload/v1689555200/min-phone_rc4vbw.png" style={{width:`200px`}} alt="screen 1" />
<img src="https://res.cloudinary.com/jryandoherty/image/upload/v1689556633/min-ipad_vhhyja.png" style={{width:`300px`}} alt="screen 1" />

    </div>
</div>
    <div class="row">
      <div id="carousel-port" class="carousel slide" data-ride="carousel" data-interval="3000">


        <div class="carousel-inner" role="listbox">

          <div class="item active">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1689555178/min-desktop_zhqhse.png" alt="screen 1" />
          </div>
          <div class="item">
          <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1689555179/min-desktop-mid_upl2e7.png" alt="screen 2" />
          </div>
          <div class="item">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1689556627/credits-desktop_li5usp.png" alt="screen 3" />
          </div>


        </div>

        </div>
      </div>

    </div>

    </div>

  </Layout>
)

export default MinChula
