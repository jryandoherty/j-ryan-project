import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav"


const Passes = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-print'
    }}
    />
    <Seo title="Print :: All access passes" />
    <NavBar />


  <div className="container" style={{marginTop: `8rem`, marginBottom:`4rem`}}>
    <div className="row" style={{marginTop: `4rem`, marginBottom:`4rem`}}>

        <div className="legend col-lg-4">
          <ul>
            <li><strong>Client:</strong> II IIII Productions</li>
            <li><strong>Date:</strong> May 2023</li>
          </ul>
          <p>All access two-sided passes for the Grippo Funk Band performance of 5/27/23. Printed by <a href="https://www.accesseventsolutions.com/">Access Event Solutions</a>.</p>
        </div>

        <div className="col-lg-4">
          <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593985/blArtboard_1_y9hh5i.svg" alt="front of pass" style={{width:`100%`, borderRadius:`30px`,marginBottom:`1rem`}} />
        </div>

        <div className="col-lg-4">
          <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593986/blArtboard_2_db76tt.svg" alt="back of pass" style={{width:`100%`, borderRadius:`30px`}} />
        </div>

      </div>{/* end row */}

      </div>{/* end conainer */}


  </Layout>
)

export default Passes
