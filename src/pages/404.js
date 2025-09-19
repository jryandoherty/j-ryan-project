import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"


const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div class="container">
    <div class="col-md-7">
          <h1>PAGE NOT FOUND</h1>
          <p>Let's take a step back. Now take a step forward. No, let'stake a step back. And a step forward, and now we're Cha-Cha-ing.</p>
            <iframe width="560" height="315"  src="https://www.youtube.com/embed/LeQYJCVXInw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    </div>
  </Layout>
)

export default NotFoundPage
