import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Footer = () =>(
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

Footer.prototype = {siteFooter: PropTypes.string}
Footer.defaultProps = {siteFooter: ``,}
export default Footer