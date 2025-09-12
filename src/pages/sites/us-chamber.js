import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav"



const USChamber = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-sites'
    }}
    />
    <Seo title="Sites :: US Chamber" />
    <NavBar />

    <div class="container">
    <div class="row my-5">
      <div class="legend col-lg-6">
        <h3>PROJECT</h3>
        <ul>
          <li><strong>Client:</strong> US Chamber of Commerce</li>
          <li><strong>Date:</strong> 2023</li>
          <li><strong>Software:</strong> Figma</li>
          <li><strong>Typefaces:</strong>Brown, Calluna</li>
        </ul>
        <p class="mt-3">Figma prototypes for a new lead generation section of the CO website serving to educate small business owners.</p>
      </div>

      <div class="col-lg-6 text-center text-lg-end">
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1731002044/molecule-gray-n_a00joc.png" alt="screen 2"  class="w-50" />
      </div>
    </div>
    <div class="row">

          <div class="item my-3">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/c_pad,w_1920/v1755019091/screens/chamber/Screen_Shot_2025-06-19_at_11.12.41_AM_zifbqr.webp" class="w-100" alt="screen 1" />
          </div>
          <div class="item my-3">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/c_pad,w_1920/v1755019107/screens/chamber/Screen_Shot_2025-06-19_at_11.14.44_AM_uyttj7.webp" class="w-100" alt="screen 2" />
          </div>
          <div class="item my-3">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/c_pad,w_1920/v1755019079/screens/chamber/Screen_Shot_2025-06-19_at_11.13.11_AM_hpsede.webp" class="w-100" alt="screen 3" />
          </div>

          <div class="item my-3">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/c_pad,w_1920/v1755019085/screens/chamber/Screen_Shot_2025-06-19_at_11.13.00_AM_us1cke.webp" class="w-100" alt="screen 3" />
          </div>

          </div>{/* end row */}

         </div>{/* end container */}

  </Layout>
)

export default USChamber
