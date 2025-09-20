import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav"


const Inbox = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-print'
    }}
    />
    <Seo title="Print :: Inbox Insight one-sheets" />
    <NavBar />


  <div className="container" style={{marginTop: `8rem`, marginBottom:`4rem`}}>
    <div className="row" style={{marginTop: `4rem`, marginBottom:`4rem`}}>

        <div className="col-lg-4 legend">
          <ul>
            <li><strong>Client:</strong> Inbox Insight</li>
            <li><strong>Date:</strong> May 2024</li>
          </ul>
          <p>Marketing sheets to be used by the sales and marketing team for Inbox Insight's US office.</p>
        </div>

        <div className="col-lg-4">
          <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1758213069/inbox/sponsor-3_gszvpa.webp" alt="thumbnail of a marketing pdf" class="w-100"  />
        </div>

        <div className="col-lg-4">
          <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1758213058/inbox/hub-sponsorship-3_u3tbbe.webp" alt="thumbnail of a marketing pdf" class="w-100"  />
        </div>

      </div>{/* end row */}

    <div className="row" style={{marginTop: `4rem`, marginBottom:`4rem`}}>
      <div className="col-lg-4">
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1758213028/inbox/acceleration-2_botksa.webp" alt="thumbnail of a marketing pdf" class="w-100"  />
      </div>

      <div className="col-lg-4">
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1758213021/inbox/direct-response-4_rkjpc1.webp" alt="thumbnail of a marketing pdf" class="w-100"  />
      </div>

      <div className="col-lg-4">
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1758213063/inbox/hub-sponsorship-requirements-2_mb2x5j.webp" alt="thumbnail of a marketing pdf" class="w-100"  />
      </div>

    </div>{/* end row */}
  </div>{/* end conainer */}


  </Layout>
)

export default Inbox
