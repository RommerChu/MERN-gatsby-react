/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Link} from "gatsby"


import BackgroundSlider from 'gatsby-image-background-slider'
import Header from "./header"
import "./layout.css"
import { Container, Row } from "react-bootstrap"

const Layout2 = ({ children }) => {
  const data = useStaticQuery(graphql`
    query siteTitleQueryAndSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <div className="row maxSize">
        <div className="col-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis gravida lorem id lacinia. Cras rhoncus, mauris eget scelerisque suscipit, dui diam molestie sem, nec pharetra dolor libero et libero. In efficitur consequat mi sed porta. Aliquam diam turpis, aliquet ac consectetur non, ultricies vitae augue. Quisque mattis ante orci, vel fermentum nibh dignissim in. Sed ac ipsum in justo fringilla consectetur eget quis dui. Nullam tempus mauris ut venenatis pulvinar. Nullam eget enim porta, ultricies metus ut, pulvinar leo. Nulla eget metus condimentum, tempus eros eget, laoreet sapien. Aliquam tincidunt non ligula eu ultrices. Etiam finibus velit enim. Nullam varius, orci at laoreet suscipit, diam eros tempor arcu, in pulvinar nulla erat a sapien.</p>
        </div>
        <div className="col-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis gravida lorem id lacinia. Cras rhoncus, mauris eget scelerisque suscipit, dui diam molestie sem, nec pharetra dolor libero et libero. In efficitur consequat mi sed porta. Aliquam diam turpis, aliquet ac consectetur non, ultricies vitae augue. Quisque mattis ante orci, vel fermentum nibh dignissim in. Sed ac ipsum in justo fringilla consectetur eget quis dui. Nullam tempus mauris ut venenatis pulvinar. Nullam eget enim porta, ultricies metus ut, pulvinar leo. Nulla eget metus condimentum, tempus eros eget, laoreet sapien. Aliquam tincidunt non ligula eu ultrices. Etiam finibus velit enim. Nullam varius, orci at laoreet suscipit, diam eros tempor arcu, in pulvinar nulla erat a sapien.</p>
        </div>

      </div>

    </Container>




  )
}

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout2
