import React from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Ads = () => {
  return (

    <section class="ads" id="ads">
      <h2>Ads</h2>
      <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1673621773/ads/use_it_kbpozx.gif" alt="ad-1" className="rectangle" />
      <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1673621772/ads/header_truck_simmry.gif" alt="ad-2" className="rectangle" />
      <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1673621801/ads/air_compressors_lvwraa.jpg" alt="ad-3" className="rectangle" />
      <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1673621830/ads/336x280_qljrgg.png" alt="ad-4" className="square" />
      <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1673621870/ads/outbound_telemarketing_r4qckx.jpg" alt="ad-5" className="square" />
      <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1673621870/ads/mini_excavator_m3j7ev.jpg" alt="ad-6" className="square" />
      <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1673621931/ads/retirement_oq1gu3.jpg" alt="ad-7" className="square" />
    </section>


  );
}
export default Ads;
