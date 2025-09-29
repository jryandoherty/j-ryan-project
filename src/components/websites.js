import React from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Websites = () => {
  return (
    <section class="container-fluid" id="sites">

    <div class="col-lg-12 d-flex align-items-center justify-content-center flex-wrap flex-shrink">

      <Link to="/sites/bdc-partner/" class="me-5 mb-5 mb-5">
        <StaticImage
          src="https://res.cloudinary.com/jryandoherty/image/upload/v1754067868/thumbs_sites/bdc-partner-mac_rdmfsq.webp"
          width={487}
          quality={95}
          formats={["auto", "webp"]}
          alt="thumbnail of a computer showing business website"
          placeholder="blurred"
        />
      </Link>

      <Link to="/sites/outer-space/" class="me-5 mb-5">
        <StaticImage
          src="https://res.cloudinary.com/jryandoherty/image/upload/v1754078498/thumbs_sites/os-tablet_cxbjbl.webp"
          width={240}
          quality={95}
          formats={["auto", "webp"]}
          alt="thumbnail of a tablet showing a website"
          placeholder="blurred"
        />
      </Link>

      <Link to="/sites/cryptids/" class="me-5 mb-5">
        <StaticImage
          src="https://res.cloudinary.com/jryandoherty/image/upload/v1754078045/thumbs_sites/cryptids-iphone_mxmet2.webp"
          width={150}
          quality={95}
          formats={["auto", "webp"]}
          alt="thumbnail of an iphone showing a website"
          placeholder="blurred"
        />
      </Link>

      <Link to="/sites/grabcad/" class="me-5 mb-5">
        <StaticImage
          src="https://res.cloudinary.com/jryandoherty/image/upload/c_pad,w_1920/v1756143047/thumbs_sites/grabcad-laptop_lsspxx.webp"
          width={487}
          quality={95}
          formats={["auto", "webp"]}
          alt="thumbnail of a laptop computer showing a blog"
          placeholder="blurred"
        />
      </Link>

      <Link to="/sites/avian-records/" class="me-5 mb-5">
        <StaticImage
          src="https://res.cloudinary.com/jryandoherty/image/upload/v1754077687/thumbs_sites/marc-tablet_mux2np.webp"
          width={240}
          quality={95}
          formats={["auto", "webp"]}
          alt="thumbnail image of a tablet showing a website"
          placeholder="blurred"
        />
      </Link>

      <Link to="/sites/louis-mian/" class="me-5 mb-5">
        <StaticImage
          src="https://res.cloudinary.com/jryandoherty/image/upload/v1754065700/thumbs_sites/mian-iphone_m8mdrm.webp"
          width={150}
          quality={95}
          formats={["auto", "webp"]}
          alt="thumbnail image of an iphone showing a website"
          placeholder="blurred"
        />
      </Link>

      <Link to="/sites/us-chamber/" class="me-5 mb-5">
        <StaticImage
          src="https://res.cloudinary.com/jryandoherty/image/upload/c_pad,w_1920/v1756141676/thumbs_sites/chamber-co-home_zfnahp.webp"
          width={487}
          quality={95}
          formats={["auto", "webp"]}
          alt="thumbnail image of a laptop computer"
          placeholder="blurred"
        />
      </Link>

      <Link to="/sites/min-chula/" class="me-5 mb-5">
        <StaticImage
          src="../images/min-desktop.png"
          width={487}
          quality={95}
          formats={["auto", "webp"]}
          alt="thumbnail image of a website"
          placeholder="blurred"
        />
      </Link>

      <Link to="/sites/buyerzone-2015/" class="me-5 mb-5">
      <StaticImage
        src="https://res.cloudinary.com/jryandoherty/image/upload/c_pad,w_1920/v1757368321/thumbs_sites/bz-home_xketxx.webp"
        width={487}
        quality={95}
        formats={["auto", "webp"]}
        alt="thumbnail image of a mac computer"
        placeholder="blurred"
      />
      </Link>

      <Link to="/sites/leads-2016/" class="me-5 mb-5">
      <StaticImage
        src="https://res.cloudinary.com/jryandoherty/image/upload/c_pad,w_1920/v1757368322/thumbs_sites/bz-leads_gf4x1z.webp"
        width={487}
        quality={95}
        formats={["auto", "webp"]}
        alt="thumbnail image of a mac laptop"
        placeholder="blurred"
      />
      </Link>

    </div>

    </section>

  );
}
export default Websites;
