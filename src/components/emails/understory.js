import React from "react"

const Understory = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="legend ">
            <ul>
              <li>
                <strong>Client:</strong> Outer Space Arts
              </li>
            </ul>
            <p>Promotional email for upcoming exhibit entitled "Understory".</p>
          </div>
        </div>
      </div>
      {/* end row */}

      <div class="row">
        <div class="col-lg-8">
          <div class="desktop">
            <object
              data="https://epicsea.com/portfolio/2023/outerspace/understory.html"
              aria-label="email"
            ></object>
          </div>
        </div>

        <div class="">
          <div class="mobile">
            <object
              data="https://epicsea.com/portfolio/2023/outerspace/understory.html"
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
export default Understory
