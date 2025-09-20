import React from 'react';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const Conversion = () => {


  return (
  <section class="container-fluid" id="conversion">

    <div class="col-lg-12 d-flex align-items-center justify-content-center flex-wrap flex-shrink">
      <Link to="/conversion/copernicus/" class="m-5">
      <StaticImage
        src="https://res.cloudinary.com/jryandoherty/image/upload/v1754068378/thumbs_conversion/copernicus-tablet_nasulo.webp"
        width={240}
        quality={95}
        formats={["auto", "webp"]}
        alt="thumbnail image of a tablet showing a business website"
        placeholder="blurred"
      />
      </Link>

      <Link to="/conversion/construction-portal/" class="m-5">
      <StaticImage
        src="https://res.cloudinary.com/jryandoherty/image/upload/v1754070049/thumbs_conversion/hornet-laptop_zbdavw.webp"
        width={487}
        quality={95}
        formats={["auto", "webp"]}
        alt="thumbail image of a laptop"
        placeholder="blurred"
      />
      </Link>

      <Link to="/conversion/truck-portal/" class="m-5">
        <StaticImage
          src="https://res.cloudinary.com/jryandoherty/image/upload/v1754069004/thumbs_conversion/trucks-imac_jv2vfn.webp"
          width={487}
          quality={100}
          formats={["auto", "webp"]}
          alt="thumbnail image of a mac showing a trucking website"
          placeholder="blurred"
        />
      </Link>

      <Link to="/conversion/question-set/" class="m-5">
        <StaticImage
          src="https://res.cloudinary.com/jryandoherty/image/upload/v1688589377/first_oppd1f.png"
          width={150}
          quality={100}
          formats={["auto", "webp"]}
          alt="thumbnail of an iphone"
          placeholder="blurred"
        />
      </Link>

      <Link to="/conversion/bdc-price-quotes/" class="m-5">
        <StaticImage
          src="https://res.cloudinary.com/jryandoherty/image/upload/v1671223067/screens/radio_buttons_c8joko.jpg"
          width={480}
          quality={100}
          formats={["auto", "webp"]}
          alt="thumbnail of a website"
          placeholder="blurred"
        />
      </Link>
      </div>
    </section>

  );
}
export default Conversion;
