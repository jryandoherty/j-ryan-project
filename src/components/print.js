import React from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Print = () => {
  return (

    <section class="thumbnails" id="brochures">
      <h2>Print</h2>
        <a href="/images/baker-front.svg"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593985/blArtboard_1_y9hh5i.svg" alt="front" /></a>
        <a href="/images/baker-back.svg"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593986/blArtboard_2_db76tt.svg" alt="back" /></a>
        <a href="/portfolio/2013/StateOfB2B/state-of-b2b-2013e.pdf"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688594204/thumbs_brochures/state-of-B2B-2013-thumb2_n5uhmc.png" alt="StateOfB2B" /></a>
        <a href="/portfolio/2018/business_listings/business_listings.pdf"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648574293/thumbs_brochures/business_listings_i1wmil.png" alt="Business Listings" /></a>
        <a href="/portfolio/2013/ContentConnect/connent_connect_new.pdf"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648574293/thumbs_brochures/connent_connect_tvjinp.png" alt="ContentConnect" /></a>
        <a href="/portfolio/2013/DataConnect/data_connect.pdf"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648574293/thumbs_brochures/data_connect_jjj0yt.png" alt="DataConnect" /></a>
    </section>


  );
}
export default Print;
