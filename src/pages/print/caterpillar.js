import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav";



const Caterpillar = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-print'
    }}
    />
    <Seo title="Print :: Caterpillar Exhibiton" />
    <NavBar />


  <div className="container" style={{marginTop: `4rem`, marginBottom:`4rem`}}>
    <div className="row" style={{marginTop: `4rem`, marginBottom:`4rem`}}>

        <div className="legend col-lg-4">
          <ul>
            <li><strong>Posters and promotional material</strong></li>
            <li><strong>Client:</strong> Outer Space Arts</li>
          </ul>
        </div>

        <div className="col-lg-8 text-center">
          <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1758296432/outer-space-arts/caterpillar/caterpillar-cook_drzfrs.webp" alt="poster" class="w-75" />
        </div>

        </div>{/* end row */}
        <div className="row" style={{marginTop: `4rem`, marginBottom:`4rem`}}>
          <div className="col-lg-8 offset-lg-4 text-center">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1758296960/outer-space-arts/caterpillar/flyer-cook-kettner_bthqvs.webp" alt="poster" class="w-75" />
          </div>

        </div>{/* end row */}
      </div>{/* end conainer */}


  </Layout>
)

export default Caterpillar
