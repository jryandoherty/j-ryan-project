import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from 'react-helmet'
import { StaticImage } from "gatsby-plugin-image"



const About = () => (
  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary'
    }}
    />

    <Seo title="About" />
    <section class="about-section" id="about">

      <div class="container">
        <div class="row" style={{display:`flex`, alignItems:`top`, margin:`5rem 0`}}>

        <div class="col-lg-6 ">
          <h2 style={{margin:`0`}}>About</h2>
     <p>I've been working on the web since the early 2000s doing freelance, corporate, and non-profit work ranging from full site
     design, landing pages, conversion pages, and marketing emails. So many changes during that time! But that's the fun part.
     When I'm not designing or writing code, you can find me out <a href="https://en.wikipedia.org/wiki/Birdwatching" target="_blank" rel="noreferrer">birding</a>.</p>


<h2 class="mt-4">Design</h2>
<div class="d-flex justify-content-around align-items-center mb-3">


<StaticImage
  src="../images/figma.webp"
  width={75}
  quality={95}
  formats={["auto"]}
  alt="figma"
  placeholder="blurred"

/>


<StaticImage
  src="../images/photoshop.png"
  width={75}
  quality={95}
  formats={["auto"]}
  alt="skills"
  placeholder="blurred"

/>



<StaticImage
  src="../images/illustrator.png"
  width={75}
  quality={95}
  formats={["auto"]}
  alt="skills"
  placeholder="blurred"

/>


<StaticImage
  src="../images/Adobe_InDesign_CC_icon.png"
  width={75}
  quality={95}
  formats={["auto"]}
  alt="skills"
  placeholder="blurred"

/>


<StaticImage
  src="../images/Adobe_Animate_CC_icon.png"
  width={75}
  quality={95}
  formats={["auto"]}
  alt="skills"
  placeholder="blurred"

/>

<StaticImage
  src="../images/dreamweaver.png"
  width={75}
  quality={95}
  formats={["auto"]}
  alt="dreamweaver"
  placeholder="blurred"

/>


<StaticImage
  src="../images/Adobe_Acrobat_DC_logo_2020.png"
  width={75}
  quality={95}
  formats={["auto"]}
  alt="skills"
  placeholder="blurred"

/>


<StaticImage
  src="../images/mailchimp-sq.jpg"
  width={75}
  quality={95}
  formats={["auto"]}
  alt="skills"
  placeholder="blurred"

/>

</div>
<h2 class="mt-4">Tech</h2>
<div class="d-flex justify-content-around align-items-center mb-4">


<StaticImage
  src="../images/HTML5_Badge_256.png"
  width={75}
  quality={95}
  formats={["auto"]}
  alt="skills"
  placeholder="blurred"

/>

<StaticImage
  src="../images/sass.png"
  width={75}
  quality={95}
  formats={["auto"]}
  alt="skills"
  placeholder="blurred"

/>

<StaticImage
  src="../images/npm-logo.png"
  width={75}
  quality={95}
  formats={["auto"]}
  alt="skills"
  placeholder="blurred"

/>

<StaticImage
  src="../images/yarn-title.png"
  width={75}
  quality={95}
  formats={["auto"]}
  alt="skills"
  placeholder="blurred"

/>

<StaticImage
  src="../images/WordPress-logotype-wmark.png"
  width={75}
  quality={95}
  formats={["auto"]}
  alt="skills"
  placeholder="blurred"

/>

<StaticImage
  src="../images/bootstrap-logo.svg"
  width={75}
  quality={95}
  formats={["auto"]}
  alt="skills"
  placeholder="blurred"

/>
<StaticImage
  src="../images/gatsby-icon.png"
  width={55}
  quality={95}
  formats={["auto"]}
  alt="skills"
  placeholder="blurred"

/>


<StaticImage
  src="../images/atom.png"
  width={75}
  quality={95}
  formats={["auto"]}
  alt="atom"
  placeholder="blurred"

/>
</div>

      </div>

      <div class="col-lg-6 mt-4">
        <picture>
           <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1650997088/portrait_tbsdrz.webp" type="image/webp" />
           <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1650997088/portrait_jci1ne.jpg" alt="me" />
        </picture>
      </div>
      </div>

      </div>





    </section>

  </Layout>
)

export default About
