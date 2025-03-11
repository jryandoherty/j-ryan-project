import React from 'react'

import businessListings from '../static/business_listings.pdf'
import dataConnect from '../static/data_connect.pdf'
import contentConnect from '../static/connent_connect_new.pdf'
import stateB2B from '../static/state-of-b2b-2013e.pdf'
import outerSpace from '../static/kp-ao.pdf'
import bakerFront from '../images/baker-front.svg'



const Print = () => {
  return (

    <section class="thumbnails print" id="brochures">
        <a href={outerSpace} target="_blank"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688653154/price-list_kg1r59.jpg" alt="Outer Space Preview" style={{border:`4px solid #333`}} /></a>
        <a href={bakerFront} target="_blank"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593985/blArtboard_1_y9hh5i.svg" alt="II IIII Productions pass front" style={{borderRadius:`30px`}} /></a>
      <a href={stateB2B} target="_blank"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688594204/thumbs_brochures/state-of-B2B-2013-thumb2_n5uhmc.png" alt="State Of B2B report" style={{border:`4px solid #333`}}  /></a>
        <a href={businessListings} target="_blank"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648574293/thumbs_brochures/business_listings_i1wmil.png" alt="Business Listings flyer" style={{background:`#eee`,padding:`6px`,border:`4px solid #333`}} /></a>
        <a href={contentConnect} target="_blank"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648574293/thumbs_brochures/connent_connect_tvjinp.png" alt="Content Connect flyer" style={{background:`#fff`,padding:`12px`,border:`4px solid #333`}} /></a>
        <a href={dataConnect} target="_blank"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648574293/thumbs_brochures/data_connect_jjj0yt.png" alt="Data Connect flyer" style={{background:`#fff`, padding:`12px`, border:`4px solid #333`}} /></a>
      
    </section>


  );
}
export default Print;
