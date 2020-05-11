import PropTypes from "prop-types"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, NavDropdown, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `dark`,
      marginBottom: `8.0rem`,
    }}
  >
    {/*REACT BOOTSTRAP NAVIGATION*/}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand href="/">ABC Academy<p className="brand-tag">Nourishing your kids to a brighter future</p></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">About</Nav.Link>

              <NavDropdown title="Teacher" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/teachers">List</NavDropdown.Item>
                <NavDropdown.Item href="/add-teachers">Add new Teacher</NavDropdown.Item>
                {/*<NavDropdown.Item href="/update-teachers">Update Teacher</NavDropdown.Item>*/}
              </NavDropdown>
              <NavDropdown title="Students" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/students">List</NavDropdown.Item>
                <NavDropdown.Item href="/add-students">Add new student</NavDropdown.Item>
                {/*<NavDropdown.Item href="/update-students">Update Student</NavDropdown.Item>*/}
                {/*<NavDropdown.Divider />*/}
                {/*<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="http://rommer.ca/" target={"_blank"}><i>by</i>&nbsp;&nbsp;Rommer Chu</Nav.Link>
              <Nav.Link eventKey={2} href="https://github.com/RommerChu" target={"_blank"}>
                Github
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>

      </Navbar>

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