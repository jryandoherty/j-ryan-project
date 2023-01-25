import React from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Websites = () => {
  return (
    <section class="thumbnails tab-pane fade in active " id="sites" role="tabpanel">

      <h2>Sites</h2>
      <Link to="/portfolio/sites/grab_cad_blog.php"><img srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1649437956/thumbs_sites/grabcad_rrmcl8.jpg 2x" src="https://res.cloudinary.com/jryandoherty/image/upload/v1649437955/thumbs_sites/grabcad_1x_f75pog.jpg" alt="GrabCad" /></Link>

      <Link to="/portfolio/sites/bdc_partner.php"><img srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1648573002/thumbs_sites/partner_o8w0ps.jpg 2x" src="https://res.cloudinary.com/jryandoherty/image/upload/v1648573002/thumbs_sites/partner_o8w0ps.jpg" alt="Business.com" /></Link>

      <Link to="/portfolio/sites/buyerzone_leads_2016.php"><img srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1649122544/thumbs_sites/leads2016_nyuefe.jpg 2x" src="https://res.cloudinary.com/jryandoherty/image/upload/v1649122544/thumbs_sites/leads2016_1x_w4nov3.jpg" alt="Buyerzone Sales" /></Link>

      <Link to="/portfolio/sites/avian_records.php"><img srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1648572958/thumbs_sites/maavian_d2bnie.jpg 2x" src="https://res.cloudinary.com/jryandoherty/image/upload/v1649122544/thumbs_sites/maavian_1x_i5fseg.jpg" alt="MA Avian Records" /></Link>

      <Link to="/portfolio/sites/louis_mian.php"><img srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1648572958/thumbs_sites/mian_jfpy4j.jpg 2x" src="https://res.cloudinary.com/jryandoherty/image/upload/v1649122544/thumbs_sites/mian_1x_swgiej.jpg" alt="Louis W. Mian"/></Link>

      <Link to="/portflio/sites/roger_buttles.php"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648572958/thumbs_sites/roger_yhrdix.jpg" alt="Roger Buttles" /></Link>

      <Link to="/portfolio/sites/bdc_community.php"><img srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1648573008/thumbs_sites/bdc_community_vrusch.jpg 2x" src="https://res.cloudinary.com/jryandoherty/image/upload/v1649122544/thumbs_sites/bdc_community_1x_ffntfn.jpg" alt="Business.com Community" /></Link>

      <Link to="/portfolio/sites/buyerzone_home_2015.php"><img srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1648572958/thumbs_sites/bzhome2015_bjatis.jpg 2x" src="https://res.cloudinary.com/jryandoherty/image/upload/v1649122544/thumbs_sites/bzhome2015_1x_sh9xwx.jpg" alt="Buyerzone Home" /></Link>

      <Link to="/portfolio/"><StaticImage
        srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1649437956/thumbs_sites/grabcad_rrmcl8.jpg 2x"
        src="https://res.cloudinary.com/jryandoherty/image/upload/v1649437955/thumbs_sites/grabcad_1x_f75pog.jpg"
        width={550}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="me"
        style={{ marginBottom: `1.45rem` }}

      /></Link>

    </section>

  );
}
export default Websites;
