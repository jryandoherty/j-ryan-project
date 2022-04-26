import * as React from "react"
import PropTypes from "prop-types"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.43rem`,
      height: `100vh`,
    }}
  >
  <section className="brick">

  <div className="container-fluid">
      <div className="col-lg-6 intro">
          <h1>j. ryan doherty</h1>
          <h2>designer & developer</h2>
      </div>

      <div className="col-lg-6">

      </div>
  </div>

  </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
