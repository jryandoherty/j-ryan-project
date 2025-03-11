import * as React from "react"

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
        <div class="row justify-content-center" >

        <div class="col-10 col-lg-7">
          <h2 style={{margin:`0`}}>about</h2>
           <p>I've been working on the web since the early 2000s doing freelance, corporate, and non-profit work ranging from full site
           design, landing pages, conversion pages, and marketing emails. So many changes during that time! But that's the fun part.
           When I'm not designing or writing code, you can find me out <a href="https://en.wikipedia.org/wiki/Birdwatching" target="_blank" rel="noreferrer">birding</a>.</p>


          <h2 class="mt-4">skills</h2>
          <div class="d-flex flex-wrap justify-content-around align-items-center mb-3">


          <StaticImage
            src="../images/figma.webp"
            width={70}
            quality={95}
            formats={["auto"]}
            alt="figma"
            placeholder="blurred"
          />


          <StaticImage
            src="../images/photoshop.png"
            width={65}
            quality={95}
            formats={["auto"]}
            alt="skills"
            placeholder="blurred"
          />



          <StaticImage
            src="../images/illustrator.png"
            width={65}
            quality={95}
            formats={["auto"]}
            alt="skills"
            placeholder="blurred"
          />


          <StaticImage
            src="../images/Adobe_InDesign_CC_icon.png"
            width={65}
            quality={95}
            formats={["auto"]}
            alt="skills"
            placeholder="blurred"
          />


          <StaticImage
            src="../images/Adobe_Animate_CC_icon.png"
            width={65}
            quality={95}
            formats={["auto"]}
            alt="skills"
            placeholder="blurred"
          />

          <StaticImage
            src="../images/Adobe_Dreamweaver_CC_icon.svg.png"
            width={65}
            quality={95}
            formats={["auto"]}
            alt="dreamweaver"
            placeholder="blurred"
          />


          <StaticImage
            src="../images/Adobe_Acrobat_DC_logo_2020.png"
            width={65}
            quality={95}
            formats={["auto"]}
            alt="skills"
            placeholder="blurred"
          />


          <StaticImage
            src="../images/mailchimp-sq.jpg"
            width={65}
            quality={95}
            formats={["auto"]}
            alt="skills"
            placeholder="blurred"
          />




          <StaticImage
            src="../images/HTML5_Badge_256.png"
            width={65}
            quality={95}
            formats={["auto"]}
            alt="skills"
            placeholder="blurred"
          />

          <StaticImage
            src="../images/sass.png"
            width={65}
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
            width={65}
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
            src="../images/bootstrap-logo.png"
            width={65}
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
            width={65}
            quality={95}
            formats={["auto"]}
            alt="atom"
            placeholder="blurred"

          />
          </div>

      </div>

      <div class="col-lg-8 mt-4">
        <picture>
           <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/v1650997088/portrait_tbsdrz.webp" type="image/webp" style={{borderRadius:`50%`}} />
           <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1650997088/portrait_jci1ne.jpg" alt="me" class="w-50" style={{borderRadius:`50%`}} />
        </picture>
      </div>
      </div>

      </div>





    </section>

  </Layout>
)

export default About
