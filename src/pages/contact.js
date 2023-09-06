import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/portfolio2.scss"
import Helmet from 'react-helmet'


const Contact = () => (

  <Layout>
  <Helmet
    bodyAttributes={{
        class: 'secondary'
    }}
    />
    <Seo title="Contact" />

    <section class="contact-section">

      <div class="container">
      <div class="row" style={{display:`flex`, alignItems:`center`}}>

        <div class="col-lg-12" style={{textAlign:`center`}}>
          <p class="text-center  mt-5">email me:</p>
          <a href="mailto:ryan@jryandoherty.com" >ryan@jryandoherty.com</a>

          <p class="text-center mt-5">call me:</p>
          <a href="tel:6173120522">617-312-0522</a>
        </div>

      </div>{/* end row */}


      <div class="row">
        <p class="my-5 text-center">Get in Touch:</p>
      <form action="https://public.herotofu.com/v1/514f74d0-2505-11ee-9907-0b23fd627d84" method="post" accept-charset="UTF-8">

      <div class="row">


    <div class="col-lg-6 form-group px-5">

        <div class="form-group">
        <label for="name">Your Name</label>
        <input class="form-control" name="Name" id="name" type="text" required />
        </div>


        <div class="form-group">
        <label for="email">Your Email</label>
        <input class="form-control" name="Email" id="email" type="email" required  />
        </div>
        <div class="form-group">
            <label for="phone">
                Phone:</label>
            <input type="tel" class="form-control" id="phone" name="phone" maxlength="50" />
        </div>


              <div class="form-group ">
                      <label for="message">
                          Message:</label>
                      <textarea class="form-control" id="message" name="message" placeholder="Briefly describe your project" maxlength="6000" rows="7"></textarea>
                  </div>

                    </div>
                      <div class="col-lg-6 form-group px-5">




                      <div class="checkbox">
                          <p class="fs-4">Click any service you are looking for:</p>
                        <label>
                          <input type="checkbox" id="web-design" name="web-design" value="yes" class="toggle" /><span>Website design</span>
                        </label>

                        <label>
                            <input type="checkbox" id="logo" name="logo" value="yes" class="toggle" /><span>Logo design</span>
                        </label>

                        <label>
                            <input type="checkbox" id="email-marketing" name="email-marketing" value="yes" class="toggle" /><span>Email Marketing</span>
                        </label>



                      </div>


                      <div>
                        <button type="submit" class="btn btn-primary" value="Send" >Send</button>
                        <div style={{textIndent:`-99999px`, whiteSpace:`nowrap`, overflow:`hidden`, position:`absolute`}} aria-hidden="true">
                          <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
                        </div>
                      </div>


                    </div>





                </div>





      </form>
      </div>



      <div class="row" style={{display:`flex`, alignItems:`center`}}>
        <div class="col-lg-12">
          <p style={{textAlign:`center`}}>Find me elswhere on the interwebs:</p>
          <nav class="socials">
          <ul class="nav navbar-nav">
            <li>
              <a href="https://www.linkedin.com/in/jrdoherty/" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 32 32" class="linkedIn">
                    <path id="linkedin" d="M26.22362,4H5.77133A1.75177,1.75177,0,0,0,3.99985,5.72983V26.26822A1.75294,1.75294,0,0,0,5.77133,28H26.22362a1.75631,1.75631,0,0,0,1.77653-1.73177V5.72983A1.75514,1.75514,0,0,0,26.22362,4ZM11.118,24.45115H7.55811V12.99771H11.118ZM9.33887,11.432a2.06388,2.06388,0,1,1,2.06281-2.06453A2.06444,2.06444,0,0,1,9.33887,11.432Zm15.112,13.01918h-3.5573V18.88134c0-1.32878-.02441-3.03719-1.84977-3.03719-1.85237,0-2.136,1.447-2.136,2.941v5.666H13.35058V12.99771h3.41471v1.56487h.04738a3.73973,3.73973,0,0,1,3.368-1.84993c3.60464,0,4.27018,2.37223,4.27018,5.456Z" />
                </svg>
              </a>
            </li>

            <li>
              <a href="https://github.com/jryandoherty/" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 32 32" class="github">
                    <path id="github" d="M28,16.297a12.00154,12.00154,0,0,1-8.19942,11.38223c-.609.11718-.82514-.25609-.82514-.57691,0-.39338.01473-1.68736.01473-3.29126a2.86307,2.86307,0,0,0-.81468-2.22177c2.6733-.297,5.479-1.31121,5.479-5.92017A4.629,4.629,0,0,0,22.421,12.44971a4.30829,4.30829,0,0,0-.11941-3.17511s-1.0057-.3226-3.29666,1.2299a11.37652,11.37652,0,0,0-6.00842,0C10.70412,8.952,9.69658,9.2746,9.69658,9.2746a4.3144,4.3144,0,0,0-.11764,3.17511,4.6369,4.6369,0,0,0-1.23517,3.21937c0,4.59747,2.80132,5.62674,5.466,5.92952a2.56331,2.56331,0,0,0-.76186,1.60391,2.55528,2.55528,0,0,1-3.49232-.99687,2.52064,2.52064,0,0,0-1.83807-1.23639s-1.172-.01509-.08243.7293a3.1772,3.1772,0,0,1,1.33234,1.755s.70433,2.33328,4.04232,1.60826c.00582,1.00121.01621,1.7557.01621,2.04051,0,.31795-.219.68834-.819.57831A11.99877,11.99877,0,1,1,28,16.297Z" fill-rule="evenodd"/>
                </svg>
                </a>
            </li>
            <li>
              <a href="https://twitter.com/jryandoherty" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 32 32" class="twitter">
                  <path id="twitter" d="M26.32865,10.20428c.01043.22891.01043.45778.01043.6867A15.18194,15.18194,0,0,1,2.99214,23.68808a10.26487,10.26487,0,0,0,1.26929.07283A10.70029,10.70029,0,0,0,10.8889,21.472a5.33486,5.33486,0,0,1-4.9836-3.70387,5.36636,5.36636,0,0,0,2.40336-.09364,5.34632,5.34632,0,0,1-4.2761-5.23331v-.07283a5.39627,5.39627,0,0,0,2.41374.6659A5.35659,5.35659,0,0,1,4.79205,5.90738,15.1498,15.1498,0,0,0,15.78924,11.484a5.89821,5.89821,0,0,1-.13524-1.21727,5.33642,5.33642,0,0,1,9.22847-3.65189,10.61188,10.61188,0,0,0,3.3918-1.2901A5.368,5.368,0,0,1,25.9229,8.27951a10.81127,10.81127,0,0,0,3.06924-.84274A10.868,10.868,0,0,1,26.32865,10.20428Z" />
              </svg>
              </a>
            </li>
            <li>
              <a href="https://www.flickr.com/photos/jryandoherty/" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" class="flickr"><path d="M187501 166667c0-40270 32654-72915 72915-72915 40276 0 72917 32646 72917 72915 0 40262-32640 72915-72915 72915-40261 0-72915-32654-72915-72915h-2z" fill="#ff0084"/><path d="M0 166667c0-40270 32640-72915 72915-72915 40261 0 72915 32648 72915 72915 0 40262-32654 72915-72915 72915C32641 239582 0 206928 0 166667z" /></svg>
              </a>

            </li>
          </ul>
        </nav>
        </div>{/* end col */}
      </div>{/* end row */}



      </div>{/* end container */}

    </section>

  </Layout>


)

export default Contact
