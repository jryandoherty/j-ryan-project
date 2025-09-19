import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav";



const Understory = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-print'
    }}
    />
    <Seo title="Print :: Understory Exhibiton" />
    <NavBar />


  <div className="container" style={{marginTop: `4rem`, marginBottom:`4rem`}}>
    <div className="row" style={{marginTop: `4rem`, marginBottom:`4rem`}}>

        <div className="legend col-lg-4">
          <ul>
            <li><strong>Posters and promotional material</strong></li>
            <li><strong>Client:</strong> Outer Space Arts</li>
          </ul>
          <p></p>
        </div>

        <div className="col-lg-8 text-center">
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1758132812/outer-space-arts/understory/understory-riley_cndzzp.webp" class="w-75" />
        </div>

        </div>{/* end row */}
        <div className="row" style={{marginTop: `4rem`, marginBottom:`4rem`}}>
          <div className="col-lg-8 offset-lg-4 text-center">
            <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1758133111/outer-space-arts/understory/understory-breininger_pgt5oj.webp" class="w-75" />
          </div>

        </div>{/* end row */}
      </div>{/* end conainer */}


  </Layout>
)

export default Understory
