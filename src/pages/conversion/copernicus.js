 import * as React from "react"


import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav";

const Copernicus = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-conversion'
    }}
    />
    <Seo title="Conversion :: Digital Copiers" />

    <NavBar />

    <div class="webpage-container">
    <div class="webpage">

      <div class="row">
        <div class="col-lg-5">
          <div class="legend">
            <h3>PROJECT</h3>
            <ul>
              <li><strong>Category:</strong> Conversion projects</li>
              <li><strong>Client:</strong> Buyerzone.com</li>
              <li><strong>Date:</strong> 2015</li>
            </ul>
            <p class="mt-4">Conversion page for digital copier shoppers.</p>
          </div>
        </div>



      </div>


        <object name="frame" data="https://master--verdant-kringle-235340.netlify.app/portfolio/2015/copernicus/copernicus.html" aria-label="live page">
        </object>


        <div class="col-lg-7">
          <picture>
           <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1649344243/copiers_nrghcx.webp" type="image/webp" class="project-flow-img" />
           <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1649344243/copiers_dj6tbk.jpg" alt="me" class="project-flow-img" />
          </picture>

          <div class="project-flow">
            <div class="item"><p>Promotional Email</p></div>
            <div class="item"><p>Landing page</p></div>
          </div>

        </div>


    </div>
    </div>

  </Layout>
)

export default Copernicus
