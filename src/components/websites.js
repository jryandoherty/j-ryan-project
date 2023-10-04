import React from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./files/mac-screen.css"

const Websites = () => {
  return (
    <section class="websites" id="sites" role="tabpanel">

      <h1>sites</h1>


      <div class="mac-wrapper">
        <div class="screen">

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
        </div>
        <div class="screen-bottom"></div>
        <div class="screen-stand"></div>
        <div class="screen-stand-bottom"></div>
      </div>

      <div class="mac-wrapper">
        <div class="screen">

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
        </div>
        <div class="screen-bottom"></div>
        <div class="screen-stand"></div>
        <div class="screen-stand-bottom"></div>
      </div>


      <div class="mac-wrapper">
        <div class="screen">

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
        </div>
        <div class="screen-bottom"></div>
        <div class="screen-stand"></div>
        <div class="screen-stand-bottom"></div>
      </div>



      <div class="mac-wrapper">
        <div class="screen">
        <Link to="/sites/grabcad/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1649437956/thumbs_sites/grabcad_rrmcl8.jpg" alt="GrabCad" /></Link>
        </div>
        <div class="screen-bottom"></div>
        <div class="screen-stand"></div>
        <div class="screen-stand-bottom"></div>
      </div>

      <div class="mac-wrapper">
        <div class="screen">
        <Link to="/sites/bdc-partner/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648573002/thumbs_sites/partner_o8w0ps.jpg" alt="Business.com" /></Link>

        </div>
        <div class="screen-bottom"></div>
        <div class="screen-stand"></div>
        <div class="screen-stand-bottom"></div>
      </div>

      <div class="mac-wrapper">
        <div class="screen">
        <Link to="/sites/avian-records/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648572958/thumbs_sites/maavian_d2bnie.jpg" alt="MA Avian Records" /></Link>

        </div>
        <div class="screen-bottom"></div>
        <div class="screen-stand"></div>
        <div class="screen-stand-bottom"></div>
      </div>


      <div class="mac-wrapper">
        <div class="screen">
        <Link to="/sites/louis-mian/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648572958/thumbs_sites/mian_jfpy4j.jpg" alt="Louis W. Mian"/></Link>



        </div>
        <div class="screen-bottom"></div>
        <div class="screen-stand"></div>
        <div class="screen-stand-bottom"></div>
      </div>

      <div class="mac-wrapper">
        <div class="screen">
        <Link to="/sites/roger-buttles/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648572958/thumbs_sites/roger_yhrdix.jpg" alt="Roger Buttles" /></Link>

          <div class="screen-camera"></div>

        </div>
        <div class="screen-bottom"></div>
        <div class="screen-stand"></div>
        <div class="screen-stand-bottom"></div>
      </div>

      <div class="mac-wrapper">
        <div class="screen">
        <Link to="/sites/bdc-community/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648573008/thumbs_sites/bdc_community_vrusch.jpg" alt="Business.com Community" /></Link>
        </div>
        <div class="screen-bottom"></div>
        <div class="screen-stand"></div>
        <div class="screen-stand-bottom"></div>
      </div>


      <div class="mac-wrapper">
        <div class="screen">
        <Link to="/sites/buyerzone-2015/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648572958/thumbs_sites/bzhome2015_bjatis.jpg" alt="Buyerzone Home" /></Link>
        </div>
        <div class="screen-bottom"></div>
        <div class="screen-stand"></div>
        <div class="screen-stand-bottom"></div>
      </div>

      <div class="mac-wrapper">
        <div class="screen">
        <Link to="/sites/leads-2016/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1649122544/thumbs_sites/leads2016_nyuefe.jpg" alt="Buyerzone Sales" /></Link>

        </div>
        <div class="screen-bottom"></div>
        <div class="screen-stand"></div>
        <div class="screen-stand-bottom"></div>
      </div>



    </section>

  );
}
export default Websites;
