// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image.js"

const Header = ({ siteTitle }) => (
  <nav className="site-header fixed-top py-3">
    <div className="container d-flex flex-column flex-md-row justify-content-between">
      <a className="logo py-2" href="#" aria-label="Product">
        <Image />
        {/* {siteTitle} */}
      </a>
      <div className="justify-content-end">
        <a className="py-2 px-4 d-none d-md-inline-block" href="#">Ydelser</a>
        <a className="py-2 px-4 d-none d-md-inline-block" href="#">Cases</a>
        <a className="py-2 px-4 d-none d-md-inline-block" href="#">Viden</a>
        <a className="py-2 px-4 d-none d-md-inline-block" href="#">Om Os</a>
        <a className="py-2 px-5 d-none d-md-inline-block ml-4 btn btn-contact" href="#">Kontakt</a>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
