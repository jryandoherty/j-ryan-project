import React from "react"

const Bucket = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="legend">
            <ul>
              <li>
                <strong>Client:</strong> Buyerzone.com
              </li>
            </ul>
            <p>
              Promotional email for customers considering bucket trucks for
              their businesses, municipalities and organizations.
            </p>
          </div>
        </div>
      </div>
      {/* end row */}

      <div class="row">
        <div class="col-lg-8">
          <div class="desktop">
            <object
              data="https://master--verdant-kringle-235340.netlify.app/portfolio/2016/emails/may/may_10.html"
              aria-label="email"
            ></object>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="mobile">
            <object
              data="https://master--verdant-kringle-235340.netlify.app/portfolio/2016/emails/may/may_10.html"
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
export default Bucket
