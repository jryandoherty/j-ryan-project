import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Stickers from "./stickers"

const Header = ({ siteTitle }) => (
  <header className="brick">


  <div className="container-fluid">
      <div className="col-lg-6 intro focus-in-expand ">
          <div class="logo"><Link to="/">j. ryan doherty</Link></div>
          <div class="title">designer & developer</div>
      </div>

      <div className="col-lg-6">
        <Stickers></Stickers>
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
