import React from 'react';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const Conversion = () => {


  return (
    <section class="websites" id="conversion">


    <Link to="/conversion/copernicus/">
    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1754068378/thumbs_conversion/copernicus-tablet_nasulo.webp"
      width={340}
      quality={95}
      formats={["auto", "webp"]}
      alt="website desktop"
      placeholder="blurred"
    />
    </Link>

    <Link to="/conversion/construction-portal/">
    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1754070049/thumbs_conversion/hornet-laptop_zbdavw.webp"
      width={480}
      quality={95}
      formats={["auto", "webp"]}
      alt="thumbail image of a laptop"
      placeholder="blurred"
    />
    </Link>

    <Link to="/conversion/truck-portal/">
      <StaticImage
        src="https://res.cloudinary.com/jryandoherty/image/upload/v1754069004/thumbs_conversion/trucks-imac_jv2vfn.webp"
        width={480}
        quality={100}
        formats={["auto", "webp"]}
        alt="website desktop"
        placeholder="blurred"
      />
    </Link>

    <Link to="/conversion/question-set/">
      <StaticImage
        src="https://res.cloudinary.com/jryandoherty/image/upload/v1688589377/first_oppd1f.png"
        width={275}
        quality={100}
        formats={["auto", "webp"]}
        alt="website desktop"
        placeholder="blurred"
      />
    </Link>

    <Link to="/conversion/bdc-price-quotes/">
      <StaticImage
        src="https://res.cloudinary.com/jryandoherty/image/upload/v1671223067/screens/radio_buttons_c8joko.jpg"
        width={275}
        quality={100}
        formats={["auto", "webp"]}
        alt="website desktop"
        placeholder="blurred"
      />
    </Link>

    </section>

  );
}
export default Conversion;
