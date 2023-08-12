import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from 'react-helmet'

import "../components/portfolio2.scss"

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
      <div class="row">
        <h1>About</h1>
        <div class="col-lg-6 bio">
     I've been working on the web since the early 2000s doing freelance, corporate, and non-profit work ranging from full site
     design, landing pages, conversion pages, and marketing emails. So many changes during that time! But that's the fun part.
     When I'm not designing or writing code, you can find me out <a href="https://en.wikipedia.org/wiki/Birdwatching" target="_blank" rel="noreferrer">birding</a>.
      </div>

      <div class="col-lg-6">
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
