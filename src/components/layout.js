/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css";

import Navbar from './Global/Navbar';
import Footer from './Global/Footer';

const Layout = ({ children }) => 
<>
  <Navbar/>
  {children}
  <Footer />
</>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
