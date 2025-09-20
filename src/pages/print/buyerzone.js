import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Helmet from 'react-helmet'
import NavBar from "../../components/port-nav"

import dataConnect from '../../static/data_connect.pdf'
import contentConnect from '../../static/connent_connect_new.pdf'
import stateB2B from '../../static/state-of-b2b-2013e.pdf'



const Bz = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary port-print'
    }}
    />
    <Seo title="Print :: BuyerZone marketing materials" />
    <NavBar />


  <div className="container" style={{marginTop: `4rem`, marginBottom:`4rem`}}>

  <div className="col-lg-4">

  <p><strong>Client:</strong> Buyerzone.com</p>

    <p>Marketing sheets to be used by the sales team and a yearly report for the marketing team.</p>
  </div>
    <div className="row" style={{marginTop: `4rem`, marginBottom:`4rem`}}>

        <div className="col-lg-4">
          <a href={dataConnect} target="_blank"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648574293/thumbs_brochures/data_connect_jjj0yt.webp" alt="thumbnail of a marketing pdf" class="w-100" style={{background:`#fff`, padding:`12px`, border:`4px solid #333`}} /></a>
        </div>

        <div className="col-lg-4">
            <a href={contentConnect} target="_blank"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648574293/thumbs_brochures/connent_connect_tvjinp.webp" alt="thumbnail of a marketing pdf" class="w-100" style={{background:`#fff`, padding:`12px`, border:`4px solid #333`}} /></a>
        </div>

        <div className="col-lg-4">
          <a href={stateB2B} target="_blank"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1758375689/thumbs_brochures/state-of-b2b-2013e_uou2rz.webp" alt="thumbnail of a marketing pdf" class="w-100"  /></a>
        </div>

      </div>{/* end row */}


  </div>{/* end conainer */}

  </Layout>
)

export default Bz
