import * as React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Mincode = () => {
  const codeString = `
  import * as React from "react"
  import { Link } from "gatsby"
  import { StaticImage } from "gatsby-plugin-image"

  import Layout from "../components/layout"
  import Seo from "../components/seo"
  import Sticker from "../components/sticker"

  const injectGA = () => {
    if (typeof window == 'undefined') {
      return;
    }
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-XW403YE79Z');
  };

  const IndexPage = () => (

  <Layout>
  <Seo title="Home" />

  {/* Global site tag (gtag.js) - Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XW403YE79Z"
      />
      <script>{injectGA()}</script>

  <div style={{
    maxWidth: 1170,
    padding: 0 1.0875rem 1.45rem,
    margin: 0 auto,
  }}>


  <div className="top-section">

      <Link to="https://www.amazon.com/dp/B0BZ9X9YR6/ref=sr_1_1?keywords=nahyon+lee&qid=1679534170&sr=8-1" className="amazonLink" target="_blank">
      <StaticImage
        src="../images/book-cover.png"
        width={500}
        quality={100}
        formats={["png", "webp"]}
        class="book-cover"
        alt="book"
        placeholder="blurred"

        />
        </Link>

      <div className="top-section-text">

        <h1>MIN <span className="smaller">AND THE</span> <br />DANCING CACTUS</h1>
        <h2>By Nahyon Lee and Marshall Iliff</h2>
        <h3>Illustrated by Lucy Shin</h3>
        <p>
        <Sticker />
        Our hope in writing this book is to help our kids, families, and adults reconnect with the wonders of the natural world. In the past decades, we've seen society drift more and more into the metaverse and our mission is to remind all of us to appreciate the wonders of nature that are often right outside our door. With more reliance on technology and the ever increasing pace of life, it is even more vital that our children actively engage with the natural world, benefit from its restorative effects on mental and physical health, and see the magic that exists there. </p>

        <p>We hope that Min and Chula's adventures wow and fascinate us with the place we all call home and do what we can to protect, preserve, and restore it.</p>

      </div>{/* end top-section-text  */ }

  </div>{/* end top-section */ }

  </div>{/* end container */ }

  <div className="fixed-image"></div>

  <div id="bio">

  <div style={{
    maxWidth: 968,
    padding: 0 1.0875rem 8.45rem,
    margin: 3rem auto 0,

  }}>
  <StaticImage
    src="../images/IMG_1995.jpg"
    width={400}
    quality={85}
    formats={["auto", "webp", "jpg"]}
    alt="family"
    class="family"

    style={{float:right}}
  />

  <h1>Our Story</h1>
  <p>Nahyon and Marshall met in their first year of Bowdoin College. </p>
  <p>Nahyon was born in Seoul, South Korea, and emigrated to Minnesota when she was six years old. In Korea and in Minnesota, her parents regularly took her outdoors for weekend trips to the mountains around Seoul at young age, swam in many Minnesota lakes, and hikes to the waterfalls at Taylor Falls. Her love of nature was ingrained at an early age. Nahyon is currently a history teacher and has been teaching since 2001. </p>

  <p>Marshall was born in Annapolis, Maryland, and he found his love of nature at an early age with an interest in dinosaurs. His interests moved to reptiles and amphibians, wildlife tracking, and wilderness survival; he even tried to live off the land for one summer, eating bulrush pancakes, dandelion salads, and other roots and vegetables from the land (one of his friend's mothers said Marshall could survive anywhere as long as he had a bottle of wishbone salad dressing). He then went on to take an interest in birdwatching, attending bird camp (Camp Chiricahua by Victor Emanuel Nature Tours) at age 13 to fuel that passion which continues to this day. Marshall pursued birds in his professional life and currently is a project leader for eBird at the Cornell Lab of Ornithology. </p>

  <p>In their years together, Nahyon and Marshall have traveled as much as possible, including three cross-country road trips, a Pacific Coast Highway roadtrip from Los Angeles, California to Victoria, Canada, a trip way down the Baja California Peninsula, and two road-trips throughout Canada. They have traveled to over fifty countries and continue to explore the world as much as they can with their son and dogs. They currently live in the Boston area, USA. </p>

  <div className="bio-photos">
    <StaticImage
      src="../images/IMG_5238.jpg"
      width={300}
      quality={85}
      formats={["auto", "webp"]}
      alt="min"
      style={{marginRight:.5rem}}
    />
    <StaticImage
      src="../images/marshall.jpg"
      width={300}
      quality={85}
      formats={["auto", "webp"]}
      alt="marshall"
      style={{marginRight:.5rem}}
    />
    <StaticImage
      src="../images/nahyon.jpg"
      width={300}
      quality={85}
      formats={["auto", "webp"]}
      alt="nahyon"
    />
  </div>{/* end bio-photos  */ }

  </div>{/* end container  */ }

  </div>{/* end bio */ }


  <div className="fixed-image-2"></div>

  <div className="sunset">

  <div id="link-section" className="link-section" style={{
    maxWidth: 968,
    padding: 3rem 1.0875rem 1.45rem,
    margin: 0 auto,
  }}>

  <h1>Get Outside!</h1>

  <div className="nps-section">

    <div className="nps-logo">
      <StaticImage
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/US-NationalParkService-Logo.svg/256px-US-NationalParkService-Logo.svg.png"
      alt="US-NationalParkService-Logo"
      title="U.S. government, National Park Service, Public domain, via Wikimedia Commons"
      imgStyle={{maxWidth:220px}}
      />
    </div>

    <div>
      <h2> Helpful links from the National Park Service</h2>
      <Link to="https://www.nps.gov/orpi/index.htm" target="_blank">Organ Pipe Cactus National Park</Link><br/>
      <Link to="https://www.nps.gov/subjects/camping/camping-with-kids.htm" target="_blank">Camping with Kids</Link><br/>
      <Link to="https://www.nps.gov/findapark/index.htm" target="_blank">How to find national parks in your state</Link><br/>
      <Link to="https://www.nps.gov/subjects/camping/campground.htm" target="_blank">Finding a campground</Link><br/>
    </div>
  </div>{/* end nps section */ }

  <h2>Outdoor activities:</h2>

    <div className="link-sub">
      <Link to="https://www.rei.com/learn/expert-advice/camping-kids.html" target="_blank"><StaticImage src="../images/rei-coop.png" alt="REI" imgStyle={{maxWidth:150}}/><div>Camping with Kids</div></Link>

      <Link to="https://merlin.allaboutbirds.org/" target="_blank"><StaticImage src="../images/cornell.png" alt="Merlin" imgStyle={{maxWidth:150}}/><div>Learn Bird identification</div></Link>

      <Link to="https://inaturalist.org" target="_blank"><StaticImage src="../images/inaturalist.png" alt="iNaturalist" imgStyle={{maxWidth:150}}/><div>Record your observations</div></Link>

      <Link to="https://www.outwardbound.org" target="_blank"><StaticImage src="../images/outwardbound.png" alt="Outward Bound" imgStyle={{maxWidth:150}} /><div>Outward Bound</div></Link>

    </div>{/* end outdoor  */ }

  <h2>How the outdoors benefits kids:</h2>
    <div className="link-sub">
      <Link to="https://www.nature.org/en-us/about-us/who-we-are/how-we-work/youth-engagement/benefits-of-outdoors-for-kids/" target="_blank"><StaticImage src="../images/natureconservancy.png" alt="Nature Conservancy" imgStyle={{maxWidth:150}}/><div>Getting kids outside</div></Link>

      <Link to="https://www.scholastic.com/parents/family-life/parent-child/why-kids-need-nature.html" target="_blank"><StaticImage src="../images/scholastic.png" alt="Schoolastic" imgStyle={{maxWidth:150}}/><div>Why Kids Need Nature</div></Link>

      <Link to="https://www.outdoors.org/resources/amc-outdoors/outdoor-resources/10-backyard-nature-activities-for-kids/" target="_blank"><StaticImage src="../images/amc.png" alt="Be Outdoors - AMC MTN Club" imgStyle={{maxWidth:150}}/><div>10 Backyard Nature Activities for Kids</div></Link>

      <Link to="https://www.pbs.org/parents/observing-nature" target="_blank"><StaticImage src="../images/pbs.png" alt="PBS kids" imgStyle={{maxWidth:150}}/><div>Observing Nature</div></Link>

    </div> {/* end outdoors for kids */ }

  </div> {/* end link section */ }

  </div>{/* end sunset */ }

  </Layout>

  )

  export default IndexPage
    `;

return (
    <SyntaxHighlighter language="javascript" style={lucario}>
      {codeString}

    </SyntaxHighlighter>
  );
};

export default Mincode
