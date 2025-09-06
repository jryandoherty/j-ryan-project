import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav";

const Vertibid = () => (

  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-logos'
    }}
    />

    <Seo title="Branding :: Veritbid" />
    <NavBar />
    <div class="container">

    <div class="row">
      <div class="col-lg-6">
        <div class="legend">
          <h3>PROJECT</h3>
          <ul>
            <li><strong>Client:</strong> VertiBid</li>
            <li><strong>Date:</strong> August 2019</li>
            <li><strong>Typeface:</strong></li>
          </ul>
            <p>Brand design for the startup venture VertiBid, an elevator repair service. </p>
        </div>
      </div>

      </div>

     </div>

    <div class="row justify-content-md-center">
      <div class="col-lg-7">
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1750179260/branding-plates/vertibid_dluejs.png" class="w-75" style={{background: "#fff", padding: "20px" }} />
      </div>
    </div>


  </Layout>
)

export default Vertibid
