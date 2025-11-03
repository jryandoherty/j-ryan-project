import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from 'react-helmet'



const Thanks = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary'
    }}
    />

    <Seo title="Thanks" />
    <section>

      <div class="container">
        <div class="row" style={{display:`flex`, alignItems:`top`, margin:`5rem 0`}}>

        <div class="col-lg-6 ">
        <div id="success_message">
            <h3>Thanks for your message!</h3>
            <p>I'll get back to you via email, and can always be reached at <a href="mailto:ryan@jryandoherty.com">ryan@jryandoherty.com</a></p>
        </div>

      </div>

      <div class="col-lg-6">

      </div>
      </div>

      </div>

    </section>

  </Layout>
)

export default Thanks
