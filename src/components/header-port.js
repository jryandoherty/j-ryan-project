import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Stickers from "./stickers"

const Header = ({ siteTitle }) => (

  <header>
  <div className="container py-2">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-5 intro text-center text-lg-end mb-4 mb-md-0">
          <div class="logo text-nowrap"><Link to="/">j. ryan doherty</Link></div>
          <div class="title focus-in-expand">digital designer and front-end developer</div>
      </div>



    </div>
  </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
