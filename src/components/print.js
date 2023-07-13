import React from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Print = () => {
  return (

    <section class="thumbnails print" id="brochures">
      <h2>Print</h2>
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593985/blArtboard_1_y9hh5i.svg" alt="front" />
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593986/blArtboard_2_db76tt.svg" alt="back" />
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688594204/thumbs_brochures/state-of-B2B-2013-thumb2_n5uhmc.png" alt="StateOfB2B" />
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648574293/thumbs_brochures/business_listings_i1wmil.png" alt="Business Listings" />
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648574293/thumbs_brochures/connent_connect_tvjinp.png" alt="ContentConnect" />
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648574293/thumbs_brochures/data_connect_jjj0yt.png" alt="DataConnect" />
    </section>

  );
}
export default Print;
