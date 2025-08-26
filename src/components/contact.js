import React from 'react'


const Contact = () => {
  return (

    <div class="container">
      <div class="row justify-content-center">


      <div class="col-lg-5 px-5">
        <h2 class="text-center">message me:</h2>
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



      </div>{/* end right column */}


    </div>{/* end row */}


    </div>

  );
}
export default Contact;
