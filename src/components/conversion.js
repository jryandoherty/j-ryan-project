import React from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Conversion = () => {
  return (
    <section class="thumbnails" id="sites" role="tabpanel">

      <h2>Conversion Pages</h2>


<div class="row">
  <div class="col-lg-6">
      <picture>
         <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1673634183/bdc_price_utflcx.webp" type="image/webp" class="three-screens" />
         <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1673634184/bdc_price_p9qbp3.jpg" alt="three screens" class="three-screens" />
      </picture>

      <div class="legend">
        <h2>PROJECT</h2>
        <ul>
          <li><strong>Category:</strong> Conversion pages</li>
          <li><strong>Client:</strong> Business.com</li>
          <li><strong>Date:</strong> 2018</li>
        </ul>
        <p>Prototype for Business.com's B2B conversion pages.</p>
      </div>
    </div>

<div class="col-lg-6">
      <picture>
         <source srcSet="https://res.cloudinary.com/jryandoherty/image/upload/v1674058071/construction_igsuw6.webp" type="image/webp" class="project-flow-img" />
         <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1674058083/construction2_r7gr1f.jpg" alt="project flow" class="project-flow-img" />
      </picture>
</div>

</div>

      <div class="col-lg-12">
        <picture>
         <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1649344243/copiers_nrghcx.webp" type="image/webp" class="project-flow-img" />
         <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1649344243/copiers_dj6tbk.jpg" alt="me" class="project-flow-img" />
        </picture>

        <div class="project-flow">
          <div class="item">Promotional Email</div>
          <div class="item">Landing page</div>
        </div>

      </div>

      <picture>
         <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1673483637/trucks_elz1ig.webp" type="image/webp" class="project-flow-img" />
         <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1673483637/trucks_a1mblg.jpg" alt="project flow" class="project-flow-img" />
      </picture>


    <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688589377/first_oppd1f.png" alt="conversion-6" />
      <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688593263/thumbs_conversion/ipad-2-mobileflow_eemjif.png" alt="conversion-7" />

    </section>

  );
}
export default Conversion;
