import React from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Email = () => {
  return (


    <section class="email" id="emails" role="tabpanel">

<div class="container">
<div class="col-lg-12 recent-images">


        <StaticImage
          src="../images/emails/bdc-desktop.png"
          width={290}
          quality={95}
          formats={["auto"]}
          alt="website desktop"
          placeholder="blurred"
          style={{}}
        />

        <StaticImage
          src="../images/emails/cloud-mobile.png"
          width={137}
          quality={100}
          alt="website desktop"
          formats={["auto"]}
          placeholder="blurred"
          style={{}}
        />

        <StaticImage
          src="../images/emails/cubicles_desktop.png"
          width={290}
          quality={100}
          formats={["auto"]}
          alt="website desktop"
          placeholder="blurred"
          style={{}}
        />

        <StaticImage
          src="../images/emails/reach-mobile.png"
          width={137}
          quality={100}
          formats={["auto"]}
          alt="website desktop"
          placeholder="blurred"
          style={{}}
        />

        <StaticImage
          src="../images/emails/trucks-desktop.png"
          width={290}
          quality={100}
          formats={["auto"]}
          alt="website desktop"
          placeholder="blurred"
          style={{}}
        />
</div>
</div>
    </section>

  );
}
export default Email;
