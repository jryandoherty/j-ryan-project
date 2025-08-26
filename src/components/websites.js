import React from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Websites = () => {
  return (
    <section class="container-fluid websites" id="sites">


    <Link to="/sites/bdc-partner/">

    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1754067868/thumbs_sites/bdc-partner-mac_rdmfsq.webp"
      width={687}
      quality={95}
      formats={["auto", "webp"]}
      alt="website desktop"
      placeholder="blurred"
    />

    </Link>

    <Link to="/sites/outer-space/">
    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1754078498/thumbs_sites/os-tablet_cxbjbl.webp"
      width={340}
      quality={95}
      formats={["auto", "webp"]}
      alt="website desktop"
      placeholder="blurred"
    />
    </Link>

    <Link to="/sites/cryptids/">
    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1754078045/thumbs_sites/cryptids-iphone_mxmet2.webp"
      width={175}
      quality={95}
      formats={["auto", "webp"]}
      alt="Cryptids Cannabis"
      placeholder="blurred"
    />
    </Link>

    <Link to="/sites/min-chula/">
      <StaticImage
        src="../images/min-desktop.png"
        width={580}
        quality={95}
        formats={["auto", "webp"]}
        alt="website desktop"
        placeholder="blurred"
      />
    </Link>

    <Link to="/sites/grabcad/">
    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/c_pad,w_1920/v1756143047/thumbs_sites/grabcad-laptop_lsspxx.webp"
      width={580}
      quality={95}
      formats={["auto", "webp"]}
      alt="GrabCad"
      placeholder="blurred"
    />
    </Link>


    <Link to="/sites/windowz/">
    <StaticImage
      src="../images/websites/windowz-home.png"
      width={580}
      quality={95}
      formats={["auto", "webp"]}
      alt="website desktop"
      placeholder="blurred"
    />
    </Link>


    <Link to="/sites/avian-records/">
    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1754077687/thumbs_sites/marc-tablet_mux2np.webp"
      width={340}
      quality={95}
      formats={["auto", "webp"]}
      alt="MA Avian Records"
      placeholder="blurred"
    />

    </Link>

    <Link to="/sites/louis-mian/">
    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1754065700/thumbs_sites/mian-iphone_m8mdrm.webp"
      width={175}
      quality={95}
      formats={["auto", "webp"]}
      alt="Louis W. Mian"
      placeholder="blurred"
    />
    </Link>

    <Link to="/sites/us-chamber/">
    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/c_pad,w_1920/v1756141676/thumbs_sites/chamber-co-home_zfnahp.webp"
      width={687}
      quality={95}
      formats={["auto", "webp"]}
      alt="us chamber"
      placeholder="blurred"
    />
    </Link>

    <Link to="/sites/buyerzone-2015/">
    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1648572958/thumbs_sites/bzhome2015_bjatis.jpg"
      width={387}
      quality={95}
      formats={["auto", "webp"]}
      alt="us chamber"
      placeholder="blurred"
    />
    </Link>

    <Link to="/sites/leads-2016/">
    <StaticImage
      src="https://res.cloudinary.com/jryandoherty/image/upload/v1649122544/thumbs_sites/leads2016_nyuefe.jpg"
      width={387}
      quality={95}
      formats={["auto", "webp"]}
      alt="us chamber"
      placeholder="blurred"
    />
    </Link>


    </section>

  );
}
export default Websites;
