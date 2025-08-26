import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav";

const BDCPrice = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-conversion'
    }}
    />
    <Seo title="Conversion :: BDC Price Quotes" />
    <NavBar />


    <div class="container">

    <div class="row my-5">
      <div class="col-lg-5 legend">
        <h3>PROJECT</h3>
        <ul>
          <li><strong>Category:</strong> Conversion pages</li>
          <li><strong>Client:</strong> Buyerzone.com</li>
          <li><strong>Date:</strong> 2015</li>
        </ul>
        <p class="mt-4"></p>
      </div>

      <div class="col-lg-7">

      </div>


    </div>{/* end row */}

      <div class="row d-flex justify-content-center">

            <div class="col-lg-12">
                <picture>
                   <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1688589377/screenshot-1_o8ldxn.jpg"  type="image/webp" />
                   <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688589377/screenshot-1_o8ldxn.jpg" alt="screen 1"  class="w-100"/>
                </picture>
            </div>



      </div>{/* end row */}

    </div>{/* end container */}




  </Layout>
)

export default BDCPrice
