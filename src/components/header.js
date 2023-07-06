import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Stickers from "./stickers"

const Header = ({ siteTitle }) => (
  <header className="brick">


  <div className="container-fluid">
      <div className="col-lg-6 intro">
          <h1><Link to="/">j. ryan doherty</Link></h1>
          <h2>designer & developer</h2>
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
