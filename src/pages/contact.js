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
        <div class="row justify-content-center">


        <div class="col-lg-5 px-5">
          <p class="text-center">message me:</p>
          <form action="https://public.herotofu.com/v1/514f74d0-2505-11ee-9907-0b23fd627d84" method="post" accept-charset="UTF-8">

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

                  <div class="form-group">
                    <label for="message">
                        Message:</label>
                    <textarea class="form-control" id="message" name="message" placeholder="Briefly describe your project" maxlength="6000" rows="7"></textarea>
                  </div>

                  <div>
                    <button type="submit" class="btn btn-primary mt-4" value="Send">Send</button>
                    <div style={{textIndent:`-99999px`, whiteSpace:`nowrap`, overflow:`hidden`, position:`absolute`}} aria-hidden="true">
                      <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
                    </div>
                  </div>

          </form>


          <p class="text-center">email me:</p>
          <a href="mailto:ryan@jryandoherty.com">ryan@jryandoherty.com</a>

          <p class="text-center mt-5">call me:</p>
          <a href="tel:6173120522">617-312-0522</a>

        </div>{/* end right column */}


      </div>{/* end row */}


      </div>{/* end container */}

    </section>

  </Layout>


)

export default Contact
