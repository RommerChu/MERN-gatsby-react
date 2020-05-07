//THIS IS THE ORIGINAL HEADER JS
import { Link } from "gatsby";
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `3.0rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div>
        <h2>ABC Academy</h2>
        <p>Nurishing your kids to a brighter future</p>
      </div>
      {/*<h1 style={{ margin: 0 }}>*/}
      {/*  <Link*/}
      {/*    to="/"*/}
      {/*    style={{*/}
      {/*      color: `white`,*/}
      {/*      textDecoration: `none`,*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {siteTitle}*/}
      {/*  </Link>*/}
      {/*</h1>*/}
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



// import React, { useState, useEffect } from 'react';
// import { Link } from 'gatsby';
//
// import Dropdown from './dropdownMenu';
//
// const Header = () => {
//   // determined if page has scrolled and if the view is on mobile
//   const [state, setState] = useState({
//     scrolled: false,
//     visible: false,
//   });
//
//   // change state on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       if (isScrolled !== state.scrolled) {
//         setState({
//           ...state,
//           scrolled: !state.scrolled,
//         });
//       }
//     };
//     document.addEventListener('scroll', handleScroll, { passive: true });
//     return () => {
//       // clean up the event handler when the component unmounts
//       document.removeEventListener('scroll', handleScroll);
//     };
//   }, [state.scrolled]);
//
//   // toggle dropdown visibility
//   const toggleVisibility = () => {
//     setState({
//       ...state,
//       visible: !state.visible,
//     });
//   };