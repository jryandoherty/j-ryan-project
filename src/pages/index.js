import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Contact from "../components/contact"


const IndexPage = () => (
  <Layout>
    <Seo title="J. Ryan Doherty :: DEV + DESIGN" />
    <section>
        <div className="brick d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 text-start py-5">
              <h1>digtial design and web development</h1>
              <p className="mt-3">
              Digital design lives at the intersection of creativity and technology. It may seem simple, but behind every screen lies a complex system of devices, behaviors, and expectations. I help you make sense of it all: crafting clear, effective solutions to your digital challenges.</p>
              <p className="mt-3">
              <Link to="/portfolio" className="btn btn-primary">Projects ></Link>
              </p>
              </div>
              <div className="col-lg-5 gradient"></div>
              </div>
        </div>
        </div>
    </section>

    <section>

    <div className="container mt-5">
    <div className="row mt-5 flex-column-reverse flex-lg-row justify-content-center align-items-center">
      <div class="col-lg-7  mb-5">
        <h2 style={{marginBottom:`0`}} >dev + design</h2>
        <p>Turn your ideas into experiences through code and design. Let me help you convey your messages with stunning visuals and the latest technology. </p>
      </div>
      <div className="col-sm-4 offset-lg-3 col-lg-2 text-center mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241.32 241.32" style={{maxWidth:`220px`}} >
        <g>
          <polygon class="stickers" points="110.57 34.04 133.82 0 149.19 38.25 184.91 17.67 182.17 58.8 223.28 55.76 202.95 91.63 241.32 106.72 207.44 130.22 235.46 160.46 194.74 166.94 206.86 206.34 167.37 194.51 161.19 235.27 130.75 207.47 107.49 241.51 92.12 203.26 56.4 223.84 59.15 182.71 18.04 185.75 38.36 149.89 0 134.79 33.87 111.3 5.86 81.05 46.57 74.58 34.45 35.17 73.95 47.01 80.12 6.25 110.57 34.04" />
          <g>
            <path d="M84.37,123.06c-.47-2.94,1.81-5.33,4.83-5.81,3.45-.55,6.57,1.26,7.22,5.31,1.3,8.2-3.38,22.13-14.6,23.92-5.78.92-9.89-1.53-11.57-3.74-1.23,1.7-4.57,6.3-11.74,7.44-5.01.8-8.78-1.79-9.38-5.59-.91-5.7,1.15-11.16.54-14.95-.23-1.47-.78-1.56-.96-2.68-.3-1.9,5.36-4.13,10.37-4.92,1.9-.3,3.06.31,3.29,1.78.6,3.8-1.43,9.96-.55,15.49.33,2.07,1.24,2.81,2.62,2.59,1.55-.25,2.44-1.36,3.26-3.97,1.01-3.08,1.18-8.15.69-11.26-.23-1.47-.87-1.54-1.04-2.67-.3-1.9,5.36-4.13,10.37-4.92,1.9-.3,3.06.31,3.29,1.78.6,3.8-1.21,10.19-.37,15.46.33,2.07,1.83,2.63,3.22,2.41,2.5-.4,4.78-5.54,4.04-10.2-.4-2.5-3.04-2.44-3.52-5.46Z" fill="#fff"/>
            <path d="M128.19,121.49c1.54,9.67-2.65,18.39-14.13,20.21-7.6,1.21-14.08-2.28-15.18-9.18-1.33-8.37,4.42-17.87,16.24-19.75,7.25-1.15,12.12,2.76,13.07,8.72ZM119.09,124.35c-2.84-.61-3.58-1.38-3.8-2.76-.32-1.99.91-3.15.82-3.76-.05-.34-.25-.49-.69-.42-.35.05-1.33.56-2.28,1.78-1.55,1.93-2.31,4.97-1.53,9.89.62,3.88,2.36,5.91,5.46,5.42,3.19-.51,4.74-4.12,4.26-7.14-.23-1.47-.96-2.68-2.25-3Z" fill="#fff"/>
            <path d="M143.6,134.35c.23,1.47-.32,1.91-1.61,2.12-2.59.41-7.1,1.57-8.39,1.78-1.12.18-1.88-.14-2.12-1.61-.51-3.19,1.26-15.42.52-20.08-.23-1.47-.86-1.54-1.04-2.67-.3-1.9,5.36-4.13,10.37-4.92,1.9-.3,3.06.31,3.29,1.78.15.95.16,2.1.16,2.1,0,0,2.65-4.49,7.05-5.19,2.42-.38,4.64.77,5.05,3.36.49,3.11-1.01,6.98-4.55,7.54-2.68.43-4.5-1.59-4.73-3.05-.49.25-1.4,1.2-2.25,3.63-1.19,3.11-2.27,11.87-1.74,15.23Z" fill="#fff"/>
            <path d="M189.34,120.35c.51-.7.81-1.01,1.33-1.1.78-.12,1.32.5,1.4,1.02.15.95-.26,1.72-.94,2.98-1.51,2.72-4.71,6.59-9.62,7.37-6.3,1-10.35-5.52-10.88-8.89,0,0-.72,6.57-.44,8.39.23,1.47-.23,1.9-1.52,2.1-2.59.41-7.27,1.6-8.65,1.82-1.04.16-1.71-.17-1.94-1.64-1.19-7.51,3.52-26.84,1.48-39.7-.45-2.85-1.71-4.07-3.52-3.78-.78.12-1.35-.14-1.46-.83-.29-1.81,4.26-5.46,9.18-6.24,4.58-.73,8.15,1.18,8.84,5.5.86,5.44-2.33,24.89-1.78,28.34,1.99-.32,4.73-3.67,4.45-5.4-.15-.95-.78-1.03-.92-1.89-.29-1.81,5.49-5.56,9.46-6.2,1.73-.27,3.04.22,3.25,1.52.58,3.63-3.01,8.89-8.84,13.44,1.25,3.43,4.81,5.78,7.83,5.3,1.55-.25,2.35-.82,3.29-2.12Z" fill="#fff"/>
          </g>
        </g>
      </svg>
      </div>
    </div>

      <div class="row mt-5 home-icons">
        <div class="col-xs-1 col-lg-3 col-sm-6  mb-4 mb-lg-0">
          <Link to="/sites/buyerzone-2015/"><img
            src="https://res.cloudinary.com/jryandoherty/image/upload/t_thumbnail-vert/v1756772122/screens/FireShot_Capture_026_-_BuyerZone_Purchasing_For_Your_Business_Made_Easy_-_epicsea.com_ys4usz.png"
            class="w-100 rounded mb-4"
            alt="thumbnail of b2b website page"
          /></Link>

          <Link to="/conversion/construction-portal/"><img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1648573273/thumbs_conversion/hornet_gmpndj.jpg"
            class="w-100 rounded mt-1"
            alt="thumbnail of construction themed conversion page"
          /></Link>
        </div>

        <div class="d-none d-lg-block  col-lg-2  mb-4 mb-lg-0">
          <Link to="/sites/louis-mian/"><img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1754065700/thumbs_sites/mian-iphone_m8mdrm.webp"
            class="w-100 rounded mb-4"
            alt="iphone screenshot of a natural stone installer website" style={{maxHeight:`360px`}}
          /></Link>
        </div>

        <div class="d-none d-sm-block col-sm-6 col-lg-3 mb-0 mb-lg-4">
          <Link to="/sites/bdc-partner/"><img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1693249428/partner-page/cta_mjklsl.svg"
            class="w-100 mb-5"
            alt="branding for a b2b partner website"
          /></Link>

          <Link to="/branding/understory/"><img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1747929889/outer-space-arts/understory/banner3_yurktp.jpg"
            class="w-100 mt-0 mb-5 rounded"
            alt="branding for a gallery exhibition"
          /></Link>

          <Link to="/sites/windowz/"><img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1731021732/portArtboard_1_zrfe4a.svg"
            class="w-100 mt-0 mt-xl-3"
            alt="logo for an artist"
          /></Link>
        </div>

        <div class="col-sm-6 col-lg-2 col-sm-4 mb-4 mb-lg-0">
          <Link to="/sites/us-chamber/"><img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1758215437/moleculeArtboard_1_nbco9n.svg"
            class="d-none d-sm-block w-100 rounded mb-0 mb-lg-4"
            alt="US Chamber molecule graphic"
          /></Link>

            <Link to="/branding/worlds/"><img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1750178099/outer-space-arts/logo-black_q0pr68.png"
            class="w-100 rounded"
            alt="thumbnail of the Worlds exhibition logo"
          /></Link>
        </div>

        <div class="col-lg-2 col-sm-6 mb-4 mb-lg-0">
            <Link to="/sites/cryptids/"><img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1727458023/image-2_mkbsso.jpg"
            class="w-100 rounded mb-4"
            alt="thumbnail of a website"
          /></Link>

          <Link to="/branding/caterpillar/"><img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1747415961/logos/logoArtboard_1_vs32zi.svg"
            class="w-100 shadow-1-strong rounded mb-4 d-none d-sm-block"
            alt="branding for an elevator company"
          /></Link>

          <Link to="/sites/avian-records/"><img
            src="https://res.cloudinary.com/jryandoherty/image/upload/v1648572958/thumbs_sites/maavian_d2bnie.jpg"
            class="d-none d-sm-block w-100 shadow-1-strong rounded"
            alt="thubnail of the Massachusetts Avian Records website"
          /></Link>
        </div>

      </div>{/* end container */}

  </div>{/* end container */}

  </section>

  <section>

    <div className="container about-section-new" style={{marginTop:`8rem`}}>
      <div className="row mt-5 flex-column-reverse flex-lg-row justify-content-center align-items-center">
        <div className="col-lg-8 mb-5 mb-md-0 d-flex gap-4">
        <picture class="d-none d-md-block">
           <source srcset="https://res.cloudinary.com/jryandoherty/image/upload/t_Square/v1650997088/portrait_tbsdrz.webp" type="image/webp" style={{borderRadius:`50%`}} />
           <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1650997088/portrait_jci1ne.jpg" alt="portrait of J. Ryan Doherty" class="w-100" style={{borderRadius:`50%`, minWidth:`170px`, border:`2px solid #C4B01E`}} />
        </picture>
        <p class="">I've been working on the web since the early 2000s, designing and building for freelance clients, corporations, and non-profits alike. My projects have ranged from full websites and landing pages to conversion funnels and marketing emails. The web has changed a lot since then -- and that’s what keeps it exciting. When I'm not designing or writing code, you'll probably find me out <a href="https://ebird.org/profile/MTgyMDYz/US-MA" target="_blank">birding</a>.</p>
        </div>
        <div class="col-sm-4 offset-lg-2 col-lg-2 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241.32 266.53" style={{maxWidth:`250px`}}>
          <g>
            <polygon class="stickers" points="110.57 34.04 133.82 0 149.19 38.25 184.91 17.67 182.17 58.8 223.28 55.76 202.95 91.63 241.32 106.72 207.44 130.22 235.46 160.46 194.74 166.94 206.86 206.34 167.37 194.51 161.19 235.27 130.75 207.47 107.49 241.51 92.12 203.26 56.4 223.84 59.15 182.71 18.04 185.75 38.36 149.89 0 134.79 33.87 111.3 5.86 81.05 46.57 74.58 34.45 35.17 73.95 47.01 80.12 6.25 110.57 34.04" fill="#a69933"/>
            <g>
              <path d="M71.36,147.25c-4.73.75-7.26-2.84-7.49-3.23-.14.19-2.72,4.85-9.35,5.91-5.23.83-10.23-1.78-11.25-8.16-1.31-8.21,2.34-17.38,14.2-19.27,4.4-.7,6.31.61,7.63.4,2.07-.33,5.56-2.5,7.46-2.8.75-.12,1.3.13,1.44,1.05.32,1.99-1.56,8.92-.53,15.39.34,2.16,1.87,3.19,3.36,2.95,1.41-.22,1.97-.99,2.88-2.24.49-.67.78-.97,1.28-1.05.75-.12,1.27.48,1.35.98.15.91-.25,1.66-.91,2.87-1.39,2.52-4.85,6.39-10.08,7.22ZM59.52,126.85c-2.82.45-4.55,8.29-3.68,13.77.28,1.74,1.23,2.95,2.48,2.75,2.9-.46,3.76-10.04,2.94-15.18-.16-1-.75-1.5-1.74-1.34Z" fill="#fff"/>
              <path d="M91.21,120.19c.89-1.33,3.26-3.58,6.99-4.17,5.23-.83,9.49.87,10.47,7.01,1.28,8.05-3.3,18.81-14.83,20.65-8.46,1.34-13.81-2.31-14.81-8.62-1.27-7.96,2.97-18.25,1.25-29.03-.44-2.74-1.64-3.91-3.38-3.63-.83.13-1.3-.13-1.4-.8-.28-1.74,4.43-5.3,9.16-6.05,4.4-.7,7.5,1.19,8.16,5.34.66,4.15-1.47,15.37-1.61,19.31ZM93.54,138.62c2.65-.42,3.82-10.73,3.31-13.96-.24-1.49-.85-2.16-2.18-1.95-2.16.34-3.95,8.88-3.09,14.27.17,1.08.88,1.82,1.96,1.64Z" fill="#fff"/>
              <path d="M139.24,119.53c1.48,9.29-2.55,17.67-13.58,19.43-7.3,1.16-13.53-2.19-14.59-8.82-1.28-8.05,4.24-17.18,15.61-18.98,6.97-1.11,11.65,2.66,12.56,8.38ZM130.49,122.28c-2.73-.59-3.44-1.32-3.65-2.65-.3-1.91.88-3.03.79-3.61-.05-.33-.25-.47-.66-.4-.33.05-1.27.54-2.2,1.71-1.49,1.85-2.22,4.78-1.46,9.5.59,3.73,2.26,5.68,5.25,5.2,3.07-.49,4.56-3.96,4.1-6.86-.22-1.41-.92-2.58-2.16-2.89Z" fill="#fff"/>
              <path d="M161.05,128.31s-3.09,5.17-10.97,6.42c-4.15.66-7.36-1.38-7.98-5.28-.82-5.14,1.04-11.65.56-14.64-.22-1.41-.83-1.48-1-2.56-.29-1.83,5.24-3.98,10.05-4.74,1.83-.29,2.94.3,3.16,1.71.61,3.82-1.64,9.45-.68,15.5.2,1.25,1.16,1.94,2.32,1.76,1.33-.21,1.83-1.31,2.59-3.47,1.31-3.53,1.72-7.93,1.23-11-.22-1.41-.83-1.48-1-2.56-.29-1.83,5.24-3.98,10.05-4.74,1.83-.29,2.94.3,3.16,1.71.51,3.24-1.37,10.08-.61,14.9.28,1.74,1.55,2.82,2.72,2.63,1.41-.22,1.97-.99,2.88-2.24.49-.67.78-.97,1.28-1.05.75-.12,1.27.48,1.35.98.14.91-.25,1.66-.91,2.87-1.39,2.52-4.36,6.31-9.58,7.14-6.55,1.04-8.61-3.31-8.61-3.31Z" fill="#fff"/>
              <path d="M190.37,108.34c-.28,2.51-.69,6.91-.25,9.65.38,2.41,1.76,3.04,3.75,2.72,1.58-.25,2.96-1.75,4.04-2.94.65-.7,1.07-1.28,1.57-1.36.66-.11,1.16.33,1.24.82s-.15,1.21-.68,2.15c-1.85,3.36-6.65,8.46-12.54,9.39-5.97.95-9.11-2.21-9.81-6.6-.84-5.31,1.07-9.87.41-14.01-.17-1.08-2.31-.06-2.54-1.55-.13-.83.12-2.49,1.03-2.63,4.4-.7,7.94-5.17,10.21-9.62.71-1.39,1.53-2.12,2.28-2.24.91-.15,1.5.36,1.65,1.27.29,1.83-.36,5.25-.13,6.66.17,1.08.68,1.59,2.83,1.25.66-.11,1.2.06,1.31.73.26,1.66-.46,2.97-1.46,3.12-2.07.33-2.63,1.1-2.9,3.18Z" fill="#fff"/>
            </g>
          </g>
        </svg>
        </div>
      </div>

    <div className="row mt-5">

          <div className="col-lg-7 companies">
            <h4>for companies</h4>
            <p>I'm available for contract, temp and even full-time work. I offer reasonable hourly pricing and flat rates based on project type.</p>
          </div>
          <div className="col-lg-5 individuals" >
            <h4>for individuals</h4>
              <p>Want to take your side hustle online? Or maybe you've always wanted to have a blog but don't know where to start. Whether you just need a logo or a full website, I can help you get there.</p>
          </div>

      </div>{/* end row */}

      <div className="d-flex justify-content-center row"  style={{marginBottom:`8rem`}}>
        <div class="col-lg-4 nonprofits">
          <h4>nonprofits</h4>
            <p>If you have a nonprofit organization with a limited or nonexistent budget, I can offer highly discounted rates and even pro bono work.</p>
        </div>
      </div>{/* end row */}

  </div>{/* end container */}
</section>

<section style={{background:`#fec800`, color:`#111`, padding:`30px`}}>
  <Contact />
</section>

</Layout>

)

export default IndexPage
