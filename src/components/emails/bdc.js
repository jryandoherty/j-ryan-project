import React from "react"

const BDC = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="legend ">
            <ul>
              <li>
                <strong>Client:</strong> Business.com
              </li>
            </ul>
            <p>Customer-facing emails for Business.com's expert platform.</p>
          </div>
        </div>
      </div>
      {/* end row */}

      <div class="row">
        <div class="col-lg-8">
          <div class="desktop">
            <object
              data="https://www.epicsea.com/portfolio/2017/emails_bdc/template_Nov.html"
              aria-label="email"
            ></object>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="mobile">
            <object
              data="https://www.epicsea.com/portfolio/2017/emails_bdc/template_Nov.html"
              aria-label="email"
            ></object>
          </div>
        </div>
      </div>
      {/* end row */}

      {/* end container */}
    </div>
  )
}

export default BDC
