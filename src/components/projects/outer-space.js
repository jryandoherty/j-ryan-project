import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const SpaceProj = () => {
  return (

    <div className="col-lg-12 d-flex justify-content-between align-items-center my-5 recent-work">

    <Link to="/sites/outer-space/"><img src="https://res.cloudinary.com/jryandoherty/image/upload/v1688761893/logos/os-black_huspum.svg"
    style={{ width:`320px`, maxWidth:`100%`}}
    alt="outer space logo"/></Link>

    <Link to="/sites/outer-space/"><StaticImage
      src="../images/ipad-home.png"
      width={300}
      quality={95}
      formats={["auto", "webp"]}
      alt="website ipad"
      placeholder="blurred"

    /></Link>

    <Link to="/sites/outer-space/">
    <StaticImage
      src="../images/price-list.jpg"
      width={380}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="pdf price list"
      style={{boxShadow:`2px 1px 1px #333`}}
      placeholder="blurred"

    /></Link>


    </div>


  );
}
export default SpaceProj;
