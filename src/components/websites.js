import React from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Websites = () => {
  return (
    <section class="websites" id="sites" role="tabpanel">

    <Link to="/sites/bdc-partner/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648573002/thumbs_sites/partner_o8w0ps.jpg" alt="Business.com" /></Link>


        <Link to="/sites/outer-space/">
        <StaticImage
          src="../images/home-desktop.png"
          width={580}
          quality={95}
          formats={["auto", "webp"]}
          alt="website desktop"
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

        <Link to="/sites/grabcad/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1649437956/thumbs_sites/grabcad_rrmcl8.jpg" alt="GrabCad" /></Link>


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


        <Link to="/sites/avian-records/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648572958/thumbs_sites/maavian_d2bnie.jpg" alt="MA Avian Records" /></Link>

        <Link to="/sites/louis-mian/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648572958/thumbs_sites/mian_jfpy4j.jpg" alt="Louis W. Mian"/></Link>

      
        <Link to="/sites/bdc-community/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648573008/thumbs_sites/bdc_community_vrusch.jpg" alt="Business.com Community" /></Link>

        <Link to="/sites/buyerzone-2015/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648572958/thumbs_sites/bzhome2015_bjatis.jpg" alt="Buyerzone Home" /></Link>

        <Link to="/sites/leads-2016/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1649122544/thumbs_sites/leads2016_nyuefe.jpg" alt="Buyerzone Sales" /></Link>

    </section>

  );
}
export default Websites;
